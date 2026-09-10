import { PricingCards } from "@/components/pricing-cards";
import { Testimonials } from "@/components/testimonials";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOffers,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Pricing | Free and Operator Plans",
  description:
    "Choose a BrandOps plan for AI-assisted LinkedIn carousels and newsletters. Start free or join the Operator waitlist.",
  alternates: { canonical: "https://www.brandops.site/pricing" },
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
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="pt-16">
          <PricingCards />
          <Testimonials />
        </div>
      </div>
    </>
  );
}
