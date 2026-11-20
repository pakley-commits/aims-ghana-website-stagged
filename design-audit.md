# AIMS Ghana website v3 - design audit (phase 1)

Audit date: 19 Nov 2026. Checked in a browser at desktop width (about 2150px) and phone width (390px), on the local preview of this branch. The maroon utility bar (#800000) is in place and is treated here as part of the palette.

Pages looked at: home, About > Governance, People, News list, a news article, Events, Research, Careers, Outreach, Contact, Donate, Search, 404.

## Summary

The bones are good. The maroon + gold palette, the Space Grotesk headings with Inter body text, the photography of real students, and the newer hub pages (People, Research, Outreach) already feel like one family. The site falls down in four places:

1. **Unfinished pages are public.** Contact, Donate and 9 other pages show a developer note ("No design yet - this page has no Figma frame") instead of content. Donate and Contact are two of the most important pages on the site.
2. **Two or three different "page widths".** The menu and most pages line their content up about 130px from the screen edge, but the footer, the Governance header and some sections sit about 45px from the edge. On a wide screen this reads as sloppy.
3. **Too many reds and too many page-header styles.** Besides the brand maroon there is a brighter red gradient on Governance, and pages open in at least three different ways (big maroon band, plain white title, grey band for articles).
4. **Type sizes are not under control.** Article titles run to four lines at about 96px, Careers summaries are bigger than their own titles on a phone, and long lines of article text are too wide to read comfortably.

There are also accessibility gaps (trustee names only appear on mouse hover, grey text slightly too light, keyboard focus rings removed on buttons and form fields, scrollbar hidden), plus three side-stripe / edge-bar accents the owner does not want.

## High severity

**H1. Placeholder text on 11 live pages**
- Pages: Contact, Donate, FAQs, Accessibility, Partnerships, Impact & Reports, Policies, Research Areas, Publications, Mastercard Foundation, Public Engagement.
- What is wrong: these pages show "Status: No design yet - this page has no Figma frame. URL: /contact/". A visitor sees internal build notes. The Donate button in the footer and the utility bar both lead to this.
- Fix: replace the stub layout with a simple, finished "basic content page" template (title, intro, body, optional call-to-action). For Contact add address, email, phone, map link and a contact form or mailto; for Donate add a short case for giving and a clear way to give. Until real copy exists, show a friendly "coming soon - email info@aims.edu.gh" message, never build notes.

**H2. Trustee names hidden until you hover**
- Page: About > Governance (and the Academic Council if it uses the same card).
- What is wrong: on a computer the Board of Trustees grid shows 7 large photos with no names or roles. The names only appear when you move the mouse over each photo. People skimming, people using a keyboard, and anyone printing the page cannot tell who anyone is. (On phones the names do show.)
- Fix: always show name and role under or over each photo, as phones already do. Keep the hover effect as a light extra, not the only way to see the text. Also make the photos smaller (four per row on wide screens) so the board fits on one or two screens.

**H3. Content does not line up with the menu**
- Pages: every page footer; Governance header; homepage "Our Purpose" area is fine but the footer under it is not.
- What is wrong: the logo and menu start about 130px from the left edge. The footer ("Africa's Youth / The Future of Science", the link columns, the Donate button) starts about 45px from the edge, and the Governance header text does the same. The footer Donate button is pushed out past the Apply button above it. The stylesheet has at least four different container widths (`.container`, `.governance-container`, `.admin-staff-container`, the footer's own width).
- Fix: pick one page width (the one the menu uses) and use it for every section, including the footer. Remove the per-page container classes.

**H4. Homepage "Global Visiting Faculty" map is a blurry screenshot**
- Page: home.
- What is wrong: the world map is a low-resolution screenshot of an interactive map. It still shows a hover tooltip ("Prof. Casim Abbas") and a mouse-pointer hand baked into the picture. It is also a white picture sitting on a black band, so a white strip is visible at both edges, and the "View all Lecturers" button floats in a large black area below it.
- Fix: replace with a clean, sharp image (or simple SVG) of the map with maroon dots and no tooltip or cursor; put it on a plain background that matches the image; keep the button directly under the map on the same background.

**H5. Keyboard users cannot see where they are**
- Pages: sitewide.
- What is wrong: the original theme removes the focus outline on buttons and form fields (`outline: 0`), and the custom stylesheet only adds visible focus rings in three places. Someone using Tab to move around cannot see which button or field is selected. The site also hides the page scrollbar everywhere, which removes a useful "how long is this page" cue and confuses some users.
- Fix: one sitewide focus style (for example a 3px gold ring with a small gap) on every link, button, field and card link; stop hiding the scrollbar. The Governance cards also take keyboard focus without doing anything (`tabindex="0"` on a non-link) - remove that once names are always visible.

## Medium severity

**M1. Several reds instead of one maroon**
- Pages: Governance header (gradient from #6F1010 to #922626), Apply/Donate buttons, homepage bands, news "Read More" links.
- What is wrong: the brand maroon is #800000, but the Governance header uses a brighter brick-red gradient, so it looks like a different organisation. The theme's leftover secondary colour, a steel blue (#376F92), still shows up, for example as the pale blue quote mark in the homepage testimonial.
- Fix: palette of maroon #800000, a deeper maroon #5C0000 for hover and dark bands, gold #F2960C, ink #18181B, muted grey, light surface. Make the Governance header flat maroon; replace the theme blue with maroon or gold.

**M2. Page headers look different on every section**
- Pages: Governance (full maroon band, title left, paragraph right), People/News/Events/Research/Careers/Outreach (big white title with about 200px of empty space above it), news article (grey band), Contact/Donate (title jammed under the menu with no space).
- What is wrong: a visitor moving between sections gets three or four different "first impressions", and the white-title version wastes most of the first screen on blank space.
- Fix: one page-header component with two versions - a plain one (title + short intro, consistent smaller top spacing) for hubs and lists, and a maroon one (optionally with a photo) for flagship pages like About and Governance. Use it everywhere.

**M3. Heading sizes run away on long titles**
- Pages: news articles, Events, Careers.
- What is wrong: a news article title is about 96px and wraps to four lines, pushing the photo and story below the first screen. Careers headings use tight letter spacing that looks squashed, and some titles are in ALL CAPS from the source content ("CATERING SERVICES FOR AIMS GHANA").
- Fix: cap article titles at about 48-56px on desktop with a fluid size, normal letter spacing, and a maximum width so they wrap at sensible points. Convert ALL CAPS titles to normal capitalisation in the content.

**M4. Careers summaries are bigger than their titles on phones**
- Page: Careers (phone width, also large on desktop).
- What is wrong: the grey summary text under each job is larger (about 20px on a phone, 28px on desktop) than the job title. The eye goes to the wrong thing.
- Fix: summaries at body size (16px), titles one clear step larger and bold. Also: the "Request for Proposal" posting is tagged "Call for application" - tags should match the posting type (Job, Call for applications, Procurement). Use the same date style as News ("24 August 2026", not "6 Jul. 2026").

**M5. Text lines are too long or too light to read comfortably**
- Pages: news articles, homepage intro and stats, footer.
- What is wrong: news article paragraphs run about 95-100 characters per line on a wide screen (comfortable is 60-75). The theme's body grey (#777) is just below the accessibility contrast minimum on white (about 4.5:1 needed) and fails on the light grey bands. Homepage intro and stats text use this grey.
- Fix: limit article text to about 70 characters wide; darken body grey to the existing muted token (#52525B), which passes comfortably.

**M6. News cards and excerpts cut off mid-word**
- Pages: home ("Latest news"), news article intro.
- What is wrong: excerpts end abruptly ("...Strengthening Afric", "During the welcome session,"), cards have different heights, and the "Read More" links do not line up across the row.
- Fix: cut summaries at a word boundary and add an ellipsis (or use the article's own summary field); clamp to 3 lines; pin "Read More" to the bottom of each card so they line up.

**M7. Side-stripe and edge-bar accents (owner does not want these)**
- `.aims-model__card` (About page model cards): `border-left: 3px solid gold` on a rounded card. Replace with a full 1px border plus a light gold tint background, or a small gold icon.
- `.mission-model__card` (About page mission/vision cards): a 4px coloured bar along the top edge of a rounded card that grows across on hover. Replace with a full border or tinted background; drop the growing bar.
- `.about-intro-banner h1`: 2px gold bar down the left of the title. Thin, but it is a side-stripe; replace with the short gold underline used elsewhere, or remove.
- Theme default blockquote (`themes/bigspring-hugo/.../_common.scss`): `border-left: 2px solid maroon`, will appear in any article that uses a quotation. Override with a tinted background and a larger opening quote mark.
- Fine to keep: the short gold underline under section titles (it is a heading mark, not an edge bar on a card).

**M8. Buttons do not agree with each other**
- Pages: header Apply (maroon pill, gold dot on the right), footer Donate (maroon pill, gold dot on the left), lecturers button (white pill with arrow), newsletter Subscribe (square gold button with black border), Search page button (square white button with black border), 404 button (plain maroon pill).
- Fix: three button types only - primary (maroon pill), secondary (outlined maroon pill), and on-dark (white pill). Same height, corner radius and padding everywhere. Decide once whether the gold dot is the brand's button signature; if yes, always on the same side.

**M9. Section hub pages are text-only card grids**
- Pages: Research, Outreach, People.
- What is wrong: nine identical grey boxes with a title and one line each. It is tidy but flat, and nothing draws the eye to the most important item.
- Fix: give each hub a lead item (one large card with a photo) and smaller cards below, or add a small photo/illustration to each card. Lower priority than fixing the stub pages.

**M10. Partner logos are uneven**
- Page: home ("Partners & Network").
- What is wrong: logos are different sizes and sharpness, one (KNUST) has its own box border, Facebook is much heavier than the rest.
- Fix: same visual height for every logo, sharper files, optionally all in one tone (greyscale turning to colour on hover).

## Low severity

**L1. Homepage intro block is out of balance.** The large heading takes six lines in the left column while the paragraph floats low in the right column with a big gap below. Align the paragraph to the top of the heading, or set the heading wider and the paragraph under it.

**L2. Homepage stats spacing.** Big gaps between each number and its caption, and stray spaces before commas ("annually ,", "network ,") in the content. Tighten the gap; fix the copy.

**L3. Governance intro is printed twice.** The same paragraph appears in the maroon header and again (cut short, starting mid-sentence) under "Board of Trustees". Keep one.

**L4. Portrait crops are inconsistent.** Trustee photos have very different backgrounds and head sizes; one is a cropped event photo with a logo wall behind. Re-crop to the same head position; longer term, ask for consistent headshots.

**L5. Events do not say when or where.** The Events list shows the date the post was published, not the event date and venue, and does not separate upcoming from past events, although the intro promises that.

**L6. 404 page is a theme default.** "404 Page Not Found!" in title case with an exclamation mark and one button. Add a plain-English line, a search box and links to News, Programmes and Contact.

**L7. Newsletter form uses placeholder text as labels.** "Your Name" and "Email Address" vanish when you type, and screen readers may not announce them. Add visible (or properly hidden) labels.

**L8. Cookie notice covers content on phones.** It sits over the page until dismissed. Make it a slim bar at the very bottom.

**L9. Footer details.** Old Twitter bird icon (now X); "Location" text is larger than the paragraph above it; very large gaps between footer links. Update the icon, match text sizes, tighten link spacing (keep each link at least 44px tall to tap).

**L10. Mobile hero.** On phones the homepage hero crops tightly to half a face and the headline drops to a small size. Choose a phone-specific crop point and keep the headline larger.

**L11. Stylesheet clean-up (invisible to visitors, but causes the drift above).** `custom.scss` defines `.programs-page`, `.programs-hero`, `.program-card`, `.programs-list`, `.programs-learning`, `.navbar-toggler` and `.navigation-transparent` twice each, and has many hard-coded sizes and colours next to the token file. Merge duplicates and use the tokens so future fixes only need one edit.

## Implementation plan

Ordered by impact. Each step is one reviewable change.

1. **Finish or hide the stub pages** (H1). New basic content-page template; real Contact and Donate pages; friendly holding text for the other nine. Size: medium (layout is small; the content for Contact and Donate needs owner input).
   - DONE (19 Nov 2026): `layouts/_default/stub.html` is now a finished basic page (section link, title, intro, body or "on its way" note, and a "Get in touch" panel fed by the footer's contact settings). Contact shows the contact details as the main content; Donate has short interim copy. Still open: a working contact form (the form address in `config/_default/params.toml` is blank), online giving, a phone number, and real text for the other nine pages.
2. **One page width, sitewide** (H3, part of L9). Single container used by header, all sections and footer; remove per-page containers; fix footer Donate alignment and footer spacing. Size: medium.
   - DONE (19 Nov 2026): new `page-width` mixin in `custom.scss` reproduces Bootstrap's `.container` (the header's width). The nine custom wrappers (footer, governance hero and board, administrative staff, centre president, homepage lecturers, programmes x4) now use it, and their own phone/tablet width overrides were removed. Footer contact lines now match the paragraph size. Checked at 1076, 1440 and 390px wide. Correction to L9: footer link spacing is about 34px per link, which is fine; the earlier note misread a double-resolution screenshot.
3. **Accessibility foundation** (H5, M5 contrast, L7). Sitewide focus ring, stop hiding the scrollbar, darken body grey, label the newsletter fields. Size: small.
   - DONE (19 Nov 2026): sitewide `:focus-visible` ring (3px maroon, 2px gap; white inside dark/white-text sections) at the top of `custom.scss`; the rule hiding the page scrollbar removed; theme `text_color` #777 -> #52525B and `text_light` #959595 -> #71717A in `hugo.toml`. Correction to L7: the newsletter fields already have visually hidden labels, so screen readers announce them; no change made.
4. **Governance and people cards** (H2, L3, L4). Names and roles always visible, smaller photos in a four-column grid, remove the duplicate intro, re-crop portraits. Size: small to medium.
   - DONE (19 Nov 2026): names and roles always shown on a slightly stronger scrim (hover-only rules removed); `tabindex="0"` removed from the card; duplicate "Board of Trustees" paragraph emptied in `governance.md` and the template skips an empty one; grid now spans the page width. Correction to H2: cards are about 300px wide at real size (4 per row from 1200px, 3 below), so no resize was needed. Still open: consistent portrait photos (needs new or re-cropped image files).
5. **Palette lock-down** (M1, M7). Flat maroon for every maroon surface, remove the brick-red gradient and the leftover theme blue, replace the four side-stripe/edge-bar accents with tints or full borders. Size: small.
   - DONE (20 Nov 2026): Governance header is flat maroon; theme `color_secondary` blue -> #5C0000 in `hugo.toml`; blue tick icon (`assets/images/checkmark.svg`) now maroon and used on the About page too (replacing the blue `check-circle.png`); homepage quote picture replaced by a maroon quote mark. Side-stripes replaced: About banner title (now a short gold underline), About model cards (full border + light gold tint), mission/vision cards (accent moved to the heading colour; vision uses a darkened gold for contrast), theme blockquote (tinted box + quote mark).
6. **One page-header component** (M2). Plain and maroon versions, consistent spacing, applied to every section. Size: medium.
   - DONE (20 Nov 2026): one shared rule for every plain white page header (hubs, People, basic pages, News/Events/Careers lists, Search) - same width, spacing and intro size. Maroon flagship headers (Governance, Administrative Staff, About, Centre President) are now all the same flat maroon. Correction to M2: the "200px of blank space" was a double-resolution reading; real top spacing is 96px, kept.
7. **Type scale clean-up** (M3, M4, M5 line length). Cap article and list title sizes, fix Careers hierarchy and tags, limit article text width, normalise ALL CAPS titles and date formats. Size: medium.
   - DONE (20 Nov 2026): article titles 56px -> max 48px (fluid); story text 16px/760px -> 18px in a 64ch column, darker ink; Careers summaries 20px -> 16px, title letter-spacing normalised, date/tag no longer break mid-word; six ALL CAPS procurement titles converted; 21 proposal/quotation notices retagged "Procurement" (2 genuine calls stay "Call for application"); Careers and homepage dates now "24 August 2026" like News.
8. **Button system** (M8). Three button types with shared sizing; update Apply, Donate, Subscribe, Search, lecturers and 404 buttons. Size: small to medium.
   - DONE (20 Nov 2026): primary = maroon pill (Apply, Search, 404, lecturers); gold dot always after the label (footer Donate now matches Apply; dot moved from inline style to `.btn-dot`); newsletter = gold pill; white "Read more" buttons 44px tall and no longer turn maroon-on-maroon on hover (theme bug). Removed a stray extra `</a>` after the Apply button in `header.html`.
9. **Homepage polish** (H4, M6, M10, L1, L2, L10). New lecturers map image and band, clean news excerpts and aligned cards, even partner logos, intro and stats spacing, phone hero crop. Size: medium (the map image needs a new asset).
   - DONE (20 Nov 2026): lecturers band all white (no more black strip / white image edges); news cards trim summaries at a word boundary with "…" (new `layouts/partials/excerpt.html`, also used on News/Events lists and article intros), "Read More" aligned at the card foot and named for screen readers; partner logos in equal 48px boxes; intro statement and paragraph share a top line; stats gap tightened and copy fixed (stray spaces before commas, two grammar slips); phone hero headline 24px -> 30px. Still open: the map image itself still shows a baked-in tooltip and mouse pointer - needs a new image file.
10. **Hub pages and smaller pages** (M9, L5, L6, L8). Lead card with photo on Research/Outreach/People, event date and venue on Events, a useful 404, slimmer cookie notice. Size: medium.
   - DONE (20 Nov 2026): new 404 (plain-English message, search box, four quick links); cookie notice is a slim bottom bar on phones and tablets (and still hides after "I Accept"); Events support optional `event_date` and `venue` front matter, shown on cards and the event page, falling back to "Posted <date>". Fixed a bug where card images on News and Events linked to the list page instead of the story. Still open: hub lead cards with photos (needs chosen images), and the event posts need their real dates/venues filled in.
11. **Stylesheet tidy-up** (L11). Merge duplicate rules and swap literals for tokens; no visual change intended. Size: medium. Best done alongside steps 2-8 rather than at the end.
   - PARTLY DONE (20 Nov 2026): duplicate width rules removed in step 2 and the four page-header copies merged in step 6. The `.navbar-toggler` and `.navigation-transparent` "duplicates" turned out to be complementary rules with different jobs, so they stay. Removing the older Programmes block (`// Programs page`, superseded by `// Programs page Figma update`) changed the rendered page at all three test widths, so it was restored; merging it needs a property-by-property pass. Still open: that merge, and swapping remaining hard-coded colours/sizes for tokens.
