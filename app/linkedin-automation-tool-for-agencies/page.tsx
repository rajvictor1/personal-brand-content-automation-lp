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
  title: "LinkedIn Automation for Agencies | BrandOps",
  description:
    "BrandOps is a LinkedIn automation tool for agencies. Produce client carousels and newsletters faster. AI drafts. You review and approve.",
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

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">For Agencies</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              LinkedIn automation tool for agencies
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Produce more client content without hiring more writers or designers. BrandOps researches,
              drafts, and designs review-ready LinkedIn carousels and newsletters your team can confidently
              approve.
            </p>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/linkedin-automation-tool"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                See all features
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
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Bring BrandOps to your agency workflow</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Book a short demo to see how BrandOps fits your client content process.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/linkedin-automation-tool"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
                >
                  See all features
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
