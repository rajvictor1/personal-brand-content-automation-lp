import { Hero } from "@/components/hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Stats } from "@/components/stats";
import { Cta } from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeatureGrid />
      <Cta />
    </>
  );
}
