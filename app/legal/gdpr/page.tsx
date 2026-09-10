import { Metadata } from "next";
import { ShieldCheck, CheckCircle, UserX, FileSearch, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "GDPR | BrandOps Data Protection & Your Privacy Rights",
  description:
    "Learn how BrandOps respects your GDPR rights. Request access, correction, or deletion of your personal data and understand how we process it.",
  alternates: { canonical: "https://www.brandops.site/legal/gdpr" },
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
      <section className="relative px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">Legal / GDPR</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              GDPR compliance
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              BrandOps is committed to respecting the rights of data subjects under the General Data Protection Regulation. This page explains how we process personal data and what rights you have.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.1}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Your data rights</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {rights.map((right, index) => (
              <Reveal key={right.title} delay={0.1 + index * 0.05}>
                <div className="rounded-xl border border-white/10 bg-card p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <right.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{right.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{right.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">How we process data</h2>
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
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.4}>
            <div className="rounded-xl border border-white/10 bg-card p-8 text-center">
              <Mail className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Exercise your rights</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                To access, correct, delete, or export your data, contact us with your request.
              </p>
              <Link
                href="/contact?subject=GDPR data request"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
