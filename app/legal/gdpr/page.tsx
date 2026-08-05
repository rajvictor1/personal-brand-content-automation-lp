import { Metadata } from "next";
import { ShieldCheck, CheckCircle, UserX, FileSearch, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "GDPR | BrandOps Data Protection & Your Privacy Rights",
  description:
    "Learn how BrandOps respects your GDPR rights. Request access, correction, or deletion of your personal data and understand how we process it.",
  alternates: { canonical: "https://brandops.site/legal/gdpr" },
};

const rights = [
  {
    icon: UserX,
    title: "Right to erasure",
    description: "You can request deletion of your personal data. We will remove it from active systems within 30 days and from backups within 90 days.",
  },
  {
    icon: FileSearch,
    title: "Right to access",
    description: "You can request a copy of the personal data we hold about you. We will provide it in a machine-readable format.",
  },
  {
    icon: CheckCircle,
    title: "Right to rectification",
    description: "If any data is inaccurate, contact us and we will correct it promptly.",
  },
  {
    icon: ShieldCheck,
    title: "Right to object",
    description: "You can object to certain processing, such as marketing emails, at any time.",
  },
];

export default function GDPRPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Legal / GDPR</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">GDPR{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">compliance</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground">
            BrandOps is committed to respecting the rights of data subjects under the General Data Protection Regulation. This page explains how we process personal data and what rights you have.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal delay={0.2}>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Your data rights</h2>
        </Reveal>
        <div className="space-y-4">
          {rights.map((right, index) => (
            <Reveal key={right.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <right.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{right.title}</h3>
                <p className="mt-2 text-muted-foreground">{right.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold text-foreground">How we process data</h2>
        </Reveal>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <Reveal delay={0.1}>
            <h3 className="text-lg font-semibold text-foreground">Lawful basis</h3>
            <p>We process personal data based on:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Contract:</strong> to provide the BrandOps workspace to users.</li>
              <li><strong className="text-foreground">Legitimate interest:</strong> to improve our product and respond to inquiries.</li>
              <li><strong className="text-foreground">Consent:</strong> for optional marketing communications and non-essential analytics.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="mt-8 text-lg font-semibold text-foreground">Data we collect</h3>
            <p>We collect only what we need:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Name and email from the contact and early-access forms.</li>
              <li>Usage analytics to understand how visitors interact with the site.</li>
              <li>Server-side credentials that you configure to enable generation features.</li>
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <h3 className="mt-8 text-lg font-semibold text-foreground">Processors and sub-processors</h3>
            <p>We rely on trusted providers to host and operate BrandOps:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong className="text-foreground">Vercel:</strong> website hosting and serverless functions.</li>
              <li><strong className="text-foreground">Google Workspace / Google Sheets:</strong> contact-form submissions and lead tracking.</li>
              <li><strong className="text-foreground">OpenAI:</strong> content generation when you provide an API key.</li>
              <li><strong className="text-foreground">Firecrawl:</strong> research retrieval when you provide an API key.</li>
              <li><strong className="text-foreground">Resend:</strong> test newsletter delivery when configured.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal delay={0.4}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">Exercise your rights</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              To access, correct, delete, or export your data, contact us with your request.
            </p>
            <Link
              href="/contact?subject=GDPR data request"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
