# Handover — funder logo end card

Written 2026-08-28. Everything below was verified against the files on disk
and against git at that moment, not recalled from memory.

**The card is finished and exported.** What is left is a merge and a sign-off
on two open questions at the bottom.

---

## 1. Read this first — the merge situation

The work is on branch `claude/venice-video-sprites-logo-bcc441`, in the
worktree at `.claude/worktrees/venice-video-sprites-logo-bcc441`.

It branched from `kanape-pr` at `6d5e05f`. **`kanape-pr` has moved on since**
— it is now at `a81c731`, four commits ahead. The two lines have diverged:

```
6d5e05f  (merge base)
├── a212f1d …→ 0bad3da   this branch, 5 commits, the logo card
└── 47706cb …→ a81c731   kanape-pr, 4 commits, living archive work
```

**They do not touch a single file in common.** Verified with:

```bash
comm -12 <(git diff --name-only 6d5e05f..claude/venice-video-sprites-logo-bcc441 | sort) <(git diff --name-only 6d5e05f..kanape-pr | sort)
```

which returns nothing. A dry-run merge is clean (`git merge-tree --write-tree`
produced tree `217f59e` with all 17 new logo-card files *and* all 166
`living-archive-images/` files present).

So: **merge, never reset or force.** A `git reset --hard` or a force-push in
either direction throws away the other side's four or five commits.

```bash
git checkout kanape-pr && git merge claude/venice-video-sprites-logo-bcc441
```

Nothing in this branch touches `content.js`, `lang.js`, `living-archive.html`,
or the `la/` → `living-archive-images/` rename that `kanape-pr` did.

---

## 2. What was built

`sprites/logo-card.html` — the end card that follows the credits card. White
marks on transparent, so it keys straight over the final shot. Same 1920×1080
authoring stage and the same `?render=1` convention as
`sprites/credits-card.html`, so the two cut together.

Two variants from the one file:

| URL | What it is |
|---|---|
| `logo-card.html?render=1` | all twelve consortium partners |
| `logo-card.html?render=1&host=1` | Rio Neiva lifted out as residency host, eleven in the grid |

Exported 4K stills live beside the credits render, **outside the repo**:

```
~/Desktop/shetells/videos/shetells-credits/
  credits_our_team_4k.png     (from July, unchanged)
  logo_card_4k.png            3840×2160, alpha
  logo_card_host_4k.png       3840×2160, alpha
```

They look blank previewed on white — the artwork is white on transparent.
Check them over a dark ground or in Premiere.

---

## 3. Re-rendering

No dev server. Headless Chrome straight off `file://`:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --hide-scrollbars --no-sandbox --default-background-color=00000000 --force-device-scale-factor=2 --window-size=1920,1080 --virtual-time-budget=8000 --screenshot="$HOME/Desktop/shetells/videos/shetells-credits/logo_card_4k.png" "file://$PWD/sprites/logo-card.html?render=1"
```

Add `&host=1` to the URL and change the output name for the host variant.

The three flags that matter: `--default-background-color=00000000` is what
keeps the alpha channel, `--force-device-scale-factor=2` is what makes 1920
into 3840, and `--virtual-time-budget=8000` gives the fonts and the twelve
PNGs time to decode. The page sets `data-frameReady` once
`document.fonts.ready` and every `img.decode()` have settled; the budget is a
blunt substitute for waiting on it, but it is reliable here.

---

## 4. Where the logo artwork came from

Source is the consortium press kit at
`~/Desktop/shetells/videos/Logos/`, which is **not in the repo**. Everything
the card needs has been keyed and committed under `sprites/logos/`, so the
card renders without it.

**The press kit's file naming is inverted from what you would guess.** "White
Background" means the file is *for* a white background, so it holds the
reversed white artwork on black. That is the one we want. Getting this
backwards gives you black logos on a black card.

| Card asset | Cut from |
|---|---|
| `eu-cofunded-white.png` | `co-funded_EN/horizontal/RGB/PNG/EN_Co-fundedbytheEU_RGB_WHITE Outline.png` |
| `starts-aquamotion-white.png` | `STARTSAquaMotion_Black Background.png`, black keyed out |
| `partners/*.png` (12) | `Partners' Logos Banner - White Background.png`, split |
| `rio-neiva-white.png` | `LOGOTIPO LOGO RIO NEIVA IMAGEM.jpg`, keyed |

Three things worth not rediscovering:

**The EU emblem needs the `WHITE Outline` variant, not `WHITE`.** Plain
`WHITE` is a solid white flag rectangle with the stars punched through — over
footage it reads as a white block. `WHITE Outline` is the properly reversed
emblem: outlined flag, white stars, white type.

**The partner banner had to be cut up.** It ships as one flat 3840×200 image
with the logos baked onto an opaque box — it keys as a solid rectangle, and at
card width the marks are unreadably small. `tools/split_logo_banner.py` finds
the gutters and writes twelve transparent PNGs. Re-run it if the consortium
sends an updated banner:

```bash
python3 tools/split_logo_banner.py
```

It warns on stderr if it does not find exactly twelve marks, which is the
signal that `INK`/`MERGE` need retuning against the new artwork.

**Rio Neiva only exists as colour-on-white JPEG** — there is no reversed
version in the kit. It is keyed on per-channel distance from white rather than
on luminance, because a luminance key leaves the mid-blue monogram visibly
fainter than the dark purple type. The 824×844 JPEG is also much sharper than
the 132px version cut from the partner banner, which goes mushy when scaled
up; the host line uses the JPEG-derived one, the partner grid uses the
banner-derived one.

---

## 5. How the layout is put together

All vertical rhythm is CSS custom properties on `:root` defaults, overridden
in one block under `body.with-host` (line 110-ish). Nudging spacing means
touching those numbers, not the rules.

The partner rows are flex, not grid, specifically so the host variant's short
second row of five centres itself instead of hanging off column six.

Both section tags — `residency host` and `consortium partners` — are NaN
Tresor at 25px, set on the card's left margin (130px) so they read as one
column of markers. This went through three passes: centred Celescript, then
pinned to the Rio Neiva mark's own left edge, then finally both on the page
margin. Rio Neiva stays centred beneath its tag.

---

## 6. Open, needs a decision

**Rio Neiva is dropped from the partner grid in the host variant.** They are a
consortium partner *and* the residency host; showing the same mark twice on
one frame at nearly the same size read as a mistake, so the host line takes it
over and the grid shows eleven. If the consortium requires the full twelve-mark
strip verbatim, put it back — delete the `Q.has('host')` filter on `shown` in
`logo-card.html`, then retune `--part-*` for a full second row.

**The tag says "consortium partners".** Correct EU term, but Rio Neiva is one
too, so labelling the other eleven that way faintly implies they are not.
Nobody will read it that way. "consortium" alone on the tag sidesteps it if
you want it airtight.

---

## 7. Related, for context

The sprites this card sits alongside — `acid-bubble`, `splash`, `phone-ring`,
`high-tide`, `products-drop`, `credits-card` — were built 2026-07-28/29 in a
session that ran out of the **Form-She-tells** worktree, not this repo. Their
`.mov` and spritesheet renders are in `~/Desktop/shetells/videos/shetells-*`.
The Venice cut itself is `videos/Venice-videos/SheTells-Video-Challenge-09.mp4`.
