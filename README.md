# Kemi Adeosun · Digital Card

A world-class, fully-responsive landing page that doubles as a digital business
card. Share the QR code and visitors arrive at a premium, multi-section site
with her portrait, a one-tap **Save to Contacts** button, social links, and
profiles of her two ventures: **DashMe Foundation** and **Nidacity**.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.
Designed to deploy on **Vercel**.

**Page structure:** sticky header, immersive hero, an About section with three
focus areas (children, youth, women), a Journey section with her career,
public-service timeline and qualifications, alternating venture features, and a
Connect section with an on-screen QR to share the card in person.

---

## Edit the content (one file)

Everything visible on the card lives in **[`src/data/profile.ts`](src/data/profile.ts)**:
name, role, bio, social handles, and the two venture blurbs and links. Change
text there; you never need to touch the components.

## Add her real photo

The card ships with an on-brand monogram placeholder so it looks finished
immediately. To use her real portrait:

1. Save a high-resolution square portrait as **`public/profile.jpg`**
   (a square crop around 800x800px or larger looks best in the circular frame).
2. In `src/data/profile.ts`, change:
   ```ts
   photo: "/profile-placeholder.svg",   // to:  photo: "/profile.jpg",
   ```

> Also confirm the two items flagged in `profile.ts` (location, and any contact
> details) before going live.

## "Save to Contacts"

The **Save to Contacts** button downloads a real `.vcf` contact card that iOS
and Android recognise natively. To include her email or phone, add them to the
`vcard` block in `profile.ts` (only if she is happy to publish them):
```ts
vcard: { ..., email: "hello@example.com", phone: "+234..." }
```

---

## Generate the QR code

The QR code should point at the **final deployed URL**. Once you know it:

```bash
npm run qr -- https://your-real-domain.com
```

This writes a crisp, print-ready QR to:
- `public/qr/kemi-adeosun-qr.png` (2000px, transparent background)
- `public/qr/kemi-adeosun-qr.svg` (vector, scales to any size)

Run it with no argument to use `NEXT_PUBLIC_SITE_URL` (or the default).

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve build),
`npm run lint`.

---

## Deploy to Vercel (via Git)

### 1. Push to GitHub
```bash
git init
git add -A
git commit -m "Kemi Adeosun digital card"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

### 2. Import on Vercel
1. Go to **vercel.com > Add New > Project** and import the repo.
2. The framework preset auto-detects **Next.js**, so no config is needed. Click
   **Deploy**.

### 3. Set the site URL
In **Project > Settings > Environment Variables**, add:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | your production URL, e.g. `https://kemiadeosun.com` |

Redeploy so the share links, canonical URL, and social preview use the real
domain. Then regenerate the QR (`npm run qr -- <that URL>`), commit, and push.

### 4. (Optional) Custom domain
**Project > Settings > Domains**, add e.g. `kemiadeosun.com` and follow the DNS
instructions.

---

## What's included

- **Editorial design:** ivory, forest-green, and gold, with Newsreader + Inter type.
- **Perfect responsiveness:** verified with zero horizontal overflow on mobile
  and desktop; fluid type; scroll-reveal animations that respect
  `prefers-reduced-motion` and fall back gracefully with no JavaScript.
- **Social share preview:** a branded Open Graph image (auto-applied to
  WhatsApp, iMessage, X, and LinkedIn) generated at `src/app/opengraph-image.tsx`.
- **SEO:** title, description, keywords, canonical URL, robots.
- **Accessibility:** semantic landmarks, aria-labels on every icon link,
  visible keyboard focus rings, and strong colour contrast.
- **One-tap vCard** download for real contact-saving.
