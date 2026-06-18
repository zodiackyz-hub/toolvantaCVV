import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legalPages } from "@/data/legalPages";
import { createPageMetadata } from "@/lib/seo";

const page = legalPages.cookies;

export const metadata: Metadata = createPageMetadata({
  title: page.title,
  description: page.description,
  path: `/${page.slug}`
});

export default function CookiePolicyPage() {
  return <LegalPage page={page} />;
}
