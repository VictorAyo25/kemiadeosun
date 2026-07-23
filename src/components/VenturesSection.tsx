import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon, InstagramIcon } from "@/components/icons";
import { profile, type Venture } from "@/data/profile";

function VentureFeature({ venture, index }: { venture: Venture; index: number }) {
  const reversed = index % 2 === 1;
  const panel =
    venture.accent === "forest"
      ? "bg-forest text-cream"
      : "bg-gradient-to-br from-gold-bright to-gold text-forest";

  return (
    <Reveal>
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* visual panel */}
        <div className={reversed ? "lg:order-2" : ""}>
          <div
            className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl shadow-float ${panel}`}
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />
            <div className="relative text-center">
              <div className="font-serif text-[clamp(3.5rem,9vw,6rem)] font-semibold leading-none">
                {venture.monogram}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] opacity-80">
                {venture.name}
              </div>
            </div>
          </div>
        </div>

        {/* text */}
        <div className={reversed ? "lg:order-1" : ""}>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            Venture 0{index + 1}
          </p>
          <h3 className="mt-3 font-serif text-[clamp(1.7rem,4vw,2.4rem)] font-semibold leading-tight tracking-tight text-ink">
            {venture.name}
          </h3>
          <p className="mt-2 font-serif text-lg italic text-gold">
            {venture.tagline}
          </p>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">
            {venture.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold tracking-wide text-cream shadow-card transition-all duration-200 hover:bg-forest-700 hover:shadow-float active:scale-[0.98]"
            >
              Visit {venture.hrefLabel}
              <ArrowUpRightIcon width={16} height={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {venture.instagram && (
              <a
                href={venture.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${venture.name} on Instagram`}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-forest transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent hover:bg-forest hover:text-cream"
              >
                <InstagramIcon width={19} height={19} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function VenturesSection() {
  return (
    <section id="ventures" className="bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            What she builds
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-ink">
            Her ventures
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-16 sm:gap-24">
          {profile.ventures.map((v, i) => (
            <VentureFeature key={v.name} venture={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
