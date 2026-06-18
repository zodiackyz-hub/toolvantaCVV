import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { guides } from "@/data/guides";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "CV Hazırlama Rehberleri",
  description:
    "CV hazırlama, ATS uyumu, yeni mezun başvuruları, beceri bölümü ve kariyer değişimi için pratik rehber yazıları.",
  path: "/guides"
});

export default function GuidesPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Ana Sayfa", path: "" },
    { name: "Rehberler", path: "/guides" }
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase text-brand-700">Rehberler</p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-950">CV Hazırlama Rehberleri</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Daha iyi bir CV hazırlamak, şablon seçmek ve başvuru dosyanızı güçlendirmek için sade ve uygulanabilir rehberler.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {guides.slice(0, 4).map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-brand-700">
              <span>{guide.category}</span>
              <span className="text-slate-300">/</span>
              <span>{guide.readingTime}</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{guide.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
          </Link>
        ))}
      </div>

      <AdPlaceholder label="Rehber listesi içerik arası reklam alanı" />

      <div className="grid gap-6 md:grid-cols-2">
        {guides.slice(4).map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase text-brand-700">
              <span>{guide.category}</span>
              <span className="text-slate-300">/</span>
              <span>{guide.readingTime}</span>
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-950">{guide.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
