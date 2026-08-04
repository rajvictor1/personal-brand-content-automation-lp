"use client";

import { motion } from "framer-motion";
import { Check, ImageIcon, Mail, Monitor, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

const steps = [
  { label: "Topic", icon: Search, text: "You enter a research topic." },
  { label: "Sources", icon: Monitor, text: "Firecrawl finds current sources." },
  { label: "Draft", icon: Sparkles, text: "OpenAI writes the carousel or newsletter." },
  { label: "Visuals", icon: ImageIcon, text: "OpenAI Image renders slide artwork." },
  { label: "Review", icon: ShieldCheck, text: "You edit and approve every asset." },
  { label: "Publish", icon: Mail, text: "Confirm once more to publish safely." },
];

export function Walkthrough() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            See it in action
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How BrandOps works in 60 seconds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            This is a live-style preview of the dashboard flow. No real API calls, no real secrets shown.
          </p>
        </Reveal>

        <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card/40 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.label} delay={i * 0.12}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 rounded-xl border border-border/50 bg-background/60 p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Step {i + 1}
                        </span>
                        <span className="h-px flex-1 bg-border/60"></span>
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div className="mt-1 text-lg font-medium text-foreground">{step.label}</div>
                      <div className="text-sm text-muted-foreground">{step.text}</div>
                    </div>
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
