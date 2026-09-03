/**
 * ────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Everything visible on the card is edited here. No need to touch
 *  the components. Biographical detail below is taken from her own
 *  "Kemi Adeosun - Full Biography" document (verify anything marked ⚠).
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

export interface CareerMilestone {
  /** dated only where the biography gives a date */
  period?: string;
  role: string;
  organisation: string;
  detail?: string;
  /** public-service roles get the gold treatment in the timeline */
  highlight?: boolean;
}

export interface Credential {
  qualification: string;
  institution: string;
}

/** The public URL of the deployed card. Used for QR code, share, OG tags,
 *  and the vCard. Set NEXT_PUBLIC_SITE_URL in Vercel to your real domain. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kemiadeosun.vercel.app";

export const profile = {
  name: "Kemi Adeosun",
  /** eyebrow shown above the name in the hero */
  eyebrow: "Economist · Advocate · Founder",
  /** shown under the name, in the page title, OG card and vCard note */
  role: "Economist & Chartered Accountant",
  tagline: "Championing children, youth & women across West Africa.",
  bio: "Economist, chartered accountant and finance professional with over 35 years across Nigerian and international markets. Nigeria's Minister of Finance from 2015 to 2018, and today the founder of two ventures lifting communities and building enterprise across Africa.",
  /** Longer intro used in the About section of the landing page. */
  about:
    "Kemi Adeosun is an economist, chartered accountant and finance professional whose career spans more than 35 years across Nigeria and international markets, with a proven track record of delivery. She served as Nigeria's Minister of Finance from November 2015 to September 2018, chairing the Board of the African Export-Import Bank during her tenure, and as Commissioner for Finance in Ogun State before that. Today she channels that experience into two ventures: one mobilising resources for the most vulnerable, the other helping a new generation of entrepreneurs build businesses that last.",
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

  /** Career and public service, oldest first. */
  career: [
    {
      role: "Early career",
      organisation: "British Telecom Plc",
      detail: "Where she began her working life in the United Kingdom.",
    },
    {
      role: "Senior managerial roles",
      organisation: "PricewaterhouseCoopers (UK)",
      detail:
        "Advising on finance across one of the world's largest professional services firms.",
    },
    {
      role: "Financial Controller to Managing Director",
      organisation: "Chapel Hill Denham Group",
      detail:
        "Returning to Nigeria and rising through the ranks of a leading investment banking group.",
    },
    {
      period: "To 2010",
      role: "Founder",
      organisation: "Independent consulting practice",
      detail:
        "Ran her own consulting firm before answering the call to civic duty in 2010.",
    },
    {
      // ⚠ start year inferred from the biography's "call to civic duty in 2010"
      period: "From 2010",
      role: "Commissioner for Finance",
      organisation: "Ogun State",
      highlight: true,
    },
    {
      period: "2015 to 2018",
      role: "Minister of Finance",
      organisation: "Federal Republic of Nigeria",
      detail:
        "November 2015 to September 2018. Chaired the Board of the African Export-Import Bank (AfreximBank) during her tenure.",
      highlight: true,
    },
  ] satisfies CareerMilestone[],

  /** Degrees and professional qualifications. */
  credentials: [
    {
      qualification: "BSc, Applied Economics",
      institution: "University of East London",
    },
    {
      qualification: "Postgraduate Diploma, Public Financial Management",
      institution: "University of London",
    },
    {
      qualification: "Master's, Public Administration",
      institution: "London School of Economics",
    },
    {
      qualification: "Chartered Accountant",
      institution: "ICAEW & ICAN",
    },
  ] satisfies Credential[],

  /** Away from the work. */
  interests: {
    lead: "Beyond the charity work she is a family woman, and a passionate coach with a ministry focus on youth.",
    likes: ["Books", "Old school music", "Sudoku", "Yam porridge"],
  },

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
        "A social enterprise registered in Nigeria, the UK and the USA that mobilises resources for indigenous charities caring for orphaned and vulnerable children, youth and women. Its Dash Me Store sells new and gently used items across five branches, raising millions daily for those in need.",
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
        "The definitive platform giving Nigerian entrepreneurs the inspiration, knowledge and tools to build serious businesses, with a particular eye on young and female founders.",
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
    title: "Founder · Economist & Chartered Accountant",
    // email/phone intentionally omitted; add here only if she's OK
    // publishing them, e.g. email: "hello@example.com",
  },
} as const;

export type Profile = typeof profile;
