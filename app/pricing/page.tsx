import { PricingCards } from "@/components/pricing-cards";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOffers,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Pricing | Simple Plans for Personal Brands",
  description:
    "Choose a BrandOps plan for AI-assisted LinkedIn carousels and newsletters. Start free or upgrade for more research, drafts, and support.",
  alternates: { canonical: `${BRANDOPS_URL}/pricing` },
};

export default function PricingPage() {
  const url = `${BRANDOPS_URL}/pricing`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Pricing", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOffers(),
        buildWebPage(
          "BrandOps Pricing",
          "Choose a BrandOps plan for AI-assisted LinkedIn carousels and newsletters. Start free or upgrade.",
          url
        ),
        breadcrumb,
      ])}
      <div className="pt-16">
        <PricingCards />
      </div>
    </>
  );
}
