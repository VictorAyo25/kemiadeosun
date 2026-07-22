import ProfileActions from "@/components/ProfileActions";
import VentureCard from "@/components/VentureCard";
import { SocialIcon } from "@/components/icons";
import { profile, SITE_URL } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-5 py-10 sm:py-16">
      <article className="rise relative w-full max-w-[35rem] overflow-hidden rounded-[28px] border border-line bg-paper/85 shadow-float backdrop-blur-sm">
        {/* gold top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-gold/0 via-gold to-gold/0" />

        <div className="px-6 pb-8 pt-9 sm:px-10 sm:pt-11">
          {/* ── Hero ─────────────────────────────────────────── */}
          <header className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold-bright to-gold opacity-90" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                width={132}
                height={132}
                className="relative h-[124px] w-[124px] rounded-full object-cover shadow-md ring-4 ring-paper sm:h-[132px] sm:w-[132px]"
              />
            </div>

            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold">
              {profile.eyebrow}
            </p>
            <h1 className="mt-2 font-serif text-[2.05rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-[2.5rem]">
              {profile.name}
            </h1>

            {/* role with gold rules */}
            {profile.role && (
              <div className="mt-3 flex w-full items-center justify-center gap-3">
                <span className="h-px max-w-10 flex-1 bg-line" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest-500">
                  {profile.role}
                </span>
                <span className="h-px max-w-10 flex-1 bg-line" />
              </div>
            )}

            <p className="mt-5 max-w-sm font-serif text-lg italic leading-snug text-forest">
              {profile.tagline}
            </p>
            <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-muted">
              {profile.bio}
            </p>

            {profile.location && (
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
                  <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {profile.location}
              </p>
            )}
          </header>

          {/* ── Social links ─────────────────────────────────── */}
          <nav
            aria-label="Social media"
            className="mt-6 flex items-center justify-center gap-3"
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${profile.name} on ${s.label}, ${s.handle}`}
                title={s.handle}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-forest transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-forest hover:text-cream"
              >
                <SocialIcon name={s.icon} width={19} height={19} />
              </a>
            ))}
          </nav>

          {/* ── Actions ──────────────────────────────────────── */}
          <ProfileActions
            shareUrl={SITE_URL}
            shareTitle={profile.role ? `${profile.name} · ${profile.role}` : profile.name}
            shareText={profile.tagline}
          />

          {/* ── Ventures ─────────────────────────────────────── */}
          <section className="mt-9">
            <div className="mb-4 flex items-center gap-3">
              <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                Ventures
              </h2>
              <span className="h-px flex-1 bg-line" />
            </div>
            <div className="flex flex-col gap-3.5">
              {profile.ventures.map((v) => (
                <VentureCard key={v.name} venture={v} />
              ))}
            </div>
          </section>
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        <footer className="border-t border-line bg-cream-deep/40 px-6 py-4 text-center sm:px-10">
          <p className="text-[0.7rem] tracking-wide text-muted">
            Tap{" "}
            <span className="font-semibold text-forest">Save to Contacts</span>{" "}
            to keep this card ·{" "}
            <span className="whitespace-nowrap">© {profile.name}</span>
          </p>
        </footer>
      </article>
    </main>
  );
}
