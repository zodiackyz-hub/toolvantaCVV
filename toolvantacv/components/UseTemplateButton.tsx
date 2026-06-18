import Link from "next/link";

type UseTemplateButtonProps = {
  templateName: string;
  templateSlug: string;
};

export function UseTemplateButton({ templateName, templateSlug }: UseTemplateButtonProps) {
  return (
    <div id="use" className="space-y-3">
      <Link
        href={`/builder?template=${templateSlug}`}
        className="inline-flex w-full justify-center rounded-lg bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:w-auto"
      >
        Use This Template
      </Link>
      <p className="rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900">
        {templateName} opens in the CV Builder with live preview, ATS analysis, and PDF export.
      </p>
    </div>
  );
}
