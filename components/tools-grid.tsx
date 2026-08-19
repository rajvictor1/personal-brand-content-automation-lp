"use client";

import Link from "next/link";
import { ArrowRight, ImageIcon, Mail, Wand2 } from "lucide-react";
import { Reveal } from "@/components/animations";

const tools = [
  {
    icon: ImageIcon,
    title: "LinkedIn Carousel Generator",
    description: "Turn one research topic into a 5-slide, cited, review-ready carousel.",
    href: "/linkedin-carousel-generator",
  },
  {
    icon: Mail,
    title: "AI Newsletter Generator",
    description: "Generate a cited newsletter draft from current sources in minutes.",
    href: "/ai-newsletter-generator",
  },
  {
    icon: Wand2,
    title: "LinkedIn Automation Tool",
    description: "Automate research, writing, and design while keeping full publish control.",
    href: "/linkedin-automation-tool",
  },
];

export function ToolsGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Free AI tools for your personal brand
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start with a standalone generator or combine them in the full BrandOps workspace.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Reveal key={tool.title} delay={0.1 + index * 0.1}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/40 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{tool.description}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Try it free <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
