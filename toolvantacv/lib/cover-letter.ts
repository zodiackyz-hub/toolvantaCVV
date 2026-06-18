export type CoverLetterTone = "Professional" | "Friendly" | "Confident" | "Formal";

export type CoverLetterInput = {
  fullName: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  experienceLevel: string;
  keySkills: string;
  motivation: string;
  tone: CoverLetterTone;
};

const toneOpeners: Record<CoverLetterTone, string> = {
  Professional: "I am writing to express my interest",
  Friendly: "I am excited to apply",
  Confident: "I am confident that my background makes me a strong candidate",
  Formal: "Please accept my application"
};

const toneClosers: Record<CoverLetterTone, string> = {
  Professional: "Thank you for your time and consideration.",
  Friendly: "I would be happy to share more about how I can contribute to your team.",
  Confident: "I would welcome the opportunity to discuss the impact I can make.",
  Formal: "I appreciate your consideration and look forward to the possibility of speaking with you."
};

function fallback(value: string, fallbackValue: string) {
  return value.trim() || fallbackValue;
}

export function generateCoverLetter(input: CoverLetterInput) {
  const fullName = fallback(input.fullName, "Your Name");
  const jobTitle = fallback(input.jobTitle, "the open position");
  const companyName = fallback(input.companyName, "your company");
  const industry = fallback(input.industry, "your industry");
  const experienceLevel = fallback(input.experienceLevel, "relevant");
  const keySkills = fallback(input.keySkills, "communication, problem solving, and ownership");
  const motivation = fallback(
    input.motivation,
    "the opportunity to contribute to meaningful work and grow with a strong team"
  );

  return [
    `Dear Hiring Manager,`,
    ``,
    `${toneOpeners[input.tone]} for ${jobTitle} at ${companyName}. With ${experienceLevel} experience in ${industry}, I bring a practical mix of ${keySkills}. I am especially motivated by ${motivation}.`,
    ``,
    `In my recent work, I have focused on turning goals into clear action, communicating well with stakeholders, and delivering outcomes that are easy to measure. I enjoy learning the context behind a business challenge, identifying what matters most, and contributing with steady execution. This approach would help me support ${companyName} with both day-to-day priorities and longer-term improvements.`,
    ``,
    `My background has also taught me to write clearly, collaborate across different functions, and adapt quickly when priorities change. I would bring that same discipline to the ${jobTitle} role, along with a strong interest in the work your team is doing in ${industry}.`,
    ``,
    `${toneClosers[input.tone]}`,
    ``,
    `Sincerely,`,
    fullName
  ].join("\n");
}
