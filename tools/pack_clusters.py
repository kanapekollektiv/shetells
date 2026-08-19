#!/usr/bin/env python3
"""
Cluster packer for living-archive.html.

Card positions *within* a cluster are hand authored. This script treats each
cluster as a rigid group: it measures the cluster's bounding box, works out
where that box should sit on the canvas, and translates every card in the
cluster by the same offset. It then rewrites the three things that depend on
those positions:

  * CENTERS          the cluster centre points used to draw connection lines
  * .canvas-inner    the canvas width and height in the CSS
  * #linesSvg        the width and height on the connection line SVG

Run it after any content change that adds, removes or resizes a card.

    python3 tools/pack_clusters.py            # dry run, prints what would move
    python3 tools/pack_clusters.py --write    # apply

The script is idempotent: running it twice in a row leaves the file untouched
the second time. That is also the quickest way to check it did what you meant.

Two things to know before you change the layout:

  * A cluster's height comes from the authored h of its cards. Text cards hug
    their real content at runtime and ignore that number, so author it
    generously or the bounding box will be short and clusters will overlap.
  * Cards using stackBelow have their y recomputed in the browser from the
    previous card. The authored y is still what gets packed, so keep it
    roughly honest.
"""

import argparse
import io
import re
import sys
from pathlib import Path

DEFAULT_HTML = Path(__file__).resolve().parent.parent / 'living-archive.html'

# ── Layout ────────────────────────────────────────────────────────────────
# Rows read left to right. The order encodes the adjacencies asked for:
# Local Stories between Sargassum and the products cluster, Workshops beside
# Drawings, Data beside Toolkit.
ROWS = [
    ['hypersea', 'sargassum', 'local', 'future'],
    ['exhibition', 'drawings', 'data'],
]

# Clusters placed by hand rather than by row, as an explicit top left corner on
# the canvas. Use this when a cluster belongs in the space between the rows and
# the grid cannot say so. Nothing checks these for collisions, so check the
# neighbours yourself after moving one.
FREE = {
    'workshop': (1290, 1050),
    'toolkit':  (3050,  960),
}

MARGIN_LEFT = 150   # x of the leftmost cluster in every row
MARGIN_TOP  = 150   # y of the top line of the first row
GAP_X       = 210   # horizontal space between cluster bounding boxes
GAP_Y       = 320   # vertical space between the bottom of a row and the next row's top line
CANVAS_PAD  = 250   # space kept beyond the furthest card, before rounding
CANVAS_STEP = 100   # canvas dimensions round up to a multiple of this

# Vertical offset of each cluster from its row's top line. This is what stops
# the map reading as a grid. Every row needs at least one cluster at 0.
STAGGER = {
    'hypersea':    0,
    'sargassum':  40,
    'local':      30,
    'future':    170,

    'exhibition':  60,
    'drawings':   360,
    'data':       380,
    # workshop and toolkit are placed by hand, see FREE
    'toolkit':     80,
    'workshop':   320,
}

# ── Parsing ───────────────────────────────────────────────────────────────
# Every card is one line: [[cats], x, y, w, h, contentId, {layout}],
CARD_RE = re.compile(
    r"^(?P<head>\s*\[\[(?P<cats>[^\]]*)\],)"
    r"(?P<wx>\s*)(?P<x>-?\d+),"
    r"(?P<wy>\s*)(?P<y>-?\d+),"
    r"(?P<ww>\s*)(?P<w>-?\d+),"
    r"(?P<wh>\s*)(?P<h>-?\d+),"
)


def parse_cards(text):
    """Return [(line_index, cluster_key, x, y, w, h)] for every card line."""
    lines = text.split('\n')
    try:
        start = next(i for i, l in enumerate(lines)
                     if 'const CARDS_LAYOUT = [' in l or 'const CARDS = [' in l)
    except StopIteration:
        sys.exit('could not find the card array in the file')

    cards = []
    for i in range(start + 1, len(lines)):
        if lines[i].strip().startswith('];'):
            break
        m = CARD_RE.match(lines[i])
        if not m:
            continue
        cats = [c.strip().strip("'\"") for c in m.group('cats').split(',') if c.strip()]
        if not cats:
            sys.exit(f'card on line {i + 1} has no category')
        # The first tag owns the card. The rest are cross references.
        cards.append((i, cats[0], int(m.group('x')), int(m.group('y')),
                      int(m.group('w')), int(m.group('h'))))
    return lines, cards


def bboxes(cards):
    """Bounding box per cluster: {key: (x0, y0, x1, y1)}."""
    boxes = {}
    for _, key, x, y, w, h in cards:
        if key in boxes:
            x0, y0, x1, y1 = boxes[key]
            boxes[key] = (min(x0, x), min(y0, y), max(x1, x + w), max(y1, y + h))
        else:
            boxes[key] = (x, y, x + w, y + h)
    return boxes


def solve(boxes):
    """Work out the translation for each cluster. Returns {key: (dx, dy)}."""
    placed = set()
    offsets = {}

    for key, (x, y) in FREE.items():
        if key not in boxes:
            print(f'  note: free cluster "{key}" has no cards, skipping', file=sys.stderr)
            continue
        x0, y0, _, _ = boxes[key]
        offsets[key] = (x - x0, y - y0)
        placed.add(key)

    row_top = MARGIN_TOP

    for row in ROWS:
        present = [k for k in row if k in boxes and k not in FREE]
        for key in row:
            if key not in boxes and key not in FREE:
                print(f'  note: cluster "{key}" has no cards, skipping', file=sys.stderr)
        if not present:
            continue
        # The smallest stagger in the row defines its top line, so the values
        # are relative to each other rather than to an absolute zero. That
        # matters once clusters move in and out of rows: the row would
        # otherwise shift bodily when the one cluster at zero left it.
        base = min(STAGGER.get(k, 0) for k in present)

        pen_x = MARGIN_LEFT
        row_bottom = row_top
        for key in present:
            x0, y0, x1, y1 = boxes[key]
            target_x = pen_x
            target_y = row_top + STAGGER.get(key, 0) - base
            offsets[key] = (target_x - x0, target_y - y0)
            pen_x = target_x + (x1 - x0) + GAP_X
            row_bottom = max(row_bottom, target_y + (y1 - y0))
            placed.add(key)
        row_top = row_bottom + GAP_Y

    missing = set(boxes) - placed
    if missing:
        sys.exit('clusters have cards but no row in ROWS and no place in FREE: ' + ', '.join(sorted(missing)))
    return offsets


def canvas_size(boxes, offsets):
    right = max(boxes[k][2] + offsets[k][0] for k in boxes)
    bottom = max(boxes[k][3] + offsets[k][1] for k in boxes)
    def up(v):
        v += CANVAS_PAD
        return -(-v // CANVAS_STEP) * CANVAS_STEP
    return up(right), up(bottom)


# ── Rewriting ─────────────────────────────────────────────────────────────
def renumber(line, new_x, new_y):
    """Replace x and y on a card line, keeping the columns lined up."""
    m = CARD_RE.match(line)
    field_x = len(m.group('wx')) + len(m.group('x'))
    field_y = len(m.group('wy')) + len(m.group('y'))
    return (m.group('head')
            + f'{new_x:>{field_x}},'
            + f'{new_y:>{field_y}},'
            + line[m.end('y') + 1:])


def rewrite_centers(text, centers):
    m = re.search(r'( *)const CENTERS = \{.*?\n\1\};', text, re.S)
    if not m:
        sys.exit('could not find the CENTERS block')
    indent = m.group(1)
    width = max(len(k) for k in centers) + 1
    body = '\n'.join(
        f'{indent}  {k + ":":<{width}} [{cx:4d}, {cy:4d}],'
        for k, (cx, cy) in centers.items()
    )
    return text[:m.start()] + f'{indent}const CENTERS = {{\n{body}\n{indent}}};' + text[m.end():]


def rewrite_canvas(text, w, h):
    text, n1 = re.subn(
        r'(\.canvas-inner \{[^}]*?width: )\d+(px;\s*\n\s*height: )\d+(px;)',
        lambda m: f'{m.group(1)}{w}{m.group(2)}{h}{m.group(3)}', text, flags=re.S)
    text, n2 = re.subn(
        r'(<svg id="linesSvg" width=")\d+(" height=")\d+(")',
        lambda m: f'{m.group(1)}{w}{m.group(2)}{h}{m.group(3)}', text)
    if n1 != 1 or n2 != 1:
        sys.exit(f'expected one canvas rule and one linesSvg tag, found {n1} and {n2}')
    return text


# ── Main ──────────────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--write', action='store_true', help='apply the changes')
    ap.add_argument('file', nargs='?', type=Path, default=DEFAULT_HTML,
                    help='the page to pack, defaults to living-archive.html')
    args = ap.parse_args()

    text = io.open(args.file, encoding='utf-8').read()
    lines, cards = parse_cards(text)
    boxes = bboxes(cards)
    offsets = solve(boxes)
    width, height = canvas_size(boxes, offsets)

    # Every cluster needs a centre, including the hand placed ones: the
    # connection lines read CENTERS by key and throw on a missing one, which
    # takes the whole script out.
    centers = {}
    for key in [k for row in ROWS for k in row] + list(FREE):
        if key not in boxes or key in centers:
            continue
        dx, dy = offsets[key]
        x0, y0, x1, y1 = boxes[key]
        centers[key] = ((x0 + x1) // 2 + dx, (y0 + y1) // 2 + dy)

    moved = 0
    for i, key, x, y, w, h in cards:
        dx, dy = offsets[key]
        if dx or dy:
            lines[i] = renumber(lines[i], x + dx, y + dy)
            moved += 1

    print(f'{len(cards)} cards across {len(boxes)} clusters')
    for key in centers:
        x0, y0, x1, y1 = boxes[key]
        dx, dy = offsets[key]
        n = sum(1 for c in cards if c[1] == key)
        shift = f'moves {dx:+5d},{dy:+5d}' if (dx or dy) else 'stays put   '
        print(f'  {key:11s} {n:2d} cards  {x1 - x0:4d}x{y1 - y0:4d}  {shift}'
              f'  centre {centers[key][0]:4d},{centers[key][1]:4d}')

    out = rewrite_canvas(rewrite_centers('\n'.join(lines), centers), width, height)
    changed = out != text
    print(f'canvas {width}x{height}, {moved} cards move, '
          f'{"file changes" if changed else "nothing to do"}')

    if not changed:
        return
    if not args.write:
        print('dry run, pass --write to apply')
        return
    io.open(args.file, 'w', encoding='utf-8').write(out)
    print(f'wrote {args.file.name}')


if __name__ == '__main__':
    main()
