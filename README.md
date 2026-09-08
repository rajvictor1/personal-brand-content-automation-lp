# BrandOps — AI Consultancy Website

A world-class, dark-mode-first marketing website for **BrandOps**, a practical AI consultancy for business visibility, content, and lead generation.

## What is included

- **Homepage:** AI consultancy positioning with four services, How We Work process, and conversion CTAs.
- **Services:**
  - `/services` — service index
  - `/services/linkedin-content` — AI content for LinkedIn and newsletters
  - `/services/website-lead-magnets` — website lead magnet funnels
  - `/services/aeo-geo-visibility` — AEO/GEO visibility card
  - `/services/youtube-research` — YouTube research and content strategy
- **Existing product pages preserved:** Features, Pipeline, Pricing, Resources, Company pages, founder, support, legal pages, and webinars.
- **Dark theme:** deep charcoal background, indigo/cyan accents, Inter font.
- **Animations:** scroll reveal + staggered node animations via Framer Motion.
- **Responsive:** mobile sheet nav, 2–3 column grids that collapse.
- **Lead capture:** validated contact form with Zod + toast feedback. CTA labels vary by context but all route to `/contact`.
- **SEO:** per-page metadata, sitemap, robots, manifest, OpenGraph, Twitter card, JSON-LD structured data.
- **AI crawler friendly:** robots.txt explicitly allows major LLM/AI crawlers.

## Tech stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS 3 + custom HSL color tokens
- shadcn/ui (Button, Card, Input, Textarea, Label, Badge, Sheet, Accordion, Sonner)
- Framer Motion
- Lucide React + inline SVG social icons
- Zod
- EmailJS (public client-side credentials) for the contact form
- Google Sheets API for `/api/leads` lead capture

## Run locally

```bash
cd /Users/mac/Desktop/personal-brand-content-automation-lp
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in real values. No secrets should be committed.

```bash
cp .env.local.example .env.local
```

Required for contact form:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

Optional:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Server-side:
- `GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL`
- `BRANDOPS_LEAD_WEBHOOK_SECRET`
- `GOOGLE_SERVICE_ACCOUNT_JSON` (for direct Google Sheets writes; keep local)

## Repository

https://github.com/rajvictor1/personal-brand-content-automation-lp

## Domain

Production domain: **https://www.brandops.site**

## Deployment

The project auto-deploys from GitHub to Vercel on every push to `main`.

## Important internal files

- `AGENTS.md` — instructions for future agents working on this repo.
- `SECURITY.md` — vulnerability reporting, secrets policy, security practices.
- `QA.md` — verification checklist and known gaps.
- `ARCHITECTURE.md` — system overview, components, data flow, APIs.
- `ROADMAP.md` — current priorities and upcoming work.

## Notes

- This is a marketing surface, not the product dashboard.
- All conversion CTAs route to `/contact` using the existing EmailJS form; only button text changes by context.
- Existing `Features` pages are kept untouched. New positioning lives under `/services` and the homepage.
- For deeper SEO/GEO/AEO strategy, see `output/BRANDOPS-SEO-CONTENT-PLAN.md` and `output/GEO-AEO-PLAN.md`.
