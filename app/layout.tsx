import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalyticsPageView, GoogleAnalyticsScripts } from "@/components/google-analytics";
import { ChatWidget } from "@/components/chat-widget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "BrandOps | AI Consultancy for Content, Visibility & Lead Generation",
    template: "%s | BrandOps",
  },
  description:
    "BrandOps is an AI consultancy helping businesses improve visibility, create useful content, and generate leads. Services include AI content, website lead magnets, AEO/GEO visibility, and YouTube research.",
  keywords: [
    "AI consultancy",
    "AI content services",
    "website lead magnets",
    "AEO",
    "GEO",
    "AI search visibility",
    "LinkedIn content service",
    "YouTube research",
    "lead generation",
    "BrandOps",
  ],
  authors: [{ name: "Rajesh Kumar", url: "https://www.brandops.site" }],
  creator: "Rajesh Kumar",
  publisher: "BrandOps",
  metadataBase: new URL("https://www.brandops.site"),
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandOps",
    title: "BrandOps | AI Consultancy for Content, Visibility & Lead Generation",
    description:
      "Practical AI consultancy for business visibility, content, and lead generation.",
    url: "https://www.brandops.site",
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
    title: "BrandOps | AI Consultancy for Content, Visibility & Lead Generation",
    description:
      "Practical AI consultancy for business visibility, content, and lead generation.",
    images: ["https://www.brandops.site/og.png"],
  },
  verification: {
    google: "cInk3EUPRK-PDfJjionGjl7uvZ2f0LVL2aHMqY60Ti8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "y3bzxqkijz");`,
          }}
        />
        <GoogleAnalyticsScripts />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <GoogleAnalyticsPageView />
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
        <CookieConsent />
        <ChatWidget />
      </body>
    </html>
  );
}
