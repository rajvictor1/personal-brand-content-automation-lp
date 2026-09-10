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
      <section className="relative px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Legal / Data Retention</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Data retention
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We keep data only as long as necessary to run BrandOps and meet legal obligations. This page explains our retention periods and deletion process.
            </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {retentionItems.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.05}>
                <div className="rounded-xl border border-white/10 bg-card p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Backups and deletion</h2>
          </Reveal>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <Reveal delay={0.1}>
              <p>When you request deletion, we remove your data from active systems within 30 days. Backups may retain data for up to 90 days before being rotated out.</p>
              <p className="mt-4">To request deletion or ask about specific data, contact us through the contact form and include the email address associated with your request.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.4}>
            <div className="rounded-xl border border-white/10 bg-card p-8 text-center">
              <Mail className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Request your data</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                Ask for a copy of your data, a correction, or deletion. We will respond within 30 days.
              </p>
              <Link
                href="/contact?subject=Data retention request"
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
