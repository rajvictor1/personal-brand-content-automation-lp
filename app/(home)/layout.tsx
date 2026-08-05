import { Metadata } from "next";
import { Person, Organization, WebSite, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "BrandOps — Review-First Personal Brand Content Automation",
  description:
    "BrandOps helps solo operators, trainers, and founders build a citable personal brand with AI-assisted research, review-first publishing, and LinkedIn-ready workflows.",
  keywords: [
    "personal brand automation",
    "LinkedIn carousel workflow",
    "AI newsletter",
    "review-first publishing",
    "BrandOps",
  ],
  alternates: { canonical: "https://brandops.site" },
  openGraph: {
    title: "BrandOps — Review-First Personal Brand Content Automation",
    description:
      "AI builds your content. You own the publish button.",
    url: "https://brandops.site",
    siteName: "BrandOps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandOps — Review-First Personal Brand Content Automation",
    description: "AI builds your content. You own the publish button.",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const structuredData: WithContext<WebSite | Organization | Person>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BrandOps",
      url: "https://brandops.site",
      description:
        "Review-first personal brand content automation for LinkedIn carousels, newsletters, and AI-assisted research.",
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BrandOps",
      url: "https://brandops.site",
      logo: "https://brandops.site/logo.png",
      sameAs: [
        "https://www.linkedin.com/in/rajeshkumar-rajvictor/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Rajesh Kumar",
      url: "https://brandops.site",
      jobTitle: "Founder, BrandOps",
      sameAs: ["https://www.linkedin.com/in/rajeshkumar-rajvictor/"],
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
