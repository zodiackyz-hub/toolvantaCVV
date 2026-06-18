import type { CSSProperties, ReactNode } from "react";
import type { ResumeData } from "@/data/resumeBuilder";
import type { ResumeTemplate } from "@/data/templates";

type ResumeDocumentProps = {
  data: ResumeData;
  template: ResumeTemplate;
  id?: string;
};

function hasText(value: string) {
  return value.trim().length > 0;
}

function Section({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="break-inside-avoid">
      <h3 className="mb-3 border-b border-slate-200 pb-2 text-xs font-extrabold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      {children}
    </section>
  );
}

export function ResumeDocument({ data, template, id }: ResumeDocumentProps) {
  const style = {
    "--resume-accent": template.style.accent,
    "--resume-secondary": template.style.secondary,
    "--resume-bg": template.style.background,
    color: template.style.text
  } as CSSProperties;

  const contactItems = [
    data.phone,
    data.email,
    data.location,
    data.website,
    data.linkedin,
    data.github
  ].filter(hasText);

  return (
    <article
      id={id}
      className="resume-document mx-auto w-full max-w-[820px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
      style={style}
    >
      <header className="grid gap-6 p-8 sm:grid-cols-[1fr_220px]" style={{ backgroundColor: template.style.background }}>
        <div>
          <div className="mb-5 h-2 w-24 rounded-full" style={{ backgroundColor: template.style.accent }} />
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950">{data.fullName || "Ad Soyad"}</h1>
          <p className="mt-2 text-lg font-semibold" style={{ color: template.style.accent }}>
            {data.title || "Meslek Ünvanı"}
          </p>
          {hasText(data.about) ? (
            <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-700">{data.about}</p>
          ) : null}
        </div>
        <aside className="rounded-lg bg-white/85 p-4 text-sm shadow-sm">
          <p className="mb-3 text-xs font-extrabold uppercase text-slate-500">İletişim</p>
          <div className="grid gap-2 text-slate-700">
            {contactItems.length ? contactItems.map((item) => <p key={item}>{item}</p>) : <p>İletişim bilgileri</p>}
          </div>
        </aside>
      </header>

      <div className="grid gap-8 p-8 lg:grid-cols-[1.35fr_0.8fr]">
        <div className="space-y-8">
          <Section title="Deneyim">
            <div className="space-y-5">
              {data.experiences.map((experience) => (
                <div key={experience.id} className="break-inside-avoid">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-950">{experience.position || "Pozisyon"}</h4>
                      <p className="text-sm font-semibold" style={{ color: template.style.accent }}>
                        {experience.company || "Şirket"}
                      </p>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">
                      {[experience.startDate, experience.endDate].filter(hasText).join(" - ") || "Tarih"}
                    </p>
                  </div>
                  {hasText(experience.description) ? (
                    <p className="mt-2 whitespace-pre-line text-sm leading-7 text-slate-600">{experience.description}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Section>

          <Section title="Eğitim">
            <div className="space-y-4">
              {data.education.map((education) => (
                <div key={education.id} className="break-inside-avoid">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-950">{education.school || "Okul"}</h4>
                      <p className="text-sm text-slate-600">{education.department || "Bölüm"}</p>
                    </div>
                    <p className="text-xs font-semibold text-slate-500">
                      {[education.startDate, education.endDate].filter(hasText).join(" - ") || "Tarih"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projeler">
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id} className="break-inside-avoid">
                  <h4 className="font-bold text-slate-950">{project.name || "Proje adı"}</h4>
                  {hasText(project.description) ? (
                    <p className="mt-1 whitespace-pre-line text-sm leading-7 text-slate-600">{project.description}</p>
                  ) : null}
                  {hasText(project.url) ? <p className="mt-1 text-xs text-slate-500">{project.url}</p> : null}
                </div>
              ))}
            </div>
          </Section>
        </div>

        <aside className="space-y-8">
          <Section title="Yetenekler">
            <div className="flex flex-wrap gap-2">
              {(data.skills.length ? data.skills : ["Yetenek"]).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ backgroundColor: template.style.secondary, color: template.style.text }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Sertifikalar">
            <ul className="grid gap-2 text-sm text-slate-700">
              {(data.certifications.length ? data.certifications : ["Sertifika"]).map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </Section>

          <Section title="Diller">
            <div className="grid gap-3 text-sm">
              {data.languages.map((language) => (
                <div key={language.id} className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-slate-800">{language.name || "Dil"}</span>
                  <span className="text-slate-500">{language.level || "Seviye"}</span>
                </div>
              ))}
            </div>
          </Section>
        </aside>
      </div>
    </article>
  );
}
