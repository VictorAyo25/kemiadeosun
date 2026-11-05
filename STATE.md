# Kemi Adeosun digital card: state

## Where things stand (2026-11-05)

- Copy rewritten in plain language, sourced only from her biography PDF (untracked, kept local).
- Serif switched to Newsreader (Victor picked it from a side-by-side).
- Hero line changed from "Economist · Advocate · Founder"; "advocate" is not in her biography.
- Commit `eff49b9` pushed to main, but Vercel blocked the deploy (see memory: account linkage).
  Victor is making the GitHub repo public to unblock it. After that: push an empty commit and
  check https://kemiadeosun.vercel.app shows the new copy.
- Redesign built (2026-11-05) after a designer friend said the site "looks very Claude coded".
  Lint and production build pass; checked by screenshot at 390px, 820px and 1440px, plus the share image.
  Not committed yet: waiting for Victor to review at http://localhost:3000.
- Next: Victor reviews; then commit, and once the repo is public, push and confirm the live site updates.
- Open questions for Victor: are the two venture taglines the brands' real slogans? Is the ⚠ location right?

## Redesign plan

**Why the old one read as generated:** cream background + serif + gold accent, an all-caps tracked
label above every heading, middle-dot meta strings, identical rounded cards with soft shadows,
fade-and-slide on every section, arrow icons on links, a sticky nav on a one-page card.

**Subject and job:** a card people open by scanning a QR code at an event, mostly on a phone.
In ten seconds they should know who she is, save her contact, and find her ventures.

**Idea:** the portrait is the card. Her photo is a flat crimson field, coral blazer, gold
earrings. The page takes its colour from the photo, so the photo bleeds into the hero instead
of sitting in a frame. The red is spent in two places only: the hero and the closing contact
band. Everything in between is quiet white paper with wine-black text.

**Colour (sampled from the photo)**
- red `#ca3048`: the photo's background, hero and contact band
- red-deep `#a81f39`: red text on white (6.9:1)
- wine `#2b0b13`: body text
- wine-soft `#6e4b52`: secondary text
- rule `#efdcdd`: list separators
- paper `#ffffff`

**Type:** one family, Newsreader (variable, optical size axis). The name is the type moment:
set huge and stacked ("Kemi / Adeosun"), white on red. Sentence-case headings, no all-caps
labels, no eyebrows. Body 17 to 18px, line height 1.6, lines under 70 characters.

**Layout**
```
mobile                         desktop
+---------------------+        +-----------------------------------+
| Kemi                |  red   | Kemi              |  [photo,      |
| Adeosun             |        | Adeosun           |   bottom-     |
| [photo, top fades]  |        | bio               |   aligned,    |
+---------------------+        | [Save contact]    |   edges fade] |
| bio                 | white  +-----------------------------------+
| [Save contact]      |        | About    | lede + 2 paragraphs    |
| Instagram LinkedIn  |        | Career   | timeline, minister big |
| About...            |        | Education| list                   |
| Career...           |        | Ventures | two, side by side      |
+---------------------+        +-----------------------------------+
| Keep in touch + QR  |  red   | Keep in touch | QR                |
+---------------------+        +-----------------------------------+
```
Left aligned throughout. Section heading in a left column on desktop, above on mobile.

**Principles**
- Save contact was added, then removed at Victor's request (2026-11-05): with no phone, email or photo
  the saved contact held little. /api/vcard still exists, unlinked.
- Career is a real sequence, so it stays a timeline; public office is set larger, not decorated.
- One motion moment: on load the name rises out of a mask and the photo fades in. Nothing on scroll.
- No cards, no shadows, no gradients as decoration, no arrows on links, no sticky nav.
- Dropped the three focus cards (children, youth, women): they repeated the About and DashMe text.

## What was built

- `Hero.tsx`: red field, stacked name, photo with masked edges; bio and actions on white on phones.
- `ContactActions.tsx`: Instagram and LinkedIn links, used in hero and footer.
- `Section.tsx`: shared section layout (heading left on desktop).
- About, Ventures, Career, Education, Outside work, then the red "Keep in touch" footer with QR.
- Deleted: SiteHeader, SiteFooter, Reveal, focus cards, arrow and chevron icons, Inter.
- Share image (`opengraph-image.tsx`) redrawn to match, with `src/app/og-fonts/newsreader-500.woff`
  (OFL, from Fontsource) because the image renderer cannot use Google-hosted fonts.
