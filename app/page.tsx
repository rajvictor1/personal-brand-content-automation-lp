import { Hero, ProblemSolution, Outcomes } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Pipeline } from "@/components/pipeline";
import { PricingCards } from "@/components/pricing-cards";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { Walkthrough } from "@/components/walkthrough";
import { CaseStudy } from "@/components/case-study";
import { ToolsGrid } from "@/components/tools-grid";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildPerson,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildPerson(),
        buildBreadcrumbList([{ name: "Home", url: BRANDOPS_URL }]),
        buildWebPage(
          "BrandOps",
          "Review-first personal brand content automation for LinkedIn carousels, newsletters, and AI-assisted research.",
          BRANDOPS_URL
        ),
      ])}
      <Hero />
      <ToolsGrid />
      <Outcomes />
      <ProblemSolution />
      <FeatureGrid />
      <Walkthrough />
      <Pipeline headingLevel="h2" />
      <CaseStudy />
      <PricingCards headingLevel="h2" />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
