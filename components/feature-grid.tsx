"use client";

import {
  BarChart3,
  Bot,
  ImageIcon,
  LayoutTemplate,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";

const features = [
  {
    icon: Bot,
    title: "Current research",
    description:
      "Firecrawl searches recent AI, automation, cloud, cybersecurity, and infrastructure reporting so your content is always timely.",
    size: "col-span-1",
  },
  {
    icon: LayoutTemplate,
    title: "LinkedIn carousels",
    description:
      "OpenAI selects a story and writes four content slides plus a deterministic fifth subscription slide, rendered as polished PNG artwork.",
    size: "col-span-1",
  },
  {
    icon: Mail,
    title: "Newsletters",
    description:
      "Enter a topic, get a structured newsletter with citations tied to real sources, plus an optional 16:9 lead visual.",
    size: "col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Review gate",
    description:
      "Every delivery and publication path has a separate approval boundary. The dashboard never auto-publishes on your behalf.",
    size: "col-span-1",
  },
  {
    icon: ImageIcon,
    title: "OpenAI Image artwork",
    description:
      "Slides and lead visuals are generated as production-ready images using OpenAI Image models.",
    size: "col-span-1",
  },
  {
    icon: BarChart3,
    title: "Streaming progress",
    description:
      "The dashboard streams NDJSON pipeline events in real time so you can watch research, writing, and rendering complete.",
    size: "col-span-1",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to stay visible
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            One workspace. Two workflows. Full control.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.08}>
                <Card className="group h-full overflow-hidden border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mt-4 h-1 w-12 rounded-full bg-primary/20 transition-all group-hover:w-full group-hover:bg-primary/40"
 />
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
