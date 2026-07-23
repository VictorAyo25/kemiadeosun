import type { SVGProps } from "react";
import type { SocialIconName } from "@/data/profile";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-5.98l-4.68-6.12L5.7 21H2.73l6.94-7.93L2.5 3h6.13l4.23 5.6L17.53 3Zm-1.05 16.2h1.65L7.6 4.71H5.83L16.48 19.2Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.4h3.27V21H3.3V8.4Zm5.36 0h3.13v1.72h.05c.44-.83 1.5-1.7 3.1-1.7 3.31 0 3.92 2.18 3.92 5.02V21h-3.27v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.64V21H8.66V8.4Z" />
    </svg>
  );
}

const map = {
  instagram: InstagramIcon,
  x: XIcon,
  linkedin: LinkedInIcon,
} as const;

export function SocialIcon({
  name,
  ...props
}: { name: SocialIconName } & IconProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Focus-area icons
function ChildrenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 20.5s-7-4.35-7-9.5a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.15-7 9.5-7 9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function YouthIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3.5 13.9 9l5.6.2-4.4 3.4 1.6 5.4L12 15l-4.7 3 1.6-5.4L4.5 9.2 10.1 9 12 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function WomenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 12c2.5 0 4.5-2.2 4.5-5S14.5 2.5 12 4.8C9.5 2.5 7.5 4.2 7.5 7S9.5 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12v9m-3-3h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const focusMap = {
  children: ChildrenIcon,
  youth: YouthIcon,
  women: WomenIcon,
} as const;

export function FocusIcon({
  name,
  ...props
}: { name: keyof typeof focusMap } & IconProps) {
  const Cmp = focusMap[name];
  return <Cmp {...props} />;
}
