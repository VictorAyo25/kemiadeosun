import { SocialIcon } from "@/components/icons";
import { profile } from "@/data/profile";

/**
 * Social links. `tone` sets the colours for the surface it
 * sits on: "paper" on white, "red" on the red field. `heroSwitch` is for the
 * hero block, which sits on white on phones and tablets, and on red from lg up.
 */
export default function ContactActions({
  tone,
}: {
  tone: "paper" | "red" | "heroSwitch";
}) {
  const link =
    tone === "red"
      ? "text-paper decoration-paper/40 hover:decoration-paper"
      : tone === "paper"
        ? "text-wine decoration-wine/30 hover:decoration-wine"
        : "text-wine decoration-wine/30 hover:decoration-wine lg:text-paper lg:decoration-paper/40 lg:hover:decoration-paper";

  return (
    <ul className="flex items-center gap-6">
      {profile.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 underline decoration-1 underline-offset-[5px] transition-colors ${link}`}
          >
            <SocialIcon name={s.icon} width={17} height={17} />
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
