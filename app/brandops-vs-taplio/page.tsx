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
  title: "BrandOps vs Taplio: Which LinkedIn Tool is Right for You?",
  description:
    "Compare BrandOps vs Taplio for founders and trainers. BrandOps is review-first with cited research and AI-generated carousels and newsletters. Taplio is a scheduling and engagement tool.",
  alternates: { canonical: "https://www.brandops.site/brandops-vs-taplio" },
};

const comparisonRows = [
  { feature: "AI carousel generation", brandops: true, taplio: false, note: "Taplio has templates; BrandOps generates full drafts" },
  { feature: "AI newsletter generation", brandops: true, taplio: false, note: "BrandOps writes cited newsletters from research" },
  { feature: "Review-first approval gate", brandops: true, taplio: false, note: "Nothing publishes in BrandOps without your approval" },
  { feature: "Current source research", brandops: true, taplio: false, note: "Firecrawl finds live sources for every claim" },
  { feature: "LinkedIn scheduling", brandops: false, taplio: true, note: "Taplio specializes in scheduling and analytics" },
  { feature: "Comment engagement", brandops: false, taplio: true, note: "Taplio helps you engage under other posts" },
  { feature: "Free plan", brandops: true, taplio: true, note: "Both offer free tiers" },
  { feature: "Built for operators", brandops: true, taplio: false, note: "BrandOps is designed for solo founders, trainers, and consultants" },
];

const faq = [
  {
    question: "Is BrandOps a Taplio alternative?",
    answer: "Yes, if you want AI-generated content with a review gate rather than just scheduling and engagement. BrandOps focuses on research, drafting, and safe publishing.",
  },
  {
    question: "Does BrandOps auto-post to LinkedIn like Taplio?",
    answer: "No. BrandOps is review-first. It drafts carousels and newsletters; you review and approve before publishing.",
  },
  {
    question: "Which tool is better for founders without a designer?",
    answer: "BrandOps. It generates both copy and slide artwork, so you do not need Canva or Figma skills.",
  },
  {
    question: "Can I use BrandOps and Taplio together?",
    answer: "Yes. Many operators draft content in BrandOps, then schedule it through Taplio for posting and analytics.",
  },
];

export default function BrandOpsVsTaplioPage() {
  const url = `${BRANDOPS_URL}/brandops-vs-taplio`;
  const schemas: WithContext<Thing>[] = [
    buildWebPage(
      "BrandOps vs Taplio",
      "Compare BrandOps vs Taplio for LinkedIn content creation and publishing.",
      url
    ),
    buildBreadcrumbList([
      { name: "Home", url: BRANDOPS_URL },
      { name: "BrandOps vs Taplio", url },
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
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Comparison
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              BrandOps vs Taplio:{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                build vs schedule
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Taplio is the go-to tool for scheduling LinkedIn posts and engaging with your network.
              BrandOps is built for operators who want AI to research, draft, and design review-ready
              carousels and newsletters without auto-publishing surprises.
            </p>
          </Reveal>
        </div>

        {/* Comparison table */}
        <section className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">BrandOps</th>
                <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">Taplio</th>
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
                    {row.taplio ? (
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

        {/* When to choose */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose BrandOps if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want AI to research current stories and write drafts</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need carousels and newsletters from one topic</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You will never let AI publish without your approval</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You are a founder, trainer, or consultant without a designer</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose Taplio if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You already have content and need scheduling</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want analytics and engagement tools</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You focus on commenting and network growth</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need a LinkedIn CRM</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl font-medium text-foreground">Try the review-first approach</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join BrandOps Solo for free. Generate your first cited carousel and newsletter in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/linkedin-carousel-generator"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium hover:bg-secondary transition"
            >
              See the carousel generator
            </Link>
          </div>
        </section>

        <LeadCapture />
      </main>
    </>
  );
}
