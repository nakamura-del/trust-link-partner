import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { CASES } from "@/lib/cases";
import { POSTS } from "@/lib/blog";

const siteUrl = "https://trust-link-ptnr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${siteUrl}/`, priority: 1.0 },
    { url: `${siteUrl}/about`, priority: 0.8 },
    { url: `${siteUrl}/services`, priority: 0.9 },
    { url: `${siteUrl}/cases`, priority: 0.8 },
    { url: `${siteUrl}/blog`, priority: 0.8 },
    { url: `${siteUrl}/faq`, priority: 0.7 },
    { url: `${siteUrl}/contact`, priority: 0.7 },
  ].map((p) => ({
    url: p.url,
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));

  const servicePages = SERVICES.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const casePages = CASES.map((c) => ({
    url: `${siteUrl}/cases/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogPages = POSTS.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.updated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...casePages, ...blogPages];
}
