"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "BrandOps helped us bring more structure and clarity to our digital presence. Instead of creating random content, we now have a more organized way to communicate our expertise, educate patients, and strengthen our brand message. The biggest value is that BrandOps understands how to turn professional knowledge into simple, useful content without losing the credibility and trust required in healthcare.",
    name: "Dr. Vishal",
    role: "Founder, Meena Homeopath",
    initials: "DV",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Customer voices
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by founders and operators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real teams use BrandOps to turn expertise into consistent, trustworthy content.
          </p>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.1}>
              <Card className="h-full border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60">
                <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div>
                    <Quote className="h-8 w-8 text-primary/60" />
                    <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">
                      <span className="text-primary">&ldquo;</span>
                    {t.quote}
                    <span className="text-primary">&rdquo;</span>
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
