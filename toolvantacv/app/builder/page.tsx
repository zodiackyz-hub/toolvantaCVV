import type { Metadata } from "next";
import { ResumeBuilder } from "@/components/ResumeBuilder";
import { templates } from "@/data/templates";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "CV Builder - Canlı Önizleme ve PDF İndir",
  description:
    "ToolvantaCV Builder ile bilgilerinizi girin, seçtiğiniz CV şablonunda canlı önizleyin, PDF olarak indirin veya yazdırın.",
  path: "/builder"
});

export default function BuilderPage() {
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
        name: "CV Builder",
        item: `${siteConfig.url}/builder`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase text-brand-700">CV Builder</p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-950">Canlı Önizlemeli CV Oluşturucu</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Şablon seçin, bilgilerinizi girin, sağ tarafta CV'nizi anında görün. Hazır olduğunda PDF olarak indirin veya yazdırın.
          </p>
        </div>
        <ResumeBuilder templates={templates} initialTemplateSlug={templates[0].slug} />
      </section>
    </>
  );
}
