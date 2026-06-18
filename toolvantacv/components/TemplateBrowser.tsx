"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { TemplateCard } from "@/components/TemplateCard";
import { categories, type ResumeTemplate, type TemplateCategory } from "@/data/templates";

type TemplateBrowserProps = {
  templates: ResumeTemplate[];
  initialCategory?: TemplateCategory | "Tümü";
};

const quickFilters = [
  { label: "ATS Compatible", value: "ats" },
  { label: "Modern", value: "Modern" },
  { label: "Student", value: "Student" },
  { label: "Professional", value: "Professional" }
] as const;

export function TemplateBrowser({ templates, initialCategory = "Tümü" }: TemplateBrowserProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | "Tümü">(initialCategory);
  const [atsOnly, setAtsOnly] = useState(false);
  const [quickCategory, setQuickCategory] = useState<TemplateCategory | "">(initialCategory === "Tümü" ? "" : initialCategory);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const search = params.get("search");
    const ats = params.get("ats");

    if (category && categories.includes(category as TemplateCategory)) {
      setSelectedCategory(category as TemplateCategory);
    }

    if (search) {
      setQuery(search);
    }

    if (ats === "true") {
      setAtsOnly(true);
    }
  }, []);

  const visibleTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return templates.filter((template) => {
      const categoryMatch = selectedCategory === "Tümü" || template.category === selectedCategory;
      const quickMatch = !quickCategory || template.category === quickCategory;
      const atsMatch = !atsOnly || template.atsCompatible;
      const searchTarget = [
        template.name,
        template.category,
        template.description,
        template.useCase,
        template.bestFor.join(" "),
        template.preview.sections.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return categoryMatch && quickMatch && atsMatch && (!normalizedQuery || searchTarget.includes(normalizedQuery));
    });
  }, [atsOnly, query, quickCategory, selectedCategory, templates]);

  return (
    <div>
      <div className="mb-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <label className="grid gap-2 text-sm font-semibold text-slate-900">
          Şablon ara
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Örn: software, student, ATS, minimal"
            className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
        </label>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-900">Kategori filtreleri</p>
            <div className="flex flex-wrap gap-2" aria-label="Kategori filtreleri">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Tümü");
                  setQuickCategory("");
                }}
                className={`rounded-lg border px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                  selectedCategory === "Tümü" && !quickCategory
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-700"
                }`}
              >
                Tümü
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setQuickCategory("");
                  }}
                  className={`rounded-lg border px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    selectedCategory === category && !quickCategory
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <label className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">
            <input
              type="checkbox"
              checked={atsOnly}
              onChange={(event) => setAtsOnly(event.target.checked)}
              className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            ATS Compatible
          </label>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {quickFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => {
                if (filter.value === "ats") {
                  setAtsOnly((current) => !current);
                  return;
                }

                setSelectedCategory("Tümü");
                setQuickCategory((current) => (current === filter.value ? "" : filter.value));
              }}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition ${
                (filter.value === "ats" && atsOnly) || quickCategory === filter.value
                  ? "border-brand-600 bg-brand-50 text-brand-700"
                  : "border-slate-300 bg-white text-slate-600 hover:border-brand-500 hover:text-brand-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 text-sm font-semibold text-slate-600">
        {visibleTemplates.length} şablon gösteriliyor
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTemplates.map((template, index) => (
          <Fragment key={template.slug}>
            <TemplateCard template={template} />
            {index === 8 ? (
              <div className="sm:col-span-2 lg:col-span-3">
                <AdPlaceholder label="Şablon listesi içerik arası reklam alanı" />
              </div>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
