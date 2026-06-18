"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AtsScoreAnalyzer } from "@/components/AtsScoreAnalyzer";
import { ResumeDocument } from "@/components/ResumeDocument";
import { ResumeStrengthChecker } from "@/components/ResumeStrengthChecker";
import {
  createEducationItem,
  createExperienceItem,
  createLanguageItem,
  createProjectItem,
  initialResumeData,
  type EducationItem,
  type ExperienceItem,
  type LanguageItem,
  type ProjectItem,
  type ResumeData
} from "@/data/resumeBuilder";
import type { ResumeTemplate } from "@/data/templates";
import { analyzeAtsScore, analyzeResumeStrength } from "@/lib/resume-analysis";

type ResumeBuilderProps = {
  templates: ResumeTemplate[];
  initialTemplateSlug: string;
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-900">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4
}: FieldProps & { rows?: number }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-900">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="resize-y rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ResumeBuilder({ templates, initialTemplateSlug }: ResumeBuilderProps) {
  const [selectedTemplateSlug, setSelectedTemplateSlug] = useState(initialTemplateSlug);
  const [data, setData] = useState<ResumeData>(initialResumeData);
  const [status, setStatus] = useState("");
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.slug === selectedTemplateSlug) ?? templates[0],
    [selectedTemplateSlug, templates]
  );
  const atsAnalysis = useMemo(() => analyzeAtsScore(data), [data]);
  const strengthAnalysis = useMemo(() => analyzeResumeStrength(data), [data]);

  useEffect(() => {
    const templateFromUrl = new URLSearchParams(window.location.search).get("template");

    if (templateFromUrl && templates.some((template) => template.slug === templateFromUrl)) {
      setSelectedTemplateSlug(templateFromUrl);
    }
  }, [templates]);

  function updateData<K extends keyof ResumeData>(field: K, value: ResumeData[K]) {
    setData((current) => ({
      ...current,
      [field]: value
    }));
  }

  function updateExperience(id: string, field: keyof ExperienceItem, value: string) {
    setData((current) => ({
      ...current,
      experiences: current.experiences.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    }));
  }

  function updateEducation(id: string, field: keyof EducationItem, value: string) {
    setData((current) => ({
      ...current,
      education: current.education.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    }));
  }

  function updateProject(id: string, field: keyof ProjectItem, value: string) {
    setData((current) => ({
      ...current,
      projects: current.projects.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    }));
  }

  function updateLanguage(id: string, field: keyof LanguageItem, value: string) {
    setData((current) => ({
      ...current,
      languages: current.languages.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    }));
  }

  function resetBuilder() {
    setData(initialResumeData);
    setSelectedTemplateSlug(initialTemplateSlug);
    setStatus("Builder reset to the starter resume.");
  }

  async function downloadPdf() {
    if (!resumeRef.current) {
      return;
    }

    setStatus("Preparing PDF...");
    try {
      const [{ default: html2canvas }, { default: JsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf")
      ]);
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true
      });
      const pdf = new JsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageHeight = (canvas.height * pageWidth) / canvas.width;
      const image = canvas.toDataURL("image/png");

      let heightLeft = imageHeight;
      let position = 0;
      pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;
        pdf.addPage();
        pdf.addImage(image, "PNG", 0, position, pageWidth, imageHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `${data.fullName || "toolvantacv"}-${selectedTemplate.slug}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      pdf.save(`${fileName || "toolvantacv-resume"}.pdf`);
      setStatus("PDF downloaded.");
    } catch {
      setStatus("PDF could not be prepared. Use Print and save as PDF from your browser.");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-start">
      <form className="no-print rounded-lg border border-slate-200 bg-white p-5 shadow-sm" onSubmit={(event) => event.preventDefault()}>
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-slate-950">Resume details</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Fill out the form and the live preview, ATS Score, and Resume Strength Checker update automatically.
          </p>
        </div>

        <div className="grid gap-6">
          <section className="grid gap-4">
            <h3 className="text-base font-bold text-slate-950">Template</h3>
            <label className="grid gap-2 text-sm font-semibold text-slate-900">
              Selected template
              <select
                value={selectedTemplateSlug}
                onChange={(event) => setSelectedTemplateSlug(event.target.value)}
                className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
              >
                {templates.map((template) => (
                  <option key={template.slug} value={template.slug}>
                    {template.name} - {template.category}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <h3 className="text-base font-bold text-slate-950">Personal Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" value={data.fullName} onChange={(value) => updateData("fullName", value)} />
              <Field label="Job Title" value={data.title} onChange={(value) => updateData("title", value)} />
              <Field label="Phone" value={data.phone} onChange={(value) => updateData("phone", value)} />
              <Field label="Email" type="email" value={data.email} onChange={(value) => updateData("email", value)} />
              <Field label="Location" value={data.location} onChange={(value) => updateData("location", value)} />
              <Field label="Website" value={data.website} onChange={(value) => updateData("website", value)} />
              <Field label="LinkedIn" value={data.linkedin} onChange={(value) => updateData("linkedin", value)} />
              <Field label="GitHub" value={data.github} onChange={(value) => updateData("github", value)} />
            </div>
            <TextArea label="Professional Summary" value={data.about} onChange={(value) => updateData("about", value)} rows={5} />
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-950">Work Experience</h3>
              <button
                type="button"
                onClick={() => updateData("experiences", [...data.experiences, createExperienceItem()])}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
              >
                Add Experience
              </button>
            </div>
            {data.experiences.map((experience) => (
              <div key={experience.id} className="grid gap-3 rounded-lg bg-slate-50 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Company" value={experience.company} onChange={(value) => updateExperience(experience.id, "company", value)} />
                  <Field label="Position" value={experience.position} onChange={(value) => updateExperience(experience.id, "position", value)} />
                  <Field label="Start Date" value={experience.startDate} onChange={(value) => updateExperience(experience.id, "startDate", value)} />
                  <Field label="End Date" value={experience.endDate} onChange={(value) => updateExperience(experience.id, "endDate", value)} />
                </div>
                <TextArea label="Description" value={experience.description} onChange={(value) => updateExperience(experience.id, "description", value)} rows={4} />
                {data.experiences.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => updateData("experiences", data.experiences.filter((item) => item.id !== experience.id))}
                    className="w-fit text-sm font-bold text-rose-700"
                  >
                    Remove Experience
                  </button>
                ) : null}
              </div>
            ))}
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-950">Education</h3>
              <button
                type="button"
                onClick={() => updateData("education", [...data.education, createEducationItem()])}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
              >
                Add Education
              </button>
            </div>
            {data.education.map((education) => (
              <div key={education.id} className="grid gap-3 rounded-lg bg-slate-50 p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="School" value={education.school} onChange={(value) => updateEducation(education.id, "school", value)} />
                  <Field label="Department" value={education.department} onChange={(value) => updateEducation(education.id, "department", value)} />
                  <Field label="Start" value={education.startDate} onChange={(value) => updateEducation(education.id, "startDate", value)} />
                  <Field label="End" value={education.endDate} onChange={(value) => updateEducation(education.id, "endDate", value)} />
                </div>
                {data.education.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => updateData("education", data.education.filter((item) => item.id !== education.id))}
                    className="w-fit text-sm font-bold text-rose-700"
                  >
                    Remove Education
                  </button>
                ) : null}
              </div>
            ))}
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <h3 className="text-base font-bold text-slate-950">Skills and Certifications</h3>
            <TextArea
              label="Skills"
              value={data.skills.join("\n")}
              onChange={(value) => updateData("skills", splitLines(value))}
              rows={5}
              placeholder="Write one skill per line"
            />
            <TextArea
              label="Certifications"
              value={data.certifications.join("\n")}
              onChange={(value) => updateData("certifications", splitLines(value))}
              rows={4}
              placeholder="Write one certification per line"
            />
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-950">Projects</h3>
              <button
                type="button"
                onClick={() => updateData("projects", [...data.projects, createProjectItem()])}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
              >
                Add Project
              </button>
            </div>
            {data.projects.map((project) => (
              <div key={project.id} className="grid gap-3 rounded-lg bg-slate-50 p-4">
                <Field label="Project Name" value={project.name} onChange={(value) => updateProject(project.id, "name", value)} />
                <TextArea label="Project Description" value={project.description} onChange={(value) => updateProject(project.id, "description", value)} rows={3} />
                <Field label="Project URL" value={project.url} onChange={(value) => updateProject(project.id, "url", value)} />
                {data.projects.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => updateData("projects", data.projects.filter((item) => item.id !== project.id))}
                    className="w-fit text-sm font-bold text-rose-700"
                  >
                    Remove Project
                  </button>
                ) : null}
              </div>
            ))}
          </section>

          <section className="grid gap-4 border-t border-slate-100 pt-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-bold text-slate-950">Languages</h3>
              <button
                type="button"
                onClick={() => updateData("languages", [...data.languages, createLanguageItem()])}
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
              >
                Add Language
              </button>
            </div>
            {data.languages.map((language) => (
              <div key={language.id} className="grid gap-3 rounded-lg bg-slate-50 p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
                <Field label="Language" value={language.name} onChange={(value) => updateLanguage(language.id, "name", value)} />
                <Field label="Level" value={language.level} onChange={(value) => updateLanguage(language.id, "level", value)} />
                {data.languages.length > 1 ? (
                  <button
                    type="button"
                    onClick={() => updateData("languages", data.languages.filter((item) => item.id !== language.id))}
                    className="text-sm font-bold text-rose-700 sm:pb-2"
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
          </section>
        </div>
      </form>

      <aside className="space-y-6 lg:sticky lg:top-24">
        <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div>
            <p className="text-sm font-bold text-slate-950">Live preview</p>
            <p className="mt-1 text-xs text-slate-500">{selectedTemplate.name}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={downloadPdf}
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Download PDF
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              Print
            </button>
            <button
              type="button"
              onClick={resetBuilder}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setStatus(`${selectedTemplate.name} is active for this resume.`)}
              className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700 transition hover:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              Use This Template
            </button>
          </div>
          {status ? <p className="basis-full text-xs font-semibold text-slate-500">{status}</p> : null}
          <Link href="/cover-letter-generator" className="basis-full text-xs font-bold text-brand-700 hover:text-brand-900">
            Generate a matching cover letter
          </Link>
        </div>

        <div ref={resumeRef}>
          <ResumeDocument id="resume-export" data={data} template={selectedTemplate} />
        </div>

        <div className="no-print grid gap-6">
          <AtsScoreAnalyzer analysis={atsAnalysis} />
          <ResumeStrengthChecker analysis={strengthAnalysis} />
        </div>
      </aside>
    </div>
  );
}
