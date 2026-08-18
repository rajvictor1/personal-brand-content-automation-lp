import { Metadata } from "next";
import Link from "next/link";
import { Search, FileText, ImageIcon, MailCheck, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "AI Newsletter Generator | Cited Research to Inbox",
  description:
    "Generate cited newsletters from current research with BrandOps. Firecrawl finds sources, OpenAI writes the draft, and you review before sending.",
  alternates: { canonical: "https://www.brandops.site/features/newsletter-workflow" },
};

const features = [
  {
    icon: Search,
    title: "Bounded source research",
    description: "Firecrawl returns a focused set of current sources tied to your topic, so every claim has a real link behind it.",
  },
  {
    icon: FileText,
    title: "Structured newsletter draft",
    description: "OpenAI writes a full newsletter with sections, citations, and a subject line based on the sources you pulled.",
  },
  {
    icon: ImageIcon,
    title: "Optional lead visual",
    description: "Generate one text-free 16:9 lead image that matches the newsletter theme and improves engagement.",
  },
  {
    icon: MailCheck,
    title: "Fixed test delivery",
    description: "Send the reviewed draft to a fixed server-configured recipient through Resend. No accidental broadcasts.",
  },
  {
    icon: ShieldCheck,
    title: "Review before send",
    description: "The browser cannot choose or override the recipient. You review the full draft, sources, and visual before delivery.",
  },
  {
    icon: Zap,
    title: "Same research, two assets",
    description: "Use the same sources as your carousel workflow so your LinkedIn and email channels stay consistent.",
  },
];

const faq = [
  {
    question: "Who receives the test newsletter?",
    answer: "The fixed server-configured recipient. The browser cannot choose or override the recipient, and production mailing-list delivery is not connected.",
  },
  {
    question: "Can I include a lead image?",
    answer: "Yes. You can choose to generate one text-free 16:9 lead visual that matches the newsletter theme.",
  },
  {
    question: "Are the sources cited in the newsletter?",
    answer: "Yes. The draft includes citations tied to the bounded set of sources Firecrawl returns for your topic.",
  },
  {
    question: "Can the newsletter send automatically?",
    answer: "No. Delivery is a separate Publish action after review. Nothing sends without your explicit approval.",
  },
];

export default function NewsletterWorkflowPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Newsletter Workflow</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Write cited newsletters from current{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">research</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Enter a research topic, pull bounded current sources, and generate a structured newsletter with citations and an optional lead visual. Review everything before a fixed test delivery.
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
            <h3 className="text-2xl font-bold text-foreground">Build trust with every send</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Get early access to BrandOps and start sending review-ready newsletters backed by real sources.
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
