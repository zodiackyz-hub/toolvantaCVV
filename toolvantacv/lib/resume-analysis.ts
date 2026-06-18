import type { ResumeData } from "@/data/resumeBuilder";

export type CheckStatus = "Passed" | "Warning" | "Missing";
export type StrengthRating = "Weak" | "Average" | "Good" | "Excellent";

export type AtsAnalysis = {
  score: number;
  missing: string[];
  suggestions: string[];
  wordCount: number;
  keywordDensity: number;
};

export type StrengthCheck = {
  title: string;
  status: CheckStatus;
  detail: string;
};

export type StrengthAnalysis = {
  rating: StrengthRating;
  checks: StrengthCheck[];
};

const actionVerbs = [
  "achieved",
  "analyzed",
  "built",
  "coordinated",
  "created",
  "delivered",
  "designed",
  "developed",
  "drove",
  "improved",
  "increased",
  "launched",
  "led",
  "managed",
  "optimized",
  "reduced",
  "yönettim",
  "geliştirdim",
  "analiz",
  "artırdım",
  "tasarladım",
  "oluşturdum",
  "iyileştirdim",
  "koordine"
];

const keywordHints = [
  "strategy",
  "analysis",
  "management",
  "leadership",
  "project",
  "product",
  "sales",
  "marketing",
  "data",
  "customer",
  "research",
  "reporting",
  "growth",
  "operations",
  "strateji",
  "analiz",
  "yönetim",
  "proje",
  "müşteri",
  "raporlama",
  "büyüme",
  "operasyon"
];

function hasText(value: string) {
  return value.trim().length > 0;
}

function getResumeText(data: ResumeData) {
  return [
    data.fullName,
    data.title,
    data.about,
    data.phone,
    data.email,
    data.location,
    data.website,
    data.linkedin,
    data.github,
    data.experiences.map((item) => [item.company, item.position, item.description].join(" ")).join(" "),
    data.education.map((item) => [item.school, item.department].join(" ")).join(" "),
    data.skills.join(" "),
    data.certifications.join(" "),
    data.projects.map((item) => [item.name, item.description].join(" ")).join(" "),
    data.languages.map((item) => [item.name, item.level].join(" ")).join(" ")
  ].join(" ");
}

function countWords(text: string) {
  return text.split(/\s+/).map((word) => word.trim()).filter(Boolean).length;
}

function hasActionVerb(data: ResumeData) {
  const experienceText = data.experiences.map((item) => item.description).join(" ").toLowerCase();
  return actionVerbs.some((verb) => experienceText.includes(verb));
}

function hasMeasurableAchievement(data: ResumeData) {
  const experienceText = data.experiences.map((item) => item.description).join(" ");
  return /\d|%|yüzde|percent|increase|decrease|revenue|cost|growth|artış|azalış|gelir|maliyet/i.test(experienceText);
}

function keywordDensity(data: ResumeData) {
  const text = getResumeText(data).toLowerCase();
  const words = countWords(text);
  const matches = keywordHints.reduce((total, keyword) => total + (text.includes(keyword) ? 1 : 0), 0);
  return words === 0 ? 0 : Math.min(100, Math.round((matches / Math.max(words / 45, 1)) * 10));
}

function hasCompleteExperience(data: ResumeData) {
  return data.experiences.some(
    (item) => hasText(item.company) && hasText(item.position) && hasText(item.description)
  );
}

function hasCompleteEducation(data: ResumeData) {
  return data.education.some((item) => hasText(item.school) && hasText(item.department));
}

function hasProjectDetail(data: ResumeData) {
  return data.projects.some((item) => hasText(item.name) && hasText(item.description));
}

export function analyzeAtsScore(data: ResumeData): AtsAnalysis {
  const missing: string[] = [];
  const suggestions: string[] = [];
  let score = 0;
  const text = getResumeText(data);
  const wordCount = countWords(text);
  const density = keywordDensity(data);
  const checks: Array<{ passed: boolean; points: number; missing: string; suggestion: string }> = [
    {
      passed: hasText(data.email),
      points: 8,
      missing: "Email address",
      suggestion: "Add a professional email address."
    },
    {
      passed: hasText(data.phone),
      points: 7,
      missing: "Phone number",
      suggestion: "Add a reachable phone number."
    },
    {
      passed: hasText(data.linkedin),
      points: 7,
      missing: "LinkedIn profile",
      suggestion: "Add a LinkedIn profile URL."
    },
    {
      passed: data.about.trim().length >= 80,
      points: 10,
      missing: "Professional summary",
      suggestion: "Write a stronger professional summary with your role, experience, and value."
    },
    {
      passed: hasCompleteExperience(data),
      points: 12,
      missing: "Work experience",
      suggestion: "Include measurable achievements in your experience section."
    },
    {
      passed: hasCompleteEducation(data),
      points: 8,
      missing: "Education",
      suggestion: "Add your school and department information."
    },
    {
      passed: data.skills.length >= 5,
      points: 10,
      missing: "At least 5 skills",
      suggestion: "Add at least 5 relevant skills."
    },
    {
      passed: hasText(data.title),
      points: 7,
      missing: "Job title",
      suggestion: "Add a clear target job title."
    },
    {
      passed: hasActionVerb(data),
      points: 8,
      missing: "Action verbs",
      suggestion: "Start experience bullets with action verbs such as led, improved, built, or optimized."
    },
    {
      passed: wordCount >= 180,
      points: 8,
      missing: "Resume length is too short",
      suggestion: "Add more detail to your summary, experience, projects, or skills."
    },
    {
      passed: wordCount <= 900,
      points: 7,
      missing: "Resume length is too long",
      suggestion: "Shorten long paragraphs and focus on the strongest role-specific achievements."
    },
    {
      passed: density >= 35,
      points: 8,
      missing: "Keyword optimization",
      suggestion: "Add more role-specific keywords naturally across summary, skills, and experience."
    }
  ];

  checks.forEach((check) => {
    if (check.passed) {
      score += check.points;
      return;
    }

    missing.push(check.missing);
    suggestions.push(check.suggestion);
  });

  if (!hasMeasurableAchievement(data) && hasCompleteExperience(data)) {
    suggestions.push("Include measurable achievements in your experience section.");
    score = Math.max(0, score - 4);
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    missing,
    suggestions: Array.from(new Set(suggestions)),
    wordCount,
    keywordDensity: density
  };
}

function statusFromScore(score: number): StrengthRating {
  if (score >= 90) return "Excellent";
  if (score >= 75) return "Good";
  if (score >= 55) return "Average";
  return "Weak";
}

function makeCheck(title: string, passed: boolean, warning: boolean, passedDetail: string, warningDetail: string, missingDetail: string): StrengthCheck {
  if (passed) {
    return { title, status: "Passed", detail: passedDetail };
  }

  if (warning) {
    return { title, status: "Warning", detail: warningDetail };
  }

  return { title, status: "Missing", detail: missingDetail };
}

export function analyzeResumeStrength(data: ResumeData): StrengthAnalysis {
  const ats = analyzeAtsScore(data);
  const wordCount = ats.wordCount;
  const checks: StrengthCheck[] = [
    makeCheck(
      "Contact Information",
      hasText(data.email) && hasText(data.phone) && hasText(data.location),
      hasText(data.email) || hasText(data.phone),
      "Email, phone, and location are present.",
      "Add remaining contact details for a stronger first impression.",
      "Add email, phone, and location."
    ),
    makeCheck(
      "Professional Summary",
      data.about.trim().length >= 120,
      data.about.trim().length >= 50,
      "Summary is detailed enough to explain your value.",
      "Summary exists but should be more specific and outcome-focused.",
      "Add a professional summary."
    ),
    makeCheck(
      "Work Experience",
      hasCompleteExperience(data) && hasActionVerb(data),
      hasCompleteExperience(data),
      "Experience includes role context and action-oriented wording.",
      "Experience is present; add action verbs and measurable results.",
      "Add at least one complete work experience."
    ),
    makeCheck(
      "Education",
      hasCompleteEducation(data),
      data.education.some((item) => hasText(item.school) || hasText(item.department)),
      "Education details are complete.",
      "Education exists but needs school or department detail.",
      "Add education details."
    ),
    makeCheck(
      "Skills",
      data.skills.length >= 8,
      data.skills.length >= 5,
      "Skills section is strong and scannable.",
      "Skills section meets the minimum; add more role-specific skills.",
      "Add at least 5 relevant skills."
    ),
    makeCheck(
      "Projects",
      hasProjectDetail(data),
      data.projects.some((item) => hasText(item.name)),
      "Projects include useful detail.",
      "Project names are present; add outcomes or links.",
      "Add a project if it supports your target role."
    ),
    makeCheck(
      "Certifications",
      data.certifications.length >= 2,
      data.certifications.length === 1,
      "Certifications add credibility.",
      "One certification is present; add more if relevant.",
      "Add certifications when relevant."
    ),
    makeCheck(
      "Languages",
      data.languages.some((item) => hasText(item.name) && hasText(item.level)),
      data.languages.some((item) => hasText(item.name)),
      "Language levels are clear.",
      "Languages are listed; add proficiency levels.",
      "Add languages if they matter for the role."
    ),
    makeCheck(
      "Formatting",
      wordCount >= 180 && wordCount <= 900,
      wordCount > 0,
      "Resume length is within a healthy range.",
      wordCount < 180 ? "Resume is short; add more role-specific detail." : "Resume may be long; tighten long paragraphs.",
      "Add enough content to evaluate formatting."
    ),
    makeCheck(
      "Keyword Optimization",
      ats.keywordDensity >= 50,
      ats.keywordDensity >= 30,
      "Role keywords appear naturally across the resume.",
      "Keyword coverage is acceptable but can be stronger.",
      "Add role-specific keywords in summary, skills, and experience."
    )
  ];
  const statusScore = checks.reduce((total, check) => {
    if (check.status === "Passed") return total + 10;
    if (check.status === "Warning") return total + 6;
    return total;
  }, 0);

  return {
    rating: statusFromScore(statusScore),
    checks
  };
}
