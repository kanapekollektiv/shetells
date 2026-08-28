#!/usr/bin/env python3
"""
Combine a folder of SVG drawings into one that cycles through them.

The drawings are Illustrator exports, and every one of them uses the same
class names (.cls-1, .cls-2) and the same element ids (clippath). Dropped into
a single file as they are, they would overwrite each other's styles and clip
paths, and the result would be a mess. This namespaces each drawing's classes
and ids, fits it into a shared frame, and cross fades between them with a CSS
animation.

    python3 tools/build_drawing_loop.py drawings/*.svg -o living-archive-images/future/drawings.svg

Why an SVG and not a GIF: the map zooms, and this stays sharp at any zoom for
a fraction of the size. CSS animation inside an SVG runs when the file is used
as an <img> src, which is how the cards load images, so nothing else changes.

Set --ratio to the card's aspect ratio. Map cards use object-fit: cover, so a
frame of the same shape as the card is what stops the drawings being cropped.
"""

import argparse
import re
import sys
from pathlib import Path


def parse(path, i):
    """Return (style_text, body, viewbox) with classes and ids namespaced."""
    text = path.read_text(encoding='utf-8')

    m = re.search(r'viewBox="([\d.\s-]+)"', text)
    if not m:
        sys.exit(f'{path.name} has no viewBox')
    vb = [float(v) for v in m.group(1).split()]

    ns = f'd{i}'
    # every file names its classes cls-1, cls-2 …, so they have to be prefixed
    text = re.sub(r'\bcls-(\d+)\b', rf'{ns}cls-\1', text)
    # ids and every reference to them: id="x", url(#x), href="#x"
    ids = set(re.findall(r'\bid="([^"]+)"', text))
    for name in ids:
        text = re.sub(rf'\bid="{re.escape(name)}"', f'id="{ns}{name}"', text)
        text = re.sub(rf'url\(#{re.escape(name)}\)', f'url(#{ns}{name})', text)
        text = re.sub(rf'href="#{re.escape(name)}"', f'href="#{ns}{name}"', text)

    style = ''
    sm = re.search(r'<style>(.*?)</style>', text, re.S)
    if sm:
        style = sm.group(1)

    # the drawing itself is whatever follows the defs block
    dm = re.search(r'</defs>(.*)</svg>', text, re.S)
    if dm:
        body = dm.group(1)
        defs = re.search(r'<defs>(.*?)</defs>', text, re.S).group(1)
        defs = re.sub(r'<style>.*?</style>', '', defs, flags=re.S).strip()
        if defs:
            body = f'<defs>{defs}</defs>' + body
    else:
        body = re.search(r'<svg[^>]*>(.*)</svg>', text, re.S).group(1)

    return style, body.strip(), vb


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('files', nargs='+', type=Path)
    ap.add_argument('-o', '--out', type=Path, required=True)
    ap.add_argument('--ratio', default='190x230', help='frame shape, e.g. 190x230')
    ap.add_argument('--hold', type=float, default=1.9, help='seconds per drawing')
    ap.add_argument('--inset', type=float, default=0.84, help='how much of the frame a drawing fills')
    ap.add_argument('--wobble', type=float, default=0.0, help='degrees each drawing rocks, 0 for still')
    args = ap.parse_args()

    rw, rh = (float(v) for v in args.ratio.lower().split('x'))
    scale = 400 / max(rw, rh)
    FW, FH = rw * scale, rh * scale

    total = args.hold * len(args.files)
    slot = 100 / len(args.files)

    # Each drawing rocks on its own centre, offset from its neighbours so the
    # set never moves as one block. fill-box makes the origin the drawing's own
    # middle rather than the shared frame's.
    wobble_css = (f""".wob {{
      transform-box: fill-box; transform-origin: center;
      animation: wobble 3.6s ease-in-out infinite alternate;
    }}
    @keyframes wobble {{
      from {{ transform: rotate({-args.wobble}deg); }}
      to   {{ transform: rotate({args.wobble}deg); }}
    }}""" if args.wobble else '')

    styles, groups = [], []
    for i, path in enumerate(args.files):
        style, body, vb = parse(path, i)
        styles.append(style)
        vw, vh = vb[2], vb[3]
        s = min(FW * args.inset / vw, FH * args.inset / vh)
        tx = (FW - vw * s) / 2 - vb[0] * s
        ty = (FH - vh * s) / 2 - vb[1] * s
        # Three nested groups on purpose. The outer one fades, the middle one
        # places the drawing, and the inner one wobbles. They cannot be merged:
        # a CSS transform on an element overrides its transform attribute, so
        # the wobble would throw away the fit.
        inner = (f'<g class="wob" style="animation-delay:{-i * 0.83:.2f}s">\n      {body}\n    </g>'
                 if args.wobble else body)
        groups.append(
            f'  <g class="fr" style="animation-delay:{i * args.hold:.2f}s" '
            f'transform="translate({tx:.2f} {ty:.2f}) scale({s:.4f})">\n'
            f'    {inner}\n  </g>'
        )

    # Each drawing holds for its whole slot and only fades out while the next
    # one fades in, so the two overlap. Fading out before the next one starts
    # leaves a blank card for a moment, which reads as a glitch.
    css = f"""
    .fr {{ opacity: 0; animation: cycle {total:.2f}s linear infinite; }}
    /* so a still render, a canvas or a print shows a drawing, not a blank */
    .fr:first-of-type {{ opacity: 1; }}
    @keyframes cycle {{
      0%              {{ opacity: 0; }}
      {slot * 0.18:.2f}%  {{ opacity: 1; }}
      {slot:.2f}%     {{ opacity: 1; }}
      {slot * 1.18:.2f}%  {{ opacity: 0; }}
      100%            {{ opacity: 0; }}
    }}
    {wobble_css}
    @media (prefers-reduced-motion: reduce) {{
      .fr, .wob {{ animation: none; opacity: 0; }}
      .fr:first-of-type {{ opacity: 1; }}
    }}
"""

    out = (f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
           f'viewBox="0 0 {FW:.0f} {FH:.0f}">\n'
           f'  <style>{css}{"".join(styles)}  </style>\n'
           + '\n'.join(groups) + '\n</svg>\n')

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(out, encoding='utf-8')
    src_total = sum(f.stat().st_size for f in args.files)
    print(f'{len(args.files)} drawings, {args.hold}s each, {total:.1f}s loop')
    print(f'{args.out}  {src_total / 1000:.0f} KB of sources → {args.out.stat().st_size / 1000:.0f} KB')


if __name__ == '__main__':
    main()
