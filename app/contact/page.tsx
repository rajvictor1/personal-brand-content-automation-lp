import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/animations";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact BrandOps | Content Workflow Help",
  description:
    "Reach the BrandOps team for setup help, feature questions, or partnership inquiries.",
  alternates: { canonical: "https://www.brandops.site/contact" },
};

export default function ContactPage() {
  const url = `${BRANDOPS_URL}/contact`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Contact", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "Contact BrandOps",
          "Reach the BrandOps team for setup help, feature questions, or partnership inquiries.",
          url
        ),
        breadcrumb,
      ])}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal className="text-center lg:text-left">
              <div className="space-y-4">
                <p className="text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Early access</p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Get in touch
                </h1>
                <p className="mx-auto max-w-xl text-lg text-muted-foreground lg:mx-0">
                  Tell us what you are building and we will add you to the early-access list.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
