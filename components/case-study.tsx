"use client";

import { FileText, ImageIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/animations";
import Link from "next/link";

const before = [
  { label: "Research", value: "2 hours", icon: FileText },
  { label: "Writing", value: "1.5 hours", icon: FileText },
  { label: "Design", value: "2 hours", icon: ImageIcon },
  { label: "Review + publish", value: "30 min", icon: Clock },
];

const after = [
  { label: "Research", value: "5 min", icon: FileText },
  { label: "Writing", value: "5 min", icon: FileText },
  { label: "Design", value: "5 min", icon: ImageIcon },
  { label: "Review + publish", value: "15 min", icon: Clock },
];

export function CaseStudy() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            Illustrative case study
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One newsletter + one carousel, from hours to minutes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            This is a projected workflow example based on the BrandOps pipeline. Real customer results will be added once early users share their data.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-destructive/30 bg-card/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-destructive">Before BrandOps</h3>
                <p className="mt-2 text-sm text-muted-foreground">Manual workflow per weekly content cycle.</p>
                <div className="mt-6 space-y-4">
                  {before.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center justify-between rounded-lg bg-background/60 p-4">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-destructive">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-center text-lg font-bold text-foreground">
                  Total: ~6 hours
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="h-full border-primary/30 bg-card/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary">With BrandOps</h3>
                <p className="mt-2 text-sm text-muted-foreground">AI-assisted workflow with review gate.</p>
                <div className="mt-6 space-y-4">
                  {after.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center justify-between rounded-lg bg-background/60 p-4">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-primary">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 text-center text-lg font-bold text-foreground">
                  Total: ~30 minutes
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Want to share your real result? Get in touch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
