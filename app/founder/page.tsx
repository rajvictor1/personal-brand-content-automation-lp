import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  ExternalLink,
  Mail,
  MapPin,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildPerson,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Rajesh Kumar | Founder of BrandOps",
  description:
    "AI marketing leader with 18 years in B2B demand generation, GTM, and AI agents. $200M+ pipeline influenced, $6M+ ARR impact. Founder of BrandOps.",
  alternates: { canonical: `${BRANDOPS_URL}/founder` },
};

const stats = [
  { value: "$200M+", label: "Pipeline influenced" },
  { value: "$6M+", label: "ARR impact" },
  { value: "18Y", label: "Experience" },
  { value: "10X", label: "Organic traffic growth" },
];

const impact = [
  { value: "$200M+", desc: "Business pipeline influenced through organic growth & demand gen programs" },
  { value: "$6M+", desc: "Annual ARR impact generated across B2B SaaS & technology orgs" },
  { value: "$50K → $3M", desc: "Organic revenue scaled" },
  { value: "$1.2M", desc: "Attributed pipeline from 150+ landing pages launched at Devtron" },
  { value: "68%", desc: "YoY inbound pipeline growth delivered at Devtron" },
  { value: "45%", desc: "MQL-to-SQL conversion improvement" },
  { value: "10X", desc: "Organic traffic & SQL generation increase" },
  { value: "300+", desc: "A/B and multivariate growth experiments executed" },
];

const experience = [
  {
    title: "Senior AI Marketing Leader · AI Automation & Agent Builder",
    company: "BrandOps",
    location: "Bengaluru, India",
    period: "July 2026 – Present",
    points: [
      "Build and operate AI-powered marketing systems for B2B SaaS, consultancies, and service businesses.",
      "Deliver AI SDR/outbound engines, inbound support + lead capture, WhatsApp automation, AI SEO/content/social agents, and voice AI.",
      "Recent proof point: digital patient experience for Homeopathic Humanity Health Care — website + AI support agent + appointment booking + WhatsApp routing.",
    ],
  },
  {
    title: "Sr. Director – Growth Marketing",
    company: "Devtron Inc.",
    location: "Gurugram, India",
    period: "Jan 2025 – Feb 2026",
    points: [
      "Delivered 3.2X organic session growth and 68% YoY inbound pipeline growth.",
      "Launched 150+ landing pages generating $1.2M in attributed pipeline.",
      "Improved organic-to-demo conversion by 35%; built PLG onboarding that lifted activation by 42%.",
    ],
  },
  {
    title: "Director – Organic Growth",
    company: "Hevo Data",
    location: "Bengaluru, India",
    period: "Apr 2023 – Dec 2024",
    points: [
      "Increased organic traffic by 55% YoY; improved MQL-to-SQL conversion from 18% to 29%.",
      "Contributed $2M+ incremental revenue and generated 40% of overall new business pipeline.",
    ],
  },
  {
    title: "Director of Search Marketing",
    company: "Reliance Jio Embibe",
    location: "Bengaluru, India",
    period: "Jun 2021 – Apr 2023",
    points: [
      "Achieved 120% YoY organic traffic growth; supported platforms with 10M+ MAU.",
      "Improved conversion rates by 33%; contributed to 5M+ app downloads.",
    ],
  },
  {
    title: "Earlier Career",
    company: "Coverfox Insurance · Cvent · Volano Entertainment · Yaantra · TheSqua.re",
    location: "India / Global",
    period: "2008 – 2020",
    points: [
      "8+ years at Cvent across Sr. Search Analyst and Team Lead roles; 300+ A/B tests improving lead gen by 81%.",
      "Managed SEO, SEM, PPC, affiliate, social, and content marketing across US, UK, EMEA, and APAC.",
      "InsurTech, e-commerce, and B2B/B2C growth engine experience.",
    ],
  },
];

const aiWork = [
  { title: "AI SDR & Outbound Engines", desc: "Automated research, personalization, and outreach workflows using LLMs and n8n." },
  { title: "Inbound Support Agents", desc: "AI chatbots and assistants for lead capture, qualification, and customer support." },
  { title: "WhatsApp Automation", desc: "Appointment booking, routing, and conversational customer experiences." },
  { title: "AI SEO & Content Engine", desc: "RAG-based research, prompt-engineered content, and agentic social media workflows." },
  { title: "Voice AI", desc: "Conversational voice agents using Vapi, ElevenLabs, and Twilio integrations." },
  { title: "AI Products 0→1", desc: "MVP to production using Next.js, Vercel, Supabase, OpenAI, and Python." },
];

const skills = [
  "Revenue Marketing",
  "Demand Generation",
  "Pipeline Growth",
  "Enterprise SEO",
  "Product-Led Growth",
  "Go-To-Market Strategy",
  "Conversion Rate Optimization",
  "Account-Based Marketing",
  "Marketing Automation",
  "Funnel Optimization",
  "Marketing Analytics",
  "AI-Powered Marketing Systems",
  "Agentic AI",
  "RAG",
  "MCP",
  "Chatbots",
  "Voice AI",
  "Workflow Automation",
  "HubSpot",
  "Salesforce CRM",
  "Marketo / Pardot",
  "Google Analytics 4",
  "SEMrush / Ahrefs",
  "LinkedIn Campaign Manager",
  "Python",
  "OpenAI / Claude APIs",
  "Next.js / Vercel / Supabase",
];

export default function FounderPage() {
  const url = `${BRANDOPS_URL}/founder`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildPerson(),
        buildWebPage(
          "Rajesh Kumar | Founder of BrandOps",
          "AI marketing leader with 18 years in B2B demand generation, GTM, and AI agents. $200M+ pipeline influenced, $6M+ ARR impact.",
          url
        ),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Founder", url },
        ]),
      ])}

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-[180px_1fr]">
            <Reveal>
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-2xl border border-white/10 bg-card shadow-xl lg:mx-0">
                <Image
                  src="/founder-rk.png"
                  alt="Rajesh Kumar"
                  fill
                  className="object-cover"
                  priority
                  sizes="160px"
                />
              </div>
            </Reveal>
            <div className="text-center lg:text-left">
              <Reveal>
                <p className="mb-3 text-sm font-medium tracking-wide text-primary">Founder of BrandOps</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl">
                  Rajesh Kumar
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                  AI Marketing Leader · Demand Gen + AI Agents + Automation · 18 Years · $200M+ Pipeline
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground lg:justify-start">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" /> Bengaluru, India
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" /> 18 years in B2B growth
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link href="/contact" className={cn(buttonVariants({ variant: "default" }), "rounded-xl")}>
                  Work with me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "rounded-xl border-white/10")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Link>
                <Link href="mailto:rajarien@gmail.com" className={cn(buttonVariants({ variant: "outline" }), "rounded-xl border-white/10")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Stats */}
          <Reveal delay={0.5}>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-card p-6 text-center transition-colors hover:border-white/20"
                >
                  <div className="text-3xl font-semibold tracking-tight text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary">About</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Revenue-focused marketing leader turned AI operator
            </h2>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I am a revenue-focused marketing leader with 18 years of demand generation and GTM experience across B2B/B2C/D2C tech — DevOps, ETL, EdTech, InsurTech, and SaaS.
                </p>
                <p>
                  Currently, I am building AI-powered marketing systems at{" "}
                  <strong className="text-foreground">BrandOps</strong>, my own AI automation and agent-building consultancy. I combine deep demand generation expertise with agentic AI, RAG, MCP, prompt engineering, voice AI, and workflow automation to create intelligent, scalable growth engines.
                </p>
                <p>
                  My core focus: transforming marketing from a cost center into a predictable revenue function — across organic growth, paid acquisition, PLG, lifecycle, and AI-driven discovery.
                </p>
                <p>
                  I built BrandOps because I wanted a workspace where research, AI assistance, and review-first judgment come together — so solo operators can publish faster without losing their voice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">Where I focus</h3>
                <ul className="space-y-4">
                  {[
                    { icon: TrendingUp, label: "Demand generation", desc: "Repeatable lead engines across SMB and enterprise motions." },
                    { icon: Briefcase, label: "Go-to-market strategy", desc: "Aligned product, marketing, and sales around the right buyer and channel." },
                    { icon: Zap, label: "AI-assisted content", desc: "Uses AI for speed, never as a replacement for judgment or voice." },
                    { icon: Briefcase, label: "Personal-brand systems", desc: "Turns one research session into a week of citable, review-gated content." },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Revenue Impact */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary">Revenue Impact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Numbers that speak
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <Reveal key={item.desc}>
                <div className="h-full rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <div className="text-3xl font-semibold tracking-tight text-primary">{item.value}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Building growth engines since 2008
            </h2>
          </Reveal>
          <div className="relative space-y-6 pl-6 md:pl-8">
            <div className="absolute bottom-4 left-[11px] top-4 w-px bg-white/10 md:left-[15px]" />
            {experience.map((job, i) => (
              <Reveal key={job.period} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <div className="absolute -left-[31px] top-7 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-background md:-left-[39px] md:h-4 md:w-4" />
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="text-sm text-primary">{job.company} · {job.location}</p>
                    </div>
                    <Badge variant="outline" className="w-fit border-white/10 bg-background text-muted-foreground">
                      {job.period}
                    </Badge>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Work */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary">AI & Automation</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              AI-powered growth systems I build
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              AI agents and automation as the execution layer — not a replacement for strategy, but a multiplier for execution velocity.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiWork.map((item) => (
              <Reveal key={item.title}>
                <div className="h-full rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-card text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <p className="mb-3 text-sm font-medium tracking-wide text-primary">Core Skills & Tools</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The toolkit behind the work
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div>
                <p className="mb-3 text-sm font-medium tracking-wide text-primary">Get in touch</p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let us build your AI growth engine
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  I advise founders, trainers, and consultants on demand generation, GTM, and building a personal-brand content system.
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-4 transition-colors hover:border-white/20"
                  >
                    <ExternalLink className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Connect on LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:rajarien@gmail.com"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-4 transition-colors hover:border-white/20"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-foreground">rajarien@gmail.com</span>
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-card p-6">
                <h3 className="mb-5 text-lg font-semibold text-white">Send a message</h3>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
