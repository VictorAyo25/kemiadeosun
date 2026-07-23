import Reveal from "@/components/Reveal";
import { SocialIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-forest text-cream"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 100% 0%, rgba(199,162,75,0.18), rgba(199,162,75,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* text + actions */}
          <Reveal className="text-center lg:text-left">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Get in touch
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.9rem,4.5vw,2.85rem)] font-semibold leading-tight tracking-tight text-cream">
              Let&rsquo;s connect
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-cream/75 lg:mx-0">
              Follow along on social, or scan the code to open this card on
              another device.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap lg:items-start lg:justify-start">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-cream/20 px-4 py-2.5 transition-all duration-200 hover:border-cream/50 hover:bg-cream/10"
                >
                  <SocialIcon name={s.icon} width={18} height={18} />
                  <span className="text-sm font-medium text-cream/85">
                    {s.handle}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          {/* QR card */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-3xl bg-paper p-7 text-center shadow-float">
              <div className="mx-auto flex aspect-square w-44 items-center justify-center rounded-2xl bg-cream p-3 sm:w-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/qr/kemi-adeosun-qr.svg"
                  alt={`QR code linking to ${profile.name}'s card`}
                  className="h-full w-full"
                />
              </div>
              <p className="mt-5 font-serif text-lg font-semibold text-ink">
                Scan to share
              </p>
              <p className="mt-1 text-sm text-muted">
                Point a camera here to open this card
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
