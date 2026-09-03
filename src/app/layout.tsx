import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { profile, SITE_URL } from "@/data/profile";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
    "chartered accountant",
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
  themeColor: "#12352a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
