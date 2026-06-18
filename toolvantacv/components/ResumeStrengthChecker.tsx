import type { StrengthAnalysis, CheckStatus } from "@/lib/resume-analysis";

type ResumeStrengthCheckerProps = {
  analysis: StrengthAnalysis;
};

function statusClass(status: CheckStatus) {
  if (status === "Passed") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (status === "Warning") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-rose-50 text-rose-700 border-rose-200";
}

function ratingClass(rating: StrengthAnalysis["rating"]) {
  if (rating === "Excellent") return "text-emerald-700";
  if (rating === "Good") return "text-brand-700";
  if (rating === "Average") return "text-amber-700";
  return "text-rose-700";
}

export function ResumeStrengthChecker({ analysis }: ResumeStrengthCheckerProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-brand-700">Resume Strength Checker</p>
          <h2 className={`mt-1 text-2xl font-extrabold ${ratingClass(analysis.rating)}`}>
            {analysis.rating}
          </h2>
        </div>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
          Live
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {analysis.checks.map((check) => (
          <div key={check.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-slate-950">{check.title}</h3>
              <span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${statusClass(check.status)}`}>
                {check.status}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{check.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
