import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations";
import { WithContext, Thing } from "schema-dts";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildFAQPage,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";
import { LeadCapture } from "@/components/lead-capture";

export const metadata: Metadata = {
  title: "BrandOps vs Typefully: AI Content Workspace vs LinkedIn Scheduler",
  description:
    "Compare BrandOps vs Typefully. BrandOps generates cited carousels and newsletters from research with a review gate. Typefully is a scheduling and analytics tool for text posts.",
  alternates: { canonical: "https://www.brandops.site/brandops-vs-typefully" },
};

const comparisonRows = [
  { feature: "AI carousel + newsletter generation", brandops: true, typefully: false, note: "BrandOps turns one topic into two review-ready assets" },
  { feature: "Current source research", brandops: true, typefully: false, note: "BrandOps uses Firecrawl to find live sources" },
  { feature: "Review-first publish gate", brandops: true, typefully: false, note: "No surprise posts in BrandOps" },
  { feature: "Multi-platform scheduling", brandops: false, typefully: true, note: "Typefully schedules LinkedIn, X, Threads, Bluesky" },
  { feature: "Built-in analytics", brandops: false, typefully: true, note: "Typefully tracks post performance" },
  { feature: "Free plan", brandops: true, typefully: true, note: "Both offer free tiers" },
  { feature: "Designed for operators", brandops: true, typefully: false, note: "BrandOps is built for founders, trainers, and consultants" },
];

const faq = [
  {
    question: "Is BrandOps a Typefully alternative?",
    answer: "Yes, if your main need is AI-assisted content creation with citations and review control rather than cross-platform scheduling.",
  },
  {
    question: "Does Typefully generate carousels?",
    answer: "Typefully focuses on text posts and threads. It does not generate full LinkedIn carousel artwork like BrandOps.",
  },
  {
    question: "Can I draft in BrandOps and schedule in Typefully?",
    answer: "Yes. Many operators use BrandOps for research and drafting, then Typefully or Taplio for scheduling and analytics.",
  },
];

export default function BrandOpsVsTypefullyPage() {
  const url = `${BRANDOPS_URL}/brandops-vs-typefully`;
  const schemas: WithContext<Thing>[] = [
    buildWebPage(
      "BrandOps vs Typefully",
      "Compare BrandOps vs Typefully for LinkedIn content creation and scheduling.",
      url
    ),
    buildBreadcrumbList([
      { name: "Home", url: BRANDOPS_URL },
      { name: "BrandOps vs Typefully", url },
    ]),
  ];
  const faqSchema = buildFAQPage(faq);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {renderSchemas(schemas)}
      <main className="container-x mx-auto py-20 sm:py-28">
        <div className="text-center">
          <Reveal>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Comparison</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              BrandOps vs Typefully:{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                create vs schedule
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Typefully is excellent for scheduling text posts across LinkedIn, X, Threads, and Bluesky.
              BrandOps is for operators who want AI to research, draft, and design carousels and newsletters
              while keeping full approval control.
            </p>
          </Reveal>
        </div>

        <section className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">BrandOps</th>
                <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">Typefully</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-b-0">
                  <td className="px-6 py-4">
                    <p className="font-medium text-foreground">{row.feature}</p>
                    <p className="text-xs text-muted-foreground">{row.note}</p>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.brandops ? (
                      <Check className="mx-auto h-5 w-5 text-green-600" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/60" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.typefully ? (
                      <Check className="mx-auto h-5 w-5 text-green-600" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground/60" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose BrandOps if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want AI to turn research into carousels and newsletters</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need citations and source links in every draft</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You refuse to let AI publish without your review</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You are a solo founder, trainer, or consultant</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose Typefully if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You post short text content to multiple platforms</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want scheduling and analytics in one dashboard</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You focus on X/Threads growth alongside LinkedIn</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You already have a content creation workflow</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl font-medium text-foreground">Build content safely with AI</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join BrandOps Solo for free and generate your first cited carousel and newsletter today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/ai-newsletter-generator"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium hover:bg-secondary transition"
            >
              See the newsletter generator
            </Link>
          </div>
        </section>

        <LeadCapture />
      </main>
    </>
  );
}
