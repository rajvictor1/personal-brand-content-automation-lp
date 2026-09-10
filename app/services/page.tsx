import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import {
  ArrowRight,
  Download,
  Globe,
  Mail,
  Play,
  Search,
} from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, renderSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Consultancy Services",
  description:
    "BrandOps is an AI consultancy for business visibility, content, and lead generation. Services include AI content, website design, lead magnets, AEO/GEO visibility, and YouTube research.",
  alternates: { canonical: `${BRANDOPS_URL}/services` },
};

const services = [
  {
    icon: Mail,
    title: "AI Content for LinkedIn \u0026 Newsletter",
    tagline: "Turn expertise into consistent content.",
    description:
      "We research timely topics and write LinkedIn carousels and cited newsletter drafts you review before publishing.",
    href: "/services/linkedin-content",
    category: "Content",
  },
  {
    icon: Globe,
    title: "AI-Ready Website Design \u0026 Development",
    tagline: "Fast, search-friendly Next.js websites.",
    description:
      "We design and build responsive websites with AI-assisted copy, clean code, and human oversight.",
    href: "/services/ai-website-design-development",
    category: "Development",
  },
  {
    icon: Download,
    title: "Website Lead Magnets",
    tagline: "Useful assets that capture leads.",
    description:
      "We create lead magnets around your audience's problems and pair them with a landing page that converts.",
    href: "/services/website-lead-magnets",
    category: "Conversion",
  },
  {
    icon: Search,
    title: "AEO/GEO Visibility Card",
    tagline: "Understand your AI-search presence.",
    description:
      "We analyze how AI answer engines represent your brand and recommend content and entity improvements.",
    href: "/services/aeo-geo-visibility",
    category: "Visibility",
  },
  {
    icon: Play,
    title: "YouTube Research \u0026 Content Strategy",
    tagline: "Research-backed video ideas.",
    description:
      "We turn competitor and video performance patterns into sourced content briefs for your channel.",
    href: "/services/youtube-research",
    category: "Video",
  },
];

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

export default function ServicesPage() {
  const url = `${BRANDOPS_URL}/services`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url },
        ]),
        buildWebPage(
          "AI Consultancy Services",
          "BrandOps is an AI consultancy for business visibility, content, and lead generation.",
          url
        ),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">AI Consultancy Services</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Practical AI services for visibility, content, and leads
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Five focused services that help businesses apply AI to real marketing and growth challenges.
            </p>
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              What we do
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Services built for outcomes
            </h2>
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
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
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

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Process
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How we work
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

      <section className="px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to apply AI to your business?
            </h2>
          </Reveal>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us what you are building. We will recommend the right service and next steps.
            </p>
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
    </>
  );
}
