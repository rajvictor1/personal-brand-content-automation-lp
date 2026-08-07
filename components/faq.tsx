"use client";

import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does BrandOps actually do?",
    answer:
      "BrandOps is a review-first content workspace. It takes one research topic, finds current sources via Firecrawl, then uses OpenAI to generate a LinkedIn carousel and a cited newsletter. Both are ready for your review before any publish action.",
  },
  {
    question: "Does it post to LinkedIn automatically?",
    answer:
      "No. Every publish path has a separate approval gate. You review the generated assets, edit copy, and confirm the action twice before anything goes live.",
  },
  {
    question: "Do I need my own API keys?",
    answer:
      "For live generation, yes. BrandOps uses your server-side Firecrawl, OpenAI, and Resend keys. These are never exposed to the browser. The dashboard shell works without keys, but research, writing, and image generation require them.",
  },
  {
    question: "Who is BrandOps built for?",
    answer:
      "Solo operators, consultants, trainers, and founders who want a consistent personal brand without turning content creation into a second job.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Solo plan is free during early access and includes both the carousel and newsletter workflows with review-gated publishing.",
  },
];

export function Faq() {
  return (
    <section className="border-y border-border/50 bg-muted/20 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Questions? Answered.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion defaultValue={undefined} className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
