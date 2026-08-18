#!/usr/bin/env python3
"""
Check that every local asset a page asks for actually exists.

Walks the .html and .css files, pulls out every url(), src= and href= that
points at a local file, resolves it relative to the file that asked for it,
and reports the ones that are not there. Also lists files in the asset
folders that nothing references, which is a hint rather than a verdict:
something may be loaded from JavaScript, or simply not wired up yet.

    python3 tools/check_assets.py

Exits non-zero if anything referenced is missing.
"""

import re
import sys
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {'.git', '.claude', 'node_modules', 'tools'}
ASSET_EXT = {'.png', '.jpg', '.jpeg', '.svg', '.gif', '.webp', '.mp4', '.mov',
             '.mp3', '.wav', '.ttf', '.otf', '.woff', '.woff2'}

REF_RE = re.compile(r"""url\(\s*['"]?([^'")]+)['"]?\s*\)|(?:src|href)\s*=\s*["']([^"']+)["']""")

# Media paths in content.js and lang.js are plain quoted strings, so pick out
# anything that looks like a local file with an asset extension.
JS_REF_RE = re.compile(r"""['"]([^'"\s]+\.(?:png|jpe?g|svg|gif|webp|mp4|mov|mp3|wav|ttf|otf|woff2?))['"]""", re.I)


def sources():
    for p in sorted(ROOT.rglob('*')):
        if any(part in SKIP_DIRS for part in p.parts):
            continue
        if p.suffix in {'.html', '.css', '.js'} and p.is_file():
            yield p


def local_refs(path):
    text = path.read_text(encoding='utf-8', errors='replace')
    rx = JS_REF_RE if path.suffix == '.js' else REF_RE
    for m in rx.finditer(text):
        raw = m.group(1) if path.suffix == '.js' else (m.group(1) or m.group(2))
        if not raw:
            continue
        raw = raw.strip()
        # A path built at runtime, e.g. src="${item.cover}". Nothing to check.
        if '${' in raw or '{{' in raw:
            continue
        if raw.startswith(('http://', 'https://', '//', 'data:', 'mailto:', '#', 'tel:')):
            continue
        # drop the ?v= cache buster and any fragment
        clean = urllib.parse.unquote(raw.split('?')[0].split('#')[0])
        if not clean:
            continue
        yield raw, (path.parent / clean).resolve()


def main():
    missing = []
    referenced = set()
    for src in sources():
        for raw, target in local_refs(src):
            referenced.add(target)
            if not target.exists():
                missing.append((src.relative_to(ROOT), raw))

    print(f'checked {len(list(sources()))} html, css and js files')
    if missing:
        print(f'\n{len(missing)} missing:')
        for where, raw in missing:
            print(f'  {where} → {raw}')
    else:
        print('every referenced local file exists')

    unused = []
    for p in sorted(ROOT.rglob('*')):
        if any(part in SKIP_DIRS for part in p.parts):
            continue
        if p.is_file() and p.suffix.lower() in ASSET_EXT and p.resolve() not in referenced:
            unused.append(p.relative_to(ROOT))
    if unused:
        total = sum((ROOT / u).stat().st_size for u in unused)
        print(f'\n{len(unused)} asset files nothing references ({total / 1e6:.1f} MB):')
        for u in unused:
            print(f'  {(ROOT / u).stat().st_size / 1000:8.0f} KB  {u}')

    return 1 if missing else 0


if __name__ == '__main__':
    sys.exit(main())
