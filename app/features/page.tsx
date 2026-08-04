import { BentoFeatures } from "@/components/bento-features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore BrandOps: timely research, LinkedIn carousel generation, cited newsletters, review gates, AI artwork, and a live streaming pipeline.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <BentoFeatures />
    </div>
  );
}
