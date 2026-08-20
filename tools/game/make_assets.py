# -*- coding: utf-8 -*-
"""Rebuild assets.json from the repository's own files.

The game is a single self-contained html file, so the fonts, the five card
backgrounds and the six drawings are embedded in it as base64. This script
produces that payload from the originals, so nothing is duplicated in git.

    cd <repo root> && python3 tools/game/make_assets.py

Writes tools/game/assets.json, which build.py then reads.
"""
import base64, io, json, os, re
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'tools', 'game', 'assets.json')
out = {}

FONTS = {
    'FONT_XLIGHT': 'Fonts/NaNTresor/NaNTresorM-ExtraLight.ttf',
    'FONT_REG':    'Fonts/NaNTresor/NaNTresorM-Regular.ttf',
    'FONT_BOLD':   'Fonts/NaNTresor/NaNTresorM-Bold.ttf',
    'FONT_HAND':   'Fonts/Celescript.ttf',
}
for key, rel in FONTS.items():
    out[key] = base64.b64encode(open(os.path.join(ROOT, rel), 'rb').read()).decode()

# card backgrounds, cropped to the card's 760x1100 and compressed
BG = {'CREAM': 'Asset_7_BG.jpg', 'ACID': 'Asset_11_BG.jpg', 'DUNES': 'Asset_15_BG.jpg',
      'CITY': 'Asset_14_BG.jpg', 'O2': 'Asset_9_BG.jpg'}
CW, CH = 760, 1100
for key, name in BG.items():
    im = Image.open(os.path.join(ROOT, 'Background', name)).convert('RGB')
    w, h = im.size
    tr, sr = CW / CH, w / h
    if sr > tr:
        nw = int(h * tr); im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = int(w / tr); im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    im = im.resize((CW, CH), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=62, optimize=True, progressive=True)
    out['BG_' + key] = base64.b64encode(buf.getvalue()).decode()

# drawings. every Illustrator export names its classes .cls-1 and its clip path
# "clippath", so they collide the moment two share a document. Namespace them.
DRAW = {'CREAM': 'Asset 7.svg', 'ACID': 'Asset 11.svg', 'DUNES': 'Asset 8.svg',
        'CITY': 'Asset 14.svg', 'O2': 'Asset 9.svg', 'WAVE': 'Asset 16.svg'}
for key, name in DRAW.items():
    s = io.open(os.path.join(ROOT, 'drawings', name), encoding='utf-8').read()
    s = re.sub(r'<\?xml[^>]*\?>', '', s).strip()
    p = key.lower()
    for cls in sorted(set(re.findall(r'\.(cls-\d+)', s)), key=len, reverse=True):
        s = s.replace('.' + cls, '.' + p + '-' + cls).replace('"' + cls + '"', '"' + p + '-' + cls + '"')
    for i in sorted(set(re.findall(r'id="([^"]+)"', s)), key=len, reverse=True):
        s = s.replace('id="%s"' % i, 'id="%s-%s"' % (p, i)).replace('url(#%s)' % i, 'url(#%s-%s)' % (p, i))
    s = re.sub(r'\s(id|data-name)="Layer_2"', '', s)
    out['SVG_' + key] = s

json.dump(out, open(OUT, 'w'))
print('wrote %s  (%.2f MB)' % (OUT, os.path.getsize(OUT) / 1024 / 1024))
