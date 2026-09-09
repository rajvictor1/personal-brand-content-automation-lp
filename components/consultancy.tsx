"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Globe,
  Mail,
  Play,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

const services = [
  {
    icon: Mail,
    title: "AI Content for LinkedIn & Newsletter",
    tagline: "Turn expertise into consistent content.",
    description:
      "We research timely topics and write LinkedIn carousels and cited newsletter drafts you review before publishing.",
    href: "/services/linkedin-content",
    category: "Content",
    status: "live" as const,
  },
  {
    icon: Globe,
    title: "AI-Ready Website Design & Development",
    tagline: "Fast, search-friendly Next.js websites.",
    description:
      "We design and build responsive websites with AI-assisted copy, clean code, and human oversight.",
    href: "/services/ai-website-design-development",
    category: "Development",
    status: "live" as const,
  },
  {
    icon: Download,
    title: "Website Lead Magnets",
    tagline: "Useful assets that capture leads.",
    description:
      "We create lead magnets around your audience's problems and pair them with a landing page that converts.",
    href: "/services/website-lead-magnets",
    category: "Conversion",
    status: "live" as const,
  },
  {
    icon: Search,
    title: "AEO/GEO Visibility Card",
    tagline: "Understand your AI-search presence.",
    description:
      "We analyze how AI answer engines represent your brand and recommend content and entity improvements.",
    href: "/services/aeo-geo-visibility",
    category: "Visibility",
    status: "live" as const,
  },
  {
    icon: Play,
    title: "YouTube Research & Content Strategy",
    tagline: "Research-backed video ideas.",
    description:
      "We turn competitor and video performance patterns into sourced content briefs for your channel.",
    href: "/services/youtube-research",
    category: "Video",
    status: "live" as const,
  },
];

const statusClass = {
  live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "coming-soon": "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export function ConsultancyHero() {
  return (
    <section className="px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-4 text-sm font-medium tracking-wide text-primary">AI Consultancy for Content, Visibility & Lead Generation</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Put AI to work for your visibility, content, and leads.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            BrandOps is a practical AI consultancy. We use AI agents and human oversight to deliver content, websites, and visibility work you can actually use.
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
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ConsultancyIntro() {
  return (
    <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            AI consultancy built for operators
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We do not sell vague strategy. We deliver working content, websites, and visibility systems that your business can use immediately.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Review-first delivery
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Human oversight
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Built for outcomes
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServiceCards() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Services
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Five ways to put AI to work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each service is focused on a clear business outcome, supported by AI where it actually helps.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass[service.status]}`}>
                      {service.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{service.category}</p>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{service.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const howWeWork = [
  {
    step: "01",
    title: "Understand",
    description: "We learn about your business, audience, and current challenge.",
  },
  {
    step: "02",
    title: "Recommend",
    description: "We define the service, scope, and deliverables that fit your needs.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "We create the agreed assets and explain how to use them.",
  },
];

export function HowWeWork() {
  return (
    <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Process
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A practical approach
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {howWeWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const examples = [
  {
    service: "AI Content for LinkedIn & Newsletter",
    title: "From one research topic to carousel + newsletter",
    description:
      "We research a timely topic, write a 5-slide LinkedIn carousel and a cited newsletter draft, and deliver both for your review before anything goes out.",
  },
  {
    service: "Website Lead Magnets",
    title: "A useful download that captures leads",
    description:
      "We build a lead magnet around an audience problem and pair it with a landing page that collects emails and delivers the asset instantly.",
  },
  {
    service: "AEO/GEO Visibility Card",
    title: "How your brand appears in AI-generated answers",
    description:
      "We analyze how AI answer engines represent your brand today, map visibility gaps against competitors, and recommend content and entity improvements.",
  },
  {
    service: "YouTube Research & Content Strategy",
    title: "Research-backed video content ideas",
    description:
      "We turn competitor and video performance patterns into sourced content briefs you can hand to a scriptwriter or editor.",
  },
];

export function WorkExamples() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Examples
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What the work looks like
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {examples.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{item.service}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to put AI to work?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us what you are building. We will recommend the right service and next steps.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:brightness-110"
          >
            Start the Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
