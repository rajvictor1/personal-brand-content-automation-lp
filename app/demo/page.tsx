import { Metadata } from "next";
import DemoContent from "./demo-content";

export const metadata: Metadata = {
  title: "Book a BrandOps Demo | 30-Min Personalized Walkthrough",
  description:
    "Book a 30-minute demo with BrandOps. See how AI turns research into LinkedIn carousels and newsletters, and how review-first publishing keeps you in control.",
  alternates: { canonical: "https://brandops.site/demo" },
};

export default function DemoPage() {
  return <DemoContent />;
}
