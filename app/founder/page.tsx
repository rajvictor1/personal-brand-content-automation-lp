import { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, Target, Users, Sparkles, BarChart3 } from "lucide-react";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Founder — BrandOps",
  description:
    "Meet the operator behind BrandOps. Rajesh Kumar builds demand-gen, GTM, and review-first content systems for solo founders, trainers, and consultants.",
  alternates: { canonical: "https://brandops.site/founder" },
  openGraph: {
    title: "Founder — BrandOps",
    description: "Meet the operator behind BrandOps.",
    url: "https://brandops.site/founder",
  },
};

const strengths = [
  {
    icon: Target,
    title: "Demand generation",
    description: "Built repeatable lead engines across SMB and enterprise motions.",
  },
  {
    icon: Users,
    title: "Go-to-market strategy",
    description: "Aligned product, marketing, and sales around the right buyer and channel.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted content",
    description: "Uses AI for speed, never as a replacement for judgment or voice.",
  },
  {
    icon: BarChart3,
    title: "Personal-brand systems",
    description: "Turns one research session into a week of citable, review-gated content.",
  },
];

export default function FounderPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Founder
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mb-8 h-28 w-28 overflow-hidden rounded-full border-2 border-border/50 bg-muted/30">
              <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-muted-foreground">
                RK
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Rajesh Kumar
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Demand-gen practitioner. GTM operator. Trainer. Building BrandOps to help solo founders and consultants publish faster without losing their voice.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <LinkedInIcon className="h-4 w-4" />
                Connect on LinkedIn
              </Link>
              <Link
                href="/contact?subject=Founder inquiry"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal delay={0.3}>
          <div className="rounded-2xl border border-border/50 bg-card/40 p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Why I built BrandOps</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I spent years running demand-gen and GTM programs where speed was celebrated and quality was an afterthought. The result was generic content, missed context, and posts that sounded like everyone else.
              </p>
              <p>
                BrandOps is the workspace I wish I had: research-backed, AI-assisted, and review-first. It helps solo operators turn one timely topic into a LinkedIn carousel and a cited newsletter, without ever letting AI hit publish for you.
              </p>
              <p>
                My belief is simple. AI builds the draft. You own the judgment, the commentary, and the publish button.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Where I focus</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {strengths.map((strength, index) => (
            <Reveal key={strength.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <strength.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{strength.title}</h3>
                <p className="mt-2 text-muted-foreground">{strength.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal delay={0.3}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Work with me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I advise founders, trainers, and consultants on demand-gen, GTM, and building a personal-brand content system. If you want help designing your own review-first workflow, let us talk.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Personal brand content strategy</li>
                <li>AI-assisted research and publishing workflow</li>
                <li>Demand-gen playbooks for solo operators</li>
                <li>GTM execution for trainers and educators</li>
              </ul>
            </div>

            <Link
              href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Connect on LinkedIn
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal delay={0.4}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-10 text-center">
            <h2 className="text-3xl font-bold text-foreground">Have a question about BrandOps?</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
              I read every message. Whether it is product feedback, a setup issue, or a request for advice, send it through.
            </p>
            <Link
              href="/contact?subject=Founder inquiry"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Message the founder
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
