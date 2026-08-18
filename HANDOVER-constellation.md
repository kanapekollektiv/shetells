# Handover — she tells constellation map

Written 2026-07-29. Everything below was verified against the files on disk at
that moment, not recalled from memory.

**Goal for the next session: finish the constellation page.**

---

## 1. Start here

```bash
cd /Users/helinulas/Documents/GitHub/Shetells-website && python3 -m http.server 8770
```

Then open `http://localhost:8770/constellation.html`.

**No server is currently running.** Three were started during the last session
(ports 8765, 8766, 8770) and all are dead now. Two of them had already gone bad
before dying — alive as processes, correct working directory, but returning 404
for every path including `/index.html`. If that recurs, don't debug it: kill the
process and start a fresh one. Check any leftovers with `lsof -nP -iTCP:8765
-sTCP:LISTEN` (also 8766, 8770).

The port number doesn't matter — nothing in the page hardcodes it.

---

## 2. The file

`constellation.html` — single self-contained file, 1544 lines, at the repo root.
No build step. HTML + CSS + JS inline.

### Git state

Branch is clean apart from **one uncommitted change** in `constellation.html`:

```
-[['hypersea'], 196, 244, 298, 34, ... 'More than Wet Ontologies →' ]
+[['hypersea'], 148, 244, 298, 34, ... 'More than Wet Ontologies →' ]
```

That was the known alignment bug — the second reading pill sat at x=196 while the
rest of the left column is at x=148. Fixed but **not committed, and never
visually verified** (the browser tool in that session was blocked from reaching
localhost, so it was only confirmed in the source). Worth an eyeball on load.

Last commit: `0c2ef83 Add Hypersea cluster: cards, popups, text, images, videos`.

Several new untracked files sit alongside it (`products-drop.html`,
`high-tide.html`, `splash-sprite.html`, `acid-bubble-sprite.html`,
`phone-ring-sprite.html`, `credits-card.html`). Those are **video-production
assets, unrelated to the constellation map** — see §6. Don't let them confuse a
`git status`.

---

## 3. Architecture

| Concept | Where | Notes |
|---|---|---|
| Canvas | `.canvas-inner`, 3400×2300 px | Cards positioned absolutely inside it |
| Pan/zoom | `#viewport` with `translate(tx,ty) scale(s)` | Pointer + wheel events |
| Categories | `CATS` array, line ~620 | 11 clusters, each `{key, label, color}` |
| Cluster centres | `CENTERS`, line ~636 | Used to draw connection lines |
| Connection lines | `CONNECTIONS`, line ~659 | Open beziers; `bend` sets curve direction/amount |
| Cards | `CARDS`, line ~686 | `[cats[], x, y, w, h, title, content]` |
| Side panels | `SECTIONS`, line ~1309 | Long-form cluster content |

### Card content types

The 7th element of a `CARDS` entry decides what renders:

- `{ img, alt }` and optionally `link` — image card
- `{ vid }` — video, lazy-played by `updateVideos()` (line ~1144)
- `{ link, label }` — link pill
- `{ txt, full }` — text card; `txt` shows on the card, `full` in the popup
- `{ credits }` — credits line
- `null` with a `title` string — plain placeholder card
- `null` with no title — coloured band placeholder

A card can belong to **several** categories (`[['hypersea','sargassum'], …]`) —
that's how cross-cluster cards work; they're tinted by both colours.

### Interaction details worth knowing before you touch them

- **Click detection** is a per-card `pointerdown`/`pointerup` pair testing
  distance < 12px **and** time < 600ms. This deliberately bypasses the viewport
  pan handler. If clicks stop working after a refactor, this is why.
- **`flyToCluster(key)`** (line ~1097) compensates for the ~220px left legend
  when centring — don't remove that offset.
- **`YELLOW_CATS`** (line 981) and **`LIGHT_TEXT_CATS`** (line 1307) are two
  separate sets holding the same three keys (`hypersea`, `workshop`, `drawings`).
  They control legend label colour and popup text colour respectively. Changing
  a cluster's colour means updating **both**.
- The **HYPERSEA legend label navigates to `hypersea.html`** (line ~1005),
  it does not open the side panel. Every other cluster opens its panel.
- Popups: modal with `backdrop-filter: blur`, white box, 1.5px black border.
  Images/videos open in a lightbox using `object-fit: contain`.

---

## 4. Hard constraints — do not break these

1. **Never rotate cards.** The float animation drifts x/y only. This is an
   explicit user rule and applies to the constellation map specifically.
   (Unrelated: the video-production files in §6 *do* use rotation, deliberately.)
2. **Never edit the written text.** All copy is verbatim. This includes the
   typo "Here you can fin some related reading" in the Hypersea intro — it is
   in the source as-is and must stay unless the user says otherwise.
3. Lightbox is `object-fit: contain` — fit, never fill/crop.

---

## 5. State of the work

### Hypersea — the only cluster with real content

Fully built. Cards at these canvas coordinates:

| Card | Type | x, y | w × h |
|---|---|---|---|
| Hydrofeminism → | link pill | 148, 196 | 200×34 |
| More than Wet Ontologies → | link pill | 148, 244 | 298×34 |
| Book cover (→ ScienceDirect) | image+link | 148, 292 | 125×168 |
| Link to the Book → | link pill | 148, 470 | 172×34 |
| Intro text | text | 340, 188 | 308×272 |
| Glass sculptures text | text | 148, 520 | 300×248 |
| Credits | credits | 148, 778 | 300×48 |
| dunes.jpg | image | 700, 186 | 112×152 |
| IMG_8729.jpg | image | 832, 184 | 132×106 |
| IMG_8668.jpg | image | 694, 348 | 112×106 |
| IMG_8677.jpg | image | 838, 302 | 132×106 |
| IMG_7465.jpg | image | 700, 466 | 112×106 |
| glass1.mp4 | video | 842, 420 | 132×96 |
| glass2.mp4 | video | 700, 584 | 132×96 |
| Field Notes | plain cross-card | 712, 380 | 88×64 |

Media all present in `la/hypersea/` — verified: `book.jpg`, `dunes.jpg`,
`IMG_7465.jpg`, `IMG_8668.jpg`, `IMG_8677.jpg`, `IMG_8729.jpg`, `glass1.mp4`,
`glass2.mp4`.

### Every other cluster is placeholders

Local Stories, Workshop, Drawings, Speculative Futures, Sargassum, Exhibition,
Toolkit, Data, Future Products, Non Human — all have 3–5 placeholder cards with
colour bands and no real media or copy. `SECTIONS` contains **only** a `hypersea`
entry, so every other cluster's side panel has no content to show.

That is the bulk of the remaining work.

---

## 6. THE OPEN ISSUE — read this before rearranging Hypersea

**The user was unhappy with the Hypersea photo layout.** It does not match a
wireframe they have. An attempt to rework it was rejected and rolled back — the
content was kept and Field Notes was restored to the visible cluster at x=712.

**The agreed plan was: the user screenshots the Hypersea cluster zoomed in,
annotates it with the changes they want (positions, sizes, photo order), and
sends it. Then implement exactly what the annotation shows.**

Do not redesign that photo collage speculatively. Ask for the annotated
screenshot if it hasn't arrived.

---

## 7. Unrelated files in this repo (context, not tasks)

The previous session spent most of its time on **video-production assets for a
film**, not the constellation map. They share the repo and the local server but
are otherwise independent. Listed so you recognise them:

- `products-drop.html` — 5 products falling with a jelly bounce
- `high-tide.html` — rising tide, full-frame + `?compact=1` mark
- `splash-sprite.html` — 5-frame splash, `?white=1`
- `acid-bubble-sprite.html` — 5-frame rising bubble
- `phone-ring-sprite.html` — 5-frame ringing, `?shell=1` swaps receiver
- `credits-card.html` — "our team" credits card

Rendered output lives on the Desktop (`~/Desktop/shetells-*`), not in the repo.

**Rendering technique, if you ever need it here:** Chrome's *old* headless mode
writes a transparent PNG and then refuses to exit, so each frame is launched
detached, polled for, then killed. `--headless=new` hangs and puppeteer crashes
against Chrome 150. A 4K viewport crashes the renderer, so pages author at
1920×1080 and capture at `--force-device-scale-factor=2`. Helper scripts were in
a scratchpad that has since been recycled.

Three loose ends there, if the user raises them:
- Looping ProRes/GIF of the splash sprite — never built.
- Group product film still says "Shell Cream & Honey"; corrected name is
  "Shell Cream". Needs a ~10 min re-render.
- The credits card carries a "Video Editing — Helin Ulas" line that was added
  on the assistant's initiative, not requested. If removed, Célestin Meunier's
  "Additional Editing" should become "Editing Support" so it doesn't imply an
  unnamed lead.

---

## 8. Suggested first moves

1. Start the server, load the page, confirm the x=148 pill fix looks right.
2. Commit that one-line fix if it does.
3. Ask for the annotated Hypersea screenshot — that's the blocking item.
4. While waiting, the non-blocking work is real content for the other ten
   clusters: cards in `CARDS`, plus `SECTIONS` entries for their side panels.
   Each needs media dropped into a folder like `la/hypersea/`.
