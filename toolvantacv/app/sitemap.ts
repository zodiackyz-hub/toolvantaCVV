import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { legalPageList } from "@/data/legalPages";
import { templates } from "@/data/templates";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/builder", "/cover-letter-generator", "/templates", "/guides", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8
  }));

  const legalRoutes = legalPageList.map((page) => ({
    url: `${siteConfig.url}/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5
  }));

  const templateRoutes = templates.map((template) => ({
    url: `${siteConfig.url}/templates/${template.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${siteConfig.url}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75
  }));

  return [...staticRoutes, ...legalRoutes, ...templateRoutes, ...guideRoutes];
}
