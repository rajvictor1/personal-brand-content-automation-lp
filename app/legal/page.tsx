import { Metadata } from "next";
import { ShieldCheck, FileText, Lock, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "BrandOps legal hub: privacy policy, terms of service, GDPR, security practices, and data retention.",
  alternates: { canonical: "https://brandops.site/legal" },
};

const legalSections = [
  {
    title: "Terms of Service",
    href: "/terms",
    icon: FileText,
    description: "The rules that govern use of the BrandOps website and product.",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    icon: Lock,
    description: "How we collect, use, and protect your personal information.",
  },
  {
    title: "GDPR",
    href: "/legal/gdpr",
    icon: ShieldCheck,
    description: "How we support data subject rights under EU data protection law.",
  },
  {
    title: "Security",
    href: "/legal/security",
    icon: ShieldCheck,
    description: "Our security practices, reporting process, and hardening approach.",
  },
  {
    title: "Data Retention",
    href: "/legal/data-retention",
    icon: Clock,
    description: "How long we keep data and how you can request deletion.",
  },
];

export default function LegalHubPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Legal</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Policies and{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">procedures</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We are committed to transparency. Here you will find our terms, privacy commitments, security practices, and data-retention policy.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {legalSections.map((section, index) => (
            <Reveal key={section.title} delay={0.1 + index * 0.1}>
              <Link
                href={section.href}
                className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <section.icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
                  <p className="mt-1 text-muted-foreground">{section.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">Questions?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              For legal, privacy, or security questions, contact us through the contact page.
            </p>
            <Link
              href="/contact?subject=Legal question"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Contact legal
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
