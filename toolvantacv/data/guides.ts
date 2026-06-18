export type GuideCategory = "CV Guides" | "Career Tips" | "Resume Examples" | "Interview Tips";

export type GuideLink = {
  label: string;
  href: string;
};

export type GuideSubsection = {
  heading: string;
  body: string[];
};

export type GuideSection = {
  heading: string;
  body: string[];
  subsections: GuideSubsection[];
};

export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  readingTime: string;
  updatedAt: string;
  keyword: string;
  audience: string;
  angle: string;
  exampleRole: string;
  internalLinks: GuideLink[];
  sections: GuideSection[];
};

type GuideTopic = Omit<GuideArticle, "readingTime" | "updatedAt" | "sections">;

const updatedAt = "18 Haziran 2026";

const guideTopics: GuideTopic[] = [
  {
    slug: "ats-friendly-resume-guide",
    title: "ATS Friendly Resume Guide",
    description: "ATS uyumlu CV hazırlamak için format, anahtar kelime ve sade bölüm yapısı odaklı kapsamlı rehber.",
    category: "CV Guides",
    keyword: "ATS friendly resume",
    audience: "başvuru takip sistemlerinden geçmek isteyen adaylar",
    angle: "metin tabanlı yapı, doğru anahtar kelime ve ölçülebilir başarı cümleleri",
    exampleRole: "Business Analyst",
    internalLinks: [
      { label: "ATS uyumlu şablonları incele", href: "/templates" },
      { label: "CV Builder ile dene", href: "/builder" }
    ]
  },
  {
    slug: "student-resume-example",
    title: "Student Resume Example",
    description: "Öğrenciler için proje, eğitim, staj ve kulüp deneyimini güçlü gösteren resume örneği rehberi.",
    category: "Resume Examples",
    keyword: "student resume example",
    audience: "staj veya ilk iş başvurusu yapan öğrenciler",
    angle: "az deneyimi güçlü proje ve eğitim kanıtlarıyla görünür kılma",
    exampleRole: "Marketing Intern",
    internalLinks: [
      { label: "Student şablonlarını gör", href: "/templates?category=Student" },
      { label: "Yeni mezun CV önerileri", href: "/guides/entry-level-resume-guide" }
    ]
  },
  {
    slug: "software-engineer-resume",
    title: "Software Engineer Resume",
    description: "Yazılım geliştiriciler için teknik beceri, proje, GitHub ve deneyim bölümlerini düzenleme rehberi.",
    category: "Resume Examples",
    keyword: "software engineer resume",
    audience: "frontend, backend, full-stack veya mobil geliştirici adayları",
    angle: "teknik becerileri iş etkisi ve proje çıktılarıyla birlikte anlatma",
    exampleRole: "Software Engineer",
    internalLinks: [
      { label: "Modern CV şablonları", href: "/templates?category=Modern" },
      { label: "CV Builder", href: "/builder" }
    ]
  },
  {
    slug: "marketing-resume-example",
    title: "Marketing Resume Example",
    description: "Pazarlama adayları için kampanya, kanal, metrik ve içerik başarılarını resume formatına dönüştürme rehberi.",
    category: "Resume Examples",
    keyword: "marketing resume example",
    audience: "marketing specialist, growth veya brand rolleri hedefleyen adaylar",
    angle: "yaratıcı işleri ölçülebilir sonuçlarla destekleme",
    exampleRole: "Marketing Specialist",
    internalLinks: [
      { label: "Creative şablonlar", href: "/templates?category=Creative" },
      { label: "LinkedIn optimizasyonu", href: "/guides/linkedin-profile-optimization" }
    ]
  },
  {
    slug: "sales-resume-guide",
    title: "Sales Resume Guide",
    description: "Satış profesyonelleri için hedef, gelir, pipeline ve müşteri yönetimi başarılarını CV'ye yazma rehberi.",
    category: "CV Guides",
    keyword: "sales resume guide",
    audience: "B2B satış, account executive veya sales manager adayları",
    angle: "hedef gerçekleşme oranı, gelir etkisi ve müşteri portföyü kanıtlarını öne çıkarma",
    exampleRole: "Sales Manager",
    internalLinks: [
      { label: "Professional şablonlar", href: "/templates?category=Professional" },
      { label: "Mülakat hazırlığı", href: "/guides/interview-preparation-guide" }
    ]
  },
  {
    slug: "internship-resume-example",
    title: "Internship Resume Example",
    description: "Staj başvuruları için eğitim, ders projesi, gönüllülük ve araç bilgisini düzenleyen örnek resume rehberi.",
    category: "Resume Examples",
    keyword: "internship resume example",
    audience: "staj arayan üniversite öğrencileri",
    angle: "profesyonel deneyim az olduğunda potansiyeli kanıtlarla gösterme",
    exampleRole: "Software Intern",
    internalLinks: [
      { label: "Student CV şablonları", href: "/templates?category=Student" },
      { label: "CV Builder", href: "/builder" }
    ]
  },
  {
    slug: "europass-resume-guide",
    title: "Europass Resume Guide",
    description: "Europass formatı ile modern CV şablonları arasındaki farkları ve Avrupa başvurularında dikkat edilecek noktaları açıklar.",
    category: "CV Guides",
    keyword: "Europass resume guide",
    audience: "Avrupa'daki eğitim, staj veya iş fırsatlarına başvuran adaylar",
    angle: "standart format ile modern profesyonel anlatım arasında denge kurma",
    exampleRole: "Research Assistant",
    internalLinks: [
      { label: "Minimal şablonlar", href: "/templates?category=Minimal" },
      { label: "International resume guide", href: "/guides/international-resume-guide" }
    ]
  },
  {
    slug: "cover-letter-guide",
    title: "Cover Letter Guide",
    description: "Ön yazı hazırlarken CV'yi tekrar etmeden motivasyon, rol uyumu ve güçlü örnekleri anlatma rehberi.",
    category: "Career Tips",
    keyword: "cover letter guide",
    audience: "CV'sini güçlü bir ön yazıyla desteklemek isteyen adaylar",
    angle: "kanıtları şirket ihtiyacıyla ilişkilendiren kısa ve net yazı kurgusu",
    exampleRole: "Project Coordinator",
    internalLinks: [
      { label: "Cover letter guide", href: "/guides/cover-letter-guide" },
      { label: "CV Builder", href: "/builder" }
    ]
  },
  {
    slug: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimization",
    description: "LinkedIn profilini CV ile tutarlı hale getirmek, başlık ve özet alanlarını güçlendirmek için kapsamlı rehber.",
    category: "Career Tips",
    keyword: "LinkedIn profile optimization",
    audience: "LinkedIn üzerinden görünürlüğünü artırmak isteyen profesyoneller",
    angle: "profil başlığı, özet, deneyim ve portfolyo bağlantılarını aynı kariyer hikayesinde toplama",
    exampleRole: "Product Designer",
    internalLinks: [
      { label: "LinkedIn profile optimization", href: "/guides/linkedin-profile-optimization" },
      { label: "Modern şablonlar", href: "/templates?category=Modern" }
    ]
  },
  {
    slug: "remote-job-resume-guide",
    title: "Remote Job Resume Guide",
    description: "Remote iş başvurularında iletişim, öz yönetim, araç kullanımı ve sonuç odaklı çalışma becerilerini gösterme rehberi.",
    category: "CV Guides",
    keyword: "remote job resume guide",
    audience: "uzaktan çalışma pozisyonlarına başvuran adaylar",
    angle: "bağımsız çalışma, asenkron iletişim ve ölçülebilir çıktıları görünür kılma",
    exampleRole: "Remote Customer Success Specialist",
    internalLinks: [
      { label: "Professional şablonlar", href: "/templates?category=Professional" },
      { label: "Job application checklist", href: "/guides/job-application-checklist" }
    ]
  },
  {
    slug: "entry-level-resume-guide",
    title: "Entry Level Resume Guide",
    description: "Yeni mezun ve başlangıç seviyesi adaylar için eğitim, proje ve yetenekleri profesyonel CV'ye dönüştürme rehberi.",
    category: "CV Guides",
    keyword: "entry level resume",
    audience: "ilk profesyonel işine başvuran adaylar",
    angle: "deneyim eksikliğini proje, öğrenme hızı ve aktarılabilir becerilerle dengeleme",
    exampleRole: "Junior Data Analyst",
    internalLinks: [
      { label: "Student resume example", href: "/guides/student-resume-example" },
      { label: "Student şablonları", href: "/templates?category=Student" }
    ]
  },
  {
    slug: "career-change-resume",
    title: "Career Change Resume",
    description: "Kariyer değişikliği yapan adaylar için aktarılabilir becerileri ve yeni alan kanıtlarını CV'ye yazma rehberi.",
    category: "Career Tips",
    keyword: "career change resume",
    audience: "farklı bir role veya sektöre geçmek isteyen profesyoneller",
    angle: "eski deneyimi yeni hedef rolle bağlantılandıran stratejik CV anlatısı",
    exampleRole: "Customer Success Manager",
    internalLinks: [
      { label: "Career change resume", href: "/guides/career-change-resume" },
      { label: "Minimal şablonlar", href: "/templates?category=Minimal" }
    ]
  },
  {
    slug: "product-manager-resume",
    title: "Product Manager Resume",
    description: "Product Manager CV'sinde roadmap, kullanıcı araştırması, metrik ve ekip koordinasyonunu anlatma rehberi.",
    category: "Resume Examples",
    keyword: "product manager resume",
    audience: "ürün yöneticisi ve associate product manager adayları",
    angle: "ürün etkisini kullanıcı, iş ve teknik ekip bağlamında anlatma",
    exampleRole: "Product Manager",
    internalLinks: [
      { label: "Modern Blue Focus", href: "/templates/modern-blue-focus" },
      { label: "CV Builder", href: "/builder?template=modern-blue-focus" }
    ]
  },
  {
    slug: "data-analyst-resume",
    title: "Data Analyst Resume",
    description: "Data Analyst adayları için SQL, raporlama, dashboard ve iş etkisini CV'ye dönüştürme rehberi.",
    category: "Resume Examples",
    keyword: "data analyst resume",
    audience: "veri analisti, BI analyst veya reporting specialist adayları",
    angle: "teknik araçları iş kararlarına bağlayan ölçülebilir başarı anlatısı",
    exampleRole: "Data Analyst",
    internalLinks: [
      { label: "Modern Clean Stack", href: "/templates/modern-clean-stack" },
      { label: "Resume skills section", href: "/guides/resume-skills-section" }
    ]
  },
  {
    slug: "teacher-resume-guide",
    title: "Teacher Resume Guide",
    description: "Öğretmen CV'sinde sınıf yönetimi, müfredat, öğrenci gelişimi ve eğitim teknolojileri deneyimini yazma rehberi.",
    category: "CV Guides",
    keyword: "teacher resume guide",
    audience: "öğretmen, eğitmen ve akademik destek rolleri hedefleyen adaylar",
    angle: "öğretim etkisini öğrenci çıktıları ve program katkılarıyla görünür yapma",
    exampleRole: "English Teacher",
    internalLinks: [
      { label: "Professional şablonlar", href: "/templates?category=Professional" },
      { label: "Resume summary examples", href: "/guides/resume-summary-examples" }
    ]
  },
  {
    slug: "nurse-resume-guide",
    title: "Nurse Resume Guide",
    description: "Hemşire ve sağlık profesyonelleri için klinik deneyim, hasta güvenliği ve sertifikaları düzenleme rehberi.",
    category: "CV Guides",
    keyword: "nurse resume guide",
    audience: "hemşire, klinik koordinatör ve sağlık çalışanı adaylar",
    angle: "klinik güvenilirliği, hasta odağını ve vardiya deneyimini açık biçimde anlatma",
    exampleRole: "Registered Nurse",
    internalLinks: [
      { label: "Professional Healthcare", href: "/templates/professional-healthcare" },
      { label: "Interview preparation guide", href: "/guides/interview-preparation-guide" }
    ]
  },
  {
    slug: "finance-resume-example",
    title: "Finance Resume Example",
    description: "Finans CV'sinde raporlama, bütçe, modelleme ve risk analizini güçlü başarı cümlelerine dönüştürme rehberi.",
    category: "Resume Examples",
    keyword: "finance resume example",
    audience: "financial analyst, accountant veya finance manager adayları",
    angle: "sayısal çıktıları ve karar destek süreçlerini güvenilir biçimde anlatma",
    exampleRole: "Financial Analyst",
    internalLinks: [
      { label: "Professional Finance", href: "/templates/professional-finance" },
      { label: "Resume summary examples", href: "/guides/resume-summary-examples" }
    ]
  },
  {
    slug: "customer-service-resume",
    title: "Customer Service Resume",
    description: "Müşteri hizmetleri ve customer success rolleri için iletişim, çözüm hızı ve memnuniyet metriklerini yazma rehberi.",
    category: "Resume Examples",
    keyword: "customer service resume",
    audience: "customer support, customer success ve service specialist adayları",
    angle: "müşteri deneyimini sayısal ve davranışsal kanıtlarla destekleme",
    exampleRole: "Customer Success Specialist",
    internalLinks: [
      { label: "Minimal Soft Blue", href: "/templates/minimal-soft-blue" },
      { label: "Behavioral interview questions", href: "/guides/behavioral-interview-questions" }
    ]
  },
  {
    slug: "project-manager-resume",
    title: "Project Manager Resume",
    description: "Project Manager CV'sinde kapsam, bütçe, paydaş, risk ve teslimat başarılarını yapılandırma rehberi.",
    category: "Resume Examples",
    keyword: "project manager resume",
    audience: "proje yöneticisi, scrum master veya delivery manager adayları",
    angle: "teslimat etkisini zaman, bütçe ve paydaş yönetimi kanıtlarıyla anlatma",
    exampleRole: "Project Manager",
    internalLinks: [
      { label: "Professional Consultant", href: "/templates/professional-consultant" },
      { label: "ATS friendly resume guide", href: "/guides/ats-friendly-resume-guide" }
    ]
  },
  {
    slug: "executive-resume-guide",
    title: "Executive Resume Guide",
    description: "Yönetici CV'sinde strateji, P&L, ekip büyüklüğü ve dönüşüm etkisini profesyonel biçimde yazma rehberi.",
    category: "CV Guides",
    keyword: "executive resume guide",
    audience: "director, head of ve executive seviyesindeki adaylar",
    angle: "liderlik etkisini ölçülebilir iş sonuçlarıyla ve kısa yönetici özetiyle anlatma",
    exampleRole: "General Manager",
    internalLinks: [
      { label: "Professional Executive", href: "/templates/professional-executive" },
      { label: "Salary negotiation tips", href: "/guides/salary-negotiation-tips" }
    ]
  },
  {
    slug: "resume-summary-examples",
    title: "Resume Summary Examples",
    description: "CV özet bölümü için farklı kariyer seviyelerine uygun kısa, net ve sonuç odaklı örnekler.",
    category: "CV Guides",
    keyword: "resume summary examples",
    audience: "CV'nin ilk ekranını güçlendirmek isteyen tüm adaylar",
    angle: "hedef rol, uzmanlık ve kanıtı iki veya üç cümlede birleştirme",
    exampleRole: "Operations Lead",
    internalLinks: [
      { label: "ATS friendly resume guide", href: "/guides/ats-friendly-resume-guide" },
      { label: "CV Builder", href: "/builder" }
    ]
  },
  {
    slug: "resume-skills-section",
    title: "Resume Skills Section",
    description: "CV'de yetenekler bölümünü teknik araçlar, metodolojiler, diller ve sosyal yetkinliklerle düzenleme rehberi.",
    category: "CV Guides",
    keyword: "resume skills section",
    audience: "beceri bölümünü daha taranabilir yapmak isteyen adaylar",
    angle: "becerileri listelemek yerine rol kanıtlarıyla ilişkilendirme",
    exampleRole: "Data Analyst",
    internalLinks: [
      { label: "Resume skills section", href: "/guides/resume-skills-section" },
      { label: "ATS friendly resume guide", href: "/guides/ats-friendly-resume-guide" }
    ]
  },
  {
    slug: "interview-preparation-guide",
    title: "Interview Preparation Guide",
    description: "Mülakat öncesi şirket araştırması, başarı hikayesi hazırlığı ve soru pratiği için kapsamlı rehber.",
    category: "Interview Tips",
    keyword: "interview preparation guide",
    audience: "mülakata çağrılan ve hazırlığını sistemli yapmak isteyen adaylar",
    angle: "CV'deki kanıtları güçlü sözlü anlatıma dönüştürme",
    exampleRole: "Account Executive",
    internalLinks: [
      { label: "Behavioral interview questions", href: "/guides/behavioral-interview-questions" },
      { label: "Job application checklist", href: "/guides/job-application-checklist" }
    ]
  },
  {
    slug: "behavioral-interview-questions",
    title: "Behavioral Interview Questions",
    description: "Davranışsal mülakat sorularına STAR yöntemiyle net ve kanıtlı cevap verme rehberi.",
    category: "Interview Tips",
    keyword: "behavioral interview questions",
    audience: "yetkinlik bazlı mülakatlara hazırlanan adaylar",
    angle: "durum, görev, aksiyon ve sonuç yapısını CV başarılarıyla bağlama",
    exampleRole: "Customer Success Manager",
    internalLinks: [
      { label: "Interview preparation guide", href: "/guides/interview-preparation-guide" },
      { label: "Resume summary examples", href: "/guides/resume-summary-examples" }
    ]
  },
  {
    slug: "salary-negotiation-tips",
    title: "Salary Negotiation Tips",
    description: "Teklif görüşmelerinde piyasa araştırması, değer anlatımı ve profesyonel iletişim için maaş pazarlığı rehberi.",
    category: "Career Tips",
    keyword: "salary negotiation tips",
    audience: "iş teklifi alan veya maaş beklentisini netleştirmek isteyen adaylar",
    angle: "değeri sakin, kanıtlı ve karşılıklı fayda odağıyla ifade etme",
    exampleRole: "Finance Manager",
    internalLinks: [
      { label: "Executive resume guide", href: "/guides/executive-resume-guide" },
      { label: "Professional şablonlar", href: "/templates?category=Professional" }
    ]
  },
  {
    slug: "portfolio-resume-guide",
    title: "Portfolio Resume Guide",
    description: "Tasarım, yazılım ve içerik adayları için portfolyo bağlantılarını CV ile uyumlu hale getirme rehberi.",
    category: "Career Tips",
    keyword: "portfolio resume guide",
    audience: "portfolyo ile başvuru yapan yaratıcı ve teknik adaylar",
    angle: "proje kanıtlarını kısa CV metni ve güçlü portfolyo linkleriyle bağlama",
    exampleRole: "Product Designer",
    internalLinks: [
      { label: "Creative şablonlar", href: "/templates?category=Creative" },
      { label: "Software engineer resume", href: "/guides/software-engineer-resume" }
    ]
  },
  {
    slug: "freelance-resume-guide",
    title: "Freelance Resume Guide",
    description: "Freelance çalışanların müşteri projeleri, uzmanlık alanı ve sonuçlarını profesyonel CV'ye dönüştürme rehberi.",
    category: "Career Tips",
    keyword: "freelance resume guide",
    audience: "freelance, contract veya bağımsız çalışan profesyoneller",
    angle: "müşteri gizliliğini koruyarak proje kapsamı ve iş etkisini anlatma",
    exampleRole: "Freelance Designer",
    internalLinks: [
      { label: "Portfolio resume guide", href: "/guides/portfolio-resume-guide" },
      { label: "Creative Editorial", href: "/templates/creative-editorial" }
    ]
  },
  {
    slug: "international-resume-guide",
    title: "International Resume Guide",
    description: "Uluslararası iş başvurularında dil, lokasyon, format, saat dilimi ve kültürel beklentileri yönetme rehberi.",
    category: "CV Guides",
    keyword: "international resume guide",
    audience: "yurt dışı veya global remote pozisyonlara başvuran adaylar",
    angle: "yerel CV alışkanlıklarını global okunabilirlik ve net iletişimle dengeleme",
    exampleRole: "Export Manager",
    internalLinks: [
      { label: "Professional Global", href: "/templates/professional-global" },
      { label: "Remote job resume guide", href: "/guides/remote-job-resume-guide" }
    ]
  },
  {
    slug: "cv-mistakes-to-avoid",
    title: "CV Mistakes to Avoid",
    description: "CV'de başvuru etkisini düşüren yaygın hataları ve bunları düzeltmek için uygulanabilir kontrolleri açıklar.",
    category: "CV Guides",
    keyword: "CV mistakes to avoid",
    audience: "CV'sini göndermeden önce son kez kontrol etmek isteyen adaylar",
    angle: "uzun metin, belirsiz başarı, zayıf format ve hatalı iletişim bilgilerini düzeltme",
    exampleRole: "Office Manager",
    internalLinks: [
      { label: "CV mistakes to avoid", href: "/guides/cv-mistakes-to-avoid" },
      { label: "CV Builder", href: "/builder" }
    ]
  },
  {
    slug: "job-application-checklist",
    title: "Job Application Checklist",
    description: "Başvuru göndermeden önce CV, ön yazı, LinkedIn, portfolyo ve dosya adını kontrol etmek için checklist rehberi.",
    category: "Career Tips",
    keyword: "job application checklist",
    audience: "başvurusunu profesyonel ve hatasız göndermek isteyen adaylar",
    angle: "başvuru paketini teknik, içerik ve iletişim açısından son kontrolden geçirme",
    exampleRole: "Operations Specialist",
    internalLinks: [
      { label: "Cover letter guide", href: "/guides/cover-letter-guide" },
      { label: "LinkedIn profile optimization", href: "/guides/linkedin-profile-optimization" }
    ]
  }
];

function buildGuideSections(topic: GuideTopic): GuideSection[] {
  return [
    {
      heading: `${topic.title} neden önemli?`,
      body: [
        `${topic.keyword} araması yapan kullanıcıların temel ihtiyacı yalnızca güzel görünen bir belge bulmak değildir. Asıl ihtiyaç, hedef role uygun kanıtları doğru sırayla anlatan, hızlı taranan ve başvuru sürecinde güven veren bir CV hazırlamaktır. ${topic.title}, özellikle ${topic.audience} için bu ihtiyacı karşılar. İyi hazırlanmış bir CV; deneyim, eğitim, yetenek ve proje bilgilerini rastgele dizmez, adayın neden uygun olduğunu kısa sürede gösterir. ToolvantaCV'deki builder ve şablon akışı bu nedenle önce şablon seçimi, sonra veri girişi, canlı önizleme ve PDF çıktısı mantığıyla çalışır.`,
        `${topic.angle} bu rehberin ana odağıdır. Başvurularda güçlü olan adaylar genellikle aynı deneyime sahip oldukları için değil, deneyimlerini daha net anlattıkları için öne çıkar. Bu rehberde ${topic.exampleRole} örneği üzerinden düşünebilir, kendi rolünüze göre aynı yapıyı uyarlayabilirsiniz. CV'nin amacı tüm geçmişi eksiksiz dökmek değil; hedef ilan için en önemli kanıtları seçip okunabilir bir düzene yerleştirmektir.`
      ],
      subsections: [
        {
          heading: "İlk taramada ne görünmeli?",
          body: [
            `İlk ekranda ad soyad, hedef unvan, iletişim bilgileri ve kısa profesyonel özet açıkça görünmelidir. ${topic.exampleRole} gibi bir rol hedefleniyorsa özet alanı role özel uzmanlık, kullanılan araçlar ve ölçülebilir katkı sinyali vermelidir. Uzun ve genel cümleler yerine iki ya da üç kısa cümle daha iyi çalışır.`
          ]
        }
      ]
    },
    {
      heading: "CV yapısı nasıl kurulmalı?",
      body: [
        `${topic.title} hazırlarken bölüm sırası adayın deneyim seviyesine göre değişebilir. Deneyimli adaylarda iş deneyimi öne gelirken, öğrencilerde eğitim, projeler ve stajlar daha üstte yer alabilir. Kariyer değiştiren adaylarda ise profesyonel özet ve aktarılabilir beceriler kritik hale gelir. Hangi sırayı seçerseniz seçin, başlıkların standart ve açık olması gerekir: Deneyim, Eğitim, Yetenekler, Projeler, Sertifikalar ve Diller gibi bölümler hem insan okuyucu hem ATS sistemleri için daha güvenlidir.`,
        `Her bölümde aynı soruyu cevaplayın: Bu bilgi hedef rol için neden önemli? Eğer bir madde bu soruya cevap vermiyorsa kısaltılabilir veya çıkarılabilir. CV'nin güçlü görünmesi için her alanı doldurmak şart değildir; asıl değer doğru bilgiyi doğru yerde göstermektir. ToolvantaCV şablonlarında bu nedenle gereksiz dekoratif öğelerden kaçınılır, içerik alanları okunabilir bloklar halinde sunulur.`
      ],
      subsections: [
        {
          heading: "Bölüm başlıkları sade kalmalı",
          body: [
            `Yaratıcı başlıklar bazen hoş görünür, ancak ATS okunabilirliğini ve hızlı insan taramasını zorlaştırabilir. ${topic.keyword} için en güvenli yaklaşım, standart başlıkları koruyup metnin içinde güçlü örneklere yer vermektir.`
          ]
        }
      ]
    },
    {
      heading: "Deneyim ve başarı cümleleri",
      body: [
        `Deneyim bölümünde yalnızca görevleri sıralamak yerine, eylem, kapsam ve sonuç içeren cümleler yazın. Örneğin ${topic.exampleRole} pozisyonunda çalışan bir aday, "rapor hazırladım" demek yerine raporun hangi kararı hızlandırdığını, hangi ekibe destek verdiğini veya hangi metriği iyileştirdiğini anlatmalıdır. Sayı kullanabiliyorsanız yüzde, adet, süre, gelir, maliyet veya kalite göstergeleri ekleyin. Sayı yoksa kapsam ve sorumluluk alanı üzerinden somutluk sağlayın.`,
        `Başarı cümleleri kısa olmalı, ancak belirsiz kalmamalıdır. "Ekip çalışmasına katkı sağladım" gibi ifadeler çoğu CV'de benzer görünür. Bunun yerine "satış ve ürün ekipleri arasında haftalık öncelik toplantılarını koordine ederek müşteri geri bildirimlerinin roadmap'e aktarılmasını hızlandırdım" gibi bağlamlı cümleler daha ikna edicidir. Bu yaklaşım hem resume examples hem career tips içeriklerinde ortak bir iyi uygulamadır.`
      ],
      subsections: [
        {
          heading: "STAR mantığını CV'ye uyarlayın",
          body: [
            `Mülakatta kullanılan Situation, Task, Action, Result yaklaşımı CV maddelerine de uygulanabilir. Durumu ve görevi tek cümlede ima edin, asıl alanı aksiyon ve sonuca ayırın. Bu yöntem özellikle ${topic.audience} için güçlü bir anlatım sağlar.`
          ]
        }
      ]
    },
    {
      heading: "ATS ve anahtar kelime stratejisi",
      body: [
        `ATS friendly resume hazırlarken iş ilanındaki kelimeleri kopyalayıp rastgele doldurmak doğru değildir. Anahtar kelimeler gerçek deneyiminizle örtüştüğü ölçüde kullanılmalıdır. İlanda belirli araçlar, metodolojiler veya sorumluluklar geçiyorsa bunları beceri bölümüne eklemek yetmez; mümkün olduğunda deneyim veya proje maddelerinde nasıl kullandığınızı gösterin. Bu sayede CV hem sistem tarafından okunur hem de insan okuyucu için anlamlı kalır.`,
        `${topic.keyword} odağında en sık yapılan hata, tasarımı içeriğin önüne koymaktır. Oysa güçlü bir şablon metni gizlemez, metnin okunmasını kolaylaştırır. Çok karmaşık tablolar, görsel içine gömülü yazılar veya aşırı dekoratif ikonlar bazı sistemlerde sorun çıkarabilir. ToolvantaCV Builder aynı veri modelini kullandığı için şablon değiştirirken bilgiler korunur; aday yalnızca görsel dili değiştirir.`
      ],
      subsections: [
        {
          heading: "Anahtar kelimeleri doğal dağıtın",
          body: [
            `Özet, beceriler, deneyim ve proje bölümleri arasında dengeli anahtar kelime kullanımı hedefleyin. Aynı kelimeyi gereksiz tekrar etmek yerine bağlamlı cümlelerle desteklemek daha profesyonel görünür.`
          ]
        }
      ]
    },
    {
      heading: "Şablon seçimi ve canlı önizleme",
      body: [
        `${topic.title} için şablon seçerken önce rolün beklentisini düşünün. Kurumsal ve resmi rollerde Professional veya Minimal şablonlar daha güvenli olabilir. Yaratıcı alanlarda Creative şablonlar portfolyo hissini destekleyebilir. Öğrenci ve staj başvurularında Student kategorisi eğitim, proje ve potansiyeli daha görünür hale getirir. Modern şablonlar ise teknoloji, ürün, veri ve dijital ekipler için dengeli bir seçenek sunar.`,
        `Canlı önizleme, CV hazırlama sürecinde çok değerlidir çünkü kullanıcı metni yazarken sayfa yoğunluğunu, bölüm sırasını ve boşluk dengesini hemen görür. Uzun paragraflar önizlemede sıkışık görünüyorsa bunları kısa maddelere bölmek gerekir. PDF indirmeden önce yazdırma önizlemesini kontrol etmek, sayfa taşması ve okunabilirlik sorunlarını azaltır.`
      ],
      subsections: [
        {
          heading: "PDF öncesi son kontrol",
          body: [
            `Dosya adı, iletişim bilgileri, tarih formatı, linklerin çalışması ve yazım hataları son kontrolde mutlaka gözden geçirilmelidir. Başvuru dosyası profesyonel görünmeli ve kolay açılmalıdır.`
          ]
        }
      ]
    },
    {
      heading: "İç linkler ve sonraki adımlar",
      body: [
        `Bu rehberi uyguladıktan sonra bir şablon seçip bilgilerinizi ToolvantaCV Builder içinde test edebilirsiniz. Farklı tasarımlar aynı veri modelini kullandığı için önce içerik kalitesine odaklanmak, sonra görsel seçimi yapmak daha sağlıklı bir yöntemdir. ${topic.title} konusunda ilerlerken benzer rehberleri okumak da başvuru paketinin tamamını güçlendirir.`,
        `Özellikle CV, LinkedIn, ön yazı ve mülakat hazırlığı bir bütün olarak düşünülmelidir. CV'de verdiğiniz kanıtlar LinkedIn profilinizde, portfolyonuzda ve mülakattaki örneklerinizde tutarlı biçimde görünmelidir. Bu tutarlılık işverenin güvenini artırır ve adayın profesyonel hikayesini daha kolay anlamasını sağlar.`
      ],
      subsections: [
        {
          heading: "Bağlantılı kaynaklar",
          body: [
            `Aşağıdaki iç bağlantılar ${topic.keyword} konusunu tamamlayan ToolvantaCV sayfalarına yönlendirir. Bu linkler reklam alanı değildir; kullanıcıyı ilgili şablon, builder veya rehber sayfasına götürmek için eklenmiştir.`
          ]
        }
      ]
    }
  ];
}

export const guides: GuideArticle[] = guideTopics.map((topic) => ({
  ...topic,
  readingTime: "8 dk",
  updatedAt,
  sections: buildGuideSections(topic)
}));

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
