# Careers page — build log

Session of 24 Nov 2026. Chronological record of what was done, what was
checked and what it returned. Companion to `careers-handoff.md`, which
describes the result rather than the route.

Environment: Hugo `v0.165.0+extended+withdeploy` (Homebrew), macOS arm64.
Branch `aims-ghana-web-v3`, from `f8dd32c`.

---

## 1. Branch switch

Started on `figma-rebuild` with uncommitted edits to `_tokens.scss`,
`custom.scss`, `hugo.toml`, `style.html`.

```
git stash push -m "figma-rebuild WIP: ..."      → stash@{0}
git fetch origin aims-ghana-web-v3              → 50f93b1..f8dd32c
git checkout aims-ghana-web-v3
git merge --ff-only origin/aims-ghana-web-v3    → 46 files changed
```

Two snags, both sandbox-related and both resolved:

- The first fetch was refused (`CONNECT tunnel failed, 403`) and left the
  checkout half-applied — the branch was created and the working tree swapped,
  but `HEAD` stayed on `figma-rebuild`, so the whole tree showed as staged.
  Re-running the checkout after allowing `github.com` settled it.
- `git branch --set-upstream-to` fails (`could not lock config file
  .git/config: Operation not permitted`). The branch has **no upstream set**;
  pushes need `git push origin aims-ghana-web-v3` explicitly.
- `hugo_stats.json` had local modifications blocking the fast-forward. It is a
  generated file, so it was restored with `git checkout --` and regenerated.

## 2. Survey before changing anything

| Check | Result |
|---|---|
| Career layouts | `layouts/careers/{list,single}.html`, theme fallback in `themes/bigspring-hugo/layouts/career/` |
| Postings | 31 in `content/english/careers/` |
| Styles | `assets/scss/custom.scss` from ~3708 |
| Existing clamps | title 4 lines, excerpt 2 |
| Front matter fields | `title`, `date`, `description`, `source`, `build_status`, `posting_type`, `location`, `draft` |
| Deadline field | **none** — only publish dates |
| Apply link field | **none** |
| Publish dates | 2021-10-20 … 2026-07-06 |
| `posting_type` | Procurement 21, Career 8, Call for application 2 |
| Description lengths | min 98, median 255, max 259 chars, many cut mid-word |
| Timezone | `timeZone = "Africa/Accra"` already set in `hugo.toml` |
| Reusable helper found | `layouts/partials/excerpt.html` — trims at a word boundary |

Also found: a draft card snippet pasted into the body of
`content/english/careers/_index.md`, below the front matter, rendering as
stray markup on the live page. Removed.

## 3. Implementation

1. `layouts/partials/career-card.html` — new, Figma card order, owns the
   open/closed logic, reuses `excerpt.html` at length 200.
2. `layouts/careers/list.html` — inline `<article>` replaced by the partial.
3. `assets/scss/custom.scss` — careers block replaced: 3-up grid, bordered
   14px card, gold-tint chip, maroon button pair, title clamp 2 / excerpt
   clamp 4 with matching `min-height`.
4. `assets/js/career-deadlines.js` — new; registered in `script.html` in the
   concatenated bundle after `core-values-reveal.js`.
5. `config/_default/params.toml` — `careers_open_days = 30`.
6. Three postings rewritten for the clamps.

## 4. Verification

No visual check was possible. `hugo server` cannot bind a port in this
sandbox (`listen tcp 127.0.0.1:1313: bind: operation not permitted`), the
preview pane refused `file://` paths, and a `--destination` build outside the
project could not be opened either. Everything below is compiled-output
inspection.

**Build** — clean every time:

```
Pages 168 · Paginator pages 10 · Processed images 474 · Aliases 40
Total in 603–862 ms
```

**Compiled CSS** (`public/css/style.*.css`):

```
.career-card__title   { -webkit-line-clamp: 2; min-height: calc(20px * 1.3 * 2); }
.career-card__excerpt { -webkit-line-clamp: 4; min-height: calc(16px * 1.6 * 4); }
.career-card__btn--primary { background: #800000; color: #f1d7d7; }
.career-card__btn--closed  { cursor: not-allowed; }
```

**Bundled JS** — `career-card[data-closes-at]` present in
`public/js/scripts.js` and the fingerprinted production bundle.

**Rendered HTML** — stray template markup on the careers page: 0 occurrences.

**Sample copy after rewriting:**

| Card | Title | Excerpt |
|---|---|---|
| Postdoctoral Fellowships… | 68 chars | 186 chars |
| Design and Development of WordPress Websites… | 65 chars | 198 chars |
| Scientific Communications and Alumni Relations Coordinator | 58 chars | 190 chars |

**Bug found and fixed:** `Network's` rendered as `&amp;#39;`. A straight
apostrophe is escaped by `truncate` inside `excerpt.html` and escaped again on
output. The site's news copy uses `’`; the sample was changed to match rather
than altering the shared partial, which `news/`, `events/` and the career
single template also use.

**Closed-state counts**, by rule in force:

| Rule | Open | Closed |
|---|---|---|
| `careers_open_days = 30` only | 0 | 31 |
| Site-wide `careers_preview_window = "5m"` | 31 | 0 |
| Per-posting `preview_window` on the 2026 RFP | 1 | 30 |

## 5. Commits

**`805305f` — Careers cards rebuilt to the Figma design, with a timed Apply Now**
11 files, +245 −98. Included `careers_preview_window = "5m"` as a site-wide
switch.

**`757e125` — Scope the Apply Now preview window to one posting**
4 files, +8 −9. The site-wide switch would have opened every posting for five
minutes after each production deploy, so it was replaced with a
`preview_window` key in a single posting's front matter, set on the July 2026
catering RFP. Verified at 1 open / 30 closed, `data-closes-at` five minutes
ahead of build time.

Both pushed; `origin/aims-ghana-web-v3` is at `757e125`.

## 6. Deliberately left in the working tree

- `assets/jsconfig.json` — Hugo rewrites it per machine; local noise.
- `.claude/` — session-local settings.
- `.cloudflare/`, `content/english/mock/` — untracked, pre-existing.
- `stash@{0}` — the `figma-rebuild` work in progress, untouched.
