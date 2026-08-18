export type ResourceCategory = "Guides" | "Templates" | "Glossary" | "Cheat Sheets";

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
    slug: "linkedin-carousel-hook-formulas",
    title: "LinkedIn Carousel Hook Formulas That Stop the Scroll",
    description:
      "12 proven LinkedIn carousel hook formulas with examples for founders, trainers, and consultants. Stop the scroll and get more swipes.",
    category: "Guides",
    publishedAt: "2026-08-18",
    readingTime: 8,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "ai-workflows-linkedin-personal-brands",
    title: "10 AI Workflows for LinkedIn Personal Brands in 2026",
    description:
      "Discover 10 practical AI workflows for LinkedIn personal brands, from research to carousel design to newsletter writing. Includes comparison tables and a decision guide.",
    category: "Guides",
    publishedAt: "2026-08-05",
    readingTime: 12,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-carousel-newsletter-one-hour-workflow",
    title: "LinkedIn Carousel + Newsletter in One Hour",
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
  {
    slug: "linkedin-carousel-cheat-sheet",
    title: "LinkedIn Carousel Cheat Sheet",
    description:
      "A one-page reference for building five-slide LinkedIn carousels from research. Includes slide structure, word counts, and a pre-publish checklist.",
    category: "Cheat Sheets",
    publishedAt: "2026-08-05",
    readingTime: 2,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "ai-newsletter-cheat-sheet",
    title: "AI Newsletter Cheat Sheet",
    description:
      "A one-page reference for writing cited, AI-assisted newsletters. Includes structure, citation rules, subject-line formulas, and a pre-send checklist.",
    category: "Cheat Sheets",
    publishedAt: "2026-08-05",
    readingTime: 2,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "best-ai-tools-linkedin-carousels-newsletters-2026",
    title: "Best AI LinkedIn Carousel Generator and Newsletter Tools in 2026",
    description:
      "Discover the best AI LinkedIn carousel generator and newsletter tools for 2026. Compare features, pricing, review control, and find the right fit for your personal brand.",
    category: "Guides",
    publishedAt: "2026-08-12",
    readingTime: 12,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "one-topic-many-formats-content-system",
    title: "One-Topic-to-Many-Formats Content System for Personal Brands",
    description:
      "Turn one research topic into a LinkedIn carousel, newsletter, short posts, and video scripts. A repeatable workflow for solo founders and trainers.",
    category: "Guides",
    publishedAt: "2026-08-12",
    readingTime: 10,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-carousel-design-framework-non-designers",
    title: "LinkedIn Carousel Design Framework for Non-Designers",
    description:
      "The 5-slide LinkedIn carousel formula for non-designers. Includes slide structure, word counts, and a pre-publish checklist.",
    category: "Guides",
    publishedAt: "2026-08-12",
    readingTime: 7,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "how-to-write-cited-ai-newsletter",
    title: "How to Write a Cited AI Newsletter That Builds Trust",
    description:
      "Write newsletters that cite real sources, add human commentary, and avoid the AI-generic tone. Includes structure, checklist, and example breakdown.",
    category: "Guides",
    publishedAt: "2026-08-12",
    readingTime: 8,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "ai-safety-personal-brands-review-first-publishing",
    title: "AI Safety for Personal Brands: Publish Fast, Stay in Control",
    description:
      "A review-first framework for using AI in your personal brand content. Learn what can go wrong, how to review AI output, and how to stay brand-safe at speed.",
    category: "Guides",
    publishedAt: "2026-08-12",
    readingTime: 9,
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
