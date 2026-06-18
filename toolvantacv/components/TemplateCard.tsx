import Link from "next/link";
import type { ResumeTemplate } from "@/data/templates";
import { TemplatePreview } from "@/components/TemplatePreview";

type TemplateCardProps = {
  template: ResumeTemplate;
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <TemplatePreview template={template} />
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-950">{template.name}</h2>
          <div className="flex flex-wrap justify-end gap-2">
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {template.category}
            </span>
            {template.atsCompatible ? (
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                ATS
              </span>
            ) : null}
          </div>
        </div>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{template.description}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link
            href={`/templates/${template.slug}`}
            className="rounded-lg border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            Önizle
          </Link>
          <Link
            href={`/builder?template=${template.slug}`}
            className="rounded-lg bg-brand-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Kullan
          </Link>
        </div>
      </div>
    </article>
  );
}
