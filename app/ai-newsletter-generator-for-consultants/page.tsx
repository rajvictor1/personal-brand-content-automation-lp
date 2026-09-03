import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, UserCog } from "lucide-react";
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
  title: "AI Newsletter Generator for Consultants | BrandOps",
  description:
    "BrandOps is an AI newsletter generator for consultants. It researches current stories, writes cited drafts, and lets you review before sending.",
  alternates: { canonical: "https://www.brandops.site/ai-newsletter-generator-for-consultants" },
};

const benefits = [
  {
    icon: Mail,
    title: "Cited newsletter drafts",
    description: "Every claim links to a current source so your consulting newsletter builds authority, not doubt.",
  },
  {
    icon: UserCog,
    title: "Review before send",
    description: "Edit tone, swap case studies, and approve the final version before any email goes out.",
  },
];

const faq = [
  {
    question: "Is this a free AI newsletter generator for consultants?",
    answer: "Yes. The BrandOps Solo plan is free forever and includes the newsletter workflow with research, drafting, citation, and review.",
  },
  {
    question: "Can I use my own consulting case studies?",
    answer: "Yes. You can edit the draft to insert your own examples, frameworks, and client stories before sending.",
  },
  {
    question: "Does it send emails automatically?",
    answer: "No. BrandOps drafts the newsletter; you copy it into your email platform or send via your existing ESP.",
  },
];

export default function ConsultantsNewsletterPage() {
  const url = `${BRANDOPS_URL}/ai-newsletter-generator-for-consultants`;
  const schemas: WithContext<Thing>[] = [
    buildWebPage(
      "AI Newsletter Generator for Consultants",
      "AI-assisted newsletter workspace for consultants who want cited drafts and full review control.",
      url
    ),
    buildBreadcrumbList([
      { name: "Home", url: BRANDOPS_URL },
      { name: "AI newsletter generator for consultants", url },
    ]),
  ];
  const faqSchema = buildFAQPage(faq);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {renderSchemas(schemas)}
      <main className="container-x py-20 sm:py-28">
        <Reveal>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Consultants</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI newsletter generator for{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              consultants
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Stay top-of-mind with clients and prospects without spending hours writing. BrandOps finds
            current stories, writes a cited draft, and waits for your approval before anything is sent.
          </p>
        </Reveal>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-8">
              <b.icon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 font-display text-2xl font-medium text-foreground">{b.title}</h2>
              <p className="mt-2 text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-secondary/60 to-background p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl font-medium text-foreground">Write your next newsletter in minutes</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join BrandOps Solo for free and generate your first cited newsletter today.
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
