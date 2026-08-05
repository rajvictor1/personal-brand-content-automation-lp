import { Metadata } from "next";
import Link from "next/link";
import { 
  HeadphonesIcon, 
  Mail, 
  Clock, 
  MessageCircle, 
  Search, 
  Zap, 
  ShieldCheck, 
  FileText,
  ArrowRight,
  CheckCircle2,
  LifeBuoy
} from "lucide-react";
import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "24/7 BrandOps Support | Email support@brandops.site",
  description:
    "Get fast, human support for BrandOps. Email support@brandops.site for help with setup, carousel generation, newsletter delivery, LinkedIn publishing, and billing.",
  alternates: { canonical: "https://brandops.site/support" },
};

const supportChannels = [
  {
    icon: Mail,
    title: "Email support",
    description: "Reach our team directly at support@brandops.site. We read every message and route technical questions to the right person.",
    cta: "Email us",
    href: "mailto:support@brandops.site?subject=BrandOps support request",
    response: "We aim to respond within 24 hours on business days and 48 hours on weekends.",
  },
  {
    icon: Clock,
    title: "24/7 coverage",
    description: "Our documentation and automated guides are always available. For human help, we monitor requests around the clock and prioritize urgent issues.",
    cta: "Browse guides",
    href: "/resources",
    response: "Urgent publishing or access issues are escalated immediately.",
  },
  {
    icon: MessageCircle,
    title: "Personalized replies",
    description: "We do not send copy-paste answers. Every reply includes context from your workspace, screenshots where helpful, and clear next steps.",
    cta: "Start a conversation",
    href: "/contact?subject=Support request",
    response: "Tell us what you are trying to achieve and we will suggest the fastest path.",
  },
];

const helpTopics = [
  {
    icon: Zap,
    title: "Getting started",
    description: "First-time setup, environment variables, API keys, and running your first carousel or newsletter workflow.",
    examples: ["Where do I add my OpenAI key?", "How do I run the dashboard locally?", "What does each env variable do?"],
  },
  {
    icon: Search,
    title: "Research and sources",
    description: "Troubleshooting Firecrawl research, source limits, citation formatting, and finding timely stories for your niche.",
    examples: ["Why did research return zero sources?", "Can I change the research domains?", "How are citations formatted?"],
  },
  {
    icon: FileText,
    title: "Carousel generation",
    description: "Slide copy, artwork rendering, PNG exports, and reviewing generated carousel decks before publishing.",
    examples: ["Slides look off-brand. Can I edit them?", "How do I regenerate one slide?", "What image model is used?"],
  },
  {
    icon: Mail,
    title: "Newsletter delivery",
    description: "Newsletter drafts, subject lines, Resend setup, fixed test recipients, and send troubleshooting.",
    examples: ["Why did the newsletter not send?", "Can I change the test recipient?", "How do I add a lead visual?"],
  },
  {
    icon: ShieldCheck,
    title: "Publishing and LinkedIn",
    description: "LinkedIn identity checks, dry runs, duplicate prevention, scheduled posting, and review gates.",
    examples: ["Why is publishing local-only?", "How does duplicate prevention work?", "Can I schedule a post?"],
  },
  {
    icon: LifeBuoy,
    title: "Billing and account",
    description: "Early-access plans, invoice questions, account deletion, data exports, and GDPR requests.",
    examples: ["How do I update my billing email?", "Can I export my generated content?", "How do I delete my account?"],
  },
];

const realExample = {
  question: "I am a trainer launching a new course. I need a carousel on AI workflow automation every Monday morning.",
  reply: [
    "Set up the carousel workflow with your research topics pinned to AI and automation.",
    "Generate the carousel on Friday, review it over the weekend, and schedule it through the local dashboard or the GitHub Actions manifest for Monday 8 AM.",
    "Save the commentary template so future weeks need only a quick edit.",
  ],
};

export default function SupportPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            <HeadphonesIcon className="mr-1.5 inline h-3.5 w-3.5" />
            24/7 support
          </Badge>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We are here{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              whenever you need us
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Running a personal brand is hard enough. When something breaks, slows down, or just feels confusing, send us a message and a real human will help.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:support@brandops.site?subject=BrandOps support request"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email support@brandops.site
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              Browse help guides
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {supportChannels.map((channel, index) => (
            <Reveal key={channel.title} delay={0.1 + index * 0.1}>
              <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <channel.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{channel.title}</h2>
                <p className="mt-2 flex-1 text-muted-foreground">{channel.description}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong className="text-foreground">{channel.response}</strong>
                </p>
                <Link
                  href={channel.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  {channel.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-2xl font-bold text-foreground">What we can help with</h2>
          <p className="mb-8 text-muted-foreground">Pick the topic closest to your question. We will match your email to the right expert.</p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <topic.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
                <div className="mt-4 space-y-2">
                  {topic.examples.map((example) => (
                    <div key={example} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card/60 to-card/40 p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Real support example</h3>
                <p className="text-sm text-muted-foreground">What a personalized reply looks like</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border/50 bg-background/50 p-5">
                <p className="text-sm font-semibold text-foreground">Customer question:</p>
                <p className="mt-1 text-muted-foreground">{realExample.question}</p>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-sm font-semibold text-primary">Our reply:</p>
                <ol className="mt-2 list-decimal space-y-2 pl-5 text-muted-foreground">
                  {realExample.reply.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-10 text-center">
            <HeadphonesIcon className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-3xl font-bold text-foreground">Still stuck?</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
              Send one email and a human will read it. Include your workspace, the step you are on, and the result you expected.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="mailto:support@brandops.site?subject=BrandOps support request"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Mail className="h-4 w-4" />
                support@brandops.site
              </Link>
              <Link
                href="/contact?subject=Support request"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                Use contact form
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
