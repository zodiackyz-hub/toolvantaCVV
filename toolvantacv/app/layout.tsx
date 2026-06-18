import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ToolvantaCV - CV Builder ve Profesyonel Resume Şablonları",
    template: "%s | ToolvantaCV"
  },
  description: siteConfig.description,
  keywords: [
    "CV builder",
    "CV oluşturucu",
    "resume builder",
    "ATS uyumlu CV",
    "PDF CV indir",
    "ToolvantaCV"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "ToolvantaCV - CV Builder ve Profesyonel Resume Şablonları",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "tr_TR"
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolvantaCV - CV Builder ve Profesyonel Resume Şablonları",
    description: siteConfig.description
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GoogleAnalytics />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
