import { Metadata } from "next";
import { Person, Organization, WebSite, WithContext } from "schema-dts";

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
  alternates: { canonical: "https://www.brandops.site" },
  openGraph: {
    title: "BrandOps | Review-First Personal Brand Content Automation",
    description:
      "AI builds your content. You own the publish button. Generate LinkedIn carousels and cited newsletters from one research topic, then review and publish manually.",
    url: "https://www.brandops.site",
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
  const structuredData: WithContext<WebSite | Organization | Person>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BrandOps",
      url: "https://www.brandops.site",
      description:
        "Review-first personal brand content automation for LinkedIn carousels, newsletters, and AI-assisted research.",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BrandOps",
      url: "https://www.brandops.site",
      logo: "https://www.brandops.site/logo.png",
      sameAs: [
        "https://www.linkedin.com/in/rajeshkumar-rajvictor/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rajesh Kumar",
      "url": "https://github.com/rajvictor1",
      "jobTitle": "Founder, BrandOps",
      "sameAs": ["https://github.com/rajvictor1"],
    },
  ];

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      {children}
    </>
  );
}
