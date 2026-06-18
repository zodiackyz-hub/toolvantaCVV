import type { AtsAnalysis } from "@/lib/resume-analysis";

type AtsScoreAnalyzerProps = {
  analysis: AtsAnalysis;
};

function scoreColor(score: number) {
  if (score >= 85) return "bg-emerald-500";
  if (score >= 70) return "bg-brand-600";
  if (score >= 50) return "bg-amber-500";
  return "bg-rose-500";
}

function scoreTextColor(score: number) {
  if (score >= 85) return "text-emerald-700";
  if (score >= 70) return "text-brand-700";
  if (score >= 50) return "text-amber-700";
  return "text-rose-700";
}

export function AtsScoreAnalyzer({ analysis }: AtsScoreAnalyzerProps) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-brand-700">ATS Score</p>
          <h2 className={`mt-1 text-3xl font-extrabold ${scoreTextColor(analysis.score)}`}>
            {analysis.score}/100
          </h2>
        </div>
        <div className="text-right text-xs font-semibold text-slate-500">
          <p>{analysis.wordCount} words</p>
          <p>{analysis.keywordDensity}% keyword fit</p>
        </div>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${scoreColor(analysis.score)}`}
          style={{ width: `${analysis.score}%` }}
          aria-label={`ATS Score ${analysis.score} out of 100`}
        />
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold text-slate-950">Missing fields</h3>
          {analysis.missing.length ? (
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {analysis.missing.map((item) => (
                <li key={item} className="rounded-lg bg-rose-50 px-3 py-2 text-rose-800">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
              No critical ATS gaps detected.
            </p>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-950">Improvement suggestions</h3>
          {analysis.suggestions.length ? (
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              {analysis.suggestions.map((item) => (
                <li key={item} className="rounded-lg bg-brand-50 px-3 py-2 text-brand-900">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800">
              Your resume is well optimized for the current checks.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
