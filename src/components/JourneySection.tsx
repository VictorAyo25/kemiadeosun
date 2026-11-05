import Section from "@/components/Section";
import { profile } from "@/data/profile";

/** Career, oldest first. Public office is set larger and in red, so the
 *  shape of the career reads at a glance without extra decoration. */
export default function JourneySection() {
  return (
    <>
      <Section id="career" title="Career">
        <ol className="max-w-[38rem]">
          {profile.career.map((m) => (
            <li
              key={`${m.organisation}-${m.role}`}
              className="border-t border-rule py-5 first:border-t-0 first:pt-0"
            >
              <h3
                className={
                  m.highlight
                    ? "text-[1.75rem] font-medium leading-tight tracking-[-0.015em] text-red-deep [font-variation-settings:'opsz'_48]"
                    : "text-[1.25rem] font-medium leading-snug"
                }
              >
                {m.role}
              </h3>
              <p className="mt-1 text-wine-soft">
                {m.organisation}
                {m.period && (
                  <>
                    ,{" "}
                    <span className="tabular-nums">
                      {m.period.toLowerCase().replace(/^to /, "until ")}
                    </span>
                  </>
                )}
              </p>
              {m.detail && <p className="mt-2">{m.detail}</p>}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education">
        <ul className="grid max-w-[38rem] gap-x-10 gap-y-5 sm:grid-cols-2">
          {profile.credentials.map((c) => (
            <li key={c.qualification}>
              <p className="font-medium leading-snug">{c.qualification}</p>
              <p className="italic text-wine-soft">{c.institution}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
