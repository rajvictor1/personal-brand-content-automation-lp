import { Metadata } from "next";
import Link from "next/link";
import { Clock, FileText } from "lucide-react";
import { Reveal } from "@/components/animations";
import { getResourcesByCategory } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Free Content Cheat Sheets | LinkedIn \u0026 Newsletters",
  description:
    "Download quick-reference cheat sheets for LinkedIn carousels, AI newsletters, and review-first publishing. Save time and publish better content.",
  alternates: { canonical: "https://www.brandops.site/resources/cheat-sheets" },
};

export default function CheatSheetsPage() {
  const cheatSheets = getResourcesByCategory("Cheat Sheets");

  return (
    <>
      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Cheat Sheets
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              One-page references you can bookmark, print, or keep open while building content.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {cheatSheets.map((sheet, index) => (
              <Reveal key={sheet.slug} delay={0.1 + index * 0.1}>
                <Link
                  href={`/resources/${sheet.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {sheet.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{sheet.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{sheet.readingTime} min read</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
