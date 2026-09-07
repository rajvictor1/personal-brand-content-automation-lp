import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Search, Sparkles } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "AEO/GEO Visibility Card | BrandOps AI Consultancy",
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

      <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Search className="mr-1.5 inline h-3.5 w-3.5" />
              AI Search Visibility Service
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AEO/GEO Visibility Card
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Answer Engine Optimization / Generative Engine Optimization
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Understand how your brand appears in AI-generated answers. We measure visibility gaps, compare your presence against competitors, and give you a practical plan to improve how your business is represented.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Get Your Visibility Card
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/geo-scorecard"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                <Sparkles className="h-5 w-5" />
                Try the Free Scorecard
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What the Visibility Card covers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A practical snapshot of your AI-search visibility, not a guaranteed ranking report.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why it matters</h3>
              <ul className="space-y-3 text-muted-foreground">
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
              <ul className="space-y-3 text-muted-foreground">
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

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <Reveal className="mb-10 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Book a Consultation
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get your AEO/GEO Visibility Card
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Tell us your business name and key focus areas. We will outline the analysis and next steps.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 shadow-xl backdrop-blur-sm sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
