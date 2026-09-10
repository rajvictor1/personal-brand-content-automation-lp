import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardList,
  Code2,
  Globe,
  Layout,
  Lightbulb,
  LineChart,
  MessageSquare,
  PenLine,
  Rocket,
  Search,
  Send,
  Target,
} from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, renderSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How We Work | BrandOps AI Consultancy & Delivery Process",
  description:
    "BrandOps builds AI-powered websites, SEO/GEO visibility systems, LinkedIn content engines, YouTube research workflows, and lead magnets for founders and consultants. See exactly what you get and how we deliver.",
  alternates: { canonical: `${BRANDOPS_URL}/pipeline` },
};

const services = [
  {
    icon: Globe,
    title: "AI-ready Website Design & Development",
    short: "Website & SEO",
    description: "Fast, search-friendly Next.js websites built for traditional and generative search.",
    deliverables: [
      "Homepage + key pages designed for your buyer",
      "Responsive Next.js build with Tailwind CSS",
      "Technical SEO, sitemap, robots.txt, schema markup",
      "Core Web Vitals and performance optimization",
      "Analytics, forms, conversion tracking setup",
      "Launch support + handoff documentation",
    ],
    timeline: "2–4 weeks",
    href: "/services/ai-website-design-development",
  },
  {
    icon: Search,
    title: "AEO / GEO Visibility",
    short: "AI Search Visibility",
    description: "Structure your site so you show up in Google, ChatGPT, Perplexity, and Gemini answers.",
    deliverables: [
      "AEO/GEO audit of current site and content",
      "Entity clarity and schema markup plan",
      "Answer-friendly page structure and FAQs",
      "Cited content briefs for AI search signals",
      "Internal linking and topical authority map",
      "Measurement dashboard and rank tracking",
    ],
    timeline: "2–3 weeks setup + ongoing",
    href: "/services/aeo-geo-visibility",
  },
  {
    icon: PenLine,
    title: "LinkedIn Content System",
    short: "LinkedIn Content",
    description: "Turn one research session into a week of review-gated carousels and posts.",
    deliverables: [
      "Content pillar map tied to your expertise",
      "AI-assisted research and carousel drafts",
      "Review-first workflow so nothing auto-publishes",
      "Hook, caption, and comment prompt templates",
      "Monthly editorial calendar",
      "Engagement and lead tracking setup",
    ],
    timeline: "2–3 weeks setup + monthly",
    href: "/services/linkedin-content",
  },
  {
    icon: Layout,
    title: "Website Lead Magnets",
    short: "Lead Magnets",
    description: "Interactive tools, audits, and calculators that convert visitors into qualified leads.",
    deliverables: [
      "Lead magnet concept tied to buyer pain",
      "Interactive tool or downloadable asset",
      "Landing page with form and tracking",
      "Delivery email sequence",
      "Integration with your CRM or email tool",
      "A/B test plan for conversion improvement",
    ],
    timeline: "1–2 weeks",
    href: "/services/website-lead-magnets",
  },
  {
    icon: Lightbulb,
    title: "YouTube Research & Content Engine",
    short: "YouTube Research",
    description: "Research what ranks, find content gaps, and build a consistent video brief process.",
    deliverables: [
      "Channel and competitor research report",
      "Keyword and topic opportunity map",
      "Title, hook, and script brief templates",
      "Thumbnail and description framework",
      "Content calendar tied to search demand",
      "Performance tracking and iteration plan",
    ],
    timeline: "1–2 weeks",
    href: "/services/youtube-research",
  },
  {
    icon: Code2,
    title: "Custom AI Agents & Automation",
    short: "AI Agents",
    description: "Agentic workflows for outbound, inbound support, content, voice, and operations.",
    deliverables: [
      "Workflow audit and automation map",
      "AI agent design (SDR, support, content, voice)",
      "n8n / Make / Python integration",
      "WhatsApp, email, or Slack routing",
      "Human-in-the-loop approval steps",
      "Monitoring, logs, and refinement plan",
    ],
    timeline: "2–4 weeks",
    href: "/contact",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    label: "01",
    title: "Discovery",
    description:
      "One call or a short brief. We define your goal, audience, current assets, and the first deliverable. Every project starts with a success metric.",
  },
  {
    icon: Search,
    label: "02",
    title: "Research",
    description:
      "AI agents gather competitor signals, keyword opportunities, design references, and content gaps. A human operator filters signal from noise.",
  },
  {
    icon: PenLine,
    label: "03",
    title: "Strategy & Draft",
    description:
      "We produce a clear plan + first draft: page structure, content briefs, copy, or wireframes. AI accelerates output; strategy stays human.",
  },
  {
    icon: ClipboardList,
    label: "04",
    title: "Your Review",
    description:
      "You review in a clean, commented format. Nothing ships until you approve facts, tone, and direction. You keep the final say.",
  },
  {
    icon: Rocket,
    label: "05",
    title: "Build & Deliver",
    description:
      "We publish, integrate, and hand over source files, dashboards, and documentation. You are never locked in.",
  },
  {
    icon: LineChart,
    label: "06",
    title: "Measure & Iterate",
    description:
      "Most engagements are monthly. We track traffic, leads, and conversions, then refine and queue the next priority.",
  },
];

const engagementModels = [
  {
    title: "One-off project",
    description: "A single service delivered end-to-end. Best for a new website, lead magnet, or visibility audit.",
    timeline: "1–4 weeks",
    deliverables: "One complete deliverable + handoff notes",
    ideal: "Founders who need a specific asset fast",
  },
  {
    title: "Monthly retainer",
    description: "Ongoing content, website, and visibility work with a fixed monthly scope and priority queue.",
    timeline: "Monthly",
    deliverables: "Multiple deliverables + strategy updates",
    ideal: "Consultants building a consistent presence",
  },
  {
    title: "Advisory & audits",
    description: "Strategy calls, audits, and reviews when you want a second brain without a heavy execution load.",
    timeline: "As needed",
    deliverables: "Audits, roadmaps, and recommendations",
    ideal: "Teams with internal execution capacity",
  },
];

const whyUs = [
  {
    icon: Target,
    title: "Built for results",
    description: "Every deliverable ties to traffic, leads, or revenue — not vanity output.",
  },
  {
    icon: Lightbulb,
    title: "AI-assisted, human-approved",
    description: "We use AI to move fast. You approve every fact, tone, and publish decision.",
  },
  {
    icon: Code2,
    title: "Own your stack",
    description: "Clean Next.js builds, clear documentation, no proprietary lock-in.",
  },
  {
    icon: LineChart,
    title: "Measure what matters",
    description: "Analytics, tracking, and reporting are built into delivery from day one.",
  },
];

function SectionCta({ label = "Start a Project", href = "/contact" }: { label?: string; href?: string }) {
  return (
    <div className="mt-10 flex justify-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function PipelinePage() {
  const url = `${BRANDOPS_URL}/pipeline`;
  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "How We Work | BrandOps AI Consultancy & Delivery Process",
          "BrandOps builds AI-powered websites, SEO/GEO visibility systems, LinkedIn content engines, YouTube research workflows, and lead magnets for founders and consultants.",
          url
        ),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "How We Work", url },
        ]),
      ])}

      {/* Hero */}
      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            How We Work
          </p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
            What you get when you work with BrandOps
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Six concrete services. A clear 6-step delivery process. Three ways to engage. Built for founders and consultants who want real business outcomes, not just pretty pages.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
            >
              See All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-medium tracking-wide text-primary">What we deliver</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Services with clear deliverables
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Pick one service or combine them. Every engagement lists exactly what you will receive.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.05 + index * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20 sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <service.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-white/10 text-xs text-muted-foreground">
                            {service.short}
                          </Badge>
                          <h3 className="mt-1 text-xl font-semibold text-white">{service.title}</h3>
                        </div>
                      </div>
                      <p className="mb-5 text-muted-foreground">{service.description}</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between gap-4 lg:items-end lg:text-right">
                      <div className="rounded-xl border border-white/10 bg-background px-4 py-3">
                        <p className="text-xs text-muted-foreground">Timeline</p>
                        <p className="font-medium text-foreground">{service.timeline}</p>
                      </div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        View service details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <SectionCta label="Get a custom scope" />
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-medium tracking-wide text-primary">Our process</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                How we deliver, step by step
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={0.05 + index * 0.05}>
                <div className="h-full rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{step.label}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <SectionCta label="Start your first sprint" />
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-medium tracking-wide text-primary">Engagement options</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Choose the right fit
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Reveal key={model.title} delay={0.05 + index * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <h3 className="text-lg font-semibold text-white">{model.title}</h3>
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
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Target className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{model.ideal}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <SectionCta label="Choose your engagement" />
        </div>
      </section>

      {/* Why Us */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <Reveal>
              <p className="mb-3 text-sm font-medium tracking-wide text-primary">Why BrandOps</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Built differently from typical agencies
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <Reveal key={item.title}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <SectionCta label="Book a strategy call" />
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-card p-8 text-center">
            <Reveal>
              <Send className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-white">Ready to see a clear scope?</h2>
              <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
                Tell us what you need. We will reply with the exact deliverables, timeline, and investment for your situation.
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
