"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Connect", href: "#connect" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                scrolled ? "text-muted" : "text-cream/80"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="/api/vcard"
          className={`inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${
            scrolled
              ? "bg-forest text-cream hover:bg-forest-700"
              : "border border-cream/40 text-cream hover:border-cream/80 hover:bg-cream/10"
          }`}
        >
          Save contact
        </a>
      </div>
    </header>
  );
}
