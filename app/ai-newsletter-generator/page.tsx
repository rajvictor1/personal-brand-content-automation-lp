import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  FileText,
  ImageIcon,
  MailCheck,
  Zap,
  ArrowRight,
  PenLine,
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
  title: "AI Newsletter Generator | Cited Drafts to Inbox",
  description:
    "Generate cited newsletters from current research with BrandOps. AI writes the draft, you review and approve before sending. Free Solo plan.",
  alternates: { canonical: "https://www.brandops.site/ai-newsletter-generator" },
};

const features = [
  {
    icon: Search,
    title: "Current research",
    description: "Firecrawl finds recent AI, automation, cloud, and infrastructure stories worth commenting on.",
  },
  {
    icon: PenLine,
    title: "AI-written draft",
    description: "OpenAI turns sources into a concise newsletter with a strong hook, summary, and actionable takeaways.",
  },
  {
    icon: FileText,
    title: "Inline citations",
    description: "Every claim is tied to a source link so readers trust the information and click through.",
  },
  {
    icon: ImageIcon,
    title: "Lead visual",
    description: "OpenAI Image generates a 16:9 newsletter header visual to make the email feel designed.",
  },
  {
    icon: MailCheck,
    title: "Review before send",
    description: "Edit the draft, swap sources, and approve the final version before it reaches any recipient.",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    description: "Regenerate the angle, tone, or length in seconds without starting research from scratch.",
  },
];

const faq = [
  {
    question: "Is this a free AI newsletter generator?",
    answer: "Yes. The BrandOps Solo plan is free forever and includes the newsletter workflow with research, drafting, citation, and review-gated sending.",
  },
  {
    question: "Does it send emails automatically?",
    answer: "No. BrandOps drafts the newsletter; you review, edit, and approve before any email is sent.",
  },
  {
    question: "Are the citations real links?",
    answer: "Yes. Firecrawl returns live sources and the draft includes links back to those pages.",
  },
  {
    question: "Can I change the tone or length?",
    answer: "Yes. You can regenerate or edit the draft directly in the review dashboard.",
  },
];

const comparisons = [
  { label: "Research time", value: "2–3 hours", brandops: "5 minutes" },
  { label: "Source links", value: "Manual", brandops: "Auto-cited" },
  { label: "Draft review", value: "No gate", brandops: "Approval required" },
  { label: "Header visual", value: "Design tool", brandops: "AI rendered" },
];

export default function AINewsletterGeneratorPage() {
  const url = `${BRANDOPS_URL}/ai-newsletter-generator`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "AI newsletter generator", url },
  ]);
  const faqSchema = buildFAQPage(faq);
  const schemas: WithContext<Thing>[] = [
    buildProduct(
      "BrandOps AI Newsletter Generator",
      "Generate cited newsletters from current research with review-gated sending.",
      url,
      {
        price: 0,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      }
    ),
    buildWebPage(
      "AI Newsletter Generator",
      "Generate cited newsletters from current research with BrandOps.",
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
              AI Newsletter Generator{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                with live citations
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Turn a research topic into a cited newsletter draft. AI gathers sources, writes the copy, and renders a header image. You review before anything goes to your list.
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
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">BrandOps vs. writing newsletters manually</h2>
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
              <h3 className="text-2xl font-bold text-foreground">Start writing cited newsletters</h3>
              <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
                Join free and turn your next research topic into a review-ready newsletter draft.
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
