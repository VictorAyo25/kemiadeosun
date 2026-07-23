"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  /** stagger in ms */
  delay?: number;
  /** element to render as (default div) */
  as?: ElementType;
  className?: string;
  id?: string;
}

export default function Reveal({ children, delay = 0, as, className = "", id }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in view on load, reveal immediately.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal when in view, or if it's already been scrolled past
          // (e.g. deep-link / anchor jump) so content is never stranded.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
