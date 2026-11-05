import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { profile, SITE_URL } from "@/data/profile";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const description = `${profile.role ? `${profile.role}. ` : ""}${profile.tagline} Founder of DashMe Foundation & Nidacity.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: profile.role ? `${profile.name} · ${profile.role}` : profile.name,
  description,
  keywords: [
    "Kemi Adeosun",
    "DashMe Foundation",
    "Nidacity",
    "Nigeria Minister of Finance",
    "AfreximBank",
    "Ogun State Commissioner for Finance",
    "Chartered Accountant",
    "social impact",
    "philanthropy",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description,
    url: SITE_URL,
    siteName: profile.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#ca3048",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
