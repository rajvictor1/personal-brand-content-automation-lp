"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  FileText,
  ImageIcon,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/animations";

const steps = [
  {
    icon: Search,
    label: "Firecrawl",
    detail: "Searches current reporting across AI, automation, cloud, security, and developer tools.",
  },
  {
    icon: Sparkles,
    label: "OpenAI Writer",
    detail: "Selects a timely story and writes concise carousel or newsletter copy.",
  },
  {
    icon: ImageIcon,
    label: "OpenAI Image",
    detail: "Renders four content slides + a fifth subscription slide, or one 16:9 newsletter lead visual.",
  },
  {
    icon: FileText,
    label: "Review dashboard",
    detail: "You inspect assets, edit copy, and add commentary before anything goes live.",
  },
  {
    icon: ShieldCheck,
    label: "Approval gate",
    detail: "Separate publish confirmations for carousel and newsletter. No surprise posts.",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn / Resend",
    detail: "Publishes to your profile or sends a fixed-recipient newsletter test via Resend.",
  },
];

interface PipelineProps {
  headingLevel?: "h1" | "h2";
}

export function Pipeline({ headingLevel = "h1" }: PipelineProps) {
  const HeadingTag = headingLevel;
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">How it works</p>
          <HeadingTag className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            The BrandOps pipeline
          </HeadingTag>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From research signal to reviewed asset. Every step is visible, gated, and under your control.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.detail}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
