import { PricingCards } from "@/components/pricing-cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "BrandOps Solo free plan and Operator paid plan for personal-brand content automation.",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingCards />
    </div>
  );
}
