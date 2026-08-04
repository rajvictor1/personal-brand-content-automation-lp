"use client";

import { Reveal } from "@/components/animations";

const stats = [
  { value: "2", label: "Content workflows" },
  { value: "4+1", label: "Carousel slides" },
  { value: "1", label: "Review gate" },
  { value: "0", label: "Auto-publishes" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
