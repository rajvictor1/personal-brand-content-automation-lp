import { BentoFeatures } from "@/components/bento-features";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Features | AI LinkedIn Carousels & Newsletters",
  description:
    "Explore BrandOps features: AI research, LinkedIn carousel generation, cited newsletters, review-first publishing, and guarded publishing controls.",
  alternates: { canonical: `${BRANDOPS_URL}/features` },
};

export default function FeaturesPage() {
  const url = `${BRANDOPS_URL}/features`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Features", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "BrandOps Features",
          "Explore BrandOps features: AI research, LinkedIn carousel generation, cited newsletters, and review-first publishing.",
          url
        ),
        breadcrumb,
      ])}
      <div className="pt-16">
        <BentoFeatures />
      </div>
    </>
  );
}
