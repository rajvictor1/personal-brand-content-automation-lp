import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { ArrowRight, CheckCircle, Code2, Cpu, ExternalLink, Globe, Layout, Rocket } from "lucide-react";
import { BRANDOPS_URL, buildBreadcrumbList, buildOrganization, buildWebPage, buildService, renderSchemas } from "@/lib/schema";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "AI-Ready Website Design \u0026 Development",
  description:
    "AI-ready website design and development for founders and consultants. We build fast, search-friendly Next.js websites that rank in search and AI engines, load instantly, and turn visitors into leads.",
  alternates: { canonical: `${BRANDOPS_URL}/services/ai-website-design-development` },
};

const benefits = [
  "Built for speed: Next.js architecture with Core Web Vitals in mind from day one.",
  "Built for discovery: technical SEO, schema markup, and AI-search-friendly structure.",
  "Built for conversion: clear messaging, strong CTAs, and lead capture baked into the design.",
  "Built to last: clean component system so future pages and edits are easy.",
];

const deliverables = [
  "Discovery and positioning brief",
  "Homepage + key pages designed for your audience",
  "Responsive Next.js build with Tailwind CSS",
  "Technical SEO, sitemap, and structured data",
  "Analytics, contact forms, and conversion tracking",
  "Launch support and handoff documentation",
];

const aiAdvantages = [
  {
    icon: Cpu,
    title: "AI-assisted copy",
    description: "We use AI to draft headlines, service descriptions, and meta content faster, then refine everything in your voice.",
  },
  {
    icon: Layout,
    title: "AI-assisted layout",
    description: "Layout and component ideas are generated and explored quickly, then finalized by design judgment.",
  },
  {
    icon: Code2,
    title: "AI-assisted development",
    description: "Repetitive code, tests, and schema markup are accelerated with AI. Architecture and QA stay human-led.",
  },
  {
    icon: Globe,
    title: "AI-search ready",
    description: "Schema, entity clarity, and fast markup help your site show up in traditional and generative search results.",
  },
];

const portfolioProjects = [
  {
    name: "MeenaHomeopath",
    description: "Healthcare website for a homeopathy clinic with appointment signals, local SEO, and a clean trust-first design.",
    image: "/images/portfolio/MeenaHomeopath.png",
    url: "https://www.meenahomeopath.ai",
    tags: ["Next.js", "Healthcare", "Local SEO"],
  },
  {
    name: "Founder Voice Lab",
    description: "Premium personal brand landing page for a LinkedIn ghostwriting trial, built around social proof and conversions.",
    image: "/images/portfolio/Founder-Voice-Lab.png",
    url: "https://founder-voice-lab.vercel.app",
    tags: ["Next.js", "Personal Brand", "Conversion"],
  },
  {
    name: "AI Content Strategist",
    description: "AI keyword-to-content engine with a clean dashboard, focused on turning search research into topic briefs.",
    image: "/images/portfolio/AI-Content-Strategist.png",
    url: "https://ai-content-strategist-six.vercel.app",
    tags: ["Next.js", "AI Tool", "Dashboard"],
  },
  {
    name: "BrandOps Apps Marketplace",
    description: "Product marketplace landing page for BrandOps AI tools with a calm, product-first browsing experience.",
    image: "/images/portfolio/BrandOps-Apps-Marketplace.png",
    url: "https://brandops-apps-marketplace-delta.vercel.app",
    tags: ["Next.js", "Marketplace", "Product UI"],
  },
];

function PortfolioCard({ project }: { project: typeof portfolioProjects[0] }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all hover:border-primary/40">
      <div className="relative overflow-hidden border-b border-white/10 bg-secondary/30 p-3 pb-0">
        <div className="overflow-hidden rounded-t-lg border border-white/10 bg-background shadow-sm">
          <div className="flex items-center gap-1.5 bg-muted/80 px-3 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <div className="ml-2 h-4 flex-1 rounded bg-background text-[9px] leading-4 text-muted-foreground">
              {project.url.replace(/^https:\/\//, "")}
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View live site
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default function AiWebsiteDesignDevelopmentPage() {
  const url = `${BRANDOPS_URL}/services/ai-website-design-development`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "AI-Ready Website Design \u0026 Development", url },
        ]),
        buildWebPage(
          "AI-Ready Website Design \u0026 Development",
          "AI-ready website design and development for founders and consultants. We build fast, SEO-friendly Next.js websites.",
          url
        ),
        buildService(
          "AI-Ready Website Design \u0026 Development",
          "AI-ready website design and development for founders and consultants.",
          url
        ),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Website Design \u0026 Development Service</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Next.js websites for founders and consultants
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We design and build fast, search-friendly websites with AI-assisted copy, clean code, and human oversight.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Discuss Your Website
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                Explore All Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Next.js websites for founders \u0026 consultants
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                A modern website is your hardest-working business asset. We build it to perform across search, speed, and conversion.
              </p>
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
              <h3 className="text-xl font-semibold text-foreground">What you get</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How AI fits into the build
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                AI accelerates the repetitive parts. Strategy, taste, and quality control stay human.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiAdvantages.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-card p-6">
                <div className="mb-4 inline-flex rounded-full border border-white/10 bg-secondary p-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Websites and products we have built
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                A selection of live sites we have designed and developed for founders, consultants, clinics, and product teams.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <PortfolioCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              FAQ
            </Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Website design and development questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "What makes an AI-ready website different?",
                a: "An AI-ready website is built with clean markup, fast load times, structured data, and entity clarity. These are the same signals that help traditional search engines and AI assistants understand, surface, and cite your content.",
              },
              {
                q: "Do you only build Next.js websites?",
                a: "Next.js is our default because it gives us speed, SEO, and flexibility in one stack. If your project needs a different approach, we will recommend the right tool after understanding your goals.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Yes. Every website we build is responsive and tested across devices and screen sizes.",
              },
              {
                q: "How long does a typical website take?",
                a: "It depends on scope. A focused landing page can move quickly. A multi-page business site takes longer. We will give you a clear timeline during the discovery call.",
              },
              {
                q: "What do you need from me to get started?",
                a: "We start with a brief call to understand your audience, offer, and goals. From there we handle the structure, design, copy, build, and launch.",
              },
              {
                q: "Do you handle hosting and domain setup?",
                a: "We typically deploy on Vercel and can guide you through domain setup. We also hand off the codebase and documentation so you own everything.",
              },
              {
                q: "Can you redesign an existing website?",
                a: "Yes. We can rebuild an existing site on a modern stack, improve its speed and SEO, and keep or improve the messaging and design.",
              },
              {
                q: "What is Hermes?",
                a: "Hermes is our multi-agent operating system. It runs research, drafting, code generation, and QA tasks under human oversight so we can deliver better work faster.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Discuss your website project
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Share what you need. We will reply with a clear plan and next steps.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
