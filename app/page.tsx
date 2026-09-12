import { Metadata } from "next";
import {
  ConsultancyHero,
  ConsultancyIntro,
  ServiceCards,
  HowWeWork,
  WorkExamples,
  FinalCta,
} from "@/components/consultancy";
import { homeFaqs } from "@/lib/home-faqs";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildFAQPage,
  buildOrganization,
  buildPerson,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "BrandOps | AI Consultancy for Visibility, Content & Leads",
  description:
    "BrandOps is an AI consultancy that helps businesses improve visibility, create useful content, and generate leads with AI-powered workflows.",
  alternates: { canonical: BRANDOPS_URL },
  openGraph: {
    title: "BrandOps | AI Consultancy for Visibility, Content & Leads",
    description:
      "Practical AI consultancy for business visibility, content, and lead generation.",
    url: BRANDOPS_URL,
    images: [
      {
        url: "https://www.brandops.site/og.png",
        width: 1200,
        height: 630,
        alt: "BrandOps | AI consultancy for content, visibility, and lead generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandOps | AI Consultancy for Visibility, Content & Leads",
    description:
      "Practical AI consultancy for business visibility, content, and lead generation.",
    images: ["https://www.brandops.site/og.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildPerson(),
        buildBreadcrumbList([{ name: "Home", url: BRANDOPS_URL }]),
        buildWebPage(
          "BrandOps",
          "AI consultancy helping businesses improve visibility, create useful content, and generate leads.",
          BRANDOPS_URL
        ),
        ...(buildFAQPage(homeFaqs, BRANDOPS_URL) ? [buildFAQPage(homeFaqs, BRANDOPS_URL)!] : []),
      ])}
      <ConsultancyHero />
      <ConsultancyIntro />
      <ServiceCards />
      <HowWeWork />
      <WorkExamples />
      <Faq />
      <FinalCta />
    </>
  );
}
