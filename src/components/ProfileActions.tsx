"use client";

import { useCallback, useState } from "react";

interface Props {
  shareUrl: string;
  shareTitle: string;
  shareText: string;
  variant?: "onLight" | "onDark";
  className?: string;
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="18" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.1 10.9 7.8-4.6M8.1 13.1l7.8 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 6.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProfileActions({
  shareUrl,
  shareTitle,
  shareText,
  variant = "onLight",
  className = "",
}: Props) {
  const [copied, setCopied] = useState(false);

  const onShare = useCallback(async () => {
    // Native share sheet on mobile; clipboard fallback on desktop.
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        return;
      } catch {
        // user dismissed; fall through to copy
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.prompt("Copy this link:", shareUrl);
    }
  }, [shareUrl, shareTitle, shareText]);

  const primary =
    variant === "onDark"
      ? "bg-gold text-forest hover:bg-gold-bright"
      : "bg-forest text-cream hover:bg-forest-700";

  const secondary =
    variant === "onDark"
      ? "border border-cream/35 text-cream hover:border-cream/70 hover:bg-cream/10"
      : "border border-gold/45 bg-paper/70 text-forest hover:border-gold hover:bg-paper";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href="/api/vcard"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide shadow-card transition-all duration-200 hover:shadow-float active:scale-[0.98] ${primary}`}
      >
        <DownloadIcon />
        Save to Contacts
      </a>
      <button
        type="button"
        onClick={onShare}
        aria-live="polite"
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 active:scale-[0.98] ${secondary}`}
      >
        {copied ? (
          <>
            <CheckIcon />
            Link copied
          </>
        ) : (
          <>
            <ShareIcon />
            Share
          </>
        )}
      </button>
    </div>
  );
}
