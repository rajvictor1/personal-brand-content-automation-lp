# BrandOps Website Architecture

> Repository: `https://github.com/rajvictor1/personal-brand-content-automation-lp`
> Live site: `https://www.brandops.site`
> Vercel project: `https://vercel.com/homeo-clinic/personal-brand-content-automation-lp`
> Last updated: 2026-09-07

---

## 1. Overview

BrandOps.site is a static + serverless marketing website built with Next.js 14. It presents BrandOps as an AI consultancy for business visibility, content, and lead generation. The site is deployed to Vercel and auto-deploys on every push to `main`.

### Key goals

1. Convert visitors into leads through the `/contact` form.
2. Explain four service lines on dedicated pages under `/services`.
3. Preserve existing product/feature pages that rank for LinkedIn-content and newsletter keywords.
4. Serve as a content hub (`/resources`) and lead magnet destination (`/geo-scorecard`).

---

## 2. Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router, React 18, TypeScript) |
| Styling | Tailwind CSS 3, custom HSL tokens, shadcn/ui components |
| Animation | Framer Motion |
| Icons | Lucide React |
| Validation | Zod |
| Content | MDX via `@next/mdx` for resource articles |
| Forms | EmailJS (client-side) |
| Lead capture API | Next.js API route → Google Apps Script webhook → Google Sheets |
| Analytics | Google Analytics 4, Microsoft Clarity |
| Structured data | `schema-dts` |
| Deployment | Vercel |

---

## 3. Directory structure

```
/Users/mac/Desktop/personal-brand-content-automation-lp/
├── app/                         # Next.js App Router pages
│   ├── (home)/                  # Homepage route group
│   │   └── layout.tsx           # Structured data for homepage (currently stale)
│   ├── page.tsx                 # New AI consultancy homepage
│   ├── layout.tsx               # Root layout, metadata, analytics, cookie consent
│   ├── globals.css              # Tailwind base + dark tokens
│   ├── services/                # Service pages
│   │   ├── page.tsx             # Service index
│   │   ├── linkedin-content/    # AI Content for LinkedIn & Newsletter
│   │   ├── website-lead-magnets/# Website Lead Magnets
│   │   ├── aeo-geo-visibility/  # AEO/GEO Visibility Card
│   │   └── youtube-research/    # YouTube Research & Content Strategy
│   ├── features/                # Existing product/feature pages (preserved)
│   ├── resources/               # Content hub (MDX articles + hub pages)
│   ├── api/                     # Serverless API routes
│   │   └── leads/route.ts       # Lead capture validation + webhook
│   ├── contact/                 # Contact page (main conversion destination)
│   ├── demo/                    # Demo request page
│   ├── geo-scorecard/           # AI Findability Scorecard lead magnet
│   ├── pipeline/                # Existing workflow page
│   ├── pricing/               # Existing pricing page
│   ├── founder/                 # Founder page
│   ├── about/                   # About page
│   ├── support/                 # Support page
│   ├── privacy/, terms/         # Legal pages
│   └── webinars/                # Webinar pages
├── components/                  # React components
│   ├── header.tsx               # Desktop + mobile navigation
│   ├── footer.tsx               # Footer grouped links
│   ├── consultancy.tsx            # Homepage sections (hero, services, how we work, examples, CTA)
│   ├── contact-form.tsx         # EmailJS contact form (used by /contact and service pages)
│   ├── chat-widget.tsx          # Floating chat widget
│   ├── cookie-consent.tsx       # Cookie consent banner
│   ├── google-analytics.tsx     # GA4 scripts + pageview
│   ├── hero.tsx                 # Old homepage hero (now used on /services/linkedin-content)
│   ├── feature-grid.tsx         # Feature grid component
│   └── ui/                      # shadcn/ui primitives
├── lib/                         # Utility libraries
│   ├── utils.ts                 # cn() helper
│   ├── schema.tsx               # JSON-LD schema builders
│   ├── resources.ts             # Resource post metadata and helpers
│   └── aiFindabilityAudit.ts    # Geo-scorecard audit engine
├── content/resources/           # MDX resource articles
├── public/                      # Static assets (og.png, logo, founder photo, etc.)
├── output/                      # SEO/GEO/AEO strategy documents
├── outskill-lead-magnet/        # Lead magnet copy and distribution assets
└── Root docs: README.md, AGENTS.md, SECURITY.md, QA.md, ARCHITECTURE.md, ROADMAP.md
```

---

## 4. Page map

### Marketing/conversion pages

| Route | Purpose | CTA destination |
|-------|---------|-----------------|
| `/` | AI consultancy homepage | `/contact` |
| `/services` | Service index | `/contact` |
| `/services/linkedin-content` | Detailed LinkedIn/newsletter service | `/contact` |
| `/services/website-lead-magnets` | Lead magnet service | `/contact` + external demo |
| `/services/aeo-geo-visibility` | AEO/GEO service | `/contact` |
| `/services/youtube-research` | YouTube research service | `/contact` |
| `/contact` | Main conversion form | EmailJS |
| `/demo` | Demo request | EmailJS |
| `/geo-scorecard` | Lead magnet scorecard | Google Sheets |

### Existing product pages (preserved)

- `/features`
- `/features/carousel-workflow`
- `/features/newsletter-workflow`
- `/pipeline`
- `/pricing`
- `/linkedin-carousel-generator`
- `/ai-newsletter-generator`
- `/linkedin-automation-tool`
- `/brandops-vs-typefully`
- `/linkedin-automation-tool-for-coaches`

### Content and legal

- `/resources` — hub
- `/resources/[slug]` — individual MDX articles
- `/resources/category/[category]` — category pages
- `/webinars/[slug]` — webinar pages
- `/about`, `/founder`, `/support`
- `/privacy`, `/terms`

---

## 5. Data flow

### Visitor → Lead conversion

```
Visitor clicks CTA (Book a Consultation / Get Your Visibility Card / etc.)
         │
         ▼
   `/contact` page
         │
         ▼
   ContactForm.tsx
   - client-side validation (Zod)
   - posts to EmailJS
         │
         ▼
   EmailJS → configured email inbox
   - success/error toast via Sonner
```

### Chat widget / other lead capture

```
Visitor submits lead via chat widget or geo-scorecard
         │
         ▼
   POST /api/leads
   - Zod validation
   - webhook secret check
         │
         ▼
   Google Apps Script webhook URL
         │
         ▼
   Google Sheets (lead list)
```

---

## 6. API routes

### `POST /api/leads`

**File:** `app/api/leads/route.ts`

**Purpose:** Receive lead data from the chat widget or other components and append it to a Google Sheet via an external webhook.

**Security checks:**
- `BRANDOPS_LEAD_WEBHOOK_SECRET` must match.
- Input validated with Zod (name, email, optional message).
- Email format validated.

**Environment variables:**
- `GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL`
- `BRANDOPS_LEAD_WEBHOOK_SECRET`

---

## 7. Components of note

### `components/header.tsx`

- Desktop navigation with Services, Features, Pipeline, Resources, Company dropdowns.
- Mobile sheet navigation.
- Primary CTA: `Book a Consultation` → `/contact`.

### `components/footer.tsx`

- Grouped links: Services, Resources, Company, Legal.
- Brand description updated to AI consultancy positioning.

### `components/consultancy.tsx`

- New homepage sections: Hero, Intro, ServiceCards, HowWeWork, WorkExamples, FinalCta.
- All CTAs route to `/contact`.

### `components/contact-form.tsx`

- EmailJS-based form with fields: first name, last name, email, phone, company, message.
- Client-side validation via Zod.
- Success/error feedback via Sonner toast.
- Used by `/contact` and embedded in service pages.

### `components/hero.tsx` + related homepage components

- Original homepage content. Now imported by `/services/linkedin-content/page.tsx`.

---

## 8. SEO and structured data

### Metadata strategy

- Root metadata in `app/layout.tsx` sets default title template `... | BrandOps`.
- Each page exports `metadata: Metadata` with title, description, canonical, OpenGraph, Twitter.
- Homepage and service pages use keywords relevant to AI consultancy.

### Structured data

Implemented schema types in `lib/schema.tsx`:
- `Organization`
- `Person` (founder)
- `WebPage`
- `BreadcrumbList`
- `Article`
- `FAQPage`
- `Service`
- `Product`
- `CollectionPage`

### AI crawler policy

`app/robots.ts` explicitly allows major LLM/AI crawlers: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, etc.

---

## 9. Security

### Headers

`next.config.mjs` sets:
- `Strict-Transport-Security`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`

### Secrets

- `google-service-account.json` is `.gitignore`d.
- `NEXT_PUBLIC_EMAILJS_*` are public client-side values.
- `GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL` and `BRANDOPS_LEAD_WEBHOOK_SECRET` are server-side env vars.
- No secrets in committed code.

See `SECURITY.md` for full policy.

---

## 10. Deployment

### Automated flow

1. Push to `main`.
2. GitHub triggers Vercel build.
3. Vercel runs `npm run build`.
4. Production alias updated to the new deployment.

### Manual flow

```bash
cd /Users/mac/Desktop/personal-brand-content-automation-lp
npm run build
vercel --prod
```

### Pre-deploy checks

Before any live deployment, run:

```bash
npm run build
npm run lint
npx tsc --noEmit
```

For code changes, also run a broken-link check and verify mobile layout.

---

## 11. Environment variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

### Public (client-side)

| Variable | Used in | Notes |
|----------|---------|-------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `google-analytics.tsx` | Optional. GA4 disabled if omitted. |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | `contact-form.tsx`, `demo-content.tsx` | Public EmailJS service ID. |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | `contact-form.tsx`, `demo-content.tsx` | Public EmailJS template ID. |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | `contact-form.tsx`, `demo-content.tsx` | Public EmailJS public key. |

### Server-side

| Variable | Used in | Notes |
|----------|---------|-------|
| `GOOGLE_APPS_SCRIPT_LEAD_WEBHOOK_URL` | `app/api/leads/route.ts` | Google Apps Script webhook for lead capture. |
| `BRANDOPS_LEAD_WEBHOOK_SECRET` | `app/api/leads/route.ts` | Secret checked server-side before forwarding. |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Direct Google Sheets writes (if implemented) | Keep local; never commit. |

---

## 12. Known gaps and technical debt

1. **Dependency vulnerabilities** — `npm audit` reports 8 issues in `next`/`postcss`/`qs`. Requires major Next.js upgrade.
2. **Spam protection** — no CAPTCHA, honeypot, or rate-limiting on forms/API.
3. **Homepage layout metadata** — `app/(home)/layout.tsx` still describes old positioning.
4. **Contact form deliverability** — relies on EmailJS; occasional 500 errors reported historically. Needs verification.
5. **Security headers** — present but not automatically tested on each deploy.
6. **No automated test suite** — only lint, type check, and build today.

See `QA.md` and `ROADMAP.md` for prioritized remediation.

---

## 13. Conventions

- Use shadcn/ui primitives from `components/ui/`.
- Keep CTAs consistent: primary orange button, secondary outline button.
- All conversion CTAs route to `/contact`; only text changes.
- Service pages live under `/services/<slug>`.
- Resource articles live under `/content/resources/<slug>.mdx` and are registered in `lib/resources.ts`.
- Add new pages to header, footer, and sitemap.
- Follow the agent workflow in `AGENTS.md`.
