import { profile } from "@/data/profile";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-forest text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8 lg:px-12">
        <a href="#top" className="font-serif text-base font-medium text-cream">
          {profile.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {profile.ventures.map((v) => (
            <a
              key={v.name}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              {v.name}
            </a>
          ))}
        </nav>

        <p className="text-xs tracking-wide">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
