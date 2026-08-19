import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  PenTool,
  ImageIcon,
  ShieldCheck,
  Zap,
  ArrowRight,
  Calendar,
  UserCheck,
} from "lucide-react";
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
import { LeadCapture } from "@/components/lead-capture";

export const metadata: Metadata = {
  title: "LinkedIn Automation Tool | Founders + Trainers",
  description:
    "BrandOps is a LinkedIn automation tool for founders and trainers. AI researches, writes, and designs content. You review and approve.",
  alternates: { canonical: "https://www.brandops.site/linkedin-automation-tool" },
};

const benefits = [
  {
    icon: Search,
    title: "Research automation",
    description: "Firecrawl scans current AI, automation, cloud, and infrastructure news so you never run out of timely topics.",
  },
  {
    icon: PenTool,
    title: "AI copywriting",
    description: "OpenAI writes carousel slides, newsletter drafts, hooks, and subject lines from real sources.",
  },
  {
    icon: ImageIcon,
    title: "Visual generation",
    description: "OpenAI Image renders slide artwork and newsletter headers so your content looks designed without design tools.",
  },
  {
    icon: ShieldCheck,
    title: "Review-first control",
    description: "Nothing publishes automatically. Every slide, paragraph, citation, and visual waits for your approval.",
  },
  {
    icon: Calendar,
    title: "Consistent output",
    description: "Turn one research topic into two assets — a LinkedIn carousel and a cited newsletter — every week.",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    description: "Go from topic idea to review-ready assets in minutes instead of hours.",
  },
];

const idealFor = [
  "Solo founders building thought leadership",
  "Trainers and coaches posting weekly insights",
  "Consultants who want consistent LinkedIn presence",
  "Agency founders creating content at scale",
];

const faq = [
  {
    question: "Is BrandOps a LinkedIn auto-poster?",
    answer: "No. BrandOps is a review-first workspace. It researches and drafts content; you approve every publish action.",
  },
  {
    question: "Who is this LinkedIn automation tool for?",
    answer: "Founders, trainers, consultants, and operators who want consistent LinkedIn content without spending hours on research and design.",
  },
  {
    question: "What content does it create?",
    answer: "LinkedIn carousels and cited newsletters from one research topic. Each asset goes through the same review gate.",
  },
  {
    question: "Can I use it for free?",
    answer: "Yes. The Solo plan is free forever and includes the core carousel and newsletter workflows.",
  },
];

export default function LinkedInAutomationToolPage() {
  const url = `${BRANDOPS_URL}/linkedin-automation-tool`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "LinkedIn automation tool", url },
  ]);
  const faqSchema = buildFAQPage(faq);
  const schemas: WithContext<Thing>[] = [
    buildService(
      "BrandOps LinkedIn Automation Tool",
      "AI content workspace for LinkedIn carousels and newsletters with review-first publishing.",
      url
    ),
    buildWebPage(
      "LinkedIn Automation Tool for Founders",
      "BrandOps is a LinkedIn automation tool for founders, trainers, and consultants.",
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
              Review-first LinkedIn automation
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              LinkedIn Automation Tool{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                for founders and trainers
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              AI researches, writes, and designs your LinkedIn carousel and newsletter. You own the publish button.
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
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What BrandOps automates</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={0.1 + index * 0.1}>
                <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 sm:p-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Built for operators like you</h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {idealFor.map((item, index) => (
                  <Reveal key={item} delay={0.1 + index * 0.1}>
                    <li className="flex items-start gap-3">
                      <UserCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>
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
              <h3 className="text-2xl font-bold text-foreground">Automate your LinkedIn content workflow</h3>
              <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
                Join free and start turning research into review-ready LinkedIn assets.
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
