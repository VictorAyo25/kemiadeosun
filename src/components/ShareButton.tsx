"use client";

import { useState } from "react";
import { CheckIcon, ShareIcon } from "@/components/icons";
import { profile, SITE_URL } from "@/data/profile";

/** Phones get the native share sheet; elsewhere the link is copied. */
export default function ShareButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: profile.name, url: SITE_URL });
      } catch {
        // closed the sheet: nothing to do
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link", SITE_URL);
    }
  }

  return (
    <button type="button" onClick={share} className={`lnk inline-flex items-center gap-2 ${className}`}>
      <span className="swap" data-on={copied ? "" : undefined}>
        <ShareIcon width={17} height={17} className="swap-a" />
        <CheckIcon width={17} height={17} className="swap-b" />
      </span>
      <span aria-live="polite">{copied ? "Link copied" : "Share this card"}</span>
    </button>
  );
}
