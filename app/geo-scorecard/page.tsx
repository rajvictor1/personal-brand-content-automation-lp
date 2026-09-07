import type { Metadata } from "next";
import { AIFindabilityScorecard } from "@/components/ai-findability-scorecard";

export const metadata: Metadata = {
  title: "AI Findability Scorecard for Personal Brands | BrandOps",
  description:
    "See how findable your personal brand is by AI search. Get a free AI Findability score, a 6-category breakdown, and 3 quick wins to fix today.",
  keywords: [
    "AI findability",
    "GEO scorecard",
    "personal brand SEO",
    "AI search visibility",
    "BrandOps",
    "Generative Engine Optimization",
  ],
  authors: [{ name: "Rajesh Kumar", url: "https://www.brandops.site" }],
  creator: "Rajesh Kumar",
  publisher: "BrandOps",
  metadataBase: new URL("https://www.brandops.site"),
  alternates: {
    canonical: "/geo-scorecard",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandOps",
    title: "AI Findability Scorecard for Personal Brands | BrandOps",
    description:
      "See how findable your personal brand is by AI search. Get a free AI Findability score, a 6-category breakdown, and 3 quick wins to fix today.",
    url: "https://www.brandops.site/geo-scorecard",
    images: [
      {
        url: "https://www.brandops.site/geo-scorecard-og.png",
        width: 1200,
        height: 630,
        alt: "BrandOps AI Findability Scorecard for personal brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Findability Scorecard for Personal Brands | BrandOps",
    description:
      "See how findable your personal brand is by AI search. Get a free AI Findability score, a 6-category breakdown, and 3 quick wins to fix today.",
    images: ["https://www.brandops.site/geo-scorecard-og.png"],
  },
};

export default function GeoScorecardPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Free lead magnet
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              AI Findability Scorecard for Personal Brands
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              One URL. One minute. A clear picture of how AI search engines see your site.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AIFindabilityScorecard />
        </div>
      </section>

      <section className="border-t border-border/50 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Why AI findability matters now
          </h2>
          <p className="mt-4 text-muted-foreground">
            ChatGPT, Perplexity, Gemini, and Google AI Overviews now answer questions that used to go to Google Search. If your personal brand site is not structured for AI extraction, you are invisible in those answers.
          </p>
          <p className="mt-4 text-muted-foreground">
            BrandOps fixes that with a review-first content workspace that turns one research topic into a LinkedIn carousel and a cited newsletter, ready for AI systems to quote.
          </p>
        </div>
      </section>
    </>
  );
}
