import type { CSSProperties } from "react";
import type { ResumeTemplate } from "@/data/templates";

type TemplatePreviewProps = {
  template: ResumeTemplate;
  size?: "card" | "large";
};

export function TemplatePreview({ template, size = "card" }: TemplatePreviewProps) {
  const isLarge = size === "large";
  const style = {
    "--resume-bg": template.style.background,
    color: template.style.text
  } as CSSProperties;

  return (
    <div
      className={`resume-paper overflow-hidden rounded-lg border border-slate-200 shadow-sm ${
        isLarge ? "min-h-[520px] p-7 sm:p-9" : "aspect-[4/5] p-4"
      }`}
      style={style}
      aria-label={`${template.name} CV önizlemesi`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className={`${isLarge ? "mb-4 h-2 w-24" : "mb-3 h-1.5 w-16"} rounded-full`}
              style={{ backgroundColor: template.style.accent }}
            />
            <p className={`${isLarge ? "text-3xl" : "text-base"} font-bold leading-tight`}>{template.preview.headline}</p>
            <p className={`${isLarge ? "mt-2 text-base" : "mt-1 text-[11px]"} font-medium text-slate-500`}>
              {template.preview.role}
            </p>
          </div>
          <div
            className={`${isLarge ? "h-16 w-16" : "h-9 w-9"} shrink-0 rounded-lg`}
            style={{ backgroundColor: template.style.secondary }}
          />
        </div>

        <div className={`${isLarge ? "mt-8 grid gap-6 sm:grid-cols-[1fr_1.4fr]" : "mt-5 grid gap-3"}`}>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="mb-1 h-2 rounded-full bg-slate-200" />
                <div className="h-2 w-2/3 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>
          <div className={`${isLarge ? "space-y-5" : "space-y-3"}`}>
            {template.preview.sections.map((section, index) => (
              <div key={section}>
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className={`${isLarge ? "h-3 w-3" : "h-2 w-2"} rounded-full`}
                    style={{ backgroundColor: index === 0 ? template.style.accent : template.style.secondary }}
                  />
                  <span className={`${isLarge ? "text-sm" : "text-[10px]"} font-semibold uppercase text-slate-500`}>
                    {section}
                  </span>
                </div>
                <div className={`${isLarge ? "space-y-2" : "space-y-1.5"}`}>
                  <div className="h-2 rounded-full bg-slate-200" />
                  <div className="h-2 w-11/12 rounded-full bg-slate-100" />
                  <div className="h-2 w-3/4 rounded-full bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5">
          <div className="h-1.5 rounded-full" style={{ backgroundColor: template.style.accent }} />
        </div>
      </div>
    </div>
  );
}
