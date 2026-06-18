import type { Metadata } from "next";
import { CoverLetterGenerator } from "@/components/CoverLetterGenerator";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Free Cover Letter Generator | ToolvantaCV"
  },
  description:
    "Create a professional cover letter online for free with ToolvantaCV. Generate, copy, download, and print your cover letter in minutes.",
  alternates: {
    canonical: "/cover-letter-generator"
  },
  openGraph: {
    title: "Free Cover Letter Generator | ToolvantaCV",
    description:
      "Create a professional cover letter online for free with ToolvantaCV. Generate, copy, download, and print your cover letter in minutes.",
    url: `${siteConfig.url}/cover-letter-generator`,
    type: "website",
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cover Letter Generator | ToolvantaCV",
    description:
      "Create a professional cover letter online for free with ToolvantaCV. Generate, copy, download, and print your cover letter in minutes."
  }
};

export default function CoverLetterGeneratorPage() {
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cover Letter Generator",
        item: `${siteConfig.url}/cover-letter-generator`
      }
    ]
  };
  const webApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ToolvantaCV Cover Letter Generator",
    url: `${siteConfig.url}/cover-letter-generator`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    description:
      "Create a professional cover letter online for free with ToolvantaCV. Generate, copy, download, and print your cover letter in minutes."
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase text-brand-700">Cover Letter Generator</p>
        <h1 className="mt-2 text-4xl font-extrabold text-slate-950">Free Cover Letter Generator</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Generate a clean cover letter in minutes, then copy, download as TXT, or print it. Everything runs in your browser.
        </p>
      </div>
      <CoverLetterGenerator />
      <AdPlaceholder label="Cover letter guide content ad placeholder" className="mt-12" />
    </section>
  );
}
