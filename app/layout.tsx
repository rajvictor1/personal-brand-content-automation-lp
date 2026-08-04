import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "BrandOps",
    template: "%s — BrandOps",
  },
  description:
    "A review-first content system for generating LinkedIn carousels and newsletters from current research. Built for solo operators who want speed without losing control.",
  keywords: [
    "LinkedIn automation",
    "personal brand",
    "newsletter",
    "carousel generator",
    "content automation",
    "Firecrawl",
    "OpenAI",
  ],
  authors: [{ name: "Rajesh Kumar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BrandOps",
    title: "BrandOps",
    description:
      "A review-first content system for generating LinkedIn carousels and newsletters from current research.",
    url: "https://brandops.site",
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandOps",
    description:
      "A review-first content system for generating LinkedIn carousels and newsletters from current research.",
  },
  robots: "index, follow",
  metadataBase: new URL("https://brandops.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white">
        <Header />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
