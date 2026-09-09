import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Mail } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildPerson, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "AI Content for LinkedIn \u0026 Newsletter",
  description:
    "Turn your expertise into consistent LinkedIn carousels and cited newsletter content. AI-assisted research, writing, and design with full review control.",
  alternates: { canonical: `${BRANDOPS_URL}/services/linkedin-content` },
  openGraph: {
    title: "AI Content for LinkedIn \u0026 Newsletter",
    description:
      "AI-assisted LinkedIn carousels and newsletter content service for founders, coaches, and consultants.",
    url: `${BRANDOPS_URL}/services/linkedin-content`,
  },
};

const benefits = [
  "Research is automated: Firecrawl finds current stories so your content is always timely.",
  "Writing is accelerated: AI drafts carousel copy and cited newsletters in your voice.",
  "Design is handled: OpenAI Image renders slide artwork and newsletter visuals.",
  "You stay in control: every publish path has a review gate. No surprise posts.",
];

const deliverables = [
  "5-slide LinkedIn carousel from one research topic",
  "Cited newsletter draft with sources and a lead visual",
  "Review dashboard to edit and approve before publishing",
  "Content calendar and topic suggestions",
  "Handoff notes and process documentation",
];

export default function LinkedinContentServicePage() {
  const url = `${BRANDOPS_URL}/services/linkedin-content`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildPerson(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "AI Content for LinkedIn \u0026 Newsletter", url },
        ]),
        buildWebPage(
          "AI Content for LinkedIn \u0026 Newsletter",
          "Turn your expertise into consistent LinkedIn carousels and cited newsletter content. AI-assisted research, writing, and design with full review control.",
          url
        ),
        buildService(
          "AI Content for LinkedIn \u0026 Newsletter",
          "AI-assisted LinkedIn carousel and newsletter content service for founders, coaches, and consultants.",
          url
        ),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">AI Content Service</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              AI builds your content. You own the publish button.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Turn one research topic into a LinkedIn carousel and a cited newsletter. Researched by Firecrawl, written by OpenAI, approved by you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Discuss Content Service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/linkedin-carousel-generator"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                Try Free Carousel Generator
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
                What you get
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                One topic. Two assets. Your approval.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why it works</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {benefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Deliverables</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Discuss your LinkedIn content
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us your audience and posting goals. We will reply with a practical approach.
              </p>
            </Reveal>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
