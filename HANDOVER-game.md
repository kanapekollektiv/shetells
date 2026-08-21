# Handover — the card game (`game.html`)

Written 2026-08-20, extended 2026-08-21. Every fact below was checked against
the files on disk or against a running copy at that moment, not recalled.
Companion to `HANDOVER-living-archive.md`, which covers the archive map and is
corrected in §9 below.

**§11 is the 21 August work**: the hotline on the cards, the adverts deck and
the `?` box in the archive. §4 and §10 have been corrected where the 20 August
text turned out to be wrong or dangerous.

---

## 1. What it is

A card game, live at **`https://shetells.stream/game.html`**. Five cards, one
per speculative product. The front is the advert. Turning it over gives the
ecological condition the joke was actually about. Then the player records either
a water memory or a speculative product for Esposende, and it goes to the
existing stream.

It delivers a Scale-Up commitment already made in writing: *"The product line
will be used to gamify the memory collection experience that comes with the
toolkit."*

```bash
cd /Users/helinulas/Documents/GitHub/Shetells-website && python3 -m http.server 8791
```

Then `http://localhost:8791/game.html`. **The microphone needs a secure
context**, so recording only works on `localhost` or over HTTPS. A LAN address
like `http://192.168.1.108:8791` will load the page and refuse the mic. That is
the browser, not a bug.

---

## 2. Where the work lives

| | |
|---|---|
| Branch | `kanape-pr` in the main repo |
| Its upstream | `kanape/living-archive` (**not** `kanape/main`, despite what the other handover says) |
| The branch that serves the site | `kanape/main` |
| Deploy | `git push kanape kanape-pr:main` |

`git push kanape kanape-pr` pushes to a remote branch called `kanape-pr` and
does **not** deploy anything. That mistake cost this session two rounds.

GitHub Pages takes one to three minutes to rebuild, and Safari caches hard.
Always check with a fresh query string: `game.html?v=2`. More than one apparent
"the fix did not work" this session was a cached file.

---

## 3. How it is built

`game.html` is generated, not hand-edited. Everything lives in `tools/game/`.

```bash
python3 tools/game/make_assets.py   # only after changing a font, background or drawing
python3 tools/game/build.py         # writes game.html at the repo root
```

| file | holds |
|---|---|
| `cards.py` | the five cards: copy, colours, conditions, hints. Materials list |
| `pt.py` | every interface string in EN and PT, and the Portuguese card copy |
| `build.py` | assembles the page, then swaps embedded fonts for `Fonts/` links |
| `make_assets.py` | regenerates `assets.json` from `Fonts/`, `Background/`, `drawings/` |
| `card-base.css`, `card.css`, `game_shell.css` | the card component and the game chrome |

`assets.json` is gitignored: it is 1.9MB of base64 duplicating files already in
the repo. Run `make_assets.py` once after cloning or the build will fail.

**Editing `game.html` directly is fine for a one-line fix but will be lost the
next time anyone runs `build.py`.** Change the source and rebuild.

---

## 4. Traps that already bit, in this file

- **`<button>` cannot contain `<button>`.** The card was a button and the lane
  buttons were inside it. The parser evicts the inner one and everything after
  it, so the opener's footer ended up as a direct child of `<body>`. The card is
  now `div[role="button"]` with keyboard handling.
- **`backface-visibility` does not remove a face from hit testing.** The
  turned-away face silently swallowed every tap. Faces carry `pointer-events:
  none` and only the facing one gets them back.
- **Safari ignores `backface-visibility` here entirely** and paints the far face
  mirrored over the near one. Do not rely on it. The far face is faded to
  `opacity: 0` at `.36s`, the midpoint of the `.72s` turn, when the card is edge
  on. That is what fixed the reversed text.
- **A class with `display:flex` outranks the UA's `[hidden]{display:none}`.**
  The playback controls showed before anything was recorded. There is now a
  global `[hidden]{display:none !important}`.
- **`#playCard` is persistent; only its contents are replaced.** Binding the
  flip handler on every draw stacked listeners, so a card with an even number
  toggled twice and looked dead. Every second card was unflippable. The flip is
  bound **once** at startup; `bindCard` only wires the lanes.
- **iOS does not reliably synthesise `click` for taps on non-interactive
  children.** The flip runs off `pointerup` with a debounced `click` fallback.
- **`element.click()` bypasses hit testing**, so it will pass while real taps
  fail. Verify anything clickable with `document.elementFromPoint()` at the
  element's centre, then dispatch a real pointer sequence.
- **Entities are not decoded inside `<script>`.** `sarga&#231;o` slugified to
  `sarga-231-o`. Slugs are precomputed in Python.
- **`timeout` is not a macOS command.** A check using it silently does nothing
  and returns success, which produced a wrong "the token is dead" conclusion.
- **A query string on the HTML does nothing for `lang.js` or `content.js`.**
  They are loaded by plain `<script src>` with no version, and Pages serves
  them with `cache-control: max-age=600`. `living-archive.html?v=2` therefore
  gets you a fresh page that then loads a ten-minute-old `lang.js`. This is the
  §2 caching warning one layer deeper, and it cost time on 21 Aug: the deploy
  was correct and the browser was lying. Hard refresh (**&#8984;&#8679;R**), or
  wait ten minutes, or check the bytes with `curl` instead of the browser.
- **A server started in the worktree serves the worktree.** The
  `.claude/worktrees/*` checkouts hold `index.html` and nothing else, so
  `python3 -m http.server` started from one 404s on every real page. Twice on
  21 Aug this looked like a broken site. Check with
  `lsof -a -p $(lsof -ti:8791 -sTCP:LISTEN) -d cwd`.

---

## 5. The five cards

Side A is reproduced from the printed flyers. Side B is the archive's own text
from `content.js`, and its Portuguese is the archive's too. Everything else in
Portuguese is machine translated, marked in the interface as *"Tradução
automática. Em revisão."*, and **needs a native speaker.**

| card | colour | why that colour |
|---|---|---|
| shell cream | `#00652E` | archive *sargassum* |
| acid tabs | `#6e00b0` | site purple |
| sexy dunes | `#C0511B` | archive *toolkit*, darkened |
| sargassum city | `#238528` | archive *data*, darkened |
| deluxe O₂ | `#0046FF` | the site blue |

**Two colours are deliberately not the archive value.** `#32BE3A` gave 2.45:1
for white text and `#CB561D` gave 4.30:1; both also failed as text on the white
front. They are darkened to the point where they clear 4.5:1 both ways. Do not
"restore" them without rechecking contrast.

The opener uses archive *drawings* `#92CEF8` with `#4B06F7`. White on the pale
blue is 1.69:1, so the front takes dark ink and the back inverts to the violet.

---

## 6. How the game runs

Opener → deck → card front → turn → condition → choose a lane.

**Remember** and **invent** both record in place, with different scripts. There
is no hand-off to `memories.html`; the second option, sending people there
instead, is written up in the concept note but not built.

The invent lane went through three versions. The first dealt two random
constraints and asked for a product pitch; the client could not use it. What
works is **one sentence to finish** — *In 2040, Esposende will need ………* — with
three nudges available only on request, the first two specific to the card in
hand and the third offering a material. Recording shows **a script with gaps to
read aloud**, not an empty microphone.

If this gets simplified again, cut the hint button before cutting the sentence.

---

## 7. Submission

Posts to `https://shell.kokott.art/submissions`, the same endpoint
`recorder.html` uses, with the only three fields its parser accepts:

```
tag    sunny | cloudy | stormy | normy
email
file   memory-{tag}-{timestamp}-{card}-{lane}.webm
```

The card and lane ride in the **filename**, because extra form fields may be
rejected. The `memory-{tag}-{timestamp}` stem is unchanged, so anything already
parsing those positions still works.

**The four tags above are what `recorder.html` actually offers.** §7 of the
other handover says "sunny, windy, cloudy, foggy". That is wrong.

Consent is shown once per session before the first recording, carrying the same
promises as `memories.html`: the voice is public, no AI training, withdrawal by
email within two weeks.

---

## 8. Open decisions

- **Opener headline: decided.** It is now **she listens**, with the pill
  *"there is no right answer"* and the question *"Shall we begin?"*. In
  Portuguese: *ela escuta*, *não há resposta certa*, *Começamos?*.
- **Portuguese needs a native speaker.** Machine translated, swept for Brazilian
  forms, but unread by anyone who speaks it.
- **The card fronts are unread by anyone who was in Esposende**, in both
  languages.
- **`FEEDBACK_URL`** at the top of the script is empty, so the "how was that?"
  button opens a prefilled email to `kanape.kollektiv@gmail.com` carrying
  progress, language and device. Set the constant to a form URL and the button
  uses that instead.
- **Full screen.** Asked for, deferred. The card is a fixed 62:100, phones are
  not, so edge to edge means cropping or letterboxing. Decide with it in hand.
- **The children's drawings are classroom only.** Used on paper in the session,
  never in the public game. Several are signed and that keeps a minor's name
  offline. Only the recordings come back out.
- **Printed deck** and whether the toolkit carries physical cards.

---

## 9. Corrections to `HANDOVER-living-archive.md`

Checked this session; that document has drifted.

| it says | actually |
|---|---|
| `kanape-pr` tracks `kanape/main` | it tracks `kanape/living-archive` |
| last commit `d78aa16` | far behind; see `git log` |
| 66 cards | 73 in `CARDS_LAYOUT` |
| §7 lists five clusters as placeholders | §5 marks all nine done; §7 is the stale one |
| stream tags "sunny, windy, cloudy, foggy" | `recorder.html` offers sunny, cloudy, stormy, normy |
| the OAuth token, implied published | **never published.** Not in any tracked file, not in any commit, only in `.git/config`, which is never pushed |

**On the token:** it is live, 40 characters, scopes `repo, workflow, read:user,
user:email`. It is an *OAuth* token, so it is not under Developer settings. It
is at **github.com/settings/applications** → Authorized OAuth Apps. Exposure is
this machine plus session transcripts. Worth rotating; not urgent. Once revoked,
strip both remote URLs and let the `osxkeychain` helper hold the credential.

---

## 10. Where this session left off

**Everything is committed and pushed.** `kanape/main` is at `fdc308d`. Nothing
is outstanding in the working tree.

Two things were being checked when the session ended. **Both were resolved on
21 Aug and neither was a fault:**

- **GitHub Pages had caught up.** The deployed `game.html` was byte-identical
  to the local build.
- **The NaN font was never broken.** All four files return HTTP 200 as
  `font/ttf`, and on a fresh load `document.fonts` reports all four `loaded`
  with no fallback to Georgia. It was a cached copy, as suspected.

**On the connecting line and the opener header:** verified clear in both
languages. Be careful how this is tested. Measuring a text element's bounding
box gives a false positive, because a two-line heading's box spans the width of
the *longer* line, so the empty space beside the short line counts as a
collision. Use `Range.getClientRects()` for one box per line.

**No processes need stopping.** A local `python3 -m http.server` on port 8791
was used for testing and can be killed with
`lsof -ti:8791 -sTCP:LISTEN | xargs kill`, or left to die with the terminal.

**Do not drop the `-sTCP:LISTEN`.** Plain `lsof -ti:8791` matches every socket
on the port, not just the listener. On 21 Aug it returned two PIDs, the server
and Chrome's network service, so the command as it was first written here would
have killed part of Chrome.

---

## 11. The hotline, and what changed on 21 August

Everything in this section is live on `shetells.stream` and verified there, not
locally.

**Every card front carries a phone**, bottom right, opposite the flip cue.
Tapping it plays that product's advert in a player *underneath* the card, so the
call survives turning the card over. The five recordings are the
`Hotline_final_player` WAVs from Helin's desktop, encoded to AAC 96k stereo:
11MB in `audio/hotline/{key}.m4a`, one file per card key.

Three things that had to be got right, all of them §4 traps in new clothes:

- The flip guard is now `closest('.lane, .hotline')`. Without the phone in that
  list, calling the hotline also turns the card over.
- Nothing is fetched until somebody actually calls. The takes run to four
  minutes; `preload` is `none` and `hotStop()` calls `load()` after clearing
  `src`, which stops the download and not only the sound.
- The call is dropped when you leave the card, in `show()` and again in
  `takeTop()`, because drawing a new card does not change screen.

**`hlang` in `cards.py`** is the language a card's take was actually recorded
in, which is *not* always the language being read: acid tabs and sexy dunes are
Portuguese, the other three English. There is one take each, so the player says
which. A card with no `hlang` gets no phone.

**The living archive** gained two things:

- **An adverts deck** in `future-the-range`, under the introduction, in both the
  popup and the mobile notes. Same five recordings. `buildAudioDeck()` is
  generic: any card with an `audio: {title, note, tracks}` block gets one.
  Decks register themselves in `audioDecks` so closing either view can silence
  them, and the deck and the eternal stream pause each other.
- **The `?` finally does something.** `btnInfo` had sat in the header since the
  beginning with **no handler at all**. It now opens the project text from
  `archive.about.body` in `lang.js`.

**On the Portuguese in `archive.about.body`:** it is machine translation and
carries its own notice saying a translator has still to see it. It deliberately
does *not* reuse `MT_NOTICE`, which claims the DeepL output was already edited
by a translator. When someone has read it, switch to the standard notice.

**Left undecided**, all cosmetic, none blocking:

- The phone is a 34px tap target, under the 44px a thumb wants. The fix is to
  keep the circle and extend the hit area with a pseudo-element, not to grow
  the circle.
- The same five recordings are called **the hotline** in the game and **the
  adverts** in the archive.
- `Esposende'sers` in Helin's about copy was corrected to `Esposenders`; the
  Portuguese says `esposendenses`. The two do not match.
- `follow the keyboard`, in the about copy, is left exactly as written because
  its meaning was not clear enough to correct.

---

## 12. Companion documents

Three artifacts, all published from this session:

- **The game**, playable — `https://claude.ai/code/artifact/1b7358f2-e209-4157-9db0-b671e4a7186c`
- **Concept note** for Rio Neiva and partners — `https://claude.ai/code/artifact/34138af6-d28c-4191-93c2-2856ef911d8c`
- **Card design notes** — `https://claude.ai/code/artifact/9fb45fbb-4681-4de9-9050-da6c9b9564fb`

The artifacts embed their fonts and cannot reach the submission endpoint, so
they are for reading and showing, not for testing the recording. Test that on
the deployed page.
