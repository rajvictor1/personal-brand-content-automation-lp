"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  CheckCircle,
  ImageIcon,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

const pipeline = [
  { icon: Search, label: "Research", detail: "Firecrawl finds fresh AI, cloud, and automation stories." },
  { icon: Sparkles, label: "Write", detail: "OpenAI turns the signal into carousel + newsletter copy." },
  { icon: ImageIcon, label: "Design", detail: "OpenAI Image renders polished slide artwork and lead visuals." },
  { icon: ShieldCheck, label: "Review", detail: "You edit, approve, and control every publish action." },
];

const outcomes = [
  { value: "10x", label: "faster content cycle" },
  { value: "5", label: "carousel slides generated" },
  { value: "1", label: "review gate" },
  { value: "0", label: "surprise posts" },
];

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"></div>
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.12),transparent_50%)]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary"
            >
              <Sparkles className="mr-1.5 inline h-3.5 w-3.5" />
              The review-first content workspace
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              AI builds your content.{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                You own the publish button.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              BrandOps turns one research topic into a LinkedIn carousel and a cited newsletter,
              researched by Firecrawl, written by OpenAI, approved by you.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                Join early access
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-8 py-4 text-lg font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                Book a demo
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mx-auto mt-20 max-w-5xl">
          <motion.div
            style={{ y }}
            className="relative rounded-2xl border border-border/50 bg-card/50 p-1 shadow-2xl backdrop-blur-md"
          >
            <div className="grid gap-4 rounded-xl bg-gradient-to-b from-background to-card p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
              {pipeline.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="rounded-xl border border-border/50 bg-background/60 p-5 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-sm font-semibold text-foreground">{node.label}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{node.detail}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProblemSolution() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6">
              <Badge variant="outline" className="border-destructive/30 bg-destructive/10 text-destructive">
                The problem
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Building a personal brand should not be a second job
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "You know you should post consistently, but research eats your morning.",
                  "Writing carousel copy and designing slides takes hours you do not have.",
                  "Newsletters die in drafts because sourcing + formatting is painful.",
                  "One accidental auto-post can damage your reputation for days.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                The BrandOps solution
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                One topic. Two assets. Your approval.
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Firecrawl gathers current sources so your content is always timely.",
                  "OpenAI writes carousel slides and a cited newsletter from those sources.",
                  "OpenAI Image renders production-ready artwork for every asset.",
                  "Every publish action is review-gated. No surprises, ever.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Outcomes() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {outcomes.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
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
