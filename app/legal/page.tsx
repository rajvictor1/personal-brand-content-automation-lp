import { Metadata } from "next";
import { ShieldCheck, FileText, Lock, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "BrandOps Legal Hub | Privacy, Security \u0026 GDPR Policies",
  description:
    "Find BrandOps legal documents in one place: privacy policy, terms of service, GDPR, security practices, and data retention information.",
  alternates: { canonical: "https://www.brandops.site/legal" },
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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />

      <section className="mx-auto max-w-5xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Legal</p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
            Policies and procedures
          </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We are committed to transparency. Here you will find our terms, privacy commitments, security practices, and data-retention policy.
          </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {legalSections.map((section, index) => (
            <Reveal key={section.title} delay={0.1 + index * 0.1}>
              <Link
                href={section.href}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-white/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-secondary text-primary transition-colors group-hover:border-white/20">
                  <section.icon className="h-5 w-5" />
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
          <div className="mt-12 rounded-2xl border border-white/10 bg-card p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">Questions?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              For legal, privacy, or security questions, contact us through the contact page.
            </p>
            <Link
              href="/contact?subject=Legal question"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
            >
              Contact legal
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
