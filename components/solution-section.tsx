"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";

const steps = [
  { title: "Topic", desc: "Enter a topic or let BrandOps scan the latest signal." },
  { title: "Research", desc: "Firecrawl gathers current sources in seconds." },
  { title: "Draft", desc: "OpenAI writes copy and BrandOps renders the visuals." },
  { title: "Review", desc: "You edit, approve, and publish — nothing goes live alone." },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative rounded-2xl border border-border/40 bg-card/30 p-6 backdrop-blur-sm"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary font-bold">
        {index + 1}
      </div>
      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
    </motion.div>
  );
}

export function SolutionSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From topic to publish-ready assets in minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            BrandOps combines current research, AI writing, image generation, and
            a hard review gate into one clean workflow.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
