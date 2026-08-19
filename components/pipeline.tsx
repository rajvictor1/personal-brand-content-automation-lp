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
import { Badge } from "@/components/ui/badge";
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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            How it works
          </Badge>
          <HeadingTag className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The BrandOps pipeline
          </HeadingTag>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From research signal to reviewed asset. Every step is visible, gated, and under your control.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute top-[3.25rem] left-0 right-0 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"></div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.label} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/60"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Step {i + 1}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{step.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
