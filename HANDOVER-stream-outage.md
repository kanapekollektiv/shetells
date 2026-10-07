# Handover — the eternal stream is down, and where everything stands

Written 2026-10-07. Everything below was measured against the live hosts that
day, not recalled. Read this before re-investigating anything; it exists so the
next session does not repeat the diagnosis.

---

## 1. The stream outage, diagnosed

**`https://shetells.stream/stream.html` is not the problem.** The page serves
fine: HTTP 200, 15,572 bytes. So does the rest of the site.

**The audio it plays is gone.** `stream.html` has exactly one external
dependency:

```
https://shell.kokott.art/online.mp3
```

That URL **returns 404 from nginx**. A `HEAD` answers `HTTP/2 404`,
`content-length: 9`, in 0.1s. A `GET` hangs instead of answering and delivers
**0 bytes in 25 seconds**.

What is *not* wrong, so nobody wastes time on it:

| checked | result |
|---|---|
| DNS | resolves — `shell.kokott.art` is a CNAME to `kokott.art`, `81.169.216.3` |
| ports 80 and 443 | both open |
| TLS | completes in 0.07s |
| the host | up; `https://shell.kokott.art/` serves a page titled **shell.phone** |
| `/submissions` | returns 404 to a **GET**, which is correct for a POST-only route |

So the machine is up and the shell.phone app is still being served. It is the
**stream source** that is not there: nginx has no `online.mp3` to give.

**This is not fixable from this repository.** `shell.kokott.art` is Christian
Kokott's server, not GitHub Pages. Someone with access to that box has to say
why `online.mp3` 404s and restart whatever produces it.

**Worth checking at the same time:** the game and `recorder.html` both POST
recordings to `https://shell.kokott.art/submissions` on that same host. A GET
404 does not prove POST is broken, and it was not tested with a real upload
because that would put a junk recording into the archive. **Test one submission
by hand before any workshop or showcase that depends on it.**

---

## 2. Where the repository stands

| | |
|---|---|
| Branch | `kanape-pr` |
| Its upstream | `kanape/living-archive` — **not** `kanape/main` |
| The branch that serves the site | `kanape/main` |
| Deploy | `git push kanape kanape-pr:main` |
| State on 7 Oct | clean tree, nothing unpushed, at `1463223` |

`git push kanape kanape-pr` does **not** deploy. It creates a remote branch
called `kanape-pr` and changes nothing live. The `:main` part is the whole
point.

Pages takes one to three minutes, and Safari caches hard. Always reload with a
fresh query string, `game.html?v=2`, before concluding a fix failed. More than
one "it did not work" in earlier sessions was a cached file.

---

## 3. Running it locally

```bash
cd /Users/helinulas/Documents/GitHub/Shetells-website && python3 -m http.server 8800
```

Then `http://localhost:8800/game.html` and `/living-archive.html`.

Two things that cost a previous session real time:

- **The preview sandbox cannot read this repository** from inside a worktree.
  Every request 404s. Serving has to happen either from the user's own terminal,
  or from a copy inside the session scratchpad, which the sandbox can read. The
  site is only ~34MB without `.git`, so copying is cheap.
- **A stopped preview server can keep its socket.** Two servers once held port
  8800, one on IPv4 returning 404s and one on IPv6 working, and `localhost`
  resolved to the dead one. If local URLs 404 for no reason, check
  `lsof -nP -iTCP:8800 -sTCP:LISTEN` for more than one listener.

Recording needs a **secure context**: `localhost` or HTTPS only. A LAN address
like `http://192.168.x.x:8800` loads the page and the browser refuses the
microphone. That is not a bug. Test recording on `shetells.stream`.

---

## 4. Building the game

`game.html` is generated. Do not hand-edit it; the next build overwrites it.

```bash
python3 tools/game/make_assets.py   # only after changing a font, background or drawing
python3 tools/game/build.py         # writes game.html at the repo root
```

`tools/game/assets.json` is gitignored — it is ~1.9MB of base64 duplicating
files already in the repo. **Run `make_assets.py` once in a fresh clone or the
build fails.**

Sources: `cards.py` (the five cards, their copy, colours and hints), `pt.py`
(every interface string in EN and PT), the three CSS files, `build.py`.

---

## 5. What is still open

- **The stream, above.** Needs Christian.
- **Portuguese has never been read by a native speaker.** The five card
  conditions are the archive's own pt text from `content.js`; everything else is
  machine translated and marked in the interface as *"Tradução automática. Em
  revisão."*
- **The card fronts have not been read by anyone who was in Esposende**, in
  either language.
- **`FEEDBACK_URL`** at the top of the game script is empty, so the "how was
  that?" button opens a prefilled email to `kanape.kollektiv@gmail.com` carrying
  progress, language and device. Set the constant to a form URL and the button
  uses the form instead.
- **Full screen** for the game was asked for and deferred. The card is a fixed
  62:100 and phones are not, so edge to edge means cropping or letterboxing.
- **The children's drawings are classroom only.** Used on paper in the session,
  never in the public game. Several are signed, and keeping them offline keeps a
  minor's name offline.
- **The OAuth token in `.git/config`.** Live, 40 characters, scopes `repo,
  workflow, read:user, user:email`. **Never published** — not in any tracked
  file, not in any commit, and `.git/config` is never pushed. It is an *OAuth*
  token, so it is not under Developer settings; it is at
  **github.com/settings/applications** → Authorized OAuth Apps. Worth rotating,
  not urgent.

---

## 6. The other handovers

- `HANDOVER-game.md` — the card game in detail: the five cards, the traps that
  bit, the submission contract, the hotline.
- `HANDOVER-living-archive.md` — the archive map. **Parts of it have drifted**;
  §9 of `HANDOVER-game.md` lists the corrections, including that `la/` is now
  `living-archive-images/`.
- `HANDOVER-logo-card.md`.
