import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildPerson,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps | Review-First Personal Brand Content Automation",
  description:
    "AI builds your content. You own the publish button. Generate LinkedIn carousels and cited newsletters from one research topic, then review and publish manually.",
  keywords: [
    "personal brand automation",
    "LinkedIn carousel workflow",
    "AI newsletter",
    "review-first publishing",
    "BrandOps",
  ],
  alternates: { canonical: BRANDOPS_URL },
  openGraph: {
    title: "BrandOps | Review-First Personal Brand Content Automation",
    description:
      "AI builds your content. You own the publish button. Generate LinkedIn carousels and cited newsletters from one research topic, then review and publish manually.",
    url: BRANDOPS_URL,
    siteName: "BrandOps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandOps | Review-First Personal Brand Content Automation",
    description:
      "AI builds your content. You own the publish button. Generate LinkedIn carousels and cited newsletters from one research topic, then review and publish manually.",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const schemas = [
    buildOrganization(),
    buildPerson(),
    buildBreadcrumbList([{ name: "Home", url: BRANDOPS_URL }]),
    buildWebPage(
      "BrandOps",
      "Review-first personal brand content automation for LinkedIn carousels, newsletters, and AI-assisted research.",
      BRANDOPS_URL
    ),
  ];

  return (
    <>
      {renderSchemas(schemas)}
      {children}
    </>
  );
}
