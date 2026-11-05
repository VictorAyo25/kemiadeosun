"use client";

import { useEffect, useRef } from "react";

/**
 * Her name, set in Newsreader, with letters that gain weight near the
 * pointer (or a finger on touch). After the name rises in on load, one
 * weight wave runs through it so phones see it move without a pointer.
 * Off when the visitor prefers reduced motion.
 */
const BASE = 500;
const PEAK = 760;

export default function LivingName({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const h = ref.current;
    if (!h || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = Array.from(h.querySelectorAll<HTMLSpanElement>("[data-l]"));
    const set = (el: HTMLSpanElement, w: number) => {
      el.style.fontVariationSettings = `'opsz' 72, 'wght' ${Math.round(w)}`;
    };

    let raf = 0;
    let px = -1e5;
    let py = -1e5;

    const fromPointer = () => {
      raf = 0;
      for (const el of letters) {
        const r = el.getBoundingClientRect();
        const d = Math.hypot(px - (r.left + r.width / 2), py - (r.top + r.height / 2));
        const t = Math.max(0, 1 - d / (r.height * 1.1));
        set(el, BASE + (PEAK - BASE) * t * t * (3 - 2 * t));
      }
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(fromPointer);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      schedule();
    };
    let releaseTimer = 0;
    const onLeave = () => {
      px = py = -1e5;
      schedule();
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") {
        window.clearTimeout(releaseTimer);
        releaseTimer = window.setTimeout(onLeave, 450);
      }
    };

    // One wave through the letters, after the rise-in has settled.
    let waveRaf = 0;
    const waveStart = performance.now() + 1100;
    const wave = (now: number) => {
      const t = (now - waveStart) / 1300;
      if (t >= 0) {
        letters.forEach((el, i) => {
          const centre = i / Math.max(1, letters.length - 1);
          const x = (t * 1.5 - 0.25 - centre) / 0.16;
          set(el, BASE + (PEAK - BASE) * 0.7 * Math.exp(-x * x));
        });
      }
      if (t < 1) waveRaf = requestAnimationFrame(wave);
      else letters.forEach((el) => set(el, BASE));
    };
    waveRaf = requestAnimationFrame(wave);
    const stopWave = () => cancelAnimationFrame(waveRaf);

    h.addEventListener("pointerenter", stopWave, { once: true });
    h.addEventListener("pointermove", onMove);
    h.addEventListener("pointerdown", onMove);
    h.addEventListener("pointerup", onUp);
    h.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(waveRaf);
      window.clearTimeout(releaseTimer);
      h.removeEventListener("pointermove", onMove);
      h.removeEventListener("pointerdown", onMove);
      h.removeEventListener("pointerup", onUp);
      h.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <h1
      ref={ref}
      aria-label={lines.join(" ")}
      className="living-name px-5 pt-14 font-medium leading-[0.88] tracking-[-0.035em] [font-size:clamp(4.25rem,22vw,9rem)] sm:px-8 lg:self-end lg:px-12 lg:pt-24 lg:[font-size:clamp(4.5rem,10.5vw,7.5rem)]"
    >
      {lines.map((line) => (
        <span key={line} className="name-line" aria-hidden="true">
          <span>
            {Array.from(line).map((ch, i) => (
              <span key={i} data-l="">
                {ch}
              </span>
            ))}
          </span>
        </span>
      ))}
    </h1>
  );
}
