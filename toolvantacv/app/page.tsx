import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { TemplateCard } from "@/components/TemplateCard";
import { guides } from "@/data/guides";
import { templates } from "@/data/templates";

const features = [
  {
    title: "Hızlı",
    description: "Statik şablon verisi ve hafif arayüzle sayfalar hızlı açılır."
  },
  {
    title: "Basit",
    description: "Karmaşık ayar veya ödeme akışı olmadan şablonları hemen inceleyin."
  },
  {
    title: "Ücretsiz Önizleme",
    description: "Tüm CV şablonlarını ücretsiz olarak görüntüleyebilirsiniz."
  },
  {
    title: "Modern Tasarım",
    description: "Mobil uyumlu, temiz ve profesyonel görünümler sunar."
  }
];

export default function HomePage() {
  const featuredTemplates = templates.slice(0, 3);
  const featuredGuides = guides.slice(0, 3);

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700">
              50 profesyonel CV şablonu
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
              ToolvantaCV ile sade, modern ve hızlı CV şablonları keşfedin
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Toolvanta’dan bağımsız çalışan ToolvantaCV, farklı kariyer seviyeleri için hazırlanmış
              CV ve resume şablonlarını tek yerde sunar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/builder"
                className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                CV Builder'ı Aç
              </Link>
              <Link
                href="/templates"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                Şablonları Gör
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {featuredTemplates.map((template) => (
              <div key={template.slug} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-slate-950">{template.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{template.category}</p>
                  </div>
                  <span
                    className="h-9 w-9 rounded-lg"
                    style={{ backgroundColor: template.style.secondary }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-slate-950">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
        <AdPlaceholder label="Ana sayfa mobil reklam alanı" placement="mobile" />
        <AdPlaceholder label="Ana sayfa masaüstü reklam alanı" placement="desktop" />
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase text-brand-700">Öne çıkanlar</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-950">İlk bakışta profesyonel şablonlar</h2>
            </div>
            <Link href="/templates" className="text-sm font-bold text-brand-700 hover:text-brand-900">
              Tümünü görüntüle
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-brand-700">CV rehberleri</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Başvurunuzu güçlendiren yazılar</h2>
          </div>
          <Link href="/guides" className="text-sm font-bold text-brand-700 hover:text-brand-900">
            Tüm rehberleri oku
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <p className="text-xs font-bold uppercase text-brand-700">{guide.category}</p>
              <h3 className="mt-3 text-xl font-bold text-slate-950">{guide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-brand-100 bg-brand-50 p-6 text-brand-900">
          <p className="text-lg font-bold">CV Builder artık canlı önizleme ve PDF indirme akışı sunar.</p>
          <p className="mt-2 text-sm leading-6">
            Şablon seçin, bilgilerinizi girin, sağ panelde sonucu görün ve hazır olduğunda PDF olarak indirin veya yazdırın.
          </p>
        </div>
      </section>
    </>
  );
}
