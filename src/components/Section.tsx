import type { ReactNode } from "react";

/** Heading in a left column from md up, above the content on phones. */
export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-x-12 md:py-20 lg:px-12"
    >
      <h2
        id={`${id}-title`}
        className="text-[1.75rem] font-medium leading-tight tracking-[-0.01em] text-red-deep md:sticky md:top-10 md:self-start md:text-[1.5rem] md:leading-[2.1rem]"
      >
        {title}
      </h2>
      <div className="mt-6 md:mt-0">{children}</div>
    </section>
  );
}
