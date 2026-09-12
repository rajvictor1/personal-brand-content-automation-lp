export const homeFaqs = [
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
