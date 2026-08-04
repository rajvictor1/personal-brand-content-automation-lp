"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, ExternalLink, FileText, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

const nodes = [
  { icon: Bot, label: "Firecrawl" },
  { icon: FileText, label: "OpenAI Writer" },
  { icon: ExternalLink, label: "Carousel / Newsletter" },
  { icon: Shield, label: "Review Gate" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              Review-first automation
            </Badge>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              Turn research into{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                LinkedIn assets
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Firecrawl gathers the signal. OpenAI writes the story. You review,
              edit, and publish. Built for solo operators who want speed without
              losing control.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Get early access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pipeline"
                className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                See the pipeline
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {nodes.map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-background shadow-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{node.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
