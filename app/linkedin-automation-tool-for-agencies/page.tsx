import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Briefcase } from "lucide-react";
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
  title: "LinkedIn Automation Tool for Agencies | BrandOps",
  description:
    "BrandOps is a LinkedIn automation tool for agencies that want to produce client carousels and newsletters faster. AI researches, writes, and designs. You review and approve.",
  alternates: { canonical: "https://www.brandops.site/linkedin-automation-tool-for-agencies" },
};

const benefits = [
  {
    icon: Building2,
    title: "Scale client content",
    description: "Turn one research topic into a carousel and newsletter for multiple client voices without starting from scratch.",
  },
  {
    icon: Briefcase,
    title: "Keep client control",
    description: "Every draft, citation, and visual waits for approval before it reaches a client profile.",
  },
];

const faq = [
  {
    question: "Can agencies manage multiple client brands?",
    answer: "Yes. BrandOps is built for operators managing several personal brands. Each project can use its own tone, sources, and review workflow.",
  },
  {
    question: "Does BrandOps publish directly to LinkedIn?",
    answer: "No. It drafts and renders assets; your team reviews and publishes manually or through your preferred scheduler.",
  },
  {
    question: "Is there a white-label option?",
    answer: "Not yet. Agencies currently use BrandOps as an internal workflow tool and deliver finished assets to clients.",
  },
];

export default function AgenciesPage() {
  const url = `${BRANDOPS_URL}/linkedin-automation-tool-for-agencies`;
  const schemas: WithContext<Thing>[] = [
    buildWebPage(
      "LinkedIn Automation Tool for Agencies",
      "AI-assisted LinkedIn content workspace for agencies managing multiple founder and executive brands.",
      url
    ),
    buildBreadcrumbList([
      { name: "Home", url: BRANDOPS_URL },
      { name: "LinkedIn automation tool for agencies", url },
    ]),
  ];
  const faqSchema = buildFAQPage(faq);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      {renderSchemas(schemas)}
      <main className="container-x py-20 sm:py-28">
        <Reveal>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">For Agencies</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            LinkedIn automation tool for{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              agencies
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Produce more client content without hiring more writers or designers. BrandOps researches,
            drafts, and designs review-ready LinkedIn carousels and newsletters your team can confidently
            approve.
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
          <h2 className="font-display text-3xl font-medium text-foreground">Bring BrandOps to your agency workflow</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a short demo to see how BrandOps fits your client content process.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/linkedin-automation-tool"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium hover:bg-secondary transition"
            >
              See all features
            </Link>
          </div>
        </section>

        <LeadCapture />
      </main>
    </>
  );
}
