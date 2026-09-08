# BrandOps Roadmap

> Last updated: 2026-09-07
> Strategic goal: Establish BrandOps as the go-to AI consultancy for business visibility, content, and lead generation, while keeping the existing product/content engine that drives organic discovery.

---

## Now (this week)

### Stabilize the repositioning

| # | Task | Owner | Evidence of done |
|---|------|-------|------------------|
| 1 | Update `README.md`, `RAJESH-KUMAR-HANDOFF.md` to reflect new positioning | Agent | Docs committed and accurate |
| 2 | Create `ARCHITECTURE.md`, `ROADMAP.md` | Agent | Docs committed |
| 3 | Update `app/(home)/layout.tsx` metadata and schema to match AI consultancy positioning | Pending | Title/description/schema no longer mention “review-first personal brand content automation” |
| 4 | Verify all service pages on live site load and titles are correct | Agent | HTTP 200, no `| BrandOps | BrandOps` duplication |
| 5 | Investigate contact form 500 issue | Agent | Root cause documented; fix proposed |
| 6 | Run full site route audit and broken-link check | Agent | Orphaned/broken pages identified |
| 7 | Verify sitemap matches deployed routes | Agent | Sitemap diff documented |
| 8 | Review security headers and note gaps | Agent | Header list in `QA.md` / `ARCHITECTURE.md` |

### Fix critical live issues

| # | Task | Owner | Notes |
|---|------|-------|-------|
| 9 | Fix contact form 500 or failed submissions | Needs approval | May require EmailJS config update or moving to Resend/Loops |
| 10 | Add spam protection to contact form and `/api/leads` | Needs approval | Honeypot + rate limiting; CAPTCHA optional later |

---

## Next 30 days

### Content and SEO

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 11 | Refresh `/resources/linkedin-content-system` pillar page | Central hub for fan-out SEO | Updated copy, internal links, and FAQ schema |
| 12 | Publish 3 new high-priority resource articles | Build topical authority | Articles live, indexed, linked from hub |
| 13 | Add FAQPage and HowTo schema to top 5 existing guides | Win AI citations | Schema present in page source |
| 14 | Cross-link resource articles and service pages | Strengthen internal link graph | Every article links to a service page and 2–3 related articles |
| 15 | Update `/resources` hub with “Start with this guide” section | Improve content discoverability | New section live |
| 16 | Refresh `linkedin-carousel-generator`, `ai-newsletter-generator`, `linkedin-automation-tool` landing pages | Keep high-intent pages aligned with AI consultancy | Copy mentions services, CTAs point to `/contact` |

### Lead generation

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 17 | Make `/geo-scorecard` live and linked from nav/footer | Turn scorecard into working lead magnet | Page accessible, form submits, PDF downloads, leads saved |
| 18 | Wire scorecard follow-up emails | Nurture scorecard leads | Resend/EmailJS sequence active |
| 19 | Add lead capture CTA to bottom of every resource article | Convert readers | `lead-capture` component embedded |
| 20 | Set up Google Sheets notifications for new leads | Real-time awareness | Email or Slack notification on new row |

### Product demo alignment

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 21 | Update `/demo` page to reflect AI consultancy services | Avoid mixed messaging | Demo page mentions four services |
| 22 | Create a short demo script for each service | Sales enablement | Script files in repo |

---

## 30–60 days

### Authority and distribution

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 23 | Build 5–10 quality backlinks (directories, guest posts, podcast bios) | Improve domain authority | Backlinks documented in tracker |
| 24 | Launch Product Hunt or SaaS directory listings | Discovery and backlinks | Listings live |
| 25 | Publish case studies for each service | Social proof | `/case-studies` or embedded examples |
| 26 | Add testimonials and results with accurate attribution | Trust | Verified quotes only |

### Platform and trust

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 27 | Resolve `npm audit` vulnerabilities | Security baseline | `npm audit` clean or mitigations documented |
| 28 | Add automated tests (smoke tests for routes, form submission mock) | Prevent regressions | Test suite runs in CI |
| 29 | Implement security header verification in CI | Catch header regressions | Script checks headers on preview URL |
| 30 | Add privacy/terms review if adding analytics or lead capture | Compliance | Legal pages updated if needed |

---

## 60–90 days

### Scale and optimization

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 31 | Launch a second lead magnet (e.g., LinkedIn Content System Checklist + 7 AI Prompts) | Capture more emails | Landing page + PDF + follow-up sequence live |
| 32 | A/B test homepage hero copy and CTA | Improve conversion | Test variant and result documented |
| 33 | Add services pricing page or packaged offerings | Move from consultation to productized services | `/pricing` or `/services/packages` live |
| 34 | Create a reusable service page template | Faster client/service expansion | Template documented and used for new service |
| 35 | Implement automated content refresh pipeline | Keep SEO content fresh | Quarterly refresh cadence running |

### Measurement

| # | Task | Why | Evidence |
|---|------|-----|----------|
| 36 | Set up conversion goals in GA4 | Track CTA effectiveness | Goals configured |
| 37 | Track AI referral traffic | Measure GEO/AEO impact | GA4 traffic acquisition shows ChatGPT/Perplexity/Gemini |
| 38 | Monthly dashboard of leads, indexed pages, organic clicks | Stay data-driven | Report shared |

---

## Backlog (no date yet)

- Migrate from EmailJS to Resend/Loops for better deliverability and branding.
- Add n8n/Make automation for lead nurturing.
- Build client portal or dashboard (separate from marketing site).
- Add multi-language content if international audience grows.
- Implement full design system/storybook for components.

---

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-07 | Repositioned site as AI consultancy | LinkedIn-only messaging was too narrow; four services better reflect business direction |
| 2026-09-07 | Kept existing Features pages untouched | They already rank for LinkedIn/newsletter keywords; avoid SEO loss |
| 2026-09-07 | All CTAs route to `/contact` with shared form | Single conversion destination keeps tracking simple; only button text changes |
| 2026-09-07 | Added `/services/*` for new positioning | Clean separation between old product pages and new consultancy framing |

---

## How this roadmap is maintained

1. Review weekly against actual traffic, leads, and business priorities.
2. Update after every major site change or campaign.
3. Mark items done by changing status in this file and noting evidence.
4. New agents should read `ARCHITECTURE.md`, `SECURITY.md`, and `QA.md` before picking up roadmap tasks.
