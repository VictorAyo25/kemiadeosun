import Section from "@/components/Section";
import { profile } from "@/data/profile";

/** Each venture gets a short rule in its own brand colour, taken from its logo. */
export default function VenturesSection() {
  return (
    <Section id="ventures" title="Ventures">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        {profile.ventures.map((v) => (
          <article key={v.name} className="max-w-[30rem]">
            <span
              aria-hidden="true"
              className="block h-[3px] w-12"
              style={{ backgroundColor: v.glow }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={v.logo}
              alt=""
              className={`mt-6 w-auto object-contain object-left ${v.monogram === "DM" ? "h-16" : "h-9"}`}
            />
            <h3 className="mt-5 text-[1.75rem] font-medium leading-tight tracking-[-0.015em]">
              {v.name}
            </h3>
            <p className="mt-1 italic text-wine-soft">{v.tagline}</p>
            <p className="mt-4">{v.description}</p>
            <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-deep underline decoration-red-deep/35 decoration-1 underline-offset-[5px] hover:decoration-red-deep"
              >
                {v.hrefLabel}
              </a>
              {v.instagram && (
                <a
                  href={v.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wine underline decoration-wine/30 decoration-1 underline-offset-[5px] hover:decoration-wine"
                >
                  Instagram<span className="sr-only">, {v.name}</span>
                </a>
              )}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
