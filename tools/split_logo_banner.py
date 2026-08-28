#!/usr/bin/env python3
"""Cut the consortium's partner banner into individual white-on-transparent marks.

The S+T+ARTS Aqua Motion press kit ships the partners as one flat 3840x200
strip with the artwork baked onto an opaque box. That is unusable for a film
end card: it keys as a solid rectangle, and at card width the marks come out
too small to read. This splits the strip on its gutters and turns each mark
into its own transparent PNG, so logo-card.html can lay them out in rows.

Naming note: in the press kit, "White Background" means the file is *for* a
white background, so it holds the reversed (white) artwork on black. That is
the one we want.

    python3 tools/split_logo_banner.py [path-to-press-kit-folder]
"""

import os
import shutil
import sys

import numpy as np
from PIL import Image

DEFAULT_SRC = os.path.expanduser(
    "~/Desktop/shetells/videos/Logos/STARTS_AQUAMOTION_PARTNERS_Logos")
OUT = os.path.join(os.path.dirname(__file__), "..", "sprites", "logos")

# The consortium's order along the banner.
NAMES = ["inova", "aircentre", "colab-atlantic", "rio-neiva", "waag", "hortimare",
         "ars-electronica", "tu-wien", "water-museums", "muse", "pro-progressione",
         "kikk"]

INK = 24     # a column brighter than this carries artwork
MERGE = 45   # wider than kikk's icon/wordmark gap (36px), tighter than any
             # real gutter between two partners (60px+)


def to_white_alpha(rgb):
    """Luminance becomes alpha, every kept pixel becomes pure white. Going
    through luminance rather than a hard threshold keeps the antialiased
    edges, which matters at 4K."""
    lum = rgb.convert("L")
    w, h = rgb.size
    out = Image.merge("RGBA", (Image.new("L", (w, h), 255),) * 3 + (lum,))
    return out.crop(out.getchannel("A").point(lambda v: 255 if v > 6 else 0).getbbox())


def columns(strip):
    """Runs of consecutive ink columns, merged across sub-logo gaps."""
    ink = np.array(strip.convert("L")).max(axis=0) > INK
    runs, start = [], None
    for x, v in enumerate(ink):
        if v and start is None:
            start = x
        elif not v and start is not None:
            runs.append([start, x])
            start = None
    if start is not None:
        runs.append([start, len(ink)])

    merged = [runs[0]]
    for a, b in runs[1:]:
        if a - merged[-1][1] < MERGE:
            merged[-1][1] = b
        else:
            merged.append([a, b])
    return [(a, b) for a, b in merged if b - a > 20]


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    out_partners = os.path.join(OUT, "partners")
    shutil.rmtree(out_partners, ignore_errors=True)
    os.makedirs(out_partners)

    strip = Image.open(
        os.path.join(src, "Partners' Logos Banner - White Background.png")).convert("RGB")
    cuts = columns(strip)
    if len(cuts) != len(NAMES):
        print(f"warning: found {len(cuts)} marks, expected {len(NAMES)} — "
              f"check INK/MERGE against a new banner", file=sys.stderr)

    for i, (a, b) in enumerate(cuts):
        name = NAMES[i] if i < len(NAMES) else f"partner-{i}"
        tile = to_white_alpha(strip.crop((a, 0, b, strip.height)))
        tile.save(os.path.join(out_partners, f"{name}.png"))
        print(f"  {name:18s} {tile.size}")

    # The programme mark arrives the same way: white artwork on a black box.
    mark = Image.open(os.path.join(src, "STARTSAquaMotion_Black Background.png")).convert("RGB")
    to_white_alpha(mark).save(os.path.join(OUT, "starts-aquamotion-white.png"))
    print("  starts-aquamotion-white.png")


if __name__ == "__main__":
    main()
