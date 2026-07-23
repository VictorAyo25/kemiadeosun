/**
 * ────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Everything visible on the card is edited here. No need to touch
 *  the components. All data below was researched from public sources
 *  (verify anything marked ⚠ before going live).
 * ────────────────────────────────────────────────────────────────
 */

export type SocialIconName = "instagram" | "x" | "linkedin";

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: SocialIconName;
}

export interface Venture {
  name: string;
  /** short line under the name */
  tagline: string;
  /** short 1 to 2 sentence description */
  description: string;
  href: string;
  hrefLabel: string;
  /** two-letter monogram (fallback if no logo) */
  monogram: string;
  /** visual accent for the tile */
  accent: "forest" | "gold";
  /** path to the venture's real logo (shown on a light plate) */
  logo: string;
  /** brand colour used for the soft glow behind the logo */
  glow: string;
  instagram?: string;
}

export type FocusIcon = "children" | "youth" | "women";

export interface FocusArea {
  icon: FocusIcon;
  title: string;
  description: string;
}

/** The public URL of the deployed card. Used for QR code, share, OG tags,
 *  and the vCard. Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kemi-adeosun.vercel.app";

export const profile = {
  name: "Kemi Adeosun",
  /** eyebrow shown above the name */
  eyebrow: "Digital Card",
  role: "", // (removed) shown under the name when set
  tagline: "Fundraiser & social-impact advocate for children, youth & women.",
  bio: "Economist and chartered accountant with over three decades of experience across Nigerian and international markets. Founder of two ventures dedicated to lifting communities and building enterprise across Africa.",
  /** Longer intro used in the About section of the landing page. */
  about:
    "Kemi Adeosun is an economist and chartered accountant whose career spans over three decades across Nigerian and international markets. Today she channels that experience into two ventures: one lifting vulnerable communities, the other helping a new generation of entrepreneurs build businesses that last.",
  location: "Nigeria · United Kingdom", // ⚠ confirm

  /** Three focus areas, drawn from her advocacy for children, youth & women. */
  focus: [
    {
      icon: "children",
      title: "Children",
      description:
        "Protecting and supporting orphaned and vulnerable children across West Africa.",
    },
    {
      icon: "youth",
      title: "Youth",
      description:
        "Equipping a new generation with opportunity, mentorship and the tools to build.",
    },
    {
      icon: "women",
      title: "Women",
      description:
        "Championing women, from survivors of abuse to founders growing businesses that last.",
    },
  ] satisfies FocusArea[],
  /** Photo: drop a high-res portrait at /public/profile.jpg, then set this
   *  to "/profile.jpg". Ships with an on-brand monogram placeholder. */
  photo: "/profile.jpg",
  photoAlt: "Portrait of Kemi Adeosun",

  socials: [
    {
      label: "Instagram",
      handle: "@iamkemiadeosun",
      href: "https://www.instagram.com/iamkemiadeosun/",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      handle: "Kemi Adeosun",
      href: "https://uk.linkedin.com/in/kemiadeosun",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],

  ventures: [
    {
      name: "DashMe Foundation",
      tagline: "Changing lives, one gift at a time",
      description:
        "A social enterprise raising funds and awareness for grassroots charities that care for orphans, vulnerable children, youth and survivors of domestic abuse across West Africa.",
      href: "https://dashme.org",
      hrefLabel: "dashme.org",
      monogram: "DM",
      accent: "forest",
      logo: "/logos/dashme-logo.png",
      glow: "#3aa24b",
      instagram: "https://www.instagram.com/dashme_foundation/",
    },
    {
      name: "Nidacity",
      tagline: "The audacity to start meets the edge to succeed",
      description:
        "An educational media platform equipping Nigerian entrepreneurs, especially young and female founders, with the practical knowledge, mentorship and tools to build businesses that last.",
      href: "https://nidacity.com",
      hrefLabel: "nidacity.com",
      monogram: "Ni",
      accent: "gold",
      logo: "/logos/nidacity-logo.png",
      glow: "#2f6f9c",
      instagram: "https://www.instagram.com/nidacity/",
    },
  ] satisfies Venture[],

  /** Used to build the downloadable contact card (.vcf) */
  vcard: {
    firstName: "Kemi",
    lastName: "Adeosun",
    organization: "DashMe Foundation · Nidacity",
    title: "Founder · Social Impact Advocate",
    // email/phone intentionally omitted; add here only if she's OK
    // publishing them, e.g. email: "hello@example.com",
  },
} as const;

export type Profile = typeof profile;
