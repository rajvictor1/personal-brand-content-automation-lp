import { BentoFeatures } from "@/components/bento-features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandOps Features | AI LinkedIn Carousels & Newsletters",
  description:
    "Explore BrandOps features: AI research, LinkedIn carousel generation, cited newsletters, review-first publishing, and guarded publishing controls.",
  alternates: { canonical: "https://brandops.site/features" },
};
export default function FeaturesPage() {
  return (
    <div className="pt-16">
      <BentoFeatures />
    </div>
  );
}
