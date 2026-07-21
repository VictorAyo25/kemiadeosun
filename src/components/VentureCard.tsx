import type { Venture } from "@/data/profile";
import { InstagramIcon } from "./icons";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover/link:translate-x-0.5">
      <path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function VentureCard({ venture }: { venture: Venture }) {
  const tile =
    venture.accent === "forest"
      ? "bg-forest text-cream"
      : "bg-gradient-to-br from-gold-bright to-gold text-forest";

  return (
    <div className="group relative flex gap-4 rounded-2xl border border-line bg-paper/70 p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-float sm:p-5">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-xl font-semibold shadow-sm ${tile}`}
        aria-hidden="true"
      >
        {venture.monogram}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-lg font-semibold leading-tight text-ink">
          {venture.name}
        </h3>
        <p className="mt-1 font-serif text-sm italic text-gold">
          {venture.tagline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {venture.description}
        </p>

        <div className="mt-3.5 flex items-center gap-4">
          <a
            href={venture.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-gold"
          >
            Visit {venture.hrefLabel}
            <ArrowIcon />
          </a>
          {venture.instagram && (
            <a
              href={venture.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${venture.name} on Instagram`}
              className="text-muted transition-colors hover:text-forest"
            >
              <InstagramIcon width={18} height={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
