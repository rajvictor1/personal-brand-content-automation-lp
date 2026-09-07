# QA Checklist — BrandOps AI Consultancy Repositioning

This checklist captures the verification work performed after repositioning `brandops.site` as an AI consultancy with four services.

## How to read this checklist

- **Passed** — verified against the live site, build output, or source code.
- **Failed** — found an issue that must be fixed.
- **Not Tested** — not covered by this round; documented as a gap.
- **N/A** — not applicable to the current scope.

Last run: 2026-09-07 (production deployment `dpl_BfAdE66ZeFNZJmkBKPksbRr5C8SN`).

---

## 1. Messaging and positioning

### 1.1 Homepage positioning

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1.1.1 | Homepage presents BrandOps as an AI consultancy | Passed | Title: `BrandOps \| AI Consultancy for Content, Visibility & Lead Generation`; hero eyebrow: `AI Consultancy for Your Business`. |
| 1.1.2 | Hero uses the requested eyebrow, headline, supporting text, and CTAs | Passed | Eyebrow, supporting text, `Book a Consultation`, and `Explore Our Services` present. Headline text is rendered across multiple spans (`Put AI to work for your visibility, content, and lead generation.`). |
| 1.1.3 | Consultancy intro section is present | Passed | Heading `Start with your business challenge.` and copy found on homepage. |
| 1.1.4 | Four services are visible on the homepage | Passed | Service cards for AI Content, Lead Magnets, AEO/GEO Visibility, and YouTube Research all present. |
| 1.1.5 | Service copy focuses on business outcomes and AI support | Passed | Each card explains the outcome (consistent presence, lead capture, visibility, content ideas) and mentions AI contextually. |
| 1.1.6 | How We Work section follows the requested 3-step process | Passed | `Understand`, `Recommend`, `Deliver` found with exact copy. |
| 1.1.7 | Final homepage CTA matches request | Passed | Heading `Find the right AI opportunity for your business.` and `Book a Consultation` button present. |

### 1.2 SEO terminology (AEO/GEO)

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 1.2.1 | Generic “SEO service” is replaced with AEO/GEO Visibility Card | Passed | No `Search Engine Optimization service` text found on homepage or service pages. Service is named `AEO/GEO Visibility Card`. |
| 1.2.2 | AEO and GEO are explained once | Passed | `Answer Engine Optimization / Generative Engine Optimization` appears on `/services/aeo-geo-visibility`. |
| 1.2.3 | Claims are matched to what the card measures | Passed | Description says “understand how your brand appears in AI-generated answers” and avoids guaranteed rankings/coverage. |
| 1.2.4 | Service page names use AEO/GEO consistently | Passed | Page, title, navigation, and footer all use `AEO/GEO Visibility Card`. |

---

## 2. Navigation

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 2.1 | Desktop header has Services dropdown | Passed | Header source adds `Services` dropdown before `Features`. |
| 2.2 | Services dropdown contains the four products | Passed | `AI Content for LinkedIn & Newsletter`, `Website Lead Magnets`, `AEO/GEO Visibility Card`, `YouTube Research & Content Strategy`. |
| 2.3 | Existing Features pages are untouched | Passed | `Features` dropdown still links to `/features/*` and `/linkedin-*` pages; source files not modified. |
| 2.4 | Desktop CTA is `Book a Consultation` | Passed | Single orange `Book a Consultation` button links to `/contact`. |
| 2.5 | Mobile nav includes the four services | Passed | Mobile menu updated with Services, AI Content, Lead Magnets, AEO/GEO Visibility, YouTube Research. |
| 2.6 | Mobile nav CTA is `Book a Consultation` | Passed | Orange mobile button text updated. |
| 2.7 | Navigation links open proper pages | Passed | All four service pages return HTTP 200; `/services` index returns 200. |
| 2.8 | Footer has Services column | Passed | Footer adds Services group with all four services and `/services`. |

---

## 3. Service pages

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 3.1 | `/services/linkedin-content` created with old homepage content | Passed | Reuses `Hero`, `ToolsGrid`, `Outcomes`, `ProblemSolution`, `FeatureGrid`, `Walkthrough`, `Pipeline`, `CaseStudy`, `Testimonials`, `Faq`, `Cta`. |
| 3.2 | `/services/website-lead-magnets` created | Passed | Live URL returns 200 with hero, benefits, deliverables, contact form. |
| 3.3 | `/services/aeo-geo-visibility` created | Passed | Live URL returns 200 with AEO/GEO explanation and contact form. |
| 3.4 | `/services/youtube-research` created | Passed | Live URL returns 200 with service description and contact form. |
| 3.5 | `/services` index page created | Passed | Lists all four services and How We Work steps. |
| 3.6 | Service page titles do not duplicate “BrandOps” | Passed | Verified live: `Website Lead Magnets | BrandOps`, `AEO/GEO Visibility Card | BrandOps`, etc. |
| 3.7 | YouTube service does not present a colleague’s platform as our own software | Passed | Copy describes “research” and “content briefs,” not a proprietary tool. |
| 3.8 | Work/examples section labels examples by service | Passed | Homepage WorkExamples section labels each example by service name. |

---

## 4. CTA and form submission flow

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 4.1 | All conversion CTAs use the same destination (`/contact`) | Passed | Homepage hero, service pages, and footer all link to `/contact` for the main conversion action. |
| 4.2 | Only button labels change by context | Passed | Labels include `Book a Consultation`, `Discuss Your Lead Magnet`, `Get Your Visibility Card`, `Explore YouTube Research`, but all route to `/contact` or in-page `#contact`. |
| 4.3 | Existing form fields unchanged | Passed | `ContactForm.tsx` still uses `first_name`, `last_name`, `email`, `phone`, `company`, `message`. |
| 4.4 | Existing submission handling unchanged | Passed | Still posts to EmailJS with `service_zjgaiae`, `template_s5q3416`, public key `n4OeXbwa_zVHVMPml`. |
| 4.5 | Form validation present | Passed | Client-side checks: name length ≥2, valid email regex, message length ≥10. |
| 4.6 | Error handling present | Passed | `toast.error(...)` on EmailJS failure. |
| 4.7 | Duplicate submission prevention | Not Tested | No server-side deduplication; client does not disable submit button immediately. Add rate-limiting / dedupe before high-traffic use. |
| 4.8 | Successful submission flow | Not Tested | Did not submit live form to avoid generating test leads; EmailJS credentials are present and form structure is intact. |

---

## 5. Links and broken pages

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 5.1 | Internal links return 200 | Passed | 41 unique internal links checked; only `/linkedin-templates` returned 404. |
| 5.2 | Broken link fixed | Passed | `/linkedin-templates` link on `/services/website-lead-magnets` changed to external standalone demo URL. |
| 5.3 | All four service page URLs return 200 | Passed | Verified via `curl`/HTTP fetch. |
| 5.4 | `/services` index returns 200 | Passed | Verified. |
| 5.5 | Existing `/features/*` pages remain accessible | Not Tested | Not individually fetched in this round, but source files were not modified. |

---

## 6. Layouts, accessibility, and browser errors

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 6.1 | Desktop layout renders without visible breakage | Passed | Homepage and service pages render without `Application error` or crash text. |
| 6.2 | Mobile layout | Not Tested | No mobile-width viewport simulation performed. |
| 6.3 | Accessibility — alt text on OG image | Passed | OG image `alt` updated to AI consultancy description. |
| 6.4 | Accessibility — form labels | Passed | Contact form inputs have associated `<Label>` elements. |
| 6.5 | No console errors | Not Tested | Browser console not inspected during this run. |

---

## 7. Security checks

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 7.1 | No hardcoded secrets in committed files | Passed | `google-service-account.json` is `.gitignore`d and untracked. EmailJS public/service/template IDs are public-by-design client values. |
| 7.2 | Server-side validation on `/api/leads` | Passed | Uses `zod` schema with length and email validation; requires `BRANDOPS_LEAD_WEBHOOK_SECRET`. |
| 7.3 | Spam protection | Failed / Gap | No CAPTCHA, honeypot, or rate-limiting on contact form or `/api/leads`. Documented in `SECURITY.md` as accepted gap. |
| 7.4 | Authorization | N/A | No authenticated routes or user sessions in this scope. |
| 7.5 | Dependency audit | Failed / Gap | `npm audit` reports 8 vulnerabilities (1 moderate, 7 high), mostly in `next`/`postcss`. Fix requires major Next.js upgrade and must be tested in preview. |
| 7.6 | Security headers | Not Tested | Headers were not fetched and inspected. Add CSP/frame-options review to next deploy checklist. |

---

## 8. Automated tests, lint, type checks, and build

| # | Check | Result | Evidence |
|---|-------|--------|----------|
| 8.1 | Production build succeeds | Passed | `next build` completed successfully; all service pages prerendered as static content. |
| 8.2 | Type check passes | Passed | `npx tsc --noEmit` returned no errors. |
| 8.3 | ESLint passes | Passed | `next lint` returned exit 0; one pre-existing warning in `app/founder/page.tsx` for `<img>` usage. |
| 8.4 | Existing automated tests | Not Tested | No test suite detected (`npm test` script not present in `package.json`). |

---

## 9. Remaining gaps and recommended next steps

1. **Spam protection:** Add a honeypot field, rate limiting, or CAPTCHA on `/contact` and `/api/leads` before scaling traffic.
2. **Dependency vulnerabilities:** Plan a Next.js major-version upgrade to resolve `postcss` / `next` advisories. Test thoroughly in a preview branch.
3. **Security headers:** Audit and configure `Content-Security-Policy`, `X-Frame-Options`, `Referrer-Policy`, and `X-Content-Type-Options`.
4. **Live form submission test:** Submit the contact form once with a test email to confirm EmailJS delivery and success toast.
5. **Mobile layout audit:** Open the site at mobile viewport widths and verify the Services dropdown, cards, and CTAs.
6. **Console / accessibility audit:** Run Lighthouse or axe DevTools on homepage and service pages.
7. **Existing `/features/*` smoke test:** Fetch a sample of feature pages to confirm no regression from navigation changes.

---

## Sign-off

This checklist was generated by running live HTTP checks, source-code inspection, `next build`, `next lint`, `tsc --noEmit`, and `npm audit`. All checks marked **Passed** have direct evidence above. Checks marked **Not Tested** or **Failed / Gap** should be addressed before declaring the repositioning fully production-ready.
