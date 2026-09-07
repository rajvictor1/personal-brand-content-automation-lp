"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Mail, Download, Search, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

export function ConsultancyHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
          >
            <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
            AI Consultancy for Your Business
          </Badge>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            Put AI to work for your{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              visibility, content, and lead generation.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            We help businesses apply AI to practical marketing challenges—from LinkedIn and newsletter content to website lead magnets, AI search visibility, and YouTube research.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ConsultancyIntro() {
  return (
    <section className="border-y border-border/50 bg-muted/20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start with your business challenge.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Where could AI make a useful difference in your marketing? We help you identify the opportunity, choose a practical approach, and create content and tools around your audience and goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Mail,
    title: "AI Content for LinkedIn & Newsletter",
    description:
      "Turn your expertise into LinkedIn carousels and newsletter content tailored to your audience and brand voice. Build a consistent presence with ideas worth sharing.",
    href: "/services/linkedin-content",
    cta: "Explore Content Services",
  },
  {
    icon: Download,
    title: "Website Lead Magnets",
    description:
      "Give website visitors a useful reason to connect with your business. Create a lead magnet around your audience's needs and introduce a clear next step.",
    href: "/services/website-lead-magnets",
    cta: "Explore Lead Magnets",
  },
  {
    icon: Search,
    title: "AEO/GEO Visibility Card",
    description:
      "Understand how your brand appears in AI-generated answers. Get a clear view of visibility gaps and opportunities to improve how your business is represented.",
    href: "/services/aeo-geo-visibility",
    cta: "Explore Your Visibility Card",
  },
  {
    icon: Play,
    title: "YouTube Research & Content Strategy",
    description:
      "Turn competitor research and video performance patterns into sourced content ideas and practical briefs for your channel.",
    href: "/services/youtube-research",
    cta: "Explore YouTube Research",
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Services
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Four ways to put AI to work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each service is focused on a clear business outcome, supported by AI where it actually helps.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/40 p-8 transition-all hover:border-primary/30 hover:bg-card/60"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{service.description}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    description: "We create the agreed content, research, or assets and explain how to use them.",
  },
];

export function HowWeWork() {
  return (
    <section className="border-y border-border/50 bg-muted/20 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A practical approach to applying AI
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {howWeWork.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-background/60 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
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
      "We build a lead magnet around an audience problem—like a template, checklist, or guide—and pair it with a landing page that collects emails and delivers the asset instantly.",
  },
  {
    service: "AEO/GEO Visibility Card",
    title: "How your brand appears in AI-generated answers",
    description:
      "We analyze how AI answer engines represent your brand today, map visibility gaps against competitors, and recommend content and entity improvements you can act on.",
  },
  {
    service: "YouTube Research & Content Strategy",
    title: "Research-backed video content ideas",
    description:
      "We study competitor channels and video performance in your niche, then deliver sourced content briefs, title options, and a prioritized content plan.",
  },
];

export function WorkExamples() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Examples
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What the work looks like
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each example is labeled by service so you know exactly what we deliver.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example, i) => (
            <Reveal key={example.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {example.service}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{example.title}</h3>
                <p className="mt-2 text-muted-foreground">{example.description}</p>
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
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the right AI opportunity for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us what you want to improve. We’ll help you choose a practical starting point across content, lead generation, AI visibility, and YouTube research.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
          >
            Book a Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" /> Same-day response
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
