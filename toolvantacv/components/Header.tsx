import Link from "next/link";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/templates", label: "Templates" },
  { href: "/builder", label: "CV Builder" },
  { href: "/cover-letter-generator", label: "Cover Letter Generator" },
  { href: "/guides", label: "Guides" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-extrabold text-brand-900" aria-label={`${siteConfig.name} home`}>
          <span className="text-brand-600">Toolvanta</span>CV
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
