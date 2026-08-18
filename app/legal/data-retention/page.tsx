import { Metadata } from "next";
import { Clock, Trash2, Database, Mail } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Data Retention Policy | How Long BrandOps Keeps Data",
  description:
    "Read the BrandOps data retention policy. Learn how long we keep form submissions, generated content, logs, and how to request deletion.",
  alternates: { canonical: "https://www.brandops.site/legal/data-retention" },
};

const retentionItems = [
  {
    icon: Clock,
    title: "Contact and waitlist data",
    description: "Name, email, and message submitted through forms are kept until you request deletion or until two years after your last interaction, whichever comes first.",
  },
  {
    icon: Database,
    title: "Usage and analytics data",
    description: "Website analytics and interaction logs are retained for up to 26 months to help us understand product usage and improve the experience.",
  },
  {
    icon: Trash2,
    title: "Generated content",
    description: "Content generated inside the BrandOps workspace is stored only as long as you keep it. You can delete drafts, carousels, and newsletters at any time.",
  },
];

export default function DataRetentionPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Legal / Data Retention</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Data{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">retention</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground">
            We keep data only as long as necessary to run BrandOps and meet legal obligations. This page explains our retention periods and deletion process.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {retentionItems.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Backups and deletion</h2>
        </Reveal>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <Reveal delay={0.1}>
            <p>When you request deletion, we remove your data from active systems within 30 days. Backups may retain data for up to 90 days before being rotated out.</p>
            <p className="mt-4">To request deletion or ask about specific data, contact us through the contact form and include the email address associated with your request.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal delay={0.4}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <Mail className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">Request your data</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Ask for a copy of your data, a correction, or deletion. We will respond within 30 days.
            </p>
            <Link
              href="/contact?subject=Data retention request"
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
