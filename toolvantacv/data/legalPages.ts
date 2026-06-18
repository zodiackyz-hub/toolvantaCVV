export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageContent = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

const updatedAt = "18 Haziran 2026";

export const legalPages = {
  about: {
    slug: "about",
    title: "Hakkımızda",
    description:
      "ToolvantaCV, CV şablonlarını sade, hızlı ve erişilebilir şekilde incelemek isteyen kullanıcılar için hazırlanmış bağımsız bir şablon sitesidir.",
    updatedAt,
    sections: [
      {
        heading: "ToolvantaCV nedir?",
        body: [
          "ToolvantaCV, Toolvanta ana sitesinden ayrı çalışan ve yalnızca CV/Resume şablonlarına odaklanan bağımsız bir web sitesidir. Amacımız, kullanıcıların farklı kariyer seviyelerine uygun modern, minimal, yaratıcı, profesyonel ve öğrenci odaklı CV şablonlarını hızlıca karşılaştırabilmesini sağlamaktır.",
          "Sitede şu aşamada gerçek PDF üretimi, ödeme sistemi veya hesap oluşturma bulunmaz. Kullanıcılar şablonları inceleyebilir, detay sayfalarında kullanım alanlarını okuyabilir ve yakında eklenecek CV oluşturucu için uygun tasarımı seçebilir."
        ]
      },
      {
        heading: "Yayın ilkelerimiz",
        body: [
          "İçerikler kullanıcıyı yanıltmadan, açık başlıklar ve sade açıklamalarla sunulur. Reklam alanları içerikten ayrıştırılır ve navigasyon ya da işlem butonlarına çok yakın konumlandırılmaz.",
          "ToolvantaCV, hızlı yüklenen, mobil uyumlu ve okunabilir sayfalar üretmeyi önceliklendirir. Gereksiz pop-up, otomatik yönlendirme veya yanıltıcı tıklama alanı kullanılmaz."
        ]
      }
    ]
  },
  privacy: {
    slug: "privacy-policy",
    title: "Gizlilik Politikası",
    description:
      "ToolvantaCV gizlilik politikası; hangi verilerin işlenebileceğini, çerez kullanımını ve kullanıcı haklarını açıklar.",
    updatedAt,
    sections: [
      {
        heading: "Toplanan bilgiler",
        body: [
          "ToolvantaCV şu an hesap sistemi veya ödeme altyapısı kullanmaz. İletişim formu frontend-only çalışır; gerçek bir sunucuya mesaj gönderimi bu sürümde yapılmaz.",
          "Siteyi ziyaret ettiğinizde standart web sunucusu kayıtları, tarayıcı türü, ziyaret zamanı, yönlendiren sayfa ve teknik hata kayıtları gibi sınırlı teknik bilgiler barındırma sağlayıcısı tarafından işlenebilir."
        ]
      },
      {
        heading: "Reklam ve analiz",
        body: [
          "Sitede reklam alanları için yalnızca placeholder bileşenleri bulunur. Gerçek Google AdSense kodu bu sürümde eklenmemiştir.",
          "İleride reklam veya analiz servisleri etkinleştirilirse, ilgili servis sağlayıcıların çerezleri ve gizlilik bildirimleri ayrıca kullanıcıya sunulur."
        ]
      },
      {
        heading: "Haklarınız",
        body: [
          "Geçerli mevzuat kapsamında kişisel verilerinize erişme, düzeltme, silme, işlemeyi sınırlama ve itiraz etme haklarına sahip olabilirsiniz.",
          "ToolvantaCV ile ilgili gizlilik talepleri için iletişim sayfasındaki formu kullanabilirsiniz. Form backend'e bağlandığında gerçek iletişim akışı ayrıca duyurulacaktır."
        ]
      }
    ]
  },
  cookies: {
    slug: "cookie-policy",
    title: "Çerez Politikası",
    description:
      "ToolvantaCV çerez politikası, zorunlu ve gelecekte kullanılabilecek reklam/analiz çerezleri hakkında bilgi verir.",
    updatedAt,
    sections: [
      {
        heading: "Çerez nedir?",
        body: [
          "Çerezler, web sitelerinin tarayıcınızda saklayabildiği küçük metin dosyalarıdır. Oturum sürekliliği, güvenlik, tercihlerin hatırlanması, performans ölçümü ve reklam gösterimi gibi amaçlarla kullanılabilir.",
          "ToolvantaCV bu sürümde kullanıcı hesabı veya kalıcı tercih sistemi sunmadığı için zorunlu olmayan çerez kullanımı minimum düzeydedir."
        ]
      },
      {
        heading: "Gelecekteki reklam çerezleri",
        body: [
          "AdSense veya benzeri reklam servisleri ileride etkinleştirilirse reklam ölçümü, sahtekarlık önleme ve kişiselleştirme tercihleri için üçüncü taraf çerezleri kullanılabilir.",
          "Gerçek reklam kodu eklenmeden önce çerez bilgilendirmesi güncellenir ve kullanıcıya açık, yanıltıcı olmayan bir tercih deneyimi sunulur."
        ]
      },
      {
        heading: "Çerezleri yönetme",
        body: [
          "Tarayıcı ayarlarınız üzerinden çerezleri silebilir, engelleyebilir veya belirli siteler için sınırlandırabilirsiniz. Çerezleri engellemeniz bazı web sitelerinde özelliklerin sınırlı çalışmasına yol açabilir.",
          "ToolvantaCV temel şablon önizleme deneyimini çerezlere bağlı hale getirmemeyi hedefler."
        ]
      }
    ]
  },
  terms: {
    slug: "terms-of-use",
    title: "Kullanım Şartları",
    description:
      "ToolvantaCV kullanım şartları, siteyi kullanırken geçerli olan genel kuralları ve sorumluluk sınırlarını açıklar.",
    updatedAt,
    sections: [
      {
        heading: "Site kullanımı",
        body: [
          "ToolvantaCV, CV şablonlarını incelemek ve kariyer belgeleri hakkında rehber içerik okumak için sunulur. Siteyi kullanırken yürürlükteki mevzuata, üçüncü kişilerin haklarına ve adil kullanım ilkelerine uymanız beklenir.",
          "Sitedeki şablonlar örnek tasarım ve içerik yapısı sunar. Gerçek başvurularınızda verdiğiniz bilgilerin doğruluğundan kullanıcı sorumludur."
        ]
      },
      {
        heading: "Hizmet kapsamı",
        body: [
          "Bu sürümde PDF üretimi, ödeme sistemi, üyelik veya gerçek CV oluşturucu bulunmaz. 'Bu Şablonu Kullan' butonu yalnızca bilgilendirme mesajı gösterir.",
          "ToolvantaCV, site özelliklerini, içeriklerini ve sayfa yapılarını zaman içinde güncelleyebilir. Güncellemeler kullanıcı deneyimini iyileştirmek, güvenlik sağlamak ve yayın politikalarına uyumu artırmak amacıyla yapılır."
        ]
      },
      {
        heading: "Sorumluluk sınırı",
        body: [
          "Sitede yer alan rehberler ve şablon açıklamaları genel bilgilendirme amaçlıdır. İşe alım sonucu, başvuru başarısı veya belirli bir kurumdan olumlu dönüş garanti edilmez.",
          "Kullanıcılar CV içeriklerini göndermeden önce kendi kontrollerini yapmalı ve gerektiğinde profesyonel danışmanlık almalıdır."
        ]
      }
    ]
  },
  kvkkGdpr: {
    slug: "kvkk-gdpr",
    title: "KVKK / GDPR Bilgilendirme",
    description:
      "KVKK ve GDPR kapsamında ToolvantaCV'nin kişisel veri işleme yaklaşımı ve kullanıcı hakları hakkında bilgilendirme.",
    updatedAt,
    sections: [
      {
        heading: "Veri sorumluluğu yaklaşımı",
        body: [
          "ToolvantaCV, kişisel verilerin yalnızca belirli, açık ve meşru amaçlarla işlenmesi gerektiğini kabul eder. Bu sürümde kullanıcı hesabı, CV kaydetme veya ödeme sistemi bulunmadığı için doğrudan kişisel veri işleme kapsamı sınırlıdır.",
          "İleride indirilebilir CV oluşturucu, iletişim altyapısı veya analiz servisleri eklendiğinde veri işleme amaçları, saklama süreleri ve kullanıcı hakları bu sayfada güncellenecektir."
        ]
      },
      {
        heading: "Kullanıcı hakları",
        body: [
          "KVKK ve GDPR kapsamında kişisel verilerinize erişme, düzeltme, silme, işlemeyi sınırlandırma, taşınabilirlik ve itiraz gibi haklara sahip olabilirsiniz.",
          "Bu hakları kullanmak isteyen kullanıcılar, iletişim sayfası üzerinden talep iletebilir. Talep kanalı backend ile desteklendiğinde kimlik doğrulama ve yanıt süreçleri ayrıca netleştirilecektir."
        ]
      },
      {
        heading: "Üçüncü taraf servisler",
        body: [
          "Barındırma, güvenlik, performans ölçümü veya reklam servisleri gibi üçüncü taraf sağlayıcılar teknik verileri işleyebilir. Bu servislerin kullanımı başlatıldığında ilgili sağlayıcı bilgileri ve amaçlar açıkça paylaşılır.",
          "Gerçek AdSense kodu bu sürümde bulunmadığı için reklam çerezleri aktif değildir."
        ]
      }
    ]
  },
  disclaimer: {
    slug: "legal-notice",
    title: "Yasal Uyarı",
    description:
      "ToolvantaCV üzerindeki içeriklerin genel bilgilendirme niteliği ve kullanım sorumlulukları hakkında yasal uyarı.",
    updatedAt,
    sections: [
      {
        heading: "Genel bilgilendirme",
        body: [
          "ToolvantaCV'de yer alan CV şablonları, rehber yazıları ve açıklamalar genel bilgilendirme amacıyla hazırlanmıştır. İçerikler hukuki, finansal, kariyer danışmanlığı veya işe alım garantisi anlamına gelmez.",
          "Kullanıcılar kendi CV içeriklerinin doğruluğundan, güncelliğinden ve başvuru yaptıkları kurumların beklentilerine uygunluğundan sorumludur."
        ]
      },
      {
        heading: "Dış bağlantılar ve reklamlar",
        body: [
          "Sitede ileride üçüncü taraf bağlantıları veya reklamlar yer alabilir. Bu bağlantıların içeriği, güvenliği ve gizlilik uygulamaları ilgili üçüncü tarafın sorumluluğundadır.",
          "Reklam alanları kullanıcıyı yanıltmayacak şekilde işaretlenir ve işlem butonlarına bilinçli şekilde çok yakın yerleştirilmez."
        ]
      },
      {
        heading: "Güncelleme hakkı",
        body: [
          "ToolvantaCV, site içeriğini, şablonları, rehberleri ve yasal metinleri güncelleme hakkını saklı tutar. Kullanıcıların güncel şartları belirli aralıklarla kontrol etmesi önerilir.",
          "Bu sayfada belirtilen bilgiler yayın hazırlığı ve şeffaflık amacıyla sunulur."
        ]
      }
    ]
  }
} satisfies Record<string, LegalPageContent>;

export const legalPageList = Object.values(legalPages);
