import { PricingCards } from "@/components/pricing-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandOps Pricing | Simple Plans for Personal Brands",
  description:
    "Choose a BrandOps plan for AI-assisted LinkedIn carousels and newsletters. Start free or upgrade for more research, drafts, and support.",
  alternates: { canonical: "https://brandops.site/pricing" },
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingCards />
    </div>
  );
}
