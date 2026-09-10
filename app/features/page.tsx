import { BentoFeatures } from "@/components/bento-features";
import { Metadata } from "next";
import { Reveal } from "@/components/animations";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Features | LinkedIn + Newsletters",
  description:
    "Explore BrandOps features: AI research, LinkedIn carousel generation, cited newsletters, and review-first publishing.",
  alternates: { canonical: "https://www.brandops.site/features" },
};

export default function FeaturesPage() {
  const url = `${BRANDOPS_URL}/features`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Features", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "BrandOps Features",
          "Explore BrandOps features: AI research, LinkedIn carousel generation, cited newsletters, and review-first publishing.",
          url
        ),
        breadcrumb,
      ])}
      <section className="relative px-4 pb-6 pt-24 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="mb-4 text-sm font-medium tracking-wide text-primary">Product</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Everything you need to stay visible
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              One workspace. AI-assisted research, LinkedIn carousels, cited newsletters, and review-first publishing.
            </p>
          </Reveal>
        </div>
      </section>

      <BentoFeatures />
    </>
  );
}
