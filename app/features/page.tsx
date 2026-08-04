import { FeatureGrid } from "@/components/feature-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore BrandOps carousel generation, newsletter creation, OpenAI Image artwork, review gates, and streaming pipeline progress.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <FeatureGrid />
    </div>
  );
}
