export type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationItem = {
  id: string;
  school: string;
  department: string;
  startDate: string;
  endDate: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export type LanguageItem = {
  id: string;
  name: string;
  level: string;
};

export type ResumeData = {
  fullName: string;
  title: string;
  about: string;
  phone: string;
  email: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  certifications: string[];
  projects: ProjectItem[];
  languages: LanguageItem[];
};

export const initialResumeData: ResumeData = {
  fullName: "Ayşe Demir",
  title: "Product Manager",
  about:
    "Kullanıcı araştırması, ürün stratejisi ve veri odaklı karar alma konularında deneyimli; ekipleri ortak hedefe hizalayan sonuç odaklı bir profesyonel.",
  phone: "+90 555 000 00 00",
  email: "ayse.demir@email.com",
  location: "İstanbul, Türkiye",
  website: "https://portfolio.example",
  linkedin: "linkedin.com/in/aysedemir",
  github: "github.com/aysedemir",
  experiences: [
    {
      id: "exp-1",
      company: "Nova Digital",
      position: "Product Manager",
      startDate: "2022",
      endDate: "Devam",
      description:
        "B2B SaaS ürününde yol haritası, kullanıcı araştırması ve sprint önceliklendirme süreçlerini yönettim. Aktivasyon oranını ölçen yeni onboarding akışıyla deneme kullanıcı dönüşümünü artırdım."
    }
  ],
  education: [
    {
      id: "edu-1",
      school: "Boğaziçi Üniversitesi",
      department: "İşletme",
      startDate: "2016",
      endDate: "2020"
    }
  ],
  skills: ["Ürün Stratejisi", "Roadmap", "User Research", "SQL", "Figma"],
  certifications: ["Agile Product Management", "Google Analytics"],
  projects: [
    {
      id: "project-1",
      name: "Self-Serve Onboarding",
      description:
        "Yeni kullanıcı aktivasyonunu ölçen ve ürün içi rehberleri kişiselleştiren onboarding deneyimi.",
      url: "portfolio.example/onboarding"
    }
  ],
  languages: [
    { id: "lang-1", name: "Türkçe", level: "Ana dil" },
    { id: "lang-2", name: "İngilizce", level: "C1" }
  ]
};

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function createExperienceItem(): ExperienceItem {
  return {
    id: createId("exp"),
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: ""
  };
}

export function createEducationItem(): EducationItem {
  return {
    id: createId("edu"),
    school: "",
    department: "",
    startDate: "",
    endDate: ""
  };
}

export function createProjectItem(): ProjectItem {
  return {
    id: createId("project"),
    name: "",
    description: "",
    url: ""
  };
}

export function createLanguageItem(): LanguageItem {
  return {
    id: createId("lang"),
    name: "",
    level: ""
  };
}
