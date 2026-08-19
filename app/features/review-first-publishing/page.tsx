import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Eye, Lock, CheckCircle, AlertTriangle, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations";
import { WithContext, Thing } from "schema-dts";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildFAQPage,
  buildService,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Review-First Publishing | Approve Before LinkedIn Posts",
  description:
    "BrandOps never auto-publishes. Review every slide, paragraph, citation, and visual before sending a newsletter or posting to LinkedIn from your workspace.",
  alternates: { canonical: "https://www.brandops.site/features/review-first-publishing" },
};

const features = [
  {
    icon: Eye,
    title: "Full asset preview",
    description: "Review every slide, paragraph, citation, and visual before any publish or send action. Nothing is hidden behind a summary.",
  },
  {
    icon: ShieldCheck,
    title: "Two-step confirmation",
    description: "Click Publish once to prepare. Confirm a second time to execute. This small friction prevents accidental posts and sends.",
  },
  {
    icon: Lock,
    title: "Local-only publish endpoint",
    description: "The dashboard LinkedIn publisher accepts requests only from the local origin. It is not a portable public endpoint.",
  },
  {
    icon: CheckCircle,
    title: "Duplicate-prevention ledger",
    description: "The Python publisher validates media and identity, performs a dry run, and reserves a ledger entry before a live post.",
  },
  {
    icon: AlertTriangle,
    title: "Audit before action",
    description: "Every workflow separates generation from delivery. Drafts are cheap. Publishing and sending are expensive and gated.",
  },
  {
    icon: Zap,
    title: "Fast to review, hard to misuse",
    description: "Streamlined review screens mean you can check assets quickly, while the approval boundary keeps control intact.",
  },
];

const faq = [
  {
    question: "Can AI publish without my approval?",
    answer: "No. Every delivery and publication path has a separate approval boundary. Generation never triggers publishing automatically.",
  },
  {
    question: "What is the second confirmation for?",
    answer: "The first click prepares the action. The second confirmation executes it. This prevents one accidental click from going live.",
  },
  {
    question: "Who can use the LinkedIn publish endpoint?",
    answer: "Only the local dashboard origin. It is protected by local credentials and not exposed as a public production service.",
  },
  {
    question: "How does duplicate prevention work?",
    answer: "A dry run validates media and identity. A ledger entry is reserved before any live post, and scheduled workflows check it before running.",
  },
];

export default function ReviewFirstPublishingPage() {
  const url = `${BRANDOPS_URL}/features/review-first-publishing`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Features", url: `${BRANDOPS_URL}/features` },
    { name: "Review-first publishing", url },
  ]);
  const faqSchema = buildFAQPage(faq);
  const schemas: WithContext<Thing>[] = [
    buildService(
      "Review-First Publishing",
      "Review every slide, paragraph, citation, and visual before sending a newsletter or posting to LinkedIn from your workspace.",
      url
    ),
    buildWebPage(
      "Review-First Publishing | Approve Before LinkedIn Posts",
      "BrandOps never auto-publishes. Review every slide, paragraph, citation, and visual before publishing.",
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
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Review-First Publishing</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">You own the publish{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">button</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            AI drafts the asset. You review it. A hard gate stops every publish and send action until you confirm twice. Built for personal brands that cannot afford an off-brand post.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal delay={0.2}>
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Why review-first matters</h2>
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
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8">
            <h3 className="text-2xl font-bold text-foreground">Never publish by accident</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Get early access to BrandOps and keep full control over every carousel, newsletter, and LinkedIn post.
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
