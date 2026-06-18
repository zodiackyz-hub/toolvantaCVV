# ToolvantaCV

ToolvantaCV, `toolvantacv.space` domaininde çalışacak profesyonel CV/Resume SaaS platformudur. Next.js, React ve Tailwind CSS ile hazırlanmıştır.

## Özellikler

- Ana sayfa, şablonlar sayfası, şablon detay sayfası ve iletişim sayfası
- Modern, Minimal, Creative, Professional ve Student kategorilerinde 50 örnek CV şablonu
- Tüm şablon detaylarında kullanım alanı, avantajlar ve uzun özgün açıklama içerikleri
- Hakkımızda, Gizlilik Politikası, Çerez Politikası, Kullanım Şartları, KVKK/GDPR ve Yasal Uyarı sayfaları
- 30 yazılık SEO odaklı CV, kariyer, resume örneği ve mülakat rehberi merkezi
- Canlı önizlemeli CV Builder
- ATS Score Analyzer
- Resume Strength Checker
- Cover Letter Generator
- PDF indirme ve yazdırma akışı
- Google Analytics altyapısı için `NEXT_PUBLIC_GA_ID` ortam değişkeni
- Gerçek AdSense kodu içermeyen reklam placeholder bileşenleri
- `public/ads.txt` dosyası
- Local TypeScript array ile tutulan şablon verisi
- SEO uyumlu metadata, sitemap ve robots çıktısı
- Frontend-only iletişim formu
- Vercel deploy yapısına uygun Next.js proje düzeni

## CV Builder

CV Builder şu özellikleri içerir:

- Kişisel bilgiler, deneyim, eğitim, yetenekler, sertifikalar, projeler ve diller
- Sağ tarafta canlı CV önizleme
- Seçili şablonla PDF indirme
- Tarayıcı yazdırma desteği
- Reset ve Use This Template butonları
- ATS Score Analyzer ile 0-100 arası otomatik skor
- Resume Strength Checker ile Contact Information, Professional Summary, Work Experience, Education, Skills, Projects, Certifications, Languages, Formatting ve Keyword Optimization kontrolleri

## Cover Letter Generator

`/cover-letter-generator` sayfası tamamen frontend çalışır. AI API veya backend kullanmaz.

- Full name, job title, company name, industry, experience level, key skills, motivation ve tone alanları
- Professional, Friendly, Confident ve Formal ton seçenekleri
- Generate, Copy, Download as TXT ve Print butonları

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Yerel geliştirme sunucusu varsayılan olarak `http://localhost:3000` adresinde açılır.

## Build

```bash
npm run build
npm run preview
```

GitHub Pages için statik çıktı `npm run build` veya `npm run build:github` sonrası `out/` klasörüne üretilir.

## Deploy

Vercel ile deploy için:

1. Projeyi GitHub, GitLab veya Bitbucket reposuna gönderin.
2. Vercel üzerinde yeni proje olarak içe aktarın.
3. Zip veya repo içinde hem `toolvanta/` hem `toolvantacv/` klasörü varsa Root Directory alanını kesinlikle `toolvantacv` olarak ayarlayın.
4. Framework preset olarak Next.js seçili kalabilir.
5. Build command: `npm run build`
6. Output ayarı boş bırakılabilir.
7. Domain ayarlarında `toolvantacv.space` domainini projeye bağlayın.

Ödeme sistemi bu sürümde yoktur. Google Analytics kullanmak istiyorsanız `NEXT_PUBLIC_GA_ID` ortam değişkenini ekleyin.
Google AdSense onayından sonra gerçek yayıncı kimliği `public/ads.txt` dosyasına eklenmelidir.

## GitHub Pages Deploy

Bu proje GitHub Pages için statik export uyumludur.

Yapılan ayarlar:

- `next.config.mjs` içinde `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true`
- `public/.nojekyll`
- `public/CNAME` içinde `toolvantacv.space`
- GitHub Actions workflow dosyası

Eğer GitHub reposunun kökü doğrudan `toolvantacv` ise şu workflow kullanılır:

```txt
toolvantacv/.github/workflows/deploy-github-pages.yml
```

Eğer GitHub reposunda iki klasör varsa:

```txt
toolvanta/
toolvantacv/
```

repo kökündeki şu workflow kullanılır:

```txt
.github/workflows/toolvantacv-github-pages.yml
```

GitHub ayarları:

1. Repository Settings bölümüne girin.
2. Pages bölümünde Source olarak `GitHub Actions` seçin.
3. Domain olarak `toolvantacv.space` ekleyin.
4. DNS tarafında GitHub Pages kayıtlarını oluşturun.
5. Değişiklikleri `main` veya `master` branch'e push edin.

Build çıktısı GitHub Actions tarafından `out/` klasöründen Pages'e yüklenir.

Özel domain kullanmadan `username.github.io/repository-name` altında yayınlayacaksanız `next.config.mjs` içindeki `GITHUB_PAGES_BASE_PATH` desteğini kullanabilirsiniz. Workflow build adımına örnek:

```yaml
env:
  GITHUB_PAGES_BASE_PATH: /repository-name
```

## Google Analytics

Google Analytics 4 ölçüm kimliğini Vercel ortam değişkenlerine ekleyin:

```txt
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Bu değer boş bırakılırsa Analytics scriptleri yüklenmez.

## Google Search Console

1. Google Search Console üzerinde `Domain` property seçin.
2. `toolvantacv.space` domainini ekleyin.
3. DNS TXT doğrulama kaydını domain sağlayıcınızda oluşturun.
4. Doğrulama tamamlandıktan sonra Sitemap bölümüne şu adresi gönderin:

```txt
https://toolvantacv.space/sitemap.xml
```

5. `robots.txt` kontrolü için şu adresi test edin:

```txt
https://toolvantacv.space/robots.txt
```

## AdSense Kurulumu

1. AdSense hesabında `toolvantacv.space` sitesini ekleyin.
2. Site onayı için Google'ın verdiği yönergeleri izleyin.
3. Onay sonrası gerçek publisher satırını `public/ads.txt` içine ekleyin.
4. Reklam kodlarını eklemeden önce placeholder konumlarını kontrol edin.
5. Reklamları navigasyon, form butonları, PDF indir veya CTA butonlarına çok yakın yerleştirmeyin.

Bu projede gerçek AdSense kodu bilinçli olarak eklenmemiştir.
