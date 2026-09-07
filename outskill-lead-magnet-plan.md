# Outskill Lead Magnet Plan: AI Findability Scorecard for Personal Brands

**Product:** BrandOps (https://www.brandops.site)  
**Lead magnet title:** AI Findability Scorecard for Personal Brands  
**Format:** Interactive scorecard + downloadable PDF report + 3-email follow-up  
**Target audience:** Solo founders, operators, coaches, consultants, and creators building a personal brand website.  
**Promise:** "See how findable your personal brand is by AI search — and get 3 quick wins to fix today."  
**Goal:** Capture emails, prove BrandOps's GEO/AEO expertise, and nurture toward early access.

---

## 1. Concept and Title

**Final title:** AI Findability Scorecard for Personal Brands  
**Subtitle:** One URL. One minute. A clear picture of how AI search engines see your site.  
**CTA:** Get my free AI Findability Score  
**Why it fits BrandOps:** BrandOps creates cited, review-gated content. Before someone needs BrandOps, they need to know whether their site is even visible to AI systems. This scorecard answers that question and naturally leads to the product as the fix.

---

## 2. Structured Outline

### Scorecard sections (landing page)

1. **Hero**
   - Headline: AI Findability Scorecard for Personal Brands
   - Subhead: One URL. One minute. A clear picture of how AI search engines see your site.
   - CTA form: URL + email + consent checkbox.

2. **How it works**
   - 3-step visual: Paste URL → Get score → Download report.

3. **What we check**
   - 6 categories with one-line explanations.

4. **Why AI findability matters**
   - Short proof block: ChatGPT, Perplexity, Gemini, and Google AI Overviews now drive discovery.

5. **Trust/footer**
   - No credit card. No spam. Built by BrandOps.

### PDF report sections

1. Cover: score + site URL + date.
2. What this score means.
3. Score breakdown table (6 categories, 0–100).
4. Your 3 highest-impact quick wins.
5. 30-day improvement plan.
6. How BrandOps helps you stay findable (soft CTA).

### Follow-up emails

- **Email 1 (instant):** Your scorecard is ready + PDF download link.
- **Email 2 (Day 3):** The one fix most personal-brand sites miss.
- **Email 3 (Day 7):** Turn one topic into a carousel + newsletter with BrandOps.

---

## 3. Artifact Plan

| # | Artifact | File path | Format | How generated |
|---|---|---|---|---|
| 1 | Lead magnet plan | `/outskill-lead-magnet-plan.md` | Markdown | Written |
| 2 | Landing page | `app/geo-scorecard/page.tsx` | Next.js page | Coded |
| 3 | Scorecard API | `app/api/geo-scorecard/route.ts` | Next.js API route | Coded |
| 4 | Audit engine | `lib/aiFindabilityAudit.ts` | TypeScript module | Coded |
| 5 | Scorecard UI component | `components/ai-findability-scorecard.tsx` | React component | Coded |
| 6 | PDF generator | `lib/geoScorecardPdf.ts` | TypeScript + jsPDF | Coded |
| 7 | Email sequence copy | `outskill-lead-magnet/emails.md` | Markdown | Written |
| 8 | LinkedIn distribution posts | `outskill-lead-magnet/linkedin-posts.md` | Markdown | Written |
| 9 | Demo script | `outskill-lead-magnet/demo-script.md` | Markdown | Written |
| 10 | Quality checklist | Section 5 of this plan | Markdown | Written |
| 11 | OG image for scorecard | `public/geo-scorecard-og.png` | PNG 1200x630 | Generated |
| 12 | Handoff doc | `RAJESH-KUMAR-HANDOFF.md` update | Markdown | Written |

---

## 4. Capture and Delivery Flow

1. **Discovery:** LinkedIn post or session drives to `https://www.brandops.site/geo-scorecard`.
2. **Landing:** Visitor reads promise and enters website URL + email + consent.
3. **Submit:** Frontend POSTs to `/api/geo-scorecard`.
4. **Audit:** API fetches homepage HTML, checks 6 GEO signals, computes scores, returns JSON.
5. **Results page:** Score dashboard renders instantly with 6 category scores and 3 quick wins.
6. **Download PDF:** Visitor clicks to generate/download the 5-page report.
7. **Lead storage:** Email + URL + score saved to Google Sheets via existing service-account setup.
8. **Email 1:** Triggered immediately (EmailJS/Resend stubbed until real keys added).
9. **Emails 2 and 3:** Sent 3 and 7 days later (to be wired via n8n/Make/Resend later).
10. **Retargeting:** LinkedIn follow-up post shares a real score screenshot and invites others to try.

---

## 5. Quality Checklist

| Area | Requirement | Verification step |
|---|---|---|
| Clarity | One sentence explains the score and value | Read headline aloud |
| Mobile | Form + scores render cleanly on 375px | Browser responsive test |
| Accessibility | Labels, focus rings, error text, consent checkbox | AX tree check |
| Value | Real audit on real URLs, no random scores | Test on 3 live sites |
| Privacy | Consent checkbox, no data sold, unsubscribe link | Review copy and form |
| Speed | Audit completes in under 10 seconds | Time 5 runs |
| No hallucination | Scores tied to fetched signals | Trace score to code logic |
| Build | `npm run build` passes with no new errors | Run before push |
| Security | No secrets committed | Check `.env.local.example` only |
| LinkedIn | 2 posts ready with real screenshot | Review copy before publishing |

---

## 6. Demo Script (2–3 minutes)

**Hook (15s):**
"Most personal brand websites are invisible to AI search. I built a free scorecard that checks if ChatGPT, Perplexity, and Gemini can actually find you."

**Walkthrough (90s):**
1. Open `brandops.site/geo-scorecard`.
2. Read the headline and promise.
3. Enter a real website URL from the chat.
4. Enter an email and submit.
5. Show the loading state: "Analyzing your site…"
6. Reveal the overall AI Findability Score.
7. Walk through the 6 category scores.
8. Highlight the 3 quick wins.
9. Click download PDF and show the first page.
10. Show the confirmation email copy.

**Close (30s):**
"This is the lead magnet. Tomorrow I’ll show the LinkedIn post that drove 47 signups, and how each email in the sequence moves someone toward BrandOps early access."

---

## 7. Build Scope and Approval Gate

**I will build:**
- `/geo-scorecard` landing page and score UI.
- `/api/geo-scorecard` audit API with real checks.
- `lib/aiFindabilityAudit.ts` scoring engine.
- `lib/geoScorecardPdf.ts` PDF generator.
- Email sequence copy.
- LinkedIn distribution posts.
- Demo script.
- OG image placeholder.
- Updated handoff notes.

**I will NOT build without later approval:**
- Live email backend wiring (needs EmailJS/Resend keys).
- Automated drip sequence (needs n8n/Make setup).
- Paid plan or Stripe.
- Full dashboard or auth.

**Approval question:** Build the AI Findability Scorecard now? Reply "yes" or suggest changes.
