import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Cheat Sheets — Resources",
  description: "Quick-reference cheat sheets for personal-brand content automation. Coming soon.",
};

export default function CheatSheetsPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-24 pb-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
            ← Back to resources
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Cheat Sheets
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Quick-reference cheat sheets for carousel structure, newsletter writing, and review-first publishing. Coming soon.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Link
            href="/resources"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Browse resources
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
