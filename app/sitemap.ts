import { MetadataRoute } from "next";
import { resources } from "@/lib/resources";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.brandops.site";
  const staticPages = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/carousel-workflow`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/newsletter-workflow`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/features/review-first-publishing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/linkedin-carousel-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ai-newsletter-generator`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/linkedin-automation-tool`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/linkedin-automation-tool-for-coaches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/linkedin-automation-tool-for-consultants`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/linkedin-automation-tool-for-saas-founders`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/brandops-vs-taplio`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/brandops-vs-typefully`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/brandops-vs-canva-linkedin`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/linkedin-automation-tool-for-agencies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/ai-newsletter-generator-for-consultants`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pipeline`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/resources/linkedin-content-system`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/resources/videos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/cheat-sheets`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/resources/category/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/resources/category/templates`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/resources/category/glossary`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/resources/category/reports`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/founder`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/legal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/legal/gdpr`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/legal/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/legal/data-retention`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const resourcePages = resources.map((r) => ({
    url: `${base}/resources/${r.slug}`,
    lastModified: new Date(r.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...resourcePages] as MetadataRoute.Sitemap;
}