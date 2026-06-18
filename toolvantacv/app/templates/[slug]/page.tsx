import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { TemplatePreview } from "@/components/TemplatePreview";
import { UseTemplateButton } from "@/components/UseTemplateButton";
import { guides } from "@/data/guides";
import { getTemplateBySlug, templates } from "@/data/templates";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type TemplateDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug
  }));
}

export function generateMetadata({ params }: TemplateDetailPageProps): Metadata {
  const template = getTemplateBySlug(params.slug);

  if (!template) {
    return {
      title: "Şablon Bulunamadı"
    };
  }

  return createPageMetadata({
    title: template.name,
    description: `${template.description} ${template.useCase}`,
    path: `/templates/${template.slug}`,
    type: "article"
  });
}

export default function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const template = getTemplateBySlug(params.slug);

  if (!template) {
    notFound();
  }

  const relatedTemplates = templates
    .filter((item) => item.category === template.category && item.slug !== template.slug)
    .slice(0, 3);
  const relatedGuides = guides
    .filter((guide) =>
      [template.category, template.preview.role, ...template.preview.sections]
        .map((signal) => signal.toLowerCase().split(" ")[0])
        .some((signal) => guide.description.toLowerCase().includes(signal))
    )
    .slice(0, 3);
  const visibleGuides = relatedGuides.length ? relatedGuides : guides.slice(0, 3);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: template.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
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
        name: "Şablonlar",
        item: `${siteConfig.url}/templates`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: template.name,
        item: `${siteConfig.url}/templates/${template.slug}`
      }
    ]
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Link href="/templates" className="text-sm font-bold text-brand-700 hover:text-brand-900">
        Şablonlara dön
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <TemplatePreview template={template} size="large" />

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
            {template.category}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-950">{template.name}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{template.description}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{template.useCase}</p>

          <dl className="mt-6 grid gap-4 text-sm">
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-bold text-slate-950">Renk Stili</dt>
              <dd className="mt-2 flex items-center gap-2 text-slate-600">
                <span className="h-5 w-5 rounded-full border border-slate-200" style={{ backgroundColor: template.style.accent }} />
                <span className="h-5 w-5 rounded-full border border-slate-200" style={{ backgroundColor: template.style.secondary }} />
                <span>{template.style.accent}</span>
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-bold text-slate-950">Önizleme Alanları</dt>
              <dd className="mt-2 text-slate-600">{template.preview.sections.join(", ")}</dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-bold text-slate-950">ATS Uyumluluğu</dt>
              <dd className="mt-2 text-slate-600">
                {template.atsCompatible
                  ? "ATS uyumlu başvurular için güvenli yapı"
                  : "Yaratıcı vurgu alanlarıyla ATS için dikkatli kullanım"}
              </dd>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="font-bold text-slate-950">Avantajlar</dt>
              <dd className="mt-2">
                <ul className="grid gap-2 text-slate-600">
                  {template.advantages.map((advantage) => (
                    <li key={advantage}>{advantage}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <UseTemplateButton templateName={template.name} templateSlug={template.slug} />
          </div>

          <p className="mt-5 rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm leading-6 text-brand-900">
            Bu şablon artık canlı CV Builder ile kullanılabilir. Bilgilerinizi girip önizleme aldıktan sonra PDF indirebilir veya yazdırabilirsiniz.
          </p>
        </aside>
      </div>

      <article className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <header>
          <p className="text-sm font-bold uppercase text-brand-700">Şablon rehberi</p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-950">
            {template.name} CV şablonu nasıl kullanılmalı?
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            Bu bölüm, şablonu seçmeden önce kullanım alanını, güçlü taraflarını ve içerik planını değerlendirmeniz için hazırlandı.
          </p>
        </header>

        <div className="mt-8 space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-slate-950">Kullanım alanları</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {template.bestFor.map((item) => (
                <p key={item} className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {item}
                </p>
              ))}
            </div>
          </section>
          {template.detailSections.map((section, index) => (
            <section key={section.heading} className="border-t border-slate-100 pt-8">
              <h3 className="text-2xl font-bold text-slate-950">{section.heading}</h3>
              <p className="mt-4 leading-8 text-slate-600">{section.body}</p>
              {index === 1 ? <AdPlaceholder label="Şablon rehberi içerik arası reklam alanı" /> : null}
            </section>
          ))}
          <section className="border-t border-slate-100 pt-8">
            <h3 className="text-2xl font-bold text-slate-950">Profesyonel kullanım ipuçları</h3>
            <ul className="mt-4 grid gap-3 text-slate-600">
              {template.tips.map((tip) => (
                <li key={tip} className="rounded-lg bg-slate-50 p-4 leading-7">
                  {tip}
                </li>
              ))}
            </ul>
          </section>
          <section className="border-t border-slate-100 pt-8">
            <h3 className="text-2xl font-bold text-slate-950">Sık sorulan sorular</h3>
            <div className="mt-4 grid gap-4">
              {template.faq.map((item) => (
                <details key={item.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer font-bold text-slate-950">{item.question}</summary>
                  <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="mt-12 grid gap-4 rounded-lg border border-brand-100 bg-brand-50 p-6 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-900">Try this template in the CV Builder</h2>
          <p className="mt-2 text-sm leading-6 text-brand-900">
            Use this resume template with live preview, ATS Score Analyzer, Resume Strength Checker, PDF export, and print support.
          </p>
        </div>
        <Link
          href={`/builder?template=${template.slug}`}
          className="rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-brand-700"
        >
          Try CV Builder
        </Link>
        <Link
          href="/cover-letter-generator"
          className="rounded-lg border border-brand-200 bg-white px-5 py-3 text-center text-sm font-bold text-brand-700 transition hover:border-brand-500"
        >
          Create Cover Letter
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-slate-950">Related Guides</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {visibleGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <p className="text-xs font-bold uppercase text-brand-700">{guide.category}</p>
              <p className="mt-2 font-bold text-slate-950">{guide.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {relatedTemplates.length ? (
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-slate-950">Related Templates</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {relatedTemplates.map((item) => (
              <Link
                key={item.slug}
                href={`/templates/${item.slug}`}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
              >
                <p className="font-bold text-slate-950">{item.name}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
