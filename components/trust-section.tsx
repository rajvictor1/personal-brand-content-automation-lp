"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";
import { Check, ExternalLink, Mail, ShieldCheck } from "lucide-react";

const checks = [
  "AI does the research and first draft",
  "You review and edit before anything goes live",
  "One-click publish to LinkedIn or test email",
  "No auto-posts, no surprise publications",
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/30 bg-muted/20 py-24">
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for operators who want speed without losing control
            </h2>
            <ul className="mt-8 space-y-4">
              {checks.map((text, i) => (
                <li key={text} className="flex items-start gap-3">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                  >
                    <Check className="h-3 w-3" />
                  </motion.span>
                  <span className="text-foreground/90">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: "Review gate", desc: "Separate approval for every output" },
                { icon: ExternalLink, title: "LinkedIn ready", desc: "Carousel posts with commentary" },
                { icon: Mail, title: "Newsletter ready", desc: "Test delivery to a fixed recipient" },
                { icon: ExternalLink, title: "Audit trail", desc: "Dry runs before any live publish" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="rounded-xl border border-border/40 bg-card/40 p-5"
                  >
                    <Icon className="mb-3 h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
