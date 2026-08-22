export type ResourceCategory = "Guides" | "Templates" | "Glossary" | "Cheat Sheets";

export interface ResourcePost {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  author: string;
  authorRole: string;
}

export const resources: ResourcePost[] = [
  {
    slug: "ai-newsletter-subject-line-formulas",
    title: "AI Newsletter Subject Lines That Get Opens",
    description:
      "14 AI newsletter subject line formulas with real examples. Increase open rates without sounding spammy or generic.",
    category: "Guides",
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingTime: 7,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-carousel-hook-formulas",
    title: "LinkedIn Carousel Hook Formulas That Stop the Scroll",
    description:
      "12 proven LinkedIn carousel hook formulas with examples for founders, trainers, and consultants. Stop the scroll and get more swipes.",
    category: "Guides",
    publishedAt: "2026-08-18",
    updatedAt: "2026-08-18",
    readingTime: 8,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "ai-workflows-linkedin-personal-brands",
    title: "10 AI Workflows for LinkedIn Personal Brands",
    description:
      "Discover 10 practical AI workflows for LinkedIn personal brands, from research to carousel design and newsletter writing.",
    category: "Guides",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-05",
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
    updatedAt: "2026-08-05",
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
    updatedAt: "2026-08-04",
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
    updatedAt: "2026-08-04",
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
    updatedAt: "2026-08-04",
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
    updatedAt: "2026-08-05",
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
    updatedAt: "2026-08-05",
    readingTime: 2,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "best-ai-tools-linkedin-carousels-newsletters-2026",
    title: "Best AI LinkedIn Carousel Generator and Newsletter Tools in 2026",
    description:
      "Complete 2026 comparison of the best AI LinkedIn carousel generator and newsletter tools including BrandOps, Taplio, Typefully, Canva, Gamma, Jasper, Buffer, and more.",
    category: "Guides",
    publishedAt: "2026-08-12",
    updatedAt: "2026-08-21",
    readingTime: 15,
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
    updatedAt: "2026-08-12",
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
    updatedAt: "2026-08-12",
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
    updatedAt: "2026-08-12",
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
    updatedAt: "2026-08-12",
    readingTime: 9,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-carousel-templates",
    title: "LinkedIn Carousel Templates: 7 Ready-to-Use Frameworks",
    description:
      "Free LinkedIn carousel templates you can copy today. Seven proven frameworks for founders, coaches, and consultants with slide structure and examples.",
    category: "Templates",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-carousel-size-specs-2026",
    title: "LinkedIn Carousel Size and Specs 2026",
    description:
      "The exact LinkedIn carousel size, aspect ratio, file format, and slide count for 2026. Stop guessing and publish carousels that look professional.",
    category: "Guides",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 5,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "newsletter-examples-founders",
    title: "Newsletter Examples for Founders: 5 Formats That Build Trust",
    description:
      "Five proven newsletter formats for founders, consultants, and coaches — with real examples, structure, and when to use each one.",
    category: "Guides",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-content-calendar-template",
    title: "LinkedIn Content Calendar Template: A 30-Day Plan",
    description:
      "Free LinkedIn content calendar template for founders and coaches. A 30-day plan with post types, hooks, and daily themes you can copy today.",
    category: "Templates",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 7,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "linkedin-automation-safety",
    title: "LinkedIn Automation Safety: Stay in Control and Avoid Account Risk",
    description:
      "A practical guide to safe LinkedIn automation for founders, coaches, and consultants — plus the review-first approach that reduces risk.",
    category: "Guides",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "ai-linkedin-post-generator",
    title: "AI LinkedIn Post Generator: Write Faster Without Losing Your Voice",
    description:
      "How to use an AI LinkedIn post generator the right way. Keep your voice, add real insight, and publish posts that feel human.",
    category: "Guides",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "what-is-query-fan-out",
    title: "What Is Query Fan-Out? How Google AI Search Really Works",
    description:
      "Query fan-out is how Google AI Mode and AI Overviews split one search into multiple sub-queries. Learn how it works and how to optimize your content for it.",
    category: "Glossary",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 7,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "what-is-a-linkedin-carousel",
    title: "What Is a LinkedIn Carousel? The Complete Guide for 2026",
    description:
      "A LinkedIn carousel is a multi-slide document post. Learn how carousels work, why they drive engagement, and how to create one that gets swipes and saves.",
    category: "Glossary",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "what-is-review-first-publishing",
    title: "What Is Review-First Publishing? A Safe AI Content Workflow",
    description:
      "Review-first publishing means AI drafts content but humans approve before it goes live. Learn why it matters and how to build a safe AI content workflow.",
    category: "Glossary",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "what-is-cited-ai-content",
    title: "What Is Cited AI Content? Build Trust With Source-Backed Writing",
    description:
      "Cited AI content includes links to real sources for every claim. Learn why citations matter, how to add them, and how they help SEO and AI search visibility.",
    category: "Glossary",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 6,
    author: "Rajesh Kumar",
    authorRole: "Founder, BrandOps",
  },
  {
    slug: "what-is-geo-search",
    title: "What Is GEO Search? Generative Engine Optimization Explained",
    description:
      "GEO search is optimizing content so AI engines cite your site. Learn how generative engine optimization works and how to make your content AI-discoverable.",
    category: "Glossary",
    publishedAt: "2026-08-21",
    updatedAt: "2026-08-21",
    readingTime: 7,
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
