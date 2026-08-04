"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly does BrandOps create?",
    a: "BrandOps generates LinkedIn carousel slide decks and cited newsletters from a research topic. It does not auto-publish — every output stops at a review gate until you approve it.",
  },
  {
    q: "Do I need API keys to try the landing page?",
    a: "No. This marketing site is fully functional without keys. The actual product dashboard will need your own Firecrawl, OpenAI, and Resend credentials for live generation and delivery.",
  },
  {
    q: "Can BrandOps post to my LinkedIn automatically?",
    a: "No. BrandOps prepares the post, media, and commentary for review. Publishing to LinkedIn requires a separate manual confirmation step.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Solo plan is free for early adopters while the product is being refined.",
  },
  {
    q: "Who is BrandOps built for?",
    a: "Solo operators, consultants, founders, educators, and creators who want consistent LinkedIn and newsletter output without hiring a content team.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before requesting access.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <AccordionItem value={`item-${i}`} className="border-border/40">
                  <AccordionTrigger className="text-left text-base font-medium hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
