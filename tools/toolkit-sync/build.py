# -*- coding: utf-8 -*-
"""Turn Mario's DIY Shell Phone guide (github.com/marioguzzzman/dyi-shell.phone)
into pages on shetells.stream, under toolkit/build/.

    python tools/toolkit-sync/build.py <clone of dyi-shell.phone> toolkit/build

Mario keeps writing markdown in his own repo. This script reproduces his
GitHub Pages layout (_layouts/default.html) and stylesheet, keeps his folder
structure so his relative links still work, turns .md links into .html, and
sends anything not copied here (the KiCad project, the 3D shell files) to
GitHub instead, so the site does not carry 44 MB of print files.

The output folder is rebuilt from scratch on every run; never edit it by hand.
"""
import os, re, sys, shutil, posixpath
import markdown

REPO = 'marioguzzzman/dyi-shell.phone'
BASE = '/toolkit/build/'   # where the guide lives on shetells.stream; links are absolute from here
GH = 'https://github.com/' + REPO

# source markdown -> page on our site (same folders as in Mario's repo)
PAGES = {
    'README.md':           'index.html',
    'docs/README.md':      'docs/index.html',
    'docs/assembly.md':    'docs/assembly.html',
    'docs/wifi-setup.md':  'docs/wifi-setup.html',
    'hardware/bom.md':     'hardware/bom.html',
    'enclosure/README.md': 'enclosure/index.html',
}
COPY_DIRS = ['images', 'assets']   # copied as they are

NAV = [('docs/assembly.html', 'assembly', 'assembly'),
       ('docs/wifi-setup.html', 'wi-fi setup', 'wifi'),
       ('hardware/bom.html', 'parts', 'bom')]


def slug(text):
    """GitHub's heading anchors, so links like #step-9-glue-… keep working."""
    s = re.sub(r'<[^>]+>', '', text).strip().lower()
    s = re.sub(r'[^\w\- ]', '', s, flags=re.UNICODE)
    return s.replace(' ', '-')


def resolve(link, src_rel, src_root):
    """Where a relative link in Mario's markdown should point on our site."""
    if re.match(r'^(https?:|mailto:|#|data:)', link) or not link:
        return link
    path, _, frag = link.partition('#')
    frag = ('#' + frag) if frag else ''
    target = posixpath.normpath(posixpath.join(posixpath.dirname(src_rel), path))
    def rel(to):   # absolute path on the site, so it works with or without a trailing slash
        return BASE + to

    if target in PAGES:
        return rel(PAGES[target]) + frag
    readme = posixpath.join(target, 'README.md')
    if readme in PAGES:
        return rel(PAGES[readme]) + frag
    if target.split('/')[0] in COPY_DIRS:
        return rel(target) + frag
    kind = 'tree' if os.path.isdir(os.path.join(src_root, target)) else 'blob'
    return f'{GH}/{kind}/main/{target}{frag}'


def layout(title, body, out_rel, home):
    up = BASE
    nav = '\n'.join(
        f'      <a class="btn btn-outline{" is-active" if key in out_rel else ""}" href="{up}{href}">{label}</a>'
        for href, label, key in NAV)
    doodles = (f'  <img class="doodle doodle-blimp" src="{up}assets/drawings/blimp.svg" alt="" aria-hidden="true">\n'
               f'  <img class="doodle doodle-seaweed" src="{up}assets/drawings/seaweed.svg" alt="" aria-hidden="true">'
               if home else
               f'  <img class="doodle doodle-shell" src="{up}assets/drawings/shell.svg" alt="" aria-hidden="true">')
    page_title = 'DIY Shell Phone' if home else f'{title} · DIY Shell Phone'
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{page_title}</title>
  <meta name="description" content="Build your own Shellphone, a shell you can listen to. Part of She Tells, Sea Shells (Esposende, S+T+ARTS Aqua Motion).">
  <!-- Built from {GH} by tools/toolkit-sync/build.py. Edit Mario's repo, not this file. -->
  <link rel="stylesheet" href="{up}assets/css/shetells.css">
</head>
<body class="{"page-home" if home else "page-doc"}">
  <header class="header">
    <a class="brand" href="{up}index.html">
      <span class="brand-title">she tells</span>
      <span class="brand-sub">
        <svg class="brand-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.87 5.06" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M.91,3.32c3.46.66,15.77,1.65,22.92.28,4.78-.91,15.54-2.85,19.76-2.83,3.81.02,8.93,0,11.38.86"/></svg>
        diy shell phone
      </span>
    </a>
    <nav class="nav-buttons">
{nav}
      <a class="btn btn-filled" href="/diytoolkit.html">she tells ↗</a>
    </nav>
  </header>

{doodles}

  <main class="content">
{body}
  </main>

  <footer class="footer">
    <img class="footer-spiral" src="{up}assets/drawings/spiral.svg" alt="" aria-hidden="true">
    <p class="footer-tag">— made in esposende, with the water.</p>
    <p class="footer-links">
      <a class="btn btn-outline" href="{GH}">view on github</a>
      <a class="btn btn-filled" href="/">she tells ↗</a>
    </p>
  </footer>
</body>
</html>
'''


def build(src_root, out_root):
    if os.path.isdir(out_root):
        shutil.rmtree(out_root)
    os.makedirs(out_root)
    for d in COPY_DIRS:
        if os.path.isdir(os.path.join(src_root, d)):
            shutil.copytree(os.path.join(src_root, d), os.path.join(out_root, d))

    for src_rel, out_rel in PAGES.items():
        src = os.path.join(src_root, src_rel)
        if not os.path.exists(src):
            print('  skipped, not in the repo:', src_rel)
            continue
        text = open(src, encoding='utf-8').read()
        md = markdown.Markdown(extensions=['tables', 'fenced_code', 'sane_lists', 'md_in_html', 'attr_list',
                                           'toc'], extension_configs={'toc': {'slugify': lambda v, sep: slug(v)}})
        body = md.convert(text)
        # rewrite every relative href/src, in markdown output and in Mario's raw HTML alike
        body = re.sub(r'(href|src)="([^"]*)"',
                      lambda m: f'{m.group(1)}="{resolve(m.group(2), src_rel, src_root)}"', body)
        h1 = re.search(r'<h1[^>]*>(.*?)</h1>', body, re.S)
        title = re.sub(r'<[^>]+>|[^\w\s\-–·,.]', '', h1.group(1)).strip() if h1 else 'DIY Shell Phone'
        dest = os.path.join(out_root, out_rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        open(dest, 'w', encoding='utf-8').write(layout(title, body, out_rel, out_rel == 'index.html'))
        print('  wrote', out_rel)


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    build(sys.argv[1], sys.argv[2])
