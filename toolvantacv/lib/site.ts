const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://toolvantacv.space").replace(/\/$/, "");

export const siteConfig = {
  name: "ToolvantaCV",
  domain: "toolvantacv.space",
  url: siteUrl,
  supportEmail: "support@toolvantacv.space",
  description:
    "ToolvantaCV, profesyonel CV şablonları, canlı CV builder, PDF indirme ve kariyer rehberleri sunan hızlı ve sade bir CV oluşturma platformudur."
};
