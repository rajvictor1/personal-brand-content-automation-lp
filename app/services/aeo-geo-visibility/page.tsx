import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Search } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "AEO/GEO Visibility Card",
  description:
    "Understand how your brand appears in AI-generated answers. Answer Engine Optimization and Generative Engine Optimization analysis for business visibility.",
  alternates: { canonical: `${BRANDOPS_URL}/services/aeo-geo-visibility` },
};

const benefits = [
  "See how AI search and answer engines currently describe your brand.",
  "Identify visibility gaps for your key products, services, and people.",
  "Compare your representation against relevant competitors.",
  "Get a practical list of content and entity improvements to prioritize.",
];

const deliverables = [
  "Brand visibility snapshot across AI-generated answer surfaces",
  "Key topic and query gap analysis",
  "Entity and citation opportunity map",
  "Prioritized content recommendations",
  "Actionable AEO/GEO improvement plan",
];

export default function AeoGeoVisibilityPage() {
  const url = `${BRANDOPS_URL}/services/aeo-geo-visibility`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "AEO/GEO Visibility Card", url },
        ]),
        buildWebPage(
          "AEO/GEO Visibility Card",
          "Understand how your brand appears in AI-generated answers with an Answer Engine Optimization and Generative Engine Optimization visibility card.",
          url
        ),
        buildService(
          "AEO/GEO Visibility Card",
          "AI search visibility analysis that shows how your brand is represented in AI-generated answers and what to improve.",
          url
        ),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">AI Search Visibility Service</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              AEO/GEO Visibility Card
            </h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-2 max-w-3xl text-base text-muted-foreground">
              Answer Engine Optimization / Generative Engine Optimization
            </p>
          </Reveal>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Understand how your brand appears in AI-generated answers. We measure visibility gaps, compare your presence against competitors, and give you a practical plan to improve how your business is represented.
            </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Get Your Visibility Card
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/geo-scorecard"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                Try the Free Scorecard
              </Link>
            </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <Badge variant="outline" className="mb-4 border-white/10 bg-card px-3 py-1 text-sm text-primary">
                What the card covers
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A practical snapshot of your AI-search visibility
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why it matters</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Deliverables</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Search className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Get your AEO/GEO Visibility Card
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us your business name and key focus areas. We will outline the analysis and next steps.
              </p>
            </Reveal>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
