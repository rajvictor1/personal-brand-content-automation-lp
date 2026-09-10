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

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">Comparison</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              BrandOps vs Canva: generate vs design
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Canva is the best manual design canvas. BrandOps is the fastest way to go from a research
              topic to a review-ready LinkedIn carousel with copy, citations, and artwork already done.
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
                  <th className="px-6 py-4 text-center font-semibold text-muted-foreground w-[120px] sm:w-[140px]">Canva</th>
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
                      {row.canva ? (
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
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want a full carousel from a topic in minutes</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need cited sources in your content</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You are not a designer and do not want to be one</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want a review gate before publishing</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h2 className="text-xl font-semibold text-foreground">Choose Canva if...</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You want full creative control over every pixel</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You already have copy and just need design</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You design carousels for multiple brands daily</li>
                  <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> You need a general-purpose design tool</li>
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
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Generate your first carousel free</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join BrandOps Solo and turn your next research topic into a review-ready LinkedIn carousel.
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
