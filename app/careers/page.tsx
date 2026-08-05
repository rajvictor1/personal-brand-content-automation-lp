import { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Careers at BrandOps | Join Our Content Automation Team",
  description:
    "Explore internships and roles at BrandOps. Work on AI-assisted LinkedIn content, newsletter workflows, and review-first publishing for solo operators.",
  alternates: { canonical: "https://brandops.site/careers" },
};

const openings = [
  {
    id: "marketing-intern",
    title: "Marketing Intern — Personal Brand Content",
    type: "Internship",
    location: "Remote",
    commitment: "3 months, 15–20 hrs/week",
    team: "Growth",
    description:
      "Help us grow the BrandOps personal-brand community. You will research content topics, draft LinkedIn posts and newsletter sections, support SEO experiments, and track what drives traffic and signups.",
    responsibilities: [
      "Research timely topics in AI, automation, and personal branding",
      "Draft LinkedIn carousels and newsletter content under senior review",
      "Assist with keyword research and on-page SEO for resources",
      "Track content performance and report weekly insights",
    ],
    requirements: [
      "Strong written English",
      "Interest in LinkedIn, newsletters, or personal branding",
      "Willingness to learn AI tools and SEO basics",
      "Reliable and detail-oriented",
    ],
  },
  {
    id: "product-intern",
    title: "Product Intern — AI Workflow Research",
    type: "Internship",
    location: "Remote",
    commitment: "3 months, 15–20 hrs/week",
    team: "Product",
    description:
      "Work directly with the founder to test AI research and generation workflows. You will run experiments with Firecrawl, OpenAI, and prompt design, then document what works.",
    responsibilities: [
      "Run structured experiments on AI research pipelines",
      "Document prompt patterns and output quality benchmarks",
      "Help build internal templates and cheat sheets",
      "Support user interviews and feedback synthesis",
    ],
    requirements: [
      "Interest in AI products and workflows",
      "Basic familiarity with prompts and LLMs",
      "Analytical mindset and clear documentation habits",
      "Self-starter who can run experiments independently",
    ],
  },
  {
    id: "design-intern",
    title: "Design Intern — UI and Visual Content",
    type: "Internship",
    location: "Remote",
    commitment: "3 months, 10–15 hrs/week",
    team: "Design",
    description:
      "Support the visual side of BrandOps. You will help improve the marketing site UI, design carousel slide templates, and create visual assets for resources and social posts.",
    responsibilities: [
      "Design carousel slide templates and visual guidelines",
      "Create thumbnails and graphics for resources and videos",
      "Refine UI components on the marketing site",
      "Maintain a consistent dark-mode design system",
    ],
    requirements: [
      "Familiarity with Figma",
      "Eye for clean, modern UI design",
      "Interest in dark-mode SaaS aesthetics",
      "Portfolio or sample work preferred",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">Careers</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Join the BrandOps{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">team</span></h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We are a small, focused team building review-first content tools for solo operators and founders. If you want to learn fast and ship real work, we want to hear from you.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {openings.map((job, index) => (
            <Reveal key={job.id} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    {job.type}
                  </Badge>
                  <Badge variant="secondary">{job.team}</Badge>
                </div>

                <h2 className="mt-3 text-2xl font-semibold text-foreground">{job.title}</h2>

                <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {job.commitment}
                  </span>
                </div>

                <p className="mt-4 text-muted-foreground">{job.description}</p>

                <div className="mt-5 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-foreground">What you will do</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {job.responsibilities.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">What we look for</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/contact?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Briefcase className="h-4 w-4" /> Apply for this role
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <GraduationCap className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-bold text-foreground">Do not see a perfect fit?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              We are always open to motivated people. Send us a note with what you want to learn and what you can build.
            </p>
            <Link
              href="/contact?subject=General internship application"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10"
            >
              Send an open application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
