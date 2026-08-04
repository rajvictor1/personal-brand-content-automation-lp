"use client";

import { Reveal } from "@/components/animations";

const painPoints = [
  { stat: "3–4 hrs", label: "Average time to create one carousel" },
  { stat: "67%", label: "Creators abandon newsletters in 3 months" },
  { stat: "1 idea", label: "Lost because research is scattered" },
];

export function ProblemSection() {
  return (
    <section className="relative border-y border-border/30 bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Building a personal brand should not be a second job
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            You know consistent content wins. But the research, writing, design,
            and publishing loop steals hours every week.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {painPoints.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.12}>
              <div className="rounded-2xl border border-border/40 bg-card/30 p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary">{item.stat}</div>
                <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
