import { Metadata } from "next";
import Link from "next/link";
import { Search, PenTool, ImageIcon, Eye, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Carousel Workflow — Features",
  description:
    "Turn one research topic into a five-slide LinkedIn carousel. Research, write, render, review, and publish with a hard approval gate.",
  alternates: { canonical: "https://brandops.site/features/carousel-workflow" },
};

const features = [
  {
    icon: Search,
    title: "Current-source research",
    description: "Firecrawl scans recent AI, automation, cloud, cybersecurity, and infrastructure reporting so you comment on real stories, not recycled takes.",
  },
  {
    icon: PenTool,
    title: "AI-written content slides",
    description: "OpenAI picks the most timely story and writes four concise value slides, each with a clear angle and source tie-in.",
  },
  {
    icon: ImageIcon,
    title: "Rendered slide artwork",
    description: "OpenAI Image generates complete PNG artwork for all five slides, including a deterministic fifth subscription slide.",
  },
  {
    icon: Eye,
    title: "Streaming progress",
    description: "Watch research, writing, and rendering steps stream in the dashboard so you know exactly what is happening.",
  },
  {
    icon: ShieldCheck,
    title: "Hard publish gate",
    description: "The workflow stops after generation. You review every slide, edit commentary, click Publish, and confirm again before anything goes live.",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    description: "Regenerate any section without restarting the whole flow. Test hooks, swap visuals, or refine the angle in seconds.",
  },
];

const faq = [
  {
    question: "Does the carousel publish automatically?",
    answer: "No. Generation never triggers publishing. You review the finished assets, edit the commentary, click Publish, and confirm the action a second time.",
  },
  {
    question: "Can I edit the slide copy before publishing?",
    answer: "Yes. The dashboard presents the full draft and slides for review before any publish action.",
  },
  {
    question: "What sources does the research use?",
    answer: "Firecrawl searches current reporting across AI, automation, cloud, cybersecurity, developer tools, infrastructure, and data centers.",
  },
  {
    question: "How many slides does the carousel generate?",
    answer: "Five: four content slides and one subscription slide for consistent lead capture.",
  },
];

export default function CarouselWorkflowPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Carousel Workflow</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Turn one research topic into a LinkedIn{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">carousel</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Research current sources, write concise slides, render polished artwork, and publish only after your review. Built for founders, trainers, and consultants who want to comment on timely news without spending hours on design.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal delay={0.2}>
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">What the workflow does</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">Frequently asked questions</h2>
        </Reveal>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <Reveal key={item.question} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="mt-2 text-muted-foreground">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 text-center sm:px-6 lg:px-8">
        <Reveal delay={0.3}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8">
            <h3 className="text-2xl font-bold text-foreground">Ready to publish with confidence?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Get early access to BrandOps and start turning research into review-ready LinkedIn carousels.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
