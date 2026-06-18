import type { LegalPageContent } from "@/data/legalPages";

type LegalPageProps = {
  page: LegalPageContent;
};

export function LegalPage({ page }: LegalPageProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-bold uppercase text-brand-700">ToolvantaCV</p>
      <h1 className="mt-2 text-4xl font-extrabold text-slate-950">{page.title}</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">{page.description}</p>
      <p className="mt-3 text-sm text-slate-500">Son güncelleme: {page.updatedAt}</p>

      <div className="mt-10 space-y-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-slate-950">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-7 text-slate-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
