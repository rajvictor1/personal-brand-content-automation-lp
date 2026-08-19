import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  PenTool,
  ImageIcon,
  Eye,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { WithContext, Thing } from "schema-dts";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildFAQPage,
  buildProduct,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";
import { LeadCapture } from "@/components/lead-capture";

export const metadata: Metadata = {
  title: "Free LinkedIn Carousel Generator | AI 5-Slide Drafts",
  description:
    "Generate cited, review-ready LinkedIn carousels from one research topic. AI finds sources, writes slides, and renders artwork. Free Solo plan.",
  alternates: { canonical: "https://www.brandops.site/linkedin-carousel-generator" },
};

const features = [
  {
    icon: Search,
    title: "Timely research",
    description: "Firecrawl scans current AI, automation, cloud, and infrastructure reporting so your carousel comments on real stories.",
  },
  {
    icon: PenTool,
    title: "AI-written slides",
    description: "Four content slides plus a fifth subscription slide, each with a clear hook, value point, and source tie-in.",
  },
  {
    icon: ImageIcon,
    title: "Rendered artwork",
    description: "OpenAI Image generates polished PNG artwork for all five slides. No Canva or Figma needed.",
  },
  {
    icon: Eye,
    title: "Full preview",
    description: "Review the full draft and visuals in the dashboard before anything is published.",
  },
  {
    icon: ShieldCheck,
    title: "Publish gate",
    description: "Generation never triggers publishing. You click Publish and confirm twice before it goes live.",
  },
  {
    icon: Zap,
    title: "Regenerate fast",
    description: "Swap hooks, update sources, or change the angle in seconds without restarting the whole flow.",
  },
];

const comparisons = [
  { label: "Manual design", value: "2–4 hours", brandops: "5 minutes" },
  { label: "Source accuracy", value: "Guesswork", brandops: "Cited links" },
  { label: "Review control", value: "Error-prone", brandops: "Hard gate" },
  { label: "Brand safety", value: "Risky", brandops: "Approval required" },
];

const faq = [
  {
    question: "Is this a free LinkedIn carousel generator?",
    answer: "Yes. The BrandOps Solo plan is free forever and includes the carousel workflow with research, writing, rendering, and review-gated publishing.",
  },
  {
    question: "How many slides does it create?",
    answer: "Five slides: four content slides and one subscription slide designed to capture LinkedIn followers.",
  },
  {
    question: "Can I edit the copy before publishing?",
    answer: "Yes. The dashboard shows the full draft and rendered slides for your review and edits before any publish action.",
  },
  {
    question: "Does it post automatically to LinkedIn?",
    answer: "No. BrandOps is review-first. You approve every slide and confirm publishing twice.",
  },
];

export default function LinkedInCarouselGeneratorPage() {
  const url = `${BRANDOPS_URL}/linkedin-carousel-generator`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "LinkedIn carousel generator", url },
  ]);
  const faqSchema = buildFAQPage(faq);
  const schemas: WithContext<Thing>[] = [
    buildProduct(
      "BrandOps LinkedIn Carousel Generator",
      "Generate cited, review-ready LinkedIn carousels from one research topic. AI finds sources, writes slides, and renders artwork.",
      url,
      {
        price: 0,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      }
    ),
    buildWebPage(
      "AI LinkedIn Carousel Generator",
      "Generate cited, review-ready LinkedIn carousels from one research topic.",
      url
    ),
    breadcrumb,
  ];
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {renderSchemas(schemas)}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
        </div>

        <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Free Solo plan available
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI LinkedIn Carousel Generator{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                from one research topic
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Turn a timely story into a 5-slide, cited, review-ready LinkedIn carousel. No design skills. No auto-publishing. You keep the publish button.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Start free <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                Book a demo
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal delay={0.2}>
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What the generator does</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={0.1 + index * 0.1}>
                <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">BrandOps vs. doing it manually</h2>
          </Reveal>
          <div className="rounded-2xl border border-border/50 bg-card/40 p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground">
              <div>Task</div>
              <div className="text-center">Manual</div>
              <div className="text-right text-primary">BrandOps</div>
            </div>
            <div className="my-4 h-px bg-border/50"></div>
            {comparisons.map((row, index) => (
              <Reveal key={row.label} delay={0.1 + index * 0.1}>
                <div className="grid grid-cols-3 gap-4 py-3 text-sm">
                  <div className="font-medium text-foreground">{row.label}</div>
                  <div className="text-center text-muted-foreground">{row.value}</div>
                  <div className="text-right font-medium text-primary">{row.brandops}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <LeadCapture />
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Frequently asked questions</h2>
          </Reveal>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <Reveal key={item.question} delay={0.1 + index * 0.1}>
                <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-2 text-muted-foreground">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6 lg:px-8">
          <Reveal delay={0.3}>
            <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-card/40 p-8">
              <h3 className="text-2xl font-bold text-foreground">Start generating carousels today</h3>
              <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
                Join free and turn your next research topic into a review-ready LinkedIn carousel.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Get early access <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
