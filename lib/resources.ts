export type ResourceCategory = "Guides" | "Templates" | "Glossary";

export interface ResourcePost {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  publishedAt: string;
  readingTime: number;
  author: string;
  authorRole: string;
}

export const resources: ResourcePost[] = [
  {
    slug: "linkedin-carousel-newsletter-one-hour-workflow",
    title: "How to turn one research topic into a LinkedIn carousel and newsletter in one hour",
    description:
      "A one-hour workflow to research once and publish both a LinkedIn carousel and a newsletter. Includes time-boxing, structure, and review.",
    category: "Guides",
    publishedAt: "2026-08-05",
    readingTime: 7,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "automate-linkedin-carousels-from-research",
    title: "How to create LinkedIn carousels from current research",
    description:
      "A step-by-step workflow for turning one research topic into a five-slide LinkedIn carousel using AI research, writing, and design.",
    category: "Guides",
    publishedAt: "2026-08-04",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "review-first-publishing-workflow",
    title: "The review-first publishing workflow",
    description:
      "Why every AI-assisted content system needs a human approval gate, and how to build one without slowing down your publishing cadence.",
    category: "Guides",
    publishedAt: "2026-08-04",
    readingTime: 5,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "aeo-geo-personal-brands",
    title: "AEO and GEO for personal brands",
    description:
      "What answer engine optimization and generative engine optimization mean for creators, trainers, and solo operators building a personal brand.",
    category: "Glossary",
    publishedAt: "2026-08-04",
    readingTime: 4,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
];

export function getResourceBySlug(slug: string): ResourcePost | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByCategory(category: ResourceCategory): ResourcePost[] {
  return resources.filter((r) => r.category === category);
}
