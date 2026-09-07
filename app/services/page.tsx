import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, Sparkles } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, renderSchemas } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Consultancy Services | BrandOps",
  description:
    "BrandOps is an AI consultancy for business visibility, content, and lead generation. Services include LinkedIn content, website lead magnets, AEO/GEO visibility, and YouTube research.",
  alternates: { canonical: `${BRANDOPS_URL}/services` },
};

const services = [
  {
    title: "AI Content for LinkedIn & Newsletter",
    description:
      "Turn your expertise into consistent LinkedIn carousels and newsletter content tailored to your audience and brand voice. Build a presence with ideas worth sharing.",
    href: "/services/linkedin-content",
    cta: "Explore Content Services",
  },
  {
    title: "Website Lead Magnets",
    description:
      "Give website visitors a useful reason to connect with your business. Create a lead magnet around your audience's needs and introduce a clear next step.",
    href: "/services/website-lead-magnets",
    cta: "Explore Lead Magnets",
  },
  {
    title: "AEO/GEO Visibility Card",
    description:
      "Understand how your brand appears in AI-generated answers. Get a clear view of visibility gaps and opportunities to improve how your business is represented.",
    href: "/services/aeo-geo-visibility",
    cta: "Explore Your Visibility Card",
  },
  {
    title: "YouTube Research & Content Strategy",
    description:
      "Turn competitor research and video performance patterns into sourced content ideas and practical briefs for your channel.",
    href: "/services/youtube-research",
    cta: "Explore YouTube Research",
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
    description: "We create the agreed content, research, or assets and explain how to use them.",
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

      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Badge variant="outline" className="mb-6 border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
              AI Consultancy Services
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Practical AI Services for Visibility, Content, and Leads
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Four focused services that help businesses apply AI to real marketing challenges.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/40 p-8 transition-all hover:border-primary/30 hover:bg-card/60"
                >
                  <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{service.description}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-muted/20 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How we work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A practical approach to applying AI.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {howWeWork.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border/50 bg-background/60 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Step {item.step}</span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Find the right AI opportunity for your business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Tell us what you want to improve. We will help you choose a practical starting point across content, lead generation, AI visibility, and YouTube research.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
