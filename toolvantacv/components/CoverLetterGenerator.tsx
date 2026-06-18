"use client";

import { FormEvent, useMemo, useState } from "react";
import { generateCoverLetter, type CoverLetterInput, type CoverLetterTone } from "@/lib/cover-letter";

const tones: CoverLetterTone[] = ["Professional", "Friendly", "Confident", "Formal"];

const initialInput: CoverLetterInput = {
  fullName: "",
  jobTitle: "",
  companyName: "",
  industry: "",
  experienceLevel: "",
  keySkills: "",
  motivation: "",
  tone: "Professional"
};

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function Field({ label, value, onChange, placeholder }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-900">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}

export function CoverLetterGenerator() {
  const [input, setInput] = useState<CoverLetterInput>(initialInput);
  const [generated, setGenerated] = useState("");
  const [status, setStatus] = useState("");
  const preview = useMemo(() => generated || generateCoverLetter(input), [generated, input]);

  function updateInput<K extends keyof CoverLetterInput>(field: K, value: CoverLetterInput[K]) {
    setInput((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGenerated(generateCoverLetter(input));
    setStatus("Cover letter generated.");
  }

  async function copyText() {
    await navigator.clipboard.writeText(preview);
    setStatus("Copied to clipboard.");
  }

  function downloadTxt() {
    const blob = new Blob([preview], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${input.fullName || "toolvantacv"}-cover-letter.txt`
      .toLowerCase()
      .replace(/[^a-z0-9.]+/g, "-");
    link.click();
    URL.revokeObjectURL(url);
    setStatus("TXT downloaded.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)]">
      <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-slate-950">Cover letter details</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            No AI API or backend is used. The generator creates a clean cover letter with a client-side template.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" value={input.fullName} onChange={(value) => updateInput("fullName", value)} />
            <Field label="Job title" value={input.jobTitle} onChange={(value) => updateInput("jobTitle", value)} />
            <Field label="Company name" value={input.companyName} onChange={(value) => updateInput("companyName", value)} />
            <Field label="Industry" value={input.industry} onChange={(value) => updateInput("industry", value)} />
          </div>

          <Field
            label="Experience level"
            value={input.experienceLevel}
            onChange={(value) => updateInput("experienceLevel", value)}
            placeholder="Entry-level, 3+ years, senior, manager..."
          />
          <Field
            label="Key skills"
            value={input.keySkills}
            onChange={(value) => updateInput("keySkills", value)}
            placeholder="Project management, SQL, customer research..."
          />
          <label className="grid gap-2 text-sm font-semibold text-slate-900">
            Motivation
            <textarea
              value={input.motivation}
              onChange={(event) => updateInput("motivation", event.target.value)}
              rows={5}
              placeholder="Why are you interested in this company or role?"
              className="resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-900">
            Tone
            <select
              value={input.tone}
              onChange={(event) => updateInput("tone", event.target.value as CoverLetterTone)}
              className="rounded-lg border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            >
              {tones.map((tone) => (
                <option key={tone} value={tone}>
                  {tone}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Generate
          </button>
        </div>
      </form>

      <section id="cover-letter-output" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase text-brand-700">Generated cover letter</p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-950">Preview</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyText}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
            >
              Copy
            </button>
            <button
              type="button"
              onClick={downloadTxt}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 hover:border-brand-500 hover:text-brand-700"
            >
              Download as TXT
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700"
            >
              Print
            </button>
          </div>
          {status ? <p className="basis-full text-xs font-bold text-slate-500">{status}</p> : null}
        </div>
        <pre className="whitespace-pre-wrap rounded-lg bg-slate-50 p-5 text-sm leading-7 text-slate-700">
          {preview}
        </pre>
      </section>
    </div>
  );
}
