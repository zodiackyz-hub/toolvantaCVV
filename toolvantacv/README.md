# ToolvantaCV - GitHub Pages Ready

Bu klasör, ToolvantaCV sitesinin GitHub Pages uyumlu temiz kopyasıdır. Mevcut `toolvantacv` projesi korunmuştur; GitHub'a yüklemek için bu klasörü kullanabilirsiniz.

## Önemli

GitHub'a yüklerken `toolvantacv-github-pages` klasörünün içindeki dosyalar repo kökünde olmalıdır.

Doğru yapı:

```txt
repo-root/
  .github/
  app/
  components/
  data/
  lib/
  public/
  package.json
  next.config.mjs
```

Yanlış yapı:

```txt
repo-root/
  toolvantacv-github-pages/
    app/
    package.json
```

Yanlış yapı kullanılırsa GitHub Actions projeyi kökte bulamaz ve site 404 verebilir.

## Özellikler

- Next.js, React ve Tailwind CSS
- GitHub Pages için statik export
- 50 CV şablonu
- CV Builder
- ATS Score Analyzer
- Resume Strength Checker
- Cover Letter Generator
- Blog ve rehber sayfaları
- Yasal sayfalar
- SEO metadata, sitemap ve robots çıktısı
- AdSense placeholder alanları
- Google Analytics ortam değişkeni desteği

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Yerel geliştirme adresi:

```txt
http://localhost:3000
```

## Build

```bash
npm run build
```

Statik çıktı `out/` klasörüne üretilir.

## GitHub Pages Deploy

1. GitHub'da yeni bir repository oluşturun.
2. Bu klasörün içindeki dosyaları repository köküne yükleyin.
3. Repository `Settings -> Pages` bölümüne girin.
4. `Source` alanını `GitHub Actions` yapın.
5. Değişiklikleri `main` veya `master` branch'e push edin.
6. Actions tamamlandıktan sonra GitHub Pages URL'sini açın.

Workflow dosyası:

```txt
.github/workflows/deploy-github-pages.yml
```

Workflow, normal repository Pages yayını için şu değerleri otomatik ayarlar:

```txt
GITHUB_PAGES_BASE_PATH=/repository-name
NEXT_PUBLIC_SITE_URL=https://username.github.io/repository-name
```

Bu ayarlar Next.js asset ve link yollarının repo alt yoluyla üretilmesini sağlar. GitHub Pages'te en sık görülen 404 sorunu bu şekilde engellenir.

## Özel Domain

Özel domain kullanmayacaksanız `public/CNAME` dosyası oluşturmayın.

`toolvantacv.space` gibi özel domain kullanmak için:

1. `public/CNAME.example` dosyasını `public/CNAME` olarak kopyalayın.
2. İçeriği kendi domaininizle güncelleyin.
3. GitHub repository `Settings -> Secrets and variables -> Actions -> Variables` bölümüne `GITHUB_PAGES_CUSTOM_DOMAIN` ekleyin.
4. Değer olarak domaininizi yazın. Örnek: `toolvantacv.space`
5. GitHub Pages custom domain ayarını ve DNS kayıtlarını tamamlayın.

Özel domain aktif olduğunda workflow `basePath` kullanmaz ve site kök domain üzerinden çalışır.

## Ortam Değişkenleri

`.env.example`:

```txt
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://toolvantacv.space
```

GitHub Pages workflow, repository URL'si için `NEXT_PUBLIC_SITE_URL` değerini otomatik üretir.

## 404 Kontrol Listesi

Site GitHub Pages'te 404 verirse şunları kontrol edin:

- Repository `Settings -> Pages -> Source` değeri `GitHub Actions` olmalı.
- Actions sekmesinde deploy workflow'u başarılı bitmeli.
- Dosyalar repo kökünde olmalı, bir alt klasörde olmamalı.
- Özel domain kullanmıyorsanız `public/CNAME` olmamalı.
- Repository adı değiştiyse yeni push ile workflow yeniden çalışmalı.

## AdSense

Gerçek AdSense kodu eklenmemiştir. `public/ads.txt` dosyası onay sonrası gerçek publisher bilgisiyle güncellenmelidir.
