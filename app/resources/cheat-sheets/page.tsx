import { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText } from "lucide-react";
import { Reveal } from "@/components/animations";
import { getResourcesByCategory } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Free Content Cheat Sheets | LinkedIn & Newsletters | BrandOps",
  description:
    "Download quick-reference cheat sheets for LinkedIn carousels, AI newsletters, and review-first publishing. Save time and publish better content.",
  alternates: { canonical: "https://www.brandops.site/resources/cheat-sheets" },
};

export default function CheatSheetsPage() {
  const cheatSheets = getResourcesByCategory("Cheat Sheets");

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-5xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
            ← Back to resources
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Cheat{" "}<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Sheets</span></h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One-page references you can bookmark, print, or keep open while building content.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cheatSheets.map((sheet, index) => (
            <Reveal key={sheet.slug} delay={0.1 + index * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary">
                  {sheet.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{sheet.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{sheet.readingTime} min read</span>
                </div>
                <Link
                  href={`/resources/${sheet.slug}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Open cheat sheet
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
