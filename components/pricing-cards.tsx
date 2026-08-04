"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations";

const plans = [
  {
    name: "Solo",
    price: "$0",
    period: "forever",
    badge: "Early access",
    description: "For personal-brand builders validating the workflow.",
    features: [
      "Carousel workflow",
      "Newsletter workflow",
      "Review-gated publishing",
      "Local dashboard",
      "Community support",
    ],
    cta: "Get started",
    href: "/contact",
    primary: false,
  },
  {
    name: "Operator",
    price: "$49",
    period: "/month",
    badge: "Coming soon",
    description: "For creators ready to scale their output.",
    features: [
      "Everything in Solo",
      "Unlimited generations",
      "Priority rendering queue",
      "Scheduled publishing manifest",
      "Email support",
    ],
    cta: "Join waitlist",
    href: "/contact",
    primary: true,
  },
];

export function PricingCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            Pricing
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, operator-first pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start free. Upgrade when you are ready to run the workflow at scale.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.15}>
              <Card
                className={`relative flex flex-col border-border/50 bg-card/40 backdrop-blur-sm ${
                  plan.primary
                    ? "border-primary/40 ring-1 ring-primary/30"
                    : ""
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">{plan.badge}</Badge>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.primary ? "default" : "outline"}
                    className="mt-8 w-full rounded-full"
                    onClick={() => (window.location.href = plan.href)}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
