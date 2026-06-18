import type { Metadata } from "next";
import { TemplateBrowser } from "@/components/TemplateBrowser";
import { templates } from "@/data/templates";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "CV Şablonları",
  description:
    "Modern, Minimal, Creative, Professional ve Student kategorilerinde 50 profesyonel CV şablonunu inceleyin.",
  path: "/templates"
});

export default function TemplatesPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Ana Sayfa", path: "" },
    { name: "Şablonlar", path: "/templates" }
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase text-brand-700">{siteConfig.name}</p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-950">CV Şablonları</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          50 farklı CV şablonunu kategoriye göre filtreleyin, önizleyin ve size en uygun tasarımı seçin.
        </p>
      </div>

      <TemplateBrowser templates={templates} />
    </section>
  );
}
