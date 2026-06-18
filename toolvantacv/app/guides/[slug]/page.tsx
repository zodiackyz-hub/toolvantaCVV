import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { getGuideBySlug, guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug
  }));
}

export function generateMetadata({ params }: GuidePageProps): Metadata {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: "Rehber Bulunamadı"
    };
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    type: "article"
  });
}

export default function GuideDetailPage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehberler",
        item: `${siteConfig.url}/guides`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${siteConfig.url}/guides/${guide.slug}`
      }
    ]
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: "ToolvantaCV"
    },
    publisher: {
      "@type": "Organization",
      name: "ToolvantaCV",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`
      }
    },
    mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`
  };

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link href="/guides" className="text-sm font-bold text-brand-700 hover:text-brand-900">
        Rehberlere dön
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-brand-700">
          <span>{guide.category}</span>
          <span className="text-slate-300">/</span>
          <span>{guide.readingTime}</span>
        </div>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950">{guide.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{guide.description}</p>
        <p className="mt-3 text-sm text-slate-500">Son güncelleme: {guide.updatedAt}</p>
      </header>

      <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        {guide.sections.map((section, index) => (
          <section key={section.heading} className={index === 0 ? "" : "mt-8 border-t border-slate-100 pt-8"}>
            <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
            {section.subsections.map((subsection) => (
              <div key={subsection.heading} className="mt-6">
                <h3 className="text-xl font-bold text-slate-950">{subsection.heading}</h3>
                {subsection.body.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-8 text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
            {index === 0 ? <AdPlaceholder label="Rehber içerik arası reklam alanı" /> : null}
          </section>
        ))}
        <section className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-slate-950">Next steps</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link href="/templates" className="rounded-lg border border-brand-100 bg-brand-50 p-4 text-sm font-bold text-brand-700 transition hover:border-brand-500 hover:bg-white">
              Browse Resume Templates
            </Link>
            <Link href="/builder" className="rounded-lg border border-brand-100 bg-brand-50 p-4 text-sm font-bold text-brand-700 transition hover:border-brand-500 hover:bg-white">
              Build Your Resume
            </Link>
            <Link href="/cover-letter-generator" className="rounded-lg border border-brand-100 bg-brand-50 p-4 text-sm font-bold text-brand-700 transition hover:border-brand-500 hover:bg-white">
              Generate Cover Letter
            </Link>
          </div>
        </section>
        <section className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-slate-950">İlgili ToolvantaCV kaynakları</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {guide.internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-brand-700 transition hover:border-brand-500 hover:bg-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
