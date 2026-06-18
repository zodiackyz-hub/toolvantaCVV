import Link from "next/link";
import { siteConfig } from "@/lib/site";

const productLinks = [
  { href: "/templates", label: "Templates" },
  { href: "/builder", label: "CV Builder" },
  { href: "/cover-letter-generator", label: "Cover Letter Generator" },
  { href: "/guides", label: "Guides" }
];

const trustLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-use", label: "Terms" },
  { href: "/sitemap.xml", label: "Sitemap" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-600 sm:px-6 md:grid-cols-[1.2fr_1fr_1.4fr] lg:px-8">
        <div>
          <p className="font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 leading-6">Professional resume templates, CV Builder, ATS analysis, and cover letter tools.</p>
          <div className="mt-3 grid gap-2">
            <a href={`mailto:${siteConfig.supportEmail}`} className="hover:text-brand-700">
              {siteConfig.supportEmail}
            </a>
            <a href={`https://${siteConfig.domain}`} className="hover:text-brand-700">
              {siteConfig.domain}
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Product</p>
          <div className="mt-3 grid gap-2">
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Trust</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {trustLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
