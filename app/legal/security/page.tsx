import { Metadata } from "next";
import { ShieldCheck, Lock, Server, Mail, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Security Practices | How BrandOps Protects Your Data",
  description:
    "Learn how BrandOps keeps your data safe: HTTPS, server-side API keys, review-first controls, limited access, and honest security commitments.",
  alternates: { canonical: "https://www.brandops.site/legal/security" },
};

const practices = [
  {
    icon: Lock,
    title: "HTTPS by default",
    description: "All traffic is served over TLS 1.2+ through Vercel. Certificates are provisioned and renewed automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Security headers",
    description: "We enforce HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy on every response.",
  },
  {
    icon: Server,
    title: "Server-side credentials",
    description: "Provider API keys are read only by server-side code. They are never exposed to the browser or embedded in client bundles.",
  },
  {
    icon: AlertTriangle,
    title: "Review-first controls",
    description: "No publish or send action runs without explicit human approval. Generation is separated from delivery by design.",
  },
];

export default function SecurityPage() {
  return (
    <div className="relative">
      <section className="relative px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Legal / Security</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Security
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We design BrandOps so that speed never comes at the cost of control. Here is how we protect your data and our systems.
            </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.1}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">Security practices</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {practices.map((practice, index) => (
              <Reveal key={practice.title} delay={0.1 + index * 0.05}>
                <div className="rounded-xl border border-white/10 bg-card p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-card text-primary">
                    <practice.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{practice.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{practice.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">What we do not claim yet</h2>
          </Reveal>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <Reveal delay={0.1}>
              <p>BrandOps is currently a single-operator workspace. We do not yet hold third-party security certifications such as SOC 2 or ISO 27001, although our architecture and practices move in that direction. We are transparent about our current boundaries so you can make an informed decision.</p>
              <p className="mt-4">Specifically:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>We do not yet offer multi-user authentication or role-based access control.</li>
                <li>We do not yet provide a formal bug-bounty program, but we welcome responsible disclosure.</li>
                <li>We do not yet participate in the EU-US Data Privacy Framework.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground">Reporting an issue</h2>
          </Reveal>
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <Reveal delay={0.1}>
              <p>If you discover a vulnerability in BrandOps, please report it responsibly. Include:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>A clear summary of the issue.</li>
                <li>Steps to reproduce or a proof of concept.</li>
                <li>The browser and operating system you used.</li>
                <li>Your assessment of severity, if possible.</li>
              </ul>
              <p className="mt-4">We will acknowledge valid reports and work with you to resolve the issue quickly.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.4}>
            <div className="rounded-xl border border-white/10 bg-card p-8 text-center">
              <Mail className="mx-auto h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-foreground">Report a security issue</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                Use the contact form and select the security topic. We will respond as quickly as we can.
              </p>
              <Link
                href="/contact?subject=Security report"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Contact security
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
