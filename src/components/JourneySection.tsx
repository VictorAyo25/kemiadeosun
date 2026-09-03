import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function JourneySection() {
  return (
    <section id="journey" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            The road here
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-ink">
            Career &amp; public service
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Thirty-five years from the City of London to Nigeria&rsquo;s
            Ministry of Finance.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l border-line pl-8 sm:pl-10">
            {profile.career.map((m, i) => (
              <Reveal
                key={`${m.organisation}-${m.role}`}
                delay={i * 80}
                as="li"
                className="relative pb-10 last:pb-0"
              >
                {/* node */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[calc(2rem+1px)] top-1.5 flex h-[15px] w-[15px] -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-paper sm:-left-[calc(2.5rem+1px)] ${
                    m.highlight ? "bg-gold" : "bg-forest/25"
                  }`}
                />

                {m.period && (
                  <p
                    className={`text-[0.7rem] font-semibold uppercase tracking-[0.22em] ${
                      m.highlight ? "text-gold" : "text-muted"
                    }`}
                  >
                    {m.period}
                  </p>
                )}
                <h3 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-ink sm:text-[1.35rem]">
                  {m.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium tracking-wide text-forest-500">
                  {m.organisation}
                </p>
                {m.detail && (
                  <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-muted">
                    {m.detail}
                  </p>
                )}
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education & professional qualifications */}
        <Reveal className="mx-auto mt-16 max-w-3xl rounded-2xl border border-line bg-cream/60 p-7 shadow-card sm:p-9">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            Education &amp; qualifications
          </p>
          <dl className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6">
            {profile.credentials.map((c) => (
              <div key={c.qualification} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                />
                <div>
                  <dt className="font-serif text-base font-semibold leading-snug text-ink">
                    {c.qualification}
                  </dt>
                  <dd className="mt-0.5 text-sm text-muted">{c.institution}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
