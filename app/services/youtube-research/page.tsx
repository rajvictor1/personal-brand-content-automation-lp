import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "YouTube Research \u0026 Content Strategy",
  description:
    "Turn YouTube competitor research and video performance patterns into sourced content ideas and practical briefs for your channel.",
  alternates: { canonical: `${BRANDOPS_URL}/services/youtube-research` },
};

const benefits = [
  "Identify content gaps your competitors are not covering well.",
  "Spot video formats, titles, and hooks that drive engagement in your niche.",
  "Turn performance data into a prioritized content calendar.",
  "Get research-backed briefs for your own videos and shorts.",
];

const deliverables = [
  "Niche and competitor channel research",
  "Top-performing video pattern analysis",
  "Content gap and opportunity map",
  "Sourced video briefs and title options",
  "Editable content calendar and strategy notes",
];

export default function YoutubeResearchPage() {
  const url = `${BRANDOPS_URL}/services/youtube-research`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "YouTube Research \u0026 Content Strategy", url },
        ]),
        buildWebPage(
          "YouTube Research \u0026 Content Strategy",
          "Turn YouTube competitor research and video performance patterns into sourced content ideas and practical briefs for your channel.",
          url
        ),
        buildService(
          "YouTube Research \u0026 Content Strategy",
          "AI-assisted YouTube competitor research, content gap analysis, and video strategy briefs.",
          url
        ),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">YouTube Strategy Service</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              YouTube Research \u0026 Content Strategy
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We study competitor channels, video performance, and content gaps in your niche, then turn that research into practical video briefs and a content plan for your channel.
            </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Explore YouTube Research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
                Research-driven video content strategy
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
                    <Play className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
                Discuss your YouTube strategy
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us your channel, niche, and content goals. We will reply with a research plan.
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
