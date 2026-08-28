#!/usr/bin/env python3
"""
Shrink images on the way into the repository.

Everything here ships to a phone on a beach, so nothing wants to be a 5000px
PNG. This resizes to a sensible longest edge and re-encodes as JPEG, and it
refuses to touch a PNG whose transparency is actually used, because that one
needs to stay a PNG.

    python3 tools/optimise_images.py living-archive-images/workshop/*.jpg          # the living-archive-images/ default
    python3 tools/optimise_images.py --max 2560 -q 72 Background/*.png
    python3 tools/optimise_images.py --dry-run Background/*.png

Converting a .png writes a .jpg beside it and leaves the original alone, so
you can look at both before deleting anything and updating the references.

Conventions: card media in living-archive-images/ is 1400px at quality 55, which is where the
Sargassum set went from 16MB to 1.2MB. Full page backgrounds are 2560px at
quality 72, since they fill the screen and JPEG artefacts show on a gradient.
"""

import argparse
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit('this needs Pillow: python3 -m pip install Pillow')


def alpha_is_used(im):
    """True only if some pixel is actually not opaque."""
    if im.mode not in ('RGBA', 'LA') and 'transparency' not in im.info:
        return False
    alpha = im.convert('RGBA').getchannel('A')
    return alpha.getextrema()[0] < 255


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('files', nargs='+', type=Path)
    ap.add_argument('--max', type=int, default=1400, help='longest edge in pixels (default 1400)')
    ap.add_argument('-q', '--quality', type=int, default=55, help='JPEG quality (default 55)')
    ap.add_argument('--dry-run', action='store_true', help='say what would happen, change nothing')
    args = ap.parse_args()

    before = after = 0
    for src in args.files:
        if not src.is_file():
            print(f'  skip {src}, not a file')
            continue
        im = Image.open(src)
        if src.suffix.lower() == '.png' and alpha_is_used(im):
            print(f'  keep {src}, its transparency is real')
            continue

        w, h = im.size
        scale = min(1.0, args.max / max(w, h))
        out = src.with_suffix('.jpg')
        note = f'{w}x{h}'
        if scale < 1.0:
            note += f' → {int(w * scale)}x{int(h * scale)}'

        old = src.stat().st_size
        before += old
        if args.dry_run:
            print(f'  would write {out.name:32s} {note}')
            continue

        if scale < 1.0:
            im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        im.convert('RGB').save(out, 'JPEG', quality=args.quality, optimize=True, progressive=True)
        new = out.stat().st_size
        after += new
        print(f'  {src.name:34s} {note:22s} {old / 1e6:6.2f} MB → {new / 1e6:5.2f} MB'
              f'  ({100 - 100 * new / old:.0f}% off)')

    if before and not args.dry_run:
        print(f'\ntotal {before / 1e6:.1f} MB → {after / 1e6:.1f} MB '
              f'({100 - 100 * after / before:.0f}% off)')


if __name__ == '__main__':
    main()
