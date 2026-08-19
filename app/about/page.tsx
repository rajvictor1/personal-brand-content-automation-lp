import { Metadata } from "next";
import Link from "next/link";
import { Target, Shield, Zap, Users } from "lucide-react";
import { Reveal } from "@/components/animations";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "About BrandOps | AI Content Platform for Personal Brands",
  description:
    "BrandOps is a review-first content workspace that helps solo founders and trainers turn research into LinkedIn carousels and newsletters. You approve every post.",
  alternates: { canonical: "https://www.brandops.site/about" },
};

const values = [
  {
    icon: Shield,
    title: "Review-first",
    description:
      "AI drafts. You approve. Nothing publishes without a human checkpoint.",
  },
  {
    icon: Zap,
    title: "Speed without shortcuts",
    description:
      "Automate research, drafting, and design. Keep judgment, taste, and accountability.",
  },
  {
    icon: Target,
    title: "Built for operators",
    description:
      "One trusted user. One research session. Two ready-to-review assets: a carousel and a newsletter.",
  },
  {
    icon: Users,
    title: "Citable by default",
    description:
      "Every claim links back to a current source. Trust is the product.",
  },
];

export default function AboutPage() {
  const url = `${BRANDOPS_URL}/about`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "About", url },
  ]);
  const schemas = [
    buildOrganization(),
    buildWebPage(
      "About BrandOps",
      "BrandOps is a review-first content workspace that helps solo founders and trainers turn research into LinkedIn carousels and newsletters.",
      url
    ),
    breadcrumb,
  ];

  return (
    <>
      {renderSchemas(schemas)}
      <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">About BrandOps</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            AI builds your content.
            {" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              You own the publish button.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            BrandOps is a personal-brand content workspace for solo operators, trainers, and founders who want to publish more consistently without sacrificing judgment.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.1 + index * 0.1}>
              <div className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{value.title}</h2>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-16 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Want to join us?</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              We are a small team building tools for the next generation of personal brands. Check our open roles.
            </p>
            <Link
              href="/careers"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              See open roles
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
    </>
  );
}
