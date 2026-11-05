import ShareButton from "@/components/ShareButton";
import { SocialIcon } from "@/components/icons";
import { profile } from "@/data/profile";

/**
 * Social links + share. `tone` sets the colours for the surface it sits on:
 * "red" on the red field; "heroSwitch" for the hero block, which sits on
 * white on phones and tablets, and on red from lg up.
 */
export default function ContactActions({ tone }: { tone: "red" | "heroSwitch" }) {
  const colour = tone === "red" ? "text-paper" : "text-wine lg:text-paper";

  return (
    <ul className={`flex flex-wrap items-center gap-x-7 gap-y-4 ${colour}`}>
      {profile.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="lnk inline-flex items-center gap-2"
          >
            <SocialIcon name={s.icon} width={17} height={17} className="lnk-icon" />
            {s.label}
          </a>
        </li>
      ))}
      <li>
        <ShareButton />
      </li>
    </ul>
  );
}
