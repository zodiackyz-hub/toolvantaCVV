export const categories = [
  "Modern",
  "Minimal",
  "Creative",
  "Professional",
  "Student"
] as const;

export type TemplateCategory = (typeof categories)[number];

export type TemplateDetailSection = {
  heading: string;
  body: string;
};

export type TemplateFaq = {
  question: string;
  answer: string;
};

export type ResumeTemplateBase = {
  id: number;
  slug: string;
  name: string;
  category: TemplateCategory;
  description: string;
  style: {
    accent: string;
    secondary: string;
    background: string;
    text: string;
  };
  preview: {
    headline: string;
    role: string;
    sections: string[];
  };
};

export type ResumeTemplate = ResumeTemplateBase & {
  useCase: string;
  advantages: string[];
  atsCompatible: boolean;
  bestFor: string[];
  tips: string[];
  faq: TemplateFaq[];
  detailSections: TemplateDetailSection[];
};

const baseTemplates: ResumeTemplateBase[] = [
  {
    id: 1,
    slug: "modern-blue-focus",
    name: "Modern Blue Focus",
    category: "Modern",
    description: "Net başlıklar, mavi vurgu alanları ve dengeli boşluklarla teknoloji ve ürün rolleri için güçlü bir görünüm.",
    style: { accent: "#2563eb", secondary: "#dbeafe", background: "#eff6ff", text: "#0f172a" },
    preview: { headline: "Ayşe Demir", role: "Product Manager", sections: ["Deneyim", "Ürün Başarıları", "Yetenekler"] }
  },
  {
    id: 2,
    slug: "modern-navy-grid",
    name: "Modern Navy Grid",
    category: "Modern",
    description: "Grid tabanlı düzeni ve lacivert şeritleriyle yönetici adayları için düzenli ve çağdaş bir CV.",
    style: { accent: "#1e3a8a", secondary: "#e0e7ff", background: "#f8fafc", text: "#111827" },
    preview: { headline: "Mert Kaya", role: "Operations Lead", sections: ["Profil", "Liderlik", "Projeler"] }
  },
  {
    id: 3,
    slug: "modern-skyline",
    name: "Modern Skyline",
    category: "Modern",
    description: "Açık tonlu kart yapısı ve ince çizgilerle şehirli, hızlı okunur ve mobil uyumlu bir seçenek.",
    style: { accent: "#0284c7", secondary: "#bae6fd", background: "#f0f9ff", text: "#0c4a6e" },
    preview: { headline: "Ece Arslan", role: "UX Researcher", sections: ["Araştırma", "Metodlar", "Etkiler"] }
  },
  {
    id: 4,
    slug: "modern-slate-edge",
    name: "Modern Slate Edge",
    category: "Modern",
    description: "Sol bilgi paneli ve temiz içerik kolonuyla danışmanlık, analiz ve iş geliştirme rolleri için ideal.",
    style: { accent: "#334155", secondary: "#e2e8f0", background: "#f8fafc", text: "#0f172a" },
    preview: { headline: "Can Yılmaz", role: "Business Analyst", sections: ["Özet", "Analiz", "Sertifikalar"] }
  },
  {
    id: 5,
    slug: "modern-cobalt-line",
    name: "Modern Cobalt Line",
    category: "Modern",
    description: "Kobalt renkli ayrımlar ve geniş içerik alanıyla teknik ekip liderleri için profesyonel bir şablon.",
    style: { accent: "#1d4ed8", secondary: "#bfdbfe", background: "#eef2ff", text: "#1e293b" },
    preview: { headline: "Selin Aksoy", role: "Engineering Lead", sections: ["Takımlar", "Mimari", "Araçlar"] }
  },
  {
    id: 6,
    slug: "modern-clear-path",
    name: "Modern Clear Path",
    category: "Modern",
    description: "Kısa özet, güçlü deneyim blokları ve sakin mavi tonlarıyla işe alım uzmanları için kolay taranır.",
    style: { accent: "#0369a1", secondary: "#e0f2fe", background: "#f8fafc", text: "#0f172a" },
    preview: { headline: "Burak Şahin", role: "Sales Manager", sections: ["Başarılar", "Gelir Etkisi", "Ekip"] }
  },
  {
    id: 7,
    slug: "modern-prism",
    name: "Modern Prism",
    category: "Modern",
    description: "Renkli ama sade vurgu bloklarıyla pazarlama, büyüme ve marka rolleri için enerjik bir yapı.",
    style: { accent: "#0ea5e9", secondary: "#ccfbf1", background: "#f0fdfa", text: "#134e4a" },
    preview: { headline: "Deniz Öz", role: "Growth Specialist", sections: ["Kampanyalar", "Kanallar", "Sonuçlar"] }
  },
  {
    id: 8,
    slug: "modern-compact-pro",
    name: "Modern Compact Pro",
    category: "Modern",
    description: "Tek sayfaya sığdırmayı kolaylaştıran sıkı düzeniyle deneyimli adaylar için kompakt bir tasarım.",
    style: { accent: "#1e40af", secondary: "#dbeafe", background: "#ffffff", text: "#111827" },
    preview: { headline: "İrem Çelik", role: "Finance Manager", sections: ["Finans", "Raporlama", "Risk"] }
  },
  {
    id: 9,
    slug: "modern-soft-card",
    name: "Modern Soft Card",
    category: "Modern",
    description: "Yumuşak kart hissi ve okunaklı tipografisiyle insan kaynakları ve yönetim rolleri için güven veren CV.",
    style: { accent: "#2563eb", secondary: "#e0e7ff", background: "#f5f7fb", text: "#1f2937" },
    preview: { headline: "Kerem Aydın", role: "HR Business Partner", sections: ["İnsan", "Süreç", "Kültür"] }
  },
  {
    id: 10,
    slug: "modern-clean-stack",
    name: "Modern Clean Stack",
    category: "Modern",
    description: "Katmanlı başlık yapısı ve belirgin beceri alanıyla yazılım, veri ve ürün ekipleri için temiz bir şablon.",
    style: { accent: "#075985", secondary: "#cffafe", background: "#f8fafc", text: "#0f172a" },
    preview: { headline: "Nil Ergin", role: "Data Analyst", sections: ["Veri", "Panolar", "SQL"] }
  },
  {
    id: 11,
    slug: "minimal-white-space",
    name: "Minimal White Space",
    category: "Minimal",
    description: "Bol beyaz alan ve sade başlıklarla akademik, idari ve kurumsal başvurular için zamansız bir tercih.",
    style: { accent: "#1f2937", secondary: "#f1f5f9", background: "#ffffff", text: "#111827" },
    preview: { headline: "Elif Yıldız", role: "Project Coordinator", sections: ["Özet", "Deneyim", "Eğitim"] }
  },
  {
    id: 12,
    slug: "minimal-thin-line",
    name: "Minimal Thin Line",
    category: "Minimal",
    description: "İnce çizgiler ve kısa metin bloklarıyla sade ama ciddi bir izlenim oluşturur.",
    style: { accent: "#475569", secondary: "#e5e7eb", background: "#f9fafb", text: "#111827" },
    preview: { headline: "Arda Koç", role: "Account Executive", sections: ["Satış", "Portföy", "Referanslar"] }
  },
  {
    id: 13,
    slug: "minimal-ink",
    name: "Minimal Ink",
    category: "Minimal",
    description: "Siyah-beyaz ağırlıklı, hızlı okunan ve ATS dostu bir CV düzeni.",
    style: { accent: "#111827", secondary: "#f3f4f6", background: "#ffffff", text: "#0f172a" },
    preview: { headline: "Duru Kılıç", role: "Content Strategist", sections: ["İçerik", "SEO", "Yayınlar"] }
  },
  {
    id: 14,
    slug: "minimal-soft-blue",
    name: "Minimal Soft Blue",
    category: "Minimal",
    description: "Yalın tipografiyi açık mavi detaylarla birleştiren sakin ve temiz bir CV şablonu.",
    style: { accent: "#2563eb", secondary: "#eff6ff", background: "#ffffff", text: "#1e293b" },
    preview: { headline: "Onur Tekin", role: "Customer Success", sections: ["Müşteri", "Süreç", "Araçlar"] }
  },
  {
    id: 15,
    slug: "minimal-mono",
    name: "Minimal Mono",
    category: "Minimal",
    description: "Tek kolonlu, net ve baskıya uygun yapısıyla resmi başvurular için pratik bir görünüm.",
    style: { accent: "#0f172a", secondary: "#e2e8f0", background: "#f8fafc", text: "#111827" },
    preview: { headline: "Zeynep Uçar", role: "Legal Assistant", sections: ["Hukuk", "Dosyalar", "Eğitim"] }
  },
  {
    id: 16,
    slug: "minimal-calm",
    name: "Minimal Calm",
    category: "Minimal",
    description: "Göz yormayan boşluklar ve dengeli hiyerarşiyle sade CV isteyen herkes için uygun.",
    style: { accent: "#64748b", secondary: "#f1f5f9", background: "#ffffff", text: "#1f2937" },
    preview: { headline: "Emre Polat", role: "Supply Planner", sections: ["Planlama", "Tedarik", "Excel"] }
  },
  {
    id: 17,
    slug: "minimal-north",
    name: "Minimal North",
    category: "Minimal",
    description: "Kuzey Avrupa esintili, serin tonlu ve profesyonel bir tek sayfa CV tasarımı.",
    style: { accent: "#0f766e", secondary: "#ccfbf1", background: "#f8fafc", text: "#134e4a" },
    preview: { headline: "Aslı Genç", role: "Service Designer", sections: ["Servis", "Haritalar", "Atölyeler"] }
  },
  {
    id: 18,
    slug: "minimal-resume-sheet",
    name: "Minimal Resume Sheet",
    category: "Minimal",
    description: "Klasik belge hissini modern mikro detaylarla yenileyen sade bir şablon.",
    style: { accent: "#334155", secondary: "#f8fafc", background: "#ffffff", text: "#0f172a" },
    preview: { headline: "Eren Bulut", role: "QA Specialist", sections: ["Test", "Otomasyon", "Süreç"] }
  },
  {
    id: 19,
    slug: "minimal-clear-type",
    name: "Minimal Clear Type",
    category: "Minimal",
    description: "Okunaklı metin, küçük vurgu alanları ve gereksiz süsten uzak bir başvuru deneyimi sunar.",
    style: { accent: "#1d4ed8", secondary: "#f1f5f9", background: "#ffffff", text: "#111827" },
    preview: { headline: "Melis Tan", role: "Executive Assistant", sections: ["Organizasyon", "Takvim", "İletişim"] }
  },
  {
    id: 20,
    slug: "minimal-balanced",
    name: "Minimal Balanced",
    category: "Minimal",
    description: "İki kolonlu hafif yapı ve temiz ayrımlarla deneyim, eğitim ve becerileri dengeli sunar.",
    style: { accent: "#155e75", secondary: "#ecfeff", background: "#ffffff", text: "#164e63" },
    preview: { headline: "Sarp Keskin", role: "Logistics Specialist", sections: ["Operasyon", "Rota", "Metrikler"] }
  },
  {
    id: 21,
    slug: "creative-cobalt-pop",
    name: "Creative Cobalt Pop",
    category: "Creative",
    description: "Canlı mavi vurgular ve asimetrik bilgi bloklarıyla yaratıcı ekipler için dikkat çekici bir CV.",
    style: { accent: "#2563eb", secondary: "#fde68a", background: "#fff7ed", text: "#172554" },
    preview: { headline: "Bora Aksu", role: "Art Director", sections: ["Kampanya", "Görsel Dil", "Ödüller"] }
  },
  {
    id: 22,
    slug: "creative-teal-studio",
    name: "Creative Teal Studio",
    category: "Creative",
    description: "Tasarım, içerik ve sosyal medya rolleri için renkli ama kontrollü bir portfolyo hissi verir.",
    style: { accent: "#0f766e", secondary: "#a7f3d0", background: "#f0fdfa", text: "#134e4a" },
    preview: { headline: "Lara Deniz", role: "Brand Designer", sections: ["Kimlik", "Portfolyo", "Araçlar"] }
  },
  {
    id: 23,
    slug: "creative-rose-accent",
    name: "Creative Rose Accent",
    category: "Creative",
    description: "Sıcak vurgu rengi ve düzenli içerik yapısıyla yaratıcı başvurularda samimi bir ton yakalar.",
    style: { accent: "#e11d48", secondary: "#ffe4e6", background: "#fff1f2", text: "#881337" },
    preview: { headline: "Mina Soyer", role: "Social Media Lead", sections: ["İçerik", "Topluluk", "Büyüme"] }
  },
  {
    id: 24,
    slug: "creative-sunrise",
    name: "Creative Sunrise",
    category: "Creative",
    description: "Açık arka plan üzerinde turuncu ve mavi kontrastıyla enerjik ama profesyonel bir görünüm sunar.",
    style: { accent: "#f97316", secondary: "#dbeafe", background: "#fff7ed", text: "#1e293b" },
    preview: { headline: "Tuna Er", role: "Motion Designer", sections: ["Animasyon", "Video", "Markalar"] }
  },
  {
    id: 25,
    slug: "creative-lime-note",
    name: "Creative Lime Note",
    category: "Creative",
    description: "Yaratıcı yazarlık, editörlük ve içerik üretimi için taze ve hafif bir düzen.",
    style: { accent: "#65a30d", secondary: "#ecfccb", background: "#f7fee7", text: "#365314" },
    preview: { headline: "Yağmur İnce", role: "Copywriter", sections: ["Metin", "Kampanya", "Ton"] }
  },
  {
    id: 26,
    slug: "creative-indigo-flow",
    name: "Creative Indigo Flow",
    category: "Creative",
    description: "Akıcı bölüm ayrımları ve indigo tonlarıyla dijital ürün ve tasarım rollerinde güçlü durur.",
    style: { accent: "#4f46e5", secondary: "#e0e7ff", background: "#eef2ff", text: "#312e81" },
    preview: { headline: "Cemre Oral", role: "Product Designer", sections: ["UX", "UI", "Sistem"] }
  },
  {
    id: 27,
    slug: "creative-editorial",
    name: "Creative Editorial",
    category: "Creative",
    description: "Editoryal sayfa hissi, güçlü başlık ve dengeli detaylarla portfolyo odaklı adaylar için hazırlandı.",
    style: { accent: "#7c3aed", secondary: "#ede9fe", background: "#faf5ff", text: "#2e1065" },
    preview: { headline: "İdil Karaca", role: "Editorial Designer", sections: ["Yayın", "Layout", "Portfolyo"] }
  },
  {
    id: 28,
    slug: "creative-aqua-panel",
    name: "Creative Aqua Panel",
    category: "Creative",
    description: "Aqua detaylı yan paneliyle fotoğrafsız, modern ve yaratıcı bir profil sunar.",
    style: { accent: "#0891b2", secondary: "#cffafe", background: "#ecfeff", text: "#164e63" },
    preview: { headline: "Alp Sezer", role: "Video Producer", sections: ["Prodüksiyon", "Kurgu", "Set"] }
  },
  {
    id: 29,
    slug: "creative-bright-map",
    name: "Creative Bright Map",
    category: "Creative",
    description: "Kariyer yolculuğunu net bloklarla anlatan, reklam ve ajans başvurularına uygun bir düzen.",
    style: { accent: "#db2777", secondary: "#fce7f3", background: "#fdf2f8", text: "#831843" },
    preview: { headline: "Nehir Kurt", role: "Campaign Planner", sections: ["Strateji", "Fikir", "Sunum"] }
  },
  {
    id: 30,
    slug: "creative-blueprint",
    name: "Creative Blueprint",
    category: "Creative",
    description: "Planlı, keskin ve mavi tonlu tasarımıyla mimarlık ve ürün tasarımı gibi görsel alanlara yakışır.",
    style: { accent: "#1d4ed8", secondary: "#bfdbfe", background: "#eff6ff", text: "#172554" },
    preview: { headline: "Derin Bal", role: "Interior Architect", sections: ["Projeler", "Çizim", "Malzeme"] }
  },
  {
    id: 31,
    slug: "professional-executive",
    name: "Professional Executive",
    category: "Professional",
    description: "Üst düzey yönetici profilleri için ölçülü, ciddi ve güçlü bir kurumsal CV şablonu.",
    style: { accent: "#0f172a", secondary: "#dbeafe", background: "#ffffff", text: "#111827" },
    preview: { headline: "Hasan Eren", role: "General Manager", sections: ["Strateji", "P&L", "Liderlik"] }
  },
  {
    id: 32,
    slug: "professional-consultant",
    name: "Professional Consultant",
    category: "Professional",
    description: "Danışmanlık, denetim ve finans rolleri için ölçülebilir sonuçları öne çıkaran net bir yapı.",
    style: { accent: "#1e40af", secondary: "#e0e7ff", background: "#f8fafc", text: "#0f172a" },
    preview: { headline: "Başak Alkan", role: "Management Consultant", sections: ["Projeler", "Etki", "Sektörler"] }
  },
  {
    id: 33,
    slug: "professional-legal",
    name: "Professional Legal",
    category: "Professional",
    description: "Hukuk ve uyum alanları için güvenilir, yalın ve resmi bir sayfa yapısı.",
    style: { accent: "#1f2937", secondary: "#e5e7eb", background: "#ffffff", text: "#111827" },
    preview: { headline: "İpek Sarı", role: "Compliance Officer", sections: ["Uyum", "Politika", "Denetim"] }
  },
  {
    id: 34,
    slug: "professional-finance",
    name: "Professional Finance",
    category: "Professional",
    description: "Raporlama, bütçe ve analiz deneyimini açıkça gösteren kurumsal finans odaklı bir CV.",
    style: { accent: "#155e75", secondary: "#cffafe", background: "#f8fafc", text: "#164e63" },
    preview: { headline: "Ozan Gür", role: "Financial Analyst", sections: ["Modelleme", "Bütçe", "Rapor"] }
  },
  {
    id: 35,
    slug: "professional-operations",
    name: "Professional Operations",
    category: "Professional",
    description: "Operasyon, tedarik zinciri ve saha yönetimi geçmişini düzenli ve sonuç odaklı anlatır.",
    style: { accent: "#0369a1", secondary: "#e0f2fe", background: "#ffffff", text: "#0f172a" },
    preview: { headline: "Pelin Korkmaz", role: "Operations Manager", sections: ["Süreç", "Verimlilik", "Ekip"] }
  },
  {
    id: 36,
    slug: "professional-healthcare",
    name: "Professional Healthcare",
    category: "Professional",
    description: "Sağlık, klinik operasyon ve medikal satış rolleri için güven veren sade bir düzen.",
    style: { accent: "#0f766e", secondary: "#ccfbf1", background: "#ffffff", text: "#134e4a" },
    preview: { headline: "Seda Güneş", role: "Clinical Coordinator", sections: ["Klinik", "Hasta", "Kalite"] }
  },
  {
    id: 37,
    slug: "professional-tech-lead",
    name: "Professional Tech Lead",
    category: "Professional",
    description: "Teknik liderlik, mimari kararlar ve ekip etkisini birlikte göstermek için güçlü bir CV.",
    style: { accent: "#1d4ed8", secondary: "#dbeafe", background: "#f8fafc", text: "#172554" },
    preview: { headline: "Doruk Yaman", role: "Tech Lead", sections: ["Mimari", "Mentorluk", "Stack"] }
  },
  {
    id: 38,
    slug: "professional-sales",
    name: "Professional Sales",
    category: "Professional",
    description: "Hedef, gelir ve müşteri portföyü metriklerini hızlıca görünür yapan satış odaklı bir şablon.",
    style: { accent: "#1e3a8a", secondary: "#bfdbfe", background: "#ffffff", text: "#1e293b" },
    preview: { headline: "Gizem Atar", role: "B2B Sales Lead", sections: ["Gelir", "Pipeline", "CRM"] }
  },
  {
    id: 39,
    slug: "professional-admin",
    name: "Professional Admin",
    category: "Professional",
    description: "İdari işler, ofis yönetimi ve koordinasyon rolleri için sakin ve güvenilir bir yapı.",
    style: { accent: "#334155", secondary: "#f1f5f9", background: "#ffffff", text: "#111827" },
    preview: { headline: "Hale Şimşek", role: "Office Manager", sections: ["Operasyon", "Bütçe", "Tedarik"] }
  },
  {
    id: 40,
    slug: "professional-global",
    name: "Professional Global",
    category: "Professional",
    description: "Uluslararası başvurularda net iletişim, yetkinlik ve deneyim vurgusu sağlayan dengeli CV.",
    style: { accent: "#0f172a", secondary: "#e0f2fe", background: "#f8fafc", text: "#1f2937" },
    preview: { headline: "Kaan Özer", role: "Export Manager", sections: ["Pazarlar", "Müşteri", "Dil"] }
  },
  {
    id: 41,
    slug: "student-first-step",
    name: "Student First Step",
    category: "Student",
    description: "Staj ve ilk iş başvuruları için eğitim, projeler ve becerileri öne çıkaran temiz bir şablon.",
    style: { accent: "#2563eb", secondary: "#dbeafe", background: "#ffffff", text: "#0f172a" },
    preview: { headline: "Ada Kaplan", role: "Computer Engineering Student", sections: ["Eğitim", "Projeler", "Beceriler"] }
  },
  {
    id: 42,
    slug: "student-intern-ready",
    name: "Student Intern Ready",
    category: "Student",
    description: "Kısa deneyim, kulüp çalışmaları ve sertifikaları anlaşılır şekilde sunmak için hazırlandı.",
    style: { accent: "#0284c7", secondary: "#e0f2fe", background: "#f8fafc", text: "#0c4a6e" },
    preview: { headline: "Efe Yalın", role: "Marketing Intern", sections: ["Kulüpler", "Projeler", "Araçlar"] }
  },
  {
    id: 43,
    slug: "student-campus",
    name: "Student Campus",
    category: "Student",
    description: "Üniversite projeleri, gönüllülük ve part-time deneyimleri modern bir sırayla gösterir.",
    style: { accent: "#1d4ed8", secondary: "#bfdbfe", background: "#eff6ff", text: "#172554" },
    preview: { headline: "Defne Acar", role: "Psychology Student", sections: ["Akademi", "Gönüllü", "Araştırma"] }
  },
  {
    id: 44,
    slug: "student-scholar",
    name: "Student Scholar",
    category: "Student",
    description: "Burs, akademik başarı ve araştırma odaklı başvurular için sade ve ciddi bir format.",
    style: { accent: "#334155", secondary: "#e2e8f0", background: "#ffffff", text: "#111827" },
    preview: { headline: "Mehmet Alp", role: "Economics Student", sections: ["Not Ort.", "Araştırma", "Burslar"] }
  },
  {
    id: 45,
    slug: "student-portfolio",
    name: "Student Portfolio",
    category: "Student",
    description: "Tasarım, yazılım ve medya öğrencilerinin proje çıktılarını vurgulayan hafif yaratıcı bir düzen.",
    style: { accent: "#7c3aed", secondary: "#ede9fe", background: "#faf5ff", text: "#2e1065" },
    preview: { headline: "İlayda Kurt", role: "Visual Design Student", sections: ["Portfolyo", "Staj", "Araçlar"] }
  },
  {
    id: 46,
    slug: "student-tech-start",
    name: "Student Tech Start",
    category: "Student",
    description: "GitHub projeleri, hackathon deneyimi ve teknik becerileri hızlıca okutmak için tasarlandı.",
    style: { accent: "#075985", secondary: "#cffafe", background: "#ecfeff", text: "#164e63" },
    preview: { headline: "Rüzgar Taş", role: "Software Intern", sections: ["Kod", "Hackathon", "Stack"] }
  },
  {
    id: 47,
    slug: "student-clean-apply",
    name: "Student Clean Apply",
    category: "Student",
    description: "Başlangıç seviyesinde az deneyimi olan adaylar için güçlü yönleri düzenli gösteren sade CV.",
    style: { accent: "#1e40af", secondary: "#e0e7ff", background: "#ffffff", text: "#111827" },
    preview: { headline: "Naz Duman", role: "Business Student", sections: ["Eğitim", "Vaka", "Diller"] }
  },
  {
    id: 48,
    slug: "student-lab-note",
    name: "Student Lab Note",
    category: "Student",
    description: "Laboratuvar, araştırma asistanlığı ve teknik staj başvuruları için net ve ölçülü bir görünüm.",
    style: { accent: "#0f766e", secondary: "#ccfbf1", background: "#f0fdfa", text: "#134e4a" },
    preview: { headline: "Cansu Er", role: "Biology Student", sections: ["Lab", "Araştırma", "Teknikler"] }
  },
  {
    id: 49,
    slug: "student-simple-cv",
    name: "Student Simple CV",
    category: "Student",
    description: "Kısa, açık ve ATS dostu yapısıyla hızlı başvurular için güvenli bir öğrenci CV şablonu.",
    style: { accent: "#475569", secondary: "#f1f5f9", background: "#ffffff", text: "#111827" },
    preview: { headline: "Berk İnanç", role: "Civil Engineering Student", sections: ["Eğitim", "Saha", "AutoCAD"] }
  },
  {
    id: 50,
    slug: "student-future-pro",
    name: "Student Future Pro",
    category: "Student",
    description: "Yeni mezun ve stajyer adaylar için hedef, proje ve yetenekleri profesyonel bir dilde toplar.",
    style: { accent: "#2563eb", secondary: "#dbeafe", background: "#f8fafc", text: "#172554" },
    preview: { headline: "Sude Ekin", role: "New Graduate", sections: ["Hedef", "Projeler", "Yetkinlik"] }
  }
];

const templateUseCases: string[] = [
  "Teknoloji, ürün yönetimi ve dijital ekiplerde sonuç odaklı deneyimini güçlü bir ilk izlenimle sunmak isteyen adaylar için uygundur.",
  "Operasyon, süreç yönetimi ve ekip koordinasyonu geçmişini düzenli kolonlarla anlatmak isteyen orta ve üst seviye profesyoneller için hazırlanmıştır.",
  "Kullanıcı araştırması, servis keşfi ve içgörü üretimi gibi alanlarda çalışan adayların sade ama çağdaş bir profil sunmasına yardımcı olur.",
  "İş analizi, danışmanlık ve süreç geliştirme rollerinde problem çözme yaklaşımını düzenli biçimde göstermek isteyen adaylar için idealdir.",
  "Yazılım ekip liderleri, teknik koordinatörler ve mimari karar alma sorumluluğu bulunan adaylar için güçlü bir profesyonel çerçeve sağlar.",
  "Satış, müşteri yönetimi ve hedef bazlı performans geçmişini kısa sürede anlatmak isteyen adaylar için taranması kolay bir düzen sunar.",
  "Büyüme, marka, pazarlama ve kanal yönetimi alanlarında yaratıcı enerjiyi ölçülebilir sonuçlarla birlikte göstermek isteyenler için uygundur.",
  "Finans, raporlama ve yönetim rolleri için yoğun deneyimi kompakt bir yapıda toplamak isteyen adaylara pratik bir tek sayfa zemini verir.",
  "İnsan kaynakları, organizasyon gelişimi ve çalışan deneyimi alanlarında güven veren, sakin ve okunaklı bir anlatım isteyen adaylar için uygundur.",
  "Veri analizi, raporlama ve iş zekası profillerinde teknik yetkinlikleri ve iş etkisini dengeli göstermek için tasarlanmıştır.",
  "Proje koordinasyonu, akademik başvuru ve idari pozisyonlarda sade, zamansız ve dikkat dağıtmayan bir CV isteyen adaylar için uygundur.",
  "Satış temsilcileri ve müşteri ilişkileri rollerinde portföy, hedef ve iletişim becerisini kısa metin bloklarıyla sunmak için idealdir.",
  "İçerik stratejisi, yayın planlama ve SEO deneyimini ATS dostu, metin odaklı ve sade bir formatta göstermek isteyenler için hazırlanmıştır.",
  "Müşteri başarısı, destek operasyonları ve hizmet süreçlerinde sakin, güvenilir ve anlaşılır bir profesyonel görünüm sağlar.",
  "Hukuk, ofis desteği ve resmi başvurularda fazla görsel öğe kullanmadan güçlü bir belge düzeni isteyen adaylar için uygundur.",
  "Tedarik, planlama ve operasyon destek alanlarında net bilgi akışı ve dengeli boşluk kullanımı isteyen profesyoneller için iyi çalışır.",
  "Servis tasarımı, deneyim haritalama ve atölye yürütme gibi alanlarda metodik ama modern bir CV dili kurmak isteyen adaylar için uygundur.",
  "Kalite güvence, test ve süreç iyileştirme rollerinde teknik ayrıntıları sade bir sayfa akışında göstermek için tasarlanmıştır.",
  "Yönetici asistanlığı, koordinasyon ve yoğun iletişim gerektiren rollerde güvenilir, düzenli ve kolay takip edilen bir sunum sağlar.",
  "Lojistik, rota planlama ve operasyonel metriklerle çalışan adayların deneyimini dengeli iki kolonlu bir yapıda toplar.",
  "Reklam, sanat yönetimi ve yaratıcı kampanya rollerinde portfolyo hissini korurken profesyonel başvuru dilini kaybetmek istemeyenler için uygundur.",
  "Marka tasarımı, görsel kimlik ve sosyal medya içeriklerinde renkli ama kontrollü bir ifade arayan yaratıcı adaylar için hazırlanmıştır.",
  "Topluluk yönetimi, sosyal medya liderliği ve içerik üretimi rollerinde sıcak bir tonla güçlü başarı anlatısı kurmak isteyenler için uygundur.",
  "Hareketli grafik, video ve prodüksiyon işlerinde enerjik ama düzenli bir CV görünümü isteyen adaylara esnek bir alan verir.",
  "Metin yazarlığı, editörlük ve kampanya dili geliştiren adayların fikir üretimini taze ve hafif bir sayfa diliyle sunmasına yardımcı olur.",
  "Ürün tasarımı ve dijital deneyim rollerinde kullanıcı odaklı kararları, arayüz becerilerini ve sistem yaklaşımını birlikte göstermek için uygundur.",
  "Editoryal tasarım, yayıncılık ve portfolyo odaklı yaratıcı işlerde güçlü başlığı ve düzenli detayları öne çıkarmak isteyenler için hazırlanmıştır.",
  "Video prodüksiyon, kurgu ve set koordinasyonu gibi görsel işlerde teknik üretim sürecini anlaşılır şekilde anlatmak için idealdir.",
  "Kampanya planlama, reklam stratejisi ve ajans deneyiminde kariyer yolculuğunu net bloklarla sunmak isteyen adaylara uygundur.",
  "Mimarlık, iç mimarlık ve ürün tasarımı gibi görsel disiplinlerde proje, çizim ve malzeme bilgisini profesyonel göstermek için tasarlanmıştır.",
  "Üst düzey yönetim, genel müdürlük ve strateji rollerinde liderlik etkisini ölçülü ve kurumsal bir dille anlatmak isteyenler için uygundur.",
  "Yönetim danışmanlığı, denetim ve finansal dönüşüm projelerinde ölçülebilir sonuçları öne çıkarmak isteyen profesyoneller için hazırlanmıştır.",
  "Uyum, hukuk operasyonları ve politika yönetimi alanlarında resmi, güvenilir ve net bir CV sunmak isteyen adaylar için uygundur.",
  "Finansal analiz, bütçe, modelleme ve yönetim raporlaması geçmişini sayısal çıktılarla birlikte göstermek isteyenler için idealdir.",
  "Operasyon yönetimi, tedarik zinciri ve saha süreçlerinde verimlilik odağını görünür kılmak isteyen adaylar için güçlü bir temel sağlar.",
  "Klinik koordinasyon, sağlık operasyonları ve medikal süreçlerde güven, kalite ve hasta odağını dengeli göstermek isteyenler için uygundur.",
  "Teknik liderlik, ekip mentorluğu ve yazılım mimarisi sorumluluğunu yönetici diliyle anlatmak isteyen deneyimli adaylar için hazırlanmıştır.",
  "B2B satış, hesap yönetimi ve gelir büyütme rollerinde hedef, pipeline ve CRM deneyimini hızlıca göstermek isteyenler için idealdir.",
  "Ofis yönetimi, idari işler ve tedarik koordinasyonunda düzen, bütçe ve süreç takibini profesyonel anlatmak isteyen adaylara uygundur.",
  "İhracat, global satış ve uluslararası müşteri yönetimi rollerinde pazar, dil ve iletişim becerilerini birlikte göstermek için tasarlanmıştır.",
  "Bilgisayar mühendisliği öğrencileri ve ilk staj başvuruları için eğitim, proje ve teknik becerileri temiz bir sırayla sunar.",
  "Pazarlama stajı, kulüp deneyimi ve sertifika geçmişini kısa ama etkili biçimde anlatmak isteyen öğrenciler için uygundur.",
  "Psikoloji, sosyal bilimler ve araştırma odaklı öğrencilerin akademik çalışma, gönüllülük ve proje deneyimini görünür kılar.",
  "Ekonomi, burs ve akademik başarı odaklı başvurularda ciddi, sade ve güven veren bir öğrenci CV yapısı sunar.",
  "Tasarım, yazılım ve medya öğrencilerinin portfolyo bağlantısı, staj deneyimi ve üretim araçlarını öne çıkarması için hazırlanmıştır.",
  "Yazılım stajı, hackathon ve GitHub projeleriyle teknik başlangıcını göstermek isteyen öğrenciler için pratik bir düzen sağlar.",
  "İşletme ve yeni mezun başvurularında vaka çalışması, dil bilgisi ve eğitim geçmişini sade şekilde sunmak isteyenler için uygundur.",
  "Laboratuvar, araştırma asistanlığı ve biyoloji odaklı teknik stajlarda yöntem, deney ve akademik odağı netleştirir.",
  "İnşaat mühendisliği ve saha stajı başvurularında eğitim, saha deneyimi ve teknik araçları kısa bir formatta toplar.",
  "Yeni mezun adayların hedef, proje ve yetkinliklerini profesyonel bir kariyer başlangıcı diliyle sunmasına yardımcı olur."
];

function buildAdvantages(template: ResumeTemplateBase): string[] {
  const [primary, secondary, tertiary] = template.preview.sections;

  return [
    `${primary} bilgisini ilk taramada görünür kılar ve işe alım uzmanının doğru bağlamı hızlıca yakalamasına yardımcı olur.`,
    `${template.preview.role} profili için deneyim, beceri ve ölçülebilir katkıları aynı sayfa ritminde bir araya getirir.`,
    `${secondary} ve ${tertiary} alanlarını ayrı bloklarda sunduğu için hem mobil ekranda hem PDF çıktısında okunabilirliği korur.`
  ];
}

function buildBestFor(template: ResumeTemplateBase): string[] {
  return [
    `${template.preview.role} başvuruları`,
    `${template.category} CV tasarımı isteyen adaylar`,
    `${template.preview.sections[0]} ve ${template.preview.sections[1]} bilgisini öne çıkarmak isteyen profesyoneller`,
    "Canlı CV Builder ile hızlı PDF hazırlamak isteyen kullanıcılar"
  ];
}

function buildTips(template: ResumeTemplateBase, atsCompatible: boolean): string[] {
  const [primary, secondary, tertiary] = template.preview.sections;

  return [
    `${primary} bölümünde yalnızca görevleri değil, ölçülebilir çıktıları ve karar alma katkınızı yazın.`,
    `${secondary} alanını başvurduğunuz ilandaki anahtar kelimelerle doğal biçimde ilişkilendirin.`,
    `${tertiary} bölümünü kısa, taranabilir ve gerçek deneyiminizle desteklenen maddeler halinde düzenleyin.`,
    atsCompatible
      ? "ATS uyumluluğunu korumak için metni görsel içine gömmeyin ve standart bölüm başlıklarını kullanın."
      : "Yaratıcı görünümü korurken başvuru takip sistemleri için metin tabanlı başlıkları sade tutun."
  ];
}

function buildFaq(template: ResumeTemplateBase, useCase: string, atsCompatible: boolean): TemplateFaq[] {
  return [
    {
      question: `Bu ${template.name} CV şablonu ATS uyumlu mu?`,
      answer: atsCompatible
        ? `${template.name}, metin tabanlı başlıklar ve sade bölüm yapısı kullandığı için ATS uyumlu CV hazırlamak isteyen adaylar için uygundur.`
        : `${template.name}, yaratıcı vurgu alanları içerir; yine de ToolvantaCV Builder içinde metin tabanlı içerik kullandığı için ATS okunabilirliğini destekler.`
    },
    {
      question: `Bu şablon hangi sektörler için uygundur?`,
      answer: `${useCase} Özellikle ${template.preview.sections.join(", ")} alanlarını görünür kılmak isteyen adaylar için iyi çalışır.`
    },
    {
      question: `${template.name} ile PDF olarak CV indirebilir miyim?`,
      answer: `Evet. Şablonu seçtikten sonra CV Builder sayfasında bilgilerinizi girip canlı önizlemeyi kontrol edebilir, ardından PDF İndir veya Yazdır seçeneklerini kullanabilirsiniz.`
    },
    {
      question: `Bu CV şablonu ücretsiz mi?`,
      answer: `ToolvantaCV'de şablonları incelemek ve builder akışını kullanmak ücretsiz önizleme deneyimi olarak sunulur. Gerçek ödeme sistemi bu sürümde bulunmaz.`
    }
  ];
}

function buildDetailSections(
  template: ResumeTemplateBase,
  useCase: string,
  advantages: string[],
  atsCompatible: boolean,
  tips: string[]
): TemplateDetailSection[] {
  const [primary, secondary, tertiary] = template.preview.sections;

  return [
    {
      heading: `${template.name} kimler için uygun?`,
      body: `${template.name}, ${useCase} Bu şablonun temel amacı, adayın kariyer hikayesini kısa sürede anlaşılabilir hale getirmektir. İlk bakışta isim, hedef rol ve en önemli bölümler görünür olduğu için ziyaretçi ya da işe alım uzmanı sayfada kaybolmaz. ${template.category} kategorisindeki bu yaklaşım, özellikle hızlı tarama yapılan başvurularda avantaj sağlar. Aday, uzun paragraflar yerine seçilmiş başarıları, görev kapsamını ve güçlü yönlerini düzenli bloklar içinde aktarabilir. Böylece CV yalnızca güzel görünen bir belge olmakla kalmaz, başvuru stratejisinin de anlaşılır bir parçası haline gelir.`
    },
    {
      heading: "Kullanım alanı",
      body: `Bu tasarım ${template.preview.role} hedefiyle başvuru yapan kişiler için örneklenmiştir, ancak aynı düzen benzer sorumluluk taşıyan farklı pozisyonlara da uyarlanabilir. ${primary} bölümü adayın en önemli kanıtlarını taşırken, ${secondary} alanı deneyimin bağlamını güçlendirir. ${tertiary} bölümü ise teknik beceri, araç bilgisi, proje çıktısı ya da tamamlayıcı yetkinlikleri kısa satırlarla göstermeye uygundur. Şablonu kullanırken her maddeyi sonuç odaklı yazmak, başvuru yapılan ilanın anahtar kelimelerini doğal biçimde eklemek ve gereksiz kişisel ayrıntılardan kaçınmak en iyi sonucu verir.`
    },
    {
      heading: "Öne çıkan avantajlar",
      body: `${advantages.join(" ")} Bu avantajlar özellikle CV'nin hem masaüstünde hem telefonda okunmasını kolaylaştırır. Kart yapısındaki boşluklar metni sıkıştırmaz, vurgu rengi ise sadece yönlendirme amacıyla kullanılır. Bu sayede şablon yanıltıcı bir reklam hissi vermez, butonlar ve içerik alanları birbirinden ayrılır, kullanıcı neye tıkladığını açıkça görür. Sade görsel dil, AdSense uyumlu bir yayın yapısı için de önemlidir çünkü içerik ile reklam alanlarının karışmasını engelleyen temiz bir sayfa akışı oluşturur.`
    },
    {
      heading: "İçeriği nasıl kişiselleştirmeli?",
      body: `${template.name} üzerinde çalışırken önce hedef rolünüzü netleştirin ve başlığınızı buna göre yazın. Ardından son iki veya üç deneyiminizdeki en güçlü sonuçları seçin. Örneğin yüzde, adet, süre, gelir, maliyet, verimlilik ya da kalite gibi ölçülebilir göstergeler varsa bunları kısa cümlelere ekleyin. Öğrenci ya da yeni mezun bir aday için proje çıktıları, kulüp görevleri, gönüllülük deneyimi ve kullanılan araçlar aynı derecede değerlidir. Deneyimli bir aday içinse liderlik kapsamı, karar alma sorumluluğu, ekip büyüklüğü ve iş etkisi daha öne çıkarılmalıdır.`
    },
    {
      heading: "Başvuru öncesi kontrol listesi",
      body: `Şablonu tamamladıktan sonra yazım hatalarını, tarih tutarlılığını ve iletişim bilgilerini mutlaka kontrol edin. CV'nin ilk ekranında hedef rolünüz, en güçlü uzmanlık alanınız ve sizi ayıran bir başarı cümlesi bulunmalıdır. ${primary}, ${secondary} ve ${tertiary} bölümlerinin her biri farklı bir kanıt sunmalı; aynı bilginin gereksiz tekrarından kaçınılmalıdır. Dosyayı PDF olarak dışa aktarırken dosya adını ad soyad ve hedef rol ile düzenlemek profesyonel görünür. ToolvantaCV Builder, doğru şablonu seçme, içerik iskeletini planlama, canlı önizleme alma ve çıktıyı indirme adımlarını tek akışta toplar.`
    },
    {
      heading: "ATS uyumluluğu ve profesyonel ipuçları",
      body: `${template.name} için ATS değerlendirmesi: ${atsCompatible ? "standart başlıklar, metin tabanlı alanlar ve temiz bölüm hiyerarşisi nedeniyle ATS dostu bir kullanım sunar" : "yaratıcı görünümü daha güçlüdür, bu nedenle resmi başvurularda metin yoğunluğunu ve bölüm adlarını özellikle sade tutmak gerekir"}. ${tips.join(" ")} CV Builder'da aynı veri modeli kullanıldığı için şablon değiştirirken bilgilerinizi yeniden yazmanız gerekmez. Şablonun renk dili, bölüm sırası ve vurgu alanları değişse bile ad soyad, unvan, deneyim, eğitim, yetenek, sertifika, proje ve dil bilgileri korunur. Bu yapı kullanıcıya önce tasarım seçme, ardından bilgileri girme, canlı önizleme alma ve PDF indirme akışında tutarlı bir deneyim sağlar.`
    }
  ];
}

export const templates: ResumeTemplate[] = baseTemplates.map((template, index) => {
  const useCase =
    templateUseCases[index] ??
    `${template.category} kategorisinde düzenli, okunaklı ve mobil uyumlu bir CV hazırlamak isteyen adaylar için uygundur.`;
  const advantages = buildAdvantages(template);
  const atsCompatible = template.category !== "Creative" || template.id % 2 === 0;
  const bestFor = buildBestFor(template);
  const tips = buildTips(template, atsCompatible);

  return {
    ...template,
    useCase,
    advantages,
    atsCompatible,
    bestFor,
    tips,
    faq: buildFaq(template, useCase, atsCompatible),
    detailSections: buildDetailSections(template, useCase, advantages, atsCompatible, tips)
  };
});

export function getTemplateBySlug(slug: string) {
  return templates.find((template) => template.slug === slug);
}
