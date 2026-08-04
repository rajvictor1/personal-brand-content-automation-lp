import { Hero, ProblemSolution, Outcomes } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Pipeline } from "@/components/pipeline";
import { PricingCards } from "@/components/pricing-cards";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Outcomes />
      <ProblemSolution />
      <FeatureGrid />
      <Pipeline />
      <PricingCards />
      <Faq />
      <Cta />
    </>
  );
}
