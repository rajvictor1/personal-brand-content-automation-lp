import { Hero, ProblemSolution, Outcomes } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Pipeline } from "@/components/pipeline";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { Walkthrough } from "@/components/walkthrough";
import { CaseStudy } from "@/components/case-study";
import { ToolsGrid } from "@/components/tools-grid";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildPerson,
  buildWebPage,
  buildService,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Content for LinkedIn & Newsletter",
  description:
    "Turn your expertise into consistent LinkedIn carousels and cited newsletter content. AI-assisted research, writing, and design with full review control.",
  alternates: { canonical: `${BRANDOPS_URL}/services/linkedin-content` },
  openGraph: {
    title: "AI Content for LinkedIn & Newsletter",
    description:
      "AI-assisted LinkedIn carousels and newsletter content service for founders, coaches, and consultants.",
    url: `${BRANDOPS_URL}/services/linkedin-content`,
  },
};

export default function LinkedinContentServicePage() {
  const url = `${BRANDOPS_URL}/services/linkedin-content`;

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildPerson(),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Services", url: `${BRANDOPS_URL}/services` },
          { name: "AI Content for LinkedIn & Newsletter", url },
        ]),
        buildWebPage(
          "AI Content for LinkedIn & Newsletter",
          "Turn your expertise into consistent LinkedIn carousels and cited newsletter content. AI-assisted research, writing, and design with full review control.",
          url
        ),
        buildService(
          "AI Content for LinkedIn & Newsletter",
          "AI-assisted LinkedIn carousel and newsletter content service for founders, coaches, and consultants.",
          url
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
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
