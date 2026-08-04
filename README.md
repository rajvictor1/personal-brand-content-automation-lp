# Personal Brand Content Automation — Landing Pages

A world-class, dark-mode-first marketing website for the Personal Brand Content Automation concept.

## What is included

- **5 functional pages:** Home, Features, Pipeline, Pricing, Contact
- **Dark theme:** deep charcoal background, indigo/cyan accents, Inter font
- **Animations:** scroll reveal + staggered node animations via Framer Motion
- **Responsive:** mobile sheet nav, 2–3 column grids that collapse
- **Lead capture:** validated contact form with Zod + toast feedback
- **SEO:** per-page metadata, sitemap, robots, manifest, OpenGraph, Twitter card
- **Static export:** ready to deploy to Vercel/Netlify/Cloudflare Pages

## Tech stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS 3 + custom HSL color tokens
- shadcn/ui (Button, Card, Input, Textarea, Label, Badge, Sheet, Accordion, Sonner)
- Framer Motion
- Lucide React + inline SVG social icons
- Zod

## Run locally

```bash
cd /Users/mac/Desktop/personal-brand-content-automation-lp
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Pages

- `/` — Hero, stats, feature grid, CTA
- `/features` — 6 feature cards
- `/pipeline` — 6-step node workflow
- `/pricing` — Solo free / Operator paid cards
- `/contact` — validated early-access form

## Notes

- This is a marketing surface, not the product dashboard.
- Contact form POSTs to `/api/contact` and logs server-side.
- Replace the brand name, URLs, and pricing as needed.
- If you want to connect real email delivery, wire the `/api/contact` route to Resend, Loops, or your provider.

## Deployment

```bash
npx vercel --yes --prod
```

Remember to update `metadata.metadataBase` and the canonical URLs in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.
