import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Download, Mail, Sparkles } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Website Lead Magnets | BrandOps AI Consultancy",
  description:
    "Turn website visitors into leads with useful downloadable assets. We design, write, and build lead magnet funnels around your audience and business goals.",
  alternates: { canonical: `${BRANDOPS_URL}/services/website-lead-magnets` },
};

const benefits = [
  "Clear audience-fit: the magnet solves a specific problem your visitors care about.",
  "Instant delivery: a downloadable PDF, checklist, or template after email capture.",
  "Follow-up ready: capture leads in a way that connects to your email or CRM flow.",
  "Reusable system: we deliver the page, asset source, and setup docs for future use.",
];

const deliverables = [
  "Lead magnet concept and copy",
  "Branded PDF asset or template",
  "Standalone landing page or website section",
  "Email capture and download flow",
  "Setup docs and lead tracking sheet",
];

export default function WebsiteLeadMagnetsPage() {
  const url = `${BRANDOPS_URL}/services/website-lead-magnets`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "Website Lead Magnets", url },
        ]),
        buildWebPage(
          "Website Lead Magnets",
          "Turn website visitors into leads with useful downloadable assets. We design, write, and build lead magnet funnels around your audience and business goals.",
          url
        ),
        buildService(
          "Website Lead Magnets",
          "Lead magnet design, copywriting, PDF assets, and landing pages that convert website visitors into leads.",
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
              <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
              Lead Generation Service
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Website Lead Magnets That Turn Visitors Into Leads
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Give your website visitors a useful reason to share their email. We design the asset, write the copy, build the page, and set up the capture flow.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Discuss Your Lead Magnet
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/linkedin-templates"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                <Download className="h-5 w-5" />
                See a Live Example
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What you get
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A complete lead magnet funnel built around your audience and offer.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why it works</h3>
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
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
              Discuss your lead magnet
            </h2>
            <p className="mx-auto mt-4 text-lg text-muted-foreground">
              Tell us your audience and goal. We will reply with a practical approach.
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
