"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/animations";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ready to stop chasing content?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Join the early-access list and be the first to use BrandOps — the review-first
            content workspace for solo operators.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Request early access
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" /> Cancel anytime
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
