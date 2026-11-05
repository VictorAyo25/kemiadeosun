# Kemi Adeosun digital card: state

## Where things stand (2026-11-05)

- Live at https://kemiadeosun.vercel.app: plain-language copy, Newsreader, the redesign built
  around her portrait, and new tab and home-screen icons (commits `8195c5d`, `b54f14c`).
- Deploys work again: Victor made the GitHub repo public, and pushes to main go live in about 30s.
- Save contact was removed at Victor's request; /api/vcard still exists, unlinked.
- Open questions for Victor: are the two venture taglines the brands' real slogans? Is the
  ⚠ location ("Nigeria · United Kingdom", not shown on the page now) right?
- Next: designer friend's feedback on the redesign.

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
- Tab and home-screen icons (`icon.tsx`, `apple-icon.tsx`): "KA" in Newsreader on red; default favicon.ico removed.
- Share image (`opengraph-image.tsx`) redrawn to match, with `src/app/og-fonts/newsreader-500.woff`
  (OFL, from Fontsource) because the image renderer cannot use Google-hosted fonts.

## Round 2: "more life, more micro-interactions" (designer friend, 2026-11-05)

Refero (https://refero.design) is a library of product UI screens (web/iOS apps, flows, patterns);
detail pages need a login, so no specific reference was used. If the friend names screens, use those.

Plan (each one answers a person's action or encodes the content; no decorative scroll fades):
1. Living name: letters of "Kemi Adeosun" gain weight under the pointer (Newsreader's weight axis);
   on phones a single weight wave runs through the name after it rises in, and a tap swells letters.
2. Share this card: native share sheet on phones, copies the link elsewhere with "Link copied".
3. QR in the footer opens full-screen on tap, so she can show it to someone.
4. Career timeline: a red line fills down the list as you scroll it; each stop turns red as you reach it.
5. Links: underline thickens and tightens on hover; buttons press in; venture rule stretches on hover.
6. Photo drifts slightly slower than the page as the hero scrolls away.
7. Section headings stay pinned in the left column on desktop while their section scrolls.
8. "Outside work" sits on a blush band, so the page warms from white to blush to the red footer.
All motion is off with prefers-reduced-motion; scroll effects only where the browser supports them.

Status: built and tested by scripted Chrome (hover, scroll, QR dialog, phone wave); lint and build pass.
QR regenerated in wine-black (was the old forest green). Shipped 2026-11-05.
New files: LivingName.tsx, ShareButton.tsx, QrDialog.tsx. Interaction CSS is in globals.css.

## References (2026-11-05), screenshots in design-refs/ (local only, gitignored)

Browsed without logins: One Page Love's personal-site gallery worked; Godly now opens a general
feed (recent.design); Codrops shows a bot check, so it was skipped.

- **Pete Sena** (petesena.com): photos of him speaking and on podcasts float around one big line.
  Closest match to Kemi (public figure). Borrow: a band of real photos of her at work that drift
  and react to the pointer. Needs 5 to 8 photos she approves; we only have one portrait.
- **Melike Turgut** (meliketurgut.com): "me [glossy objects] like": her likes as playful objects.
  Borrow for "Outside work": a book, a record, a sudoku grid, a bowl of yam porridge, drawn as
  small SVGs in her palette that wobble and pop when hovered or tapped. No assets needed.
- **Christoph Mandl** (mandl.design): one giant wordmark filling the screen. Borrow: her name
  huge across the footer, so the page ends on her name the way it starts.
- **Felix Haas** (felixhaas.io): a quiet "letter from" page. Not borrowing: it needs her own
  words, which we don't have.

Victor passed on these references (2026-11-05). Round 2 interactions shipped as built.
