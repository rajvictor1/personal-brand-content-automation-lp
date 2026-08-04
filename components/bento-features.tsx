"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";
import {
  BarChart3,
  ImageIcon,
  LayoutTemplate,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Timely research",
    desc: "Firecrawl scans current reporting so your content is always relevant, never recycled.",
    size: "md",
  },
  {
    icon: LayoutTemplate,
    title: "LinkedIn carousels",
    desc: "Four content slides + a subscription slide, rendered as polished PNG artwork.",
    size: "lg",
  },
  {
    icon: Mail,
    title: "Cited newsletters",
    desc: "Structured newsletters with sources, plus an optional 16:9 lead visual.",
    size: "md",
  },
  {
    icon: ShieldCheck,
    title: "Hard review gate",
    desc: "Nothing publishes without your explicit approval. Separate gates for carousel and newsletter.",
    size: "md",
  },
  {
    icon: ImageIcon,
    title: "AI-generated artwork",
    desc: "OpenAI Image renders complete slide decks and visuals ready for posting.",
    size: "md",
  },
  {
    icon: BarChart3,
    title: "Live pipeline",
    desc: "Watch every research, writing, and rendering step stream in real time.",
    size: "sm",
  },
  {
    icon: Zap,
    title: "Fast iteration",
    desc: "Regenerate any slide or section without restarting the whole workflow.",
    size: "sm",
  },
];

export function BentoFeatures() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Product
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to stay visible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One workspace. Two workflows. Full editorial control.
          </p>
        </Reveal>

        <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const span = feature.size === "lg" ? "sm:col-span-2" : "";
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-card/50 ${span}`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
