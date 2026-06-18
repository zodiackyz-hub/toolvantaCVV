import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim",
  description: "ToolvantaCV ile iletişime geçin. Şablon önerileri ve geri bildirimler için basit iletişim formu.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase text-brand-700">İletişim</p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-950">Bize mesaj gönderin</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Şablon önerileri, geliştirme fikirleri veya genel geri bildirimler için formu kullanabilirsiniz.
        </p>
        <div className="mt-6 rounded-lg border border-brand-100 bg-brand-50 p-5 text-sm leading-6 text-brand-900">
          Form şu an frontend-only çalışır. Gerçek gönderim ve bildirim sistemi sonraki aşamada eklenebilir.
          <br />
          Destek adresi: <a href={`mailto:${siteConfig.supportEmail}`} className="font-bold underline">{siteConfig.supportEmail}</a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
