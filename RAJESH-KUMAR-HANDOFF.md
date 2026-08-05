# BrandOps Project Handoff — Rajesh Kumar

> Last updated: 2026-08-05
> Project folder: `/Users/mac/Desktop/personal-brand-content-automation-lp`
> Repo: `https://github.com/rajvictor1/personal-brand-content-automation-lp`
> Live site: `https://brandops.site` (redirects to `https://www.brandops.site`)

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
- **SEO structure:** Home | Features | Resources | Company header with dropdowns
- **Content hub name:** "Resources" (guides, cheat sheets, videos, templates, glossary)
- **Lead capture:** Google Sheets API preferred over email APIs
- **Credentials:** Stored in `.env.local` or Vercel env UI, never in chat
- **Deployment flow:** Local build must pass, then explicit "go ahead" before push/deploy
- **When he says:** "good plan do as per you think" → execute immediately without confirmation

---

## Project facts

- **Stack:** Next.js 14, React, TypeScript, Tailwind CSS, shadcn/ui
- **Current pages:** 38 static routes including home, features, resources, legal pages, founder, support, pipeline, pricing, contact, about, careers
- **Header structure:** Home, Features ↓, Pipeline, Resources ↓, Company ↓
- **Footer:** Squarespace-style grouped columns
- **SEO:** Unique titles and meta descriptions applied site-wide
- **Security headers:** Added in `next.config.mjs`
- **Structured data:** JSON-LD via `schema-dts`
- **robots.txt:** Explicitly allows major LLM/AI crawlers (ChatGPT, Claude, Gemini, Perplexity, etc.)

---

## Important unresolved items

1. **Contact form** — currently returns HTTP 500 "Requested entity was not found." User deferred this fix.
2. **Google Sheets email notifications** — not implemented.
3. **Real social media accounts** — placeholders exist. Accounts must be created by user; agent cannot create them.
4. **VicSee video generation** — API key invalid/inactive. `/resources/videos` uses placeholder cards.
5. **Templates category** — currently has 0 posts.
6. **Founder page photo** — already added from local file at `public/founder-rk.png`.

---

## How to resume work

1. Open a new Hermes session
2. Say: "Continue the BrandOps site" or describe the change
3. The agent will already know the project path, repo, preferences, and unresolved items

---

## Files that matter most

- `/app/layout.tsx` — root layout, metadata, cookie consent
- `/app/(home)/layout.tsx` — structured data
- `/components/header.tsx` — navigation
- `/components/footer.tsx` — footer links
- `/app/founder/page.tsx` — founder page
- `/next.config.mjs` — security headers
- `/app/robots.ts` — crawler rules
- `/app/sitemap.ts` — sitemap

---

## Notes for the agent

- Always build locally (`npm run build`) before committing and pushing.
- Do not ask for secrets in chat. Use `.env.local` or Vercel UI.
- Keep hero headings consistent using the gradient style from the home page.
- Maintain unique titles/descriptions within SEO length limits for every new page.
- Add new pages to header, footer, and sitemap.
