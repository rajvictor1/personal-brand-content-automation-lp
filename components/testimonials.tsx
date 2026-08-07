"use client";

import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const founderQuote = {
  quote:
    "I built BrandOps because I was spending my weekends doing what should take minutes: finding current stories, writing carousel copy, designing slides, and drafting newsletters. I wanted speed without losing control. This is that workspace.",
  name: "Rajesh Kumar",
  role: "Founder, BrandOps",
  avatar: "RK",
};

const placeholderSlots = [
  "First user testimonial. Coming soon",
  "Operator success story. Coming soon",
  "Creator case study. Coming soon",
];

export function Testimonials() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Voices
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built by an operator, for operators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Real user stories will appear here once early access users start sharing their results.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <Card className="h-full border-primary/30 bg-gradient-to-br from-primary/10 to-card/40">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <Quote className="h-8 w-8 text-primary/60" />
                  <p className="mt-4 text-lg font-medium leading-relaxed text-foreground">
                    {founderQuote.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {founderQuote.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{founderQuote.name}</div>
                    <div className="text-xs text-muted-foreground">{founderQuote.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {placeholderSlots.map((slot, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <Card className="h-full border-dashed border-border/60 bg-card/20">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground">
                    {i + 2}
                  </div>
                  <p className="text-sm text-muted-foreground">{slot}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Be the first to share your BrandOps story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
