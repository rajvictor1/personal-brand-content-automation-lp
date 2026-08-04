import { Hero, ProblemSolution, Outcomes } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Pipeline } from "@/components/pipeline";
import { PricingCards } from "@/components/pricing-cards";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import { Walkthrough } from "@/components/walkthrough";
import { CaseStudy } from "@/components/case-study";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Outcomes />
      <ProblemSolution />
      <FeatureGrid />
      <Walkthrough />
      <Pipeline />
      <CaseStudy />
      <PricingCards />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
