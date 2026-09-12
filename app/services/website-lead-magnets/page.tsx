import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Download, Mail } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Website Lead Magnets",
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

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Lead Generation Service</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Website Lead Magnets That Turn Visitors Into Leads
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Give your website visitors a useful reason to share their email. We design the asset, write the copy, build the page, and set up the capture flow.
            </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Discuss Your Lead Magnet
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://landing-page-hzulxy1wx-homeo-clinic.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                See a Live Example
              </Link>
            </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <Badge variant="outline" className="mb-4 border-white/10 bg-card px-3 py-1 text-sm text-primary">
                What you get
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A complete lead magnet funnel
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why it works</h3>
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
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
                Discuss your lead magnet
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us your audience and goal. We will reply with a practical approach.
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
