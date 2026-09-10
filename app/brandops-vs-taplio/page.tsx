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

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Comparison</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              BrandOps vs Taplio: build vs schedule
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Taplio is the go-to tool for scheduling LinkedIn posts and engaging with your network.
              BrandOps is built for operators who want AI to research, draft, and design review-ready
              carousels and newsletters without auto-publishing surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-sm">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-muted/50">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">BrandOps</th>
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">Taplio</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/10 last:border-b-0">
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
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">Choose BrandOps if...</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want AI to research current stories and write drafts</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need carousels and newsletters from one topic</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You will never let AI publish without your approval</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You are a founder, trainer, or consultant without a designer</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">Choose Taplio if...</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You already have content and need scheduling</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want analytics and engagement tools</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You focus on commenting and network growth</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need a LinkedIn CRM</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Try the review-first approach</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join BrandOps Solo for free. Generate your first cited carousel and newsletter in minutes.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                >
                  Get early access <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/linkedin-carousel-generator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
                >
                  See the carousel generator
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <LeadCapture />
        </div>
      </section>
    </>
  );
}
