import Reveal from "@/components/Reveal";
import { FocusIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            Who she is
          </p>
          <h2 className="mt-3 font-serif text-[clamp(1.9rem,4.5vw,2.75rem)] font-semibold leading-tight tracking-tight text-ink">
            Experience in service of impact
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {profile.about}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {profile.focus.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 110}
              className="group rounded-2xl border border-line bg-paper/70 p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-float sm:p-7"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/5 text-forest ring-1 ring-forest/10 transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                <FocusIcon name={f.icon} width={26} height={26} />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Away from the work */}
        <Reveal
          delay={120}
          className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center"
        >
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
            Away from the work
          </p>
          <p className="mt-4 font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
            {profile.interests.lead}
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {profile.interests.likes.map((like) => (
              <li
                key={like}
                className="rounded-full border border-line bg-paper/70 px-4 py-1.5 text-sm text-muted"
              >
                {like}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
