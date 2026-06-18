import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sayfa Bulunamadı",
  description:
    "ToolvantaCV üzerinde aradığınız sayfa bulunamadı. CV şablonları ve rehber sayfalarına güvenli şekilde geri dönebilirsiniz.",
  path: "/404"
});

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase text-brand-700">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-slate-950">Sayfa bulunamadı</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        Aradığınız sayfa taşınmış veya hiç oluşturulmamış olabilir.
      </p>
      <Link
        href="/templates"
        className="mt-8 inline-flex rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      >
        Şablonları Gör
      </Link>
    </section>
  );
}
