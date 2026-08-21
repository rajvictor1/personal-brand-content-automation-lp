import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FileText,
  ImageIcon,
  PenLine,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { resources } from "@/lib/resources";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildCollectionPage,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";
import { LeadCapture } from "@/components/lead-capture";

export const metadata: Metadata = {
  title: "LinkedIn Content System | Personal Brands",
  description:
    "A complete LinkedIn content system for founders and trainers: research, carousel hooks, design, newsletter writing, and review-first publishing.",
  alternates: { canonical: "https://www.brandops.site/resources/linkedin-content-system" },
};

const systemSteps = [
  {
    icon: Target,
    title: "Pick one timely topic",
    description: "Use current AI, automation, cloud, or infrastructure news. One strong signal beats ten weak ideas.",
  },
  {
    icon: BookOpen,
    title: "Research with citations",
    description: "Firecrawl finds live sources. Every carousel slide and newsletter paragraph links back to real reporting.",
  },
  {
    icon: PenLine,
    title: "Write the hook and angle",
    description: "Use proven LinkedIn carousel hook formulas to stop the scroll and earn swipes.",
  },
  {
    icon: ImageIcon,
    title: "Design the slides",
    description: "Apply a simple carousel design framework so non-designers build consistent, readable slides.",
  },
  {
    icon: FileText,
    title: "Draft the newsletter",
    description: "Turn the same topic into a cited newsletter with a strong subject line and clear takeaway.",
  },
  {
    icon: ShieldCheck,
    title: "Review before publishing",
    description: "Never auto-post. Check every slide, paragraph, citation, and visual before hitting publish.",
  },
];

const relatedArticles = [
  { slug: "ai-workflows-linkedin-personal-brands", label: "10 AI workflows" },
  { slug: "linkedin-carousel-hook-formulas", label: "Carousel hook formulas" },
  { slug: "linkedin-carousel-design-framework-non-designers", label: "Design framework for non-designers" },
  { slug: "linkedin-carousel-templates", label: "LinkedIn carousel templates" },
  { slug: "linkedin-carousel-size-specs-2026", label: "Carousel size and specs 2026" },
  { slug: "how-to-write-cited-ai-newsletter", label: "Cited newsletter guide" },
  { slug: "ai-newsletter-subject-line-formulas", label: "Subject line formulas" },
  { slug: "newsletter-examples-founders", label: "Newsletter examples for founders" },
  { slug: "ai-safety-personal-brands-review-first-publishing", label: "AI safety and review-first publishing" },
  { slug: "linkedin-automation-safety", label: "LinkedIn automation safety" },
  { slug: "linkedin-content-calendar-template", label: "30-day content calendar" },
  { slug: "automate-linkedin-carousels-from-research", label: "Carousels from research" },
  { slug: "linkedin-carousel-newsletter-one-hour-workflow", label: "One-hour carousel + newsletter workflow" },
  { slug: "one-topic-many-formats-content-system", label: "One-topic-to-many-formats system" },
];

export default function LinkedInContentSystemPage() {
  const url = `${BRANDOPS_URL}/resources/linkedin-content-system`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Resources", url: `${BRANDOPS_URL}/resources` },
    { name: "LinkedIn content system", url },
  ]);
  const itemUrls = relatedArticles
    .map((a) => resources.find((r) => r.slug === a.slug))
    .filter(Boolean)
    .map((r) => `${BRANDOPS_URL}/resources/${r?.slug}`);

  const schemas = [
    buildCollectionPage(
      "LinkedIn Content System for Personal Brands",
      "A complete LinkedIn content system for founders and trainers with research, hooks, design, newsletters, and review-first publishing.",
      url,
      itemUrls
    ),
    buildWebPage(
      "LinkedIn Content System for Personal Brands",
      "A complete LinkedIn content system for founders and trainers.",
      url
    ),
    breadcrumb,
  ];

  return (
    <>
      {renderSchemas(schemas)}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
        </div>

        <article className="mx-auto max-w-3xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="mb-4 mt-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Pillar guide
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              LinkedIn Content System for{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Personal Brands
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-4 text-lg text-muted-foreground">
              A repeatable system to turn one research topic into a LinkedIn carousel and cited newsletter every week. Built for solo founders, trainers, and consultants who want consistency without a second job.
            </p>
          </Reveal>

          <section className="mt-16">
            <Reveal delay={0.2}>
              <h2 className="mb-8 text-2xl font-bold text-foreground">The 6-step system</h2>
            </Reveal>
            <div className="space-y-6">
              {systemSteps.map((step, index) => (
                <Reveal key={step.title} delay={0.1 + index * 0.1}>
                  <div className="flex gap-4 rounded-2xl border border-border/50 bg-card/40 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <Reveal delay={0.2}>
              <h2 className="mb-8 text-2xl font-bold text-foreground">Guides in this system</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article, index) => {
                const post = resources.find((r) => r.slug === article.slug);
                if (!post) return null;
                return (
                  <Reveal key={article.slug} delay={0.1 + index * 0.1}>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="group flex items-center justify-between rounded-2xl border border-border/50 bg-card/40 p-5 transition-all hover:border-primary/30 hover:bg-card/60"
                    >
                      <div>
                        <h3 className="font-semibold text-foreground">{article.label}</h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                      </div>
                      <ArrowRight className="ml-3 h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section className="mt-12">
            <LeadCapture />
          </section>

          <section className="mt-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <Reveal delay={0.3}>
              <h3 className="text-2xl font-bold text-foreground">Put the system on autopilot</h3>
              <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
                BrandOps runs the research, writing, and design steps for you. You review and publish.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Get early access <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </section>
        </article>
      </div>
    </>
  );
}
