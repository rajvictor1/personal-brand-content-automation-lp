# BrandOps Project Handoff — Rajesh Kumar

> Last updated: 2026-09-07
> Project folder: `/Users/mac/Desktop/personal-brand-content-automation-lp`
> Repo: `https://github.com/rajvictor1/personal-brand-content-automation-lp`
> Live site: `https://www.brandops.site`
> Vercel project: `https://vercel.com/homeo-clinic/personal-brand-content-automation-lp`

---

## Who is building this

- **Name:** Rajesh Kumar
- **Role:** Non-technical solo builder / trainer / demand-gen and GTM expert
- **Brand:** BrandOps (`brandops.site`)
- **GitHub:** `rajvictor1`
- **Email:** `rajarien@gmail.com`
- **LinkedIn:** https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/
- **Working style:** Executes commands personally, never pastes secrets in chat

---

## Core preferences

- **Design:** Polished dark-mode Vercel UI, framed screenshot-style mockups
- **Content tone:** AI-first copy, no em dashes (`—`)
- **Header structure:** Home | Services ↓ | Features ↓ | Pipeline | Resources ↓ | Company ↓
- **Services:** AI Content for LinkedIn & Newsletter, Website Lead Magnets, AEO/GEO Visibility Card, YouTube Research & Content Strategy
- **Content hub name:** "Resources" (guides, cheat sheets, videos, templates, glossary)
- **Lead capture:** Google Sheets API preferred over email APIs
- **Credentials:** Stored in `.env.local` or Vercel env UI, never in chat
- **Deployment flow:** Local build must pass, then explicit "go ahead" before push/deploy
- **Live website changes:** Agent must ask for explicit approval before deploying any change that affects website code or visible content
- **When he says:** "good plan do as per you think" → execute immediately without confirmation
- **When he says:** "go ahead" / "deploy" → deploy after local verification

---

## Project facts

- **Stack:** Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
- **Current pages:** 38+ static routes including home, services, features, resources, legal pages, founder, support, pipeline, pricing, contact, about, careers, geo-scorecard
- **Header structure:** Home, Services ↓, Features ↓, Pipeline, Resources ↓, Company ↓
- **Footer:** Services, Resources, Company, Legal grouped columns
- **SEO:** Unique titles and meta descriptions applied site-wide
- **Security headers:** Added in `next.config.mjs`
- **Structured data:** JSON-LD via `schema-dts` (Organization, Person, WebPage, BreadcrumbList, Article, Service)
- **robots.txt:** Explicitly allows major LLM/AI crawlers (ChatGPT, Claude, Gemini, Perplexity, etc.)
- **Positioning (current):** AI consultancy for business visibility, content, and lead generation

---

## Important unresolved items

1. **Contact form** — `RAJESH-KUMAR-HANDOFF.md` previously noted HTTP 500. Current status needs re-verification after repositioning.
2. **Google Sheets email notifications** — not implemented.
3. **Real social media accounts** — placeholders exist. Accounts must be created by user; agent cannot create them.
4. **VicSee video generation** — API key invalid/inactive. `/resources/videos` uses placeholder cards.
5. **Templates category** — currently has 0 posts.
6. **Dependency vulnerabilities** — `npm audit` reports 8 issues (Next.js/PostCSS). Requires major-version upgrade.
7. **Spam protection** — no CAPTCHA, honeypot, or rate-limiting on contact form or `/api/leads`.
8. **Homepage structured-data layout** — `app/(home)/layout.tsx` metadata and schema still describe old "review-first personal brand content automation" positioning. Needs update to match new AI consultancy messaging.

---

## How to resume work

1. Open a new Hermes session
2. Say: "Continue the BrandOps site" or describe the change
3. The agent will already know the project path, repo, preferences, and unresolved items
4. Read `AGENTS.md`, `SECURITY.md`, and `QA.md` first

---

## Files that matter most

- `/app/layout.tsx` — root layout, metadata, cookie consent, analytics
- `/app/page.tsx` — new AI consultancy homepage
- `/app/(home)/layout.tsx` — homepage structured data (currently stale)
- `/components/header.tsx` — navigation
- `/components/footer.tsx` — footer links
- `/components/consultancy.tsx` — homepage sections
- `/app/services/` — four new service pages
- `/app/contact/page.tsx` — contact form destination
- `/components/contact-form.tsx` — EmailJS contact form
- `/app/api/leads/route.ts` — server-side lead capture
- `/next.config.mjs` — security headers
- `/app/robots.ts` — crawler rules
- `/app/sitemap.ts` — sitemap

---

## Internal documentation

- `AGENTS.md` — agent instructions
- `SECURITY.md` — security policy
- `QA.md` — verification checklist and gaps
- `ARCHITECTURE.md` — system overview
- `ROADMAP.md` — priorities
- `output/BRANDOPS-SEO-CONTENT-PLAN.md` — SEO content roadmap
- `output/GEO-AEO-PLAN.md` — GEO/AEO strategy
- `outskill-lead-magnet-plan.md` — AI Findability Scorecard plan

---

## Notes for the agent

- Always build locally (`npm run build`) before committing and pushing.
- Do not ask for secrets in chat. Use `.env.local` or Vercel UI.
- Keep hero headings consistent using the gradient style from the home page.
- Maintain unique titles/descriptions within SEO length limits for every new page.
- Add new pages to header, footer, and sitemap.
- All conversion CTAs route to `/contact` using the existing `ContactForm`. Only button text changes.
- Ask for explicit approval before deploying changes to the live website.
- Do not touch existing `Features` pages unless explicitly asked.
