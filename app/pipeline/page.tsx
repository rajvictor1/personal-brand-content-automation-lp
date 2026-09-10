import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardList,
  FileText,
  MessageSquare,
  PenLine,
  Rocket,
  Search,
  Send,
} from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, renderSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How We Work | BrandOps AI Consultancy Process",
  description:
    "Our practical process: discovery, AI-assisted research and drafting, your review, and delivery. Built for founders and consultants who want results without losing control.",
  alternates: { canonical: `${BRANDOPS_URL}/pipeline` },
};

const processSteps = [
  {
    icon: MessageSquare,
    label: "Step 1",
    title: "Discovery",
    description:
      "We start with your goals, audience, and current setup. A short call or brief is enough to define the first deliverable and success metric.",
  },
  {
    icon: Search,
    label: "Step 2",
    title: "Research",
    description:
      "AI agents gather current sources, competitor signals, keyword opportunities, and design references. A human operator checks quality and relevance.",
  },
  {
    icon: PenLine,
    label: "Step 3",
    title: "Draft",
    description:
      "We produce the first version: copy, page structure, content briefs, or wireframes. AI accelerates the work; strategy and judgment stay human.",
  },
  {
    icon: ClipboardList,
    label: "Step 4",
    title: "Review",
    description:
      "You review the draft in a clean, commented format. Nothing ships until you approve the direction, facts, and tone.",
  },
  {
    icon: FileText,
    label: "Step 5",
    title: "Deliver",
    description:
      "We hand over ready-to-use assets: published pages, source files, content calendars, or implementation notes. No lock-in.",
  },
  {
    icon: Rocket,
    label: "Step 6",
    title: "Iterate",
    description:
      "Most engagements are monthly. We measure what matters, refine based on feedback, and queue the next priority.",
  },
];

const engagementModels = [
  {
    title: "One-off project",
    description: "A single service delivered in 1–2 weeks. Ideal for a new website, lead magnet, or visibility audit.",
    timeline: "1–2 weeks",
    deliverables: "One complete deliverable + handoff notes",
  },
  {
    title: "Monthly retainer",
    description: "Ongoing content, website, and visibility work with a fixed monthly scope and priority queue.",
    timeline: "Monthly",
    deliverables: "Multiple deliverables + strategy updates",
  },
  {
    title: "Advisory",
    description: "Strategy calls, audits, and reviews when you want a second brain without a heavy execution load.",
    timeline: "As needed",
    deliverables: "Audits, roadmaps, and recommendations",
  },
];

export default function PipelinePage() {
  const url = `${BRANDOPS_URL}/pipeline`;
  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "How We Work | BrandOps AI Consultancy Process",
          "Our practical process: discovery, AI-assisted research and drafting, your review, and delivery. Built for founders and consultants who want results without losing control.",
          url
        ),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "How We Work", url },
        ]),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),rgba(99,102,241,0.05)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">How We Work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              A practical process for AI-assisted delivery
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              AI agents do the heavy lifting. Human oversight keeps quality high. You approve every deliverable before it ships.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                Book a Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                Our process
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                From brief to delivered asset
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.1 + index * 0.1}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-card p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{step.label}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                Engagement options
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Choose the right fit
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Reveal key={model.title} delay={0.1 + index * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{model.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{model.description}</p>
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{model.timeline}</span>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{model.deliverables}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-card p-8 text-center">
            <Reveal>
              <Send className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Ready to start?</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                Tell us what you need. We will reply with a clear scope, timeline, and next steps.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
