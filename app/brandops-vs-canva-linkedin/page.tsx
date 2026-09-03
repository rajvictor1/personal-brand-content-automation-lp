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
  title: "BrandOps vs Canva for LinkedIn Carousels: AI vs Design Tool",
  description:
    "Compare BrandOps vs Canva for LinkedIn carousels. BrandOps researches, writes, and designs review-ready carousels. Canva gives you templates to fill in manually.",
  alternates: { canonical: "https://www.brandops.site/brandops-vs-canva-linkedin" },
};

const comparisonRows = [
  { feature: "AI-generated carousel copy", brandops: true, canva: false, note: "BrandOps writes hooks, slides, and CTAs" },
  { feature: "Current source research", brandops: true, canva: false, note: "BrandOps finds live sources; Canva has no research layer" },
  { feature: "AI-rendered slide artwork", brandops: true, canva: true, note: "Canva has templates; BrandOps generates visuals from topic" },
  { feature: "Review-first approval gate", brandops: true, canva: false, note: "BrandOps never auto-publishes" },
  { feature: "Newsletter generation", brandops: true, canva: false, note: "BrandOps also writes cited newsletters" },
  { feature: "Design flexibility", brandops: false, canva: true, note: "Canva lets you pixel-edit everything" },
  { feature: "Free plan", brandops: true, canva: true, note: "Both offer free tiers" },
];

const faq = [
  {
    question: "Can BrandOps replace Canva for LinkedIn carousels?",
    answer: "For operators who want speed, yes. BrandOps generates copy and visuals from a topic. Canva is better if you want full manual design control.",
  },
  {
    question: "Does Canva write carousel copy?",
    answer: "Canva has some AI writing features, but it does not research current sources or produce cited, review-gated carousel drafts like BrandOps.",
  },
  {
    question: "Can I export BrandOps carousels and edit them in Canva?",
    answer: "Yes. You can download the generated carousel artwork and refine it further in Canva if needed.",
  },
];

export default function BrandOpsVsCanvaPage() {
  const url = `${BRANDOPS_URL}/brandops-vs-canva-linkedin`;
  const schemas: WithContext<Thing>[] = [
    buildWebPage(
      "BrandOps vs Canva for LinkedIn Carousels",
      "Compare BrandOps AI carousel generation with Canva design templates.",
      url
    ),
    buildBreadcrumbList([
      { name: "Home", url: BRANDOPS_URL },
      { name: "BrandOps vs Canva", url },
    ]),
  ];
  const faqSchema = buildFAQPage(faq);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {renderSchemas(schemas)}
      <main className="container-x py-20 sm:py-28">
        <Reveal>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Comparison</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            BrandOps vs Canva:{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              generate vs design
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Canva is the best manual design canvas. BrandOps is the fastest way to go from a research
            topic to a review-ready LinkedIn carousel with copy, citations, and artwork already done.
          </p>
        </Reveal>

        <section className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid grid-cols-[1fr_120px_120px] items-center gap-4 border-b border-border bg-muted/50 px-6 py-4 text-sm font-semibold text-muted-foreground sm:grid-cols-[1fr_140px_140px]">
            <span>Feature</span>
            <span className="text-center">BrandOps</span>
            <span className="text-center">Canva</span>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.feature}
              className="grid grid-cols-[1fr_120px_120px] items-center gap-4 border-b border-border px-6 py-4 last:border-b-0 sm:grid-cols-[1fr_140px_140px]"
            >
              <div>
                <p className="font-medium text-foreground">{row.feature}</p>
                <p className="text-xs text-muted-foreground">{row.note}</p>
              </div>
              <div className="flex justify-center">
                {row.brandops ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/60" />
                )}
              </div>
              <div className="flex justify-center">
                {row.canva ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground/60" />
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose BrandOps if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want a full carousel from a topic in minutes</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need cited sources in your content</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You are not a designer and do not want to be one</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want a review gate before publishing</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-medium text-foreground">Choose Canva if...</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want full creative control over every pixel</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You already have copy and just need design</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You design carousels for multiple brands daily</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need a general-purpose design tool</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl font-medium text-foreground">Generate your first carousel free</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join BrandOps Solo and turn your next research topic into a review-ready LinkedIn carousel.
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
