import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function AboutSection() {
  const [lede, ...rest] = profile.about;

  return (
    <Section id="about" title="About">
      <div className="max-w-[36rem]">
        <p className="text-[1.5rem] leading-[1.4] tracking-[-0.01em] [font-variation-settings:'opsz'_36]">
          {lede}
        </p>
        {rest.map((para) => (
          <p key={para.slice(0, 32)} className="mt-5 text-wine-soft">
            {para}
          </p>
        ))}
      </div>
    </Section>
  );
}

/** "books, old school music, sudoku and yam porridge" */
function listSentence(items: readonly string[]) {
  const words = items.map((w) => w.toLowerCase());
  if (words.length < 2) return words.join("");
  return `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}

export function OutsideWorkSection() {
  return (
    <div className="bg-blush">
      <Section id="outside-work" title="Outside work">
        <p className="max-w-[36rem] text-[1.375rem] italic leading-[1.45]">
          {profile.interests.lead} She enjoys{" "}
          {listSentence(profile.interests.likes)}.
        </p>
      </Section>
    </div>
  );
}
