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
  title: "AI Newsletter Generator for Consultants",
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

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">For Consultants</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              AI newsletter generator for consultants
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Stay top-of-mind with clients and prospects without spending hours writing. BrandOps finds
              current stories, writes a cited draft, and waits for your approval before anything is sent.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Get early access <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/ai-newsletter-generator"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                See the newsletter generator
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {benefits.map((b) => (
              <Reveal key={b.title}>
                <div className="rounded-2xl border border-white/10 bg-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-secondary text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{b.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Write your next newsletter in minutes</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join BrandOps Solo for free and generate your first cited newsletter today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                >
                  Get early access <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/ai-newsletter-generator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
                >
                  See the newsletter generator
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <LeadCapture />
        </div>
      </section>
    </>
  );
}
