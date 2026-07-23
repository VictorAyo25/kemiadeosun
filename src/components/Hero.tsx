import { SocialIcon, ChevronDownIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-forest text-cream"
    >
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, rgba(199,162,75,0.20), rgba(199,162,75,0) 60%), radial-gradient(50% 40% at 0% 100%, rgba(44,90,71,0.55), rgba(44,90,71,0) 60%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* text */}
          <div className="rise order-2 text-center lg:order-1 lg:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Fundraiser · Advocate · Founder
            </p>
            <h1 className="mt-4 font-serif font-semibold leading-[1.02] tracking-tight text-cream [font-size:clamp(2.75rem,8vw,4.75rem)]">
              {profile.name}
            </h1>
            <p className="mx-auto mt-5 max-w-md font-serif text-xl italic leading-snug text-gold-bright lg:mx-0 lg:text-2xl">
              {profile.tagline}
            </p>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-cream/75 lg:mx-0">
              {profile.bio}
            </p>

            {/* socials */}
            <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.name} on ${s.label}, ${s.handle}`}
                  title={s.handle}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-cream hover:text-forest"
                >
                  <SocialIcon name={s.icon} width={19} height={19} />
                </a>
              ))}
            </div>
          </div>

          {/* portrait */}
          <div className="rise order-1 flex justify-center lg:order-2">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-gold/50 sm:-right-4 sm:-top-4"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gold/15 blur-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.photoAlt}
                className="relative aspect-[4/5] w-[min(78vw,23rem)] rounded-[2rem] object-cover shadow-2xl ring-1 ring-cream/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/60 transition-colors hover:text-gold sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDownIcon width={18} height={18} className="animate-bounce" />
      </a>
    </section>
  );
}
