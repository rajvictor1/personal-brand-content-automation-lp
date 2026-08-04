"use client";

import {
  BarChart3,
  Bot,
  ImageIcon,
  LayoutTemplate,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/animations";

const features = [
  {
    icon: Bot,
    title: "Current research",
    description:
      "Firecrawl searches recent AI, automation, cloud, cybersecurity, and infrastructure reporting so your content is always timely.",
  },
  {
    icon: LayoutTemplate,
    title: "LinkedIn carousels",
    description:
      "OpenAI selects a story and writes four content slides plus a deterministic fifth subscription slide, rendered as polished PNG artwork.",
  },
  {
    icon: Mail,
    title: "Newsletters",
    description:
      "Enter a topic, get a structured newsletter with citations tied to real sources, plus an optional 16:9 lead visual.",
  },
  {
    icon: ShieldCheck,
    title: "Review gate",
    description:
      "Every delivery and publication path has a separate approval boundary. The dashboard never auto-publishes on your behalf.",
  },
  {
    icon: ImageIcon,
    title: "OpenAI Image artwork",
    description:
      "Slides and lead visuals are generated as production-ready images using OpenAI Image models.",
  },
  {
    icon: BarChart3,
    title: "Streaming progress",
    description:
      "The dashboard streams NDJSON pipeline events in real time so you can watch research, writing, and rendering complete.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to stay visible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One workspace. Two workflows. Full control.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <Card className="group h-full border-border/50 bg-card/40 transition-colors hover:border-primary/30 hover:bg-card/60">
                  <CardHeader className="pb-3">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    {feature.description}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
