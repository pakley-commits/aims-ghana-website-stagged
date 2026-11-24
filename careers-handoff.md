# Careers page — handoff

**Branch:** `aims-ghana-web-v3` · **Commits:** `805305f`, `757e125` · **Date:** 24 Nov 2026

Rebuild of the careers listing ("Work at AIMS Ghana") to match the Figma frame
[`2634:8233`](https://www.figma.com/design/uyZgdWL3EAthgy159HxbE4/AIMS-Ghana-Website--Copy-?node-id=2634-8233),
plus an Apply Now button that deactivates once a posting's window closes.

---

## Files

| File | What it does |
|---|---|
| `layouts/partials/career-card.html` | **New.** The card. Owns the open/closed decision. |
| `layouts/careers/list.html` | Calls the partial; intro blocks and pagination unchanged. |
| `assets/js/career-deadlines.js` | **New.** Re-checks deadlines against the browser clock. |
| `layouts/partials/script.html` | Adds the above to the concatenated bundle. |
| `assets/scss/custom.scss` | Careers block rewritten (from ~line 3708). |
| `config/_default/params.toml` | Adds `careers_open_days`. |
| `content/english/careers/_index.md` | Removed a draft card snippet that was rendering as stray markup. |
| 3 × posting `.md` | Title and description rewritten as copy samples. |

## The card

Figma order: date + posting-type chip → hairline rule → title → excerpt → More
info / Apply Now. Both buttons link to the posting's own detail page.

Title clamps to **2 lines**, excerpt to **4**. Each also carries a matching
`min-height`, so the rule and the button row line up across every card in a row
whatever the copy length. Grid is 3-up, 2-up below 1199px, 1-up below 767px.

## How a posting closes

Resolved in `career-card.html`, in this order:

1. **`preview_window`** in front matter — testing only. A duration (`"5m"`)
   that opens the posting at build time and closes it that long after.
2. **`deadline`** in front matter — a date; the posting closes at end of day.
3. **`careers_open_days`** (site param, currently `30`) — publish date plus
   N days. The fallback when a posting says nothing.
4. **`closed: true`** in front matter forces the closed state regardless.

Hugo resolves this at build time. `career-deadlines.js` then re-checks every
card's `data-closes-at` on load and once a minute, so a page built while a
posting was open still closes on time without a rebuild.

When closed, the Apply Now anchor is hidden and a non-clickable grey "Closed"
chip takes its place. Both are in the markup; only the `hidden` attribute moves.

---

## Before this goes live

1. **Remove `preview_window: "5m"`** from
   `content/english/careers/request-for-proposal-catering-services-for-aims-ghana.md`.
   It exists only so the closing behaviour can be watched end to end.

2. **Decide the real closing rule.** This is the open question. With
   `careers_open_days = 30` every one of the 31 postings reads Closed, because
   the newest is dated 6 Jul 2026. The postings carry no real deadlines — only
   publish dates — so deriving from the publish date is a guess for every one
   of them. Either raise `careers_open_days`, or add a real `deadline:` to the
   postings that are genuinely live and let the rest close.

3. **Rewrite the remaining copy.** Three postings were rewritten as samples:

   | Posting | Title | Description |
   |---|---|---|
   | WordPress websites RFP | 125 → 65 chars | 198 chars |
   | Postdoctoral fellowship | 90 → 68 chars | 186 chars |
   | Comms & alumni coordinator | 58 chars, unchanged | 190 chars |

   Target **≤ 75 characters** for a title (two lines at 20px in a ~400px card)
   and **180–200** for a description (four lines at 16px). Descriptions that
   end mid-sentence get an ellipsis from `partials/excerpt.html`; writing to
   length avoids it. 28 postings still carry scraped copy cut mid-word.

4. **Use typographic apostrophes (`’`), not straight (`'`).** A straight
   apostrophe double-escapes through `excerpt.html` and renders as `&#39;`.
   The news descriptions already use `’`; match them.

## Not verified

**Nobody has looked at this rendered.** The sandbox this was built in blocks
local port binding, so `hugo server` could not start, and the preview pane
could not open built files. Everything was checked against compiled CSS, the
bundled JS and the generated HTML. Layout, spacing, the clamps in a real font
and the button alignment all still need a human eye:

```bash
cd "/Users/Prince/Documents/DEV WORSPACE/Projects/aims-rebuild-v2-main" && hugo server --disableFastRender
```

Then http://localhost:1313/careers/. The catering RFP sorts first and is the
only open card; it closes five minutes after the build. Note that `hugo server`
rebuilds on save and restarts that five minutes.

## Elsewhere

- `posting_type` values are `Procurement` (21), `Career` (8) and
  `Call for application` (2). The chip prints them verbatim, so
  "Call for application" reads a little off next to the Figma's
  "Call for Applications". Content-side fix, not touched.
- `location` is in the front matter but no longer shown on the card — the
  Figma card has no room for it. Still available on the detail page.
- Earlier work in progress on `figma-rebuild` is in `stash@{0}`
  (`_tokens.scss`, `custom.scss`, `hugo.toml`, `style.html`). Recover with
  `git checkout figma-rebuild && git stash pop`.
