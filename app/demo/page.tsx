import { Metadata } from "next";
import DemoContent from "./demo-content";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Book a BrandOps Demo | 30-Min Personalized Walkthrough",
  description:
    "Book a 30-minute demo with BrandOps. See how AI turns research into LinkedIn carousels and newsletters, and how review-first publishing keeps you in control.",
  alternates: { canonical: `${BRANDOPS_URL}/demo` },
};

export default function DemoPage() {
  const url = `${BRANDOPS_URL}/demo`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Book a demo", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildWebPage(
          "Book a BrandOps Demo | 30-Min Personalized Walkthrough",
          "Book a 30-minute demo with BrandOps. See how AI turns research into LinkedIn carousels and newsletters.",
          url
        ),
        breadcrumb,
      ])}
      <DemoContent />
    </>
  );
}
