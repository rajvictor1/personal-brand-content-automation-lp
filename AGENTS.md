# Agent Instructions for BrandOps Site

## Quick orientation

- This is the BrandOps marketing site built with Next.js 14 + Tailwind + shadcn/ui.
- The site was repositioned as an **AI consultancy** with four services.
- Keep the existing `Features` pages untouched. New work should live under `/services` or as new homepage components.

## Before making changes

1. Read `SECURITY.md` for the vulnerability-reporting process, secrets policy, and accepted security gaps.
2. Read `QA.md` for the current verification checklist and known gaps.
3. If your change affects messaging, navigation, CTAs, forms, or service pages, review the relevant sections of `QA.md` first.

## After making changes

1. Run `npx tsc --noEmit` — must pass.
2. Run `npm run lint` — must pass (pre-existing warnings in untouched files are acceptable).
3. Run `npm run build` — must complete successfully.
4. If you changed internal links, run a broken-link check against the local or preview build.
5. If you changed forms, API routes, or environment handling, re-check the Security section of `QA.md`.
6. Do not commit secrets. Confirm `google-service-account.json` and `.env*.local` remain excluded by `.gitignore`.

## Navigation and CTAs

- All conversion CTAs should route to `/contact` using the existing `ContactForm`.
- Button labels may change by context, but the destination and submission flow must stay the same.
- The four services live at:
  - `/services/linkedin-content`
  - `/services/website-lead-magnets`
  - `/services/aeo-geo-visibility`
  - `/services/youtube-research`

## Deployment

- The production site is deployed via Vercel from `rajvictor1/personal-brand-content-automation-lp`.
- Run `vercel --prod` only after local build and tests pass.
- Stop before live deployment if the change affects pricing, checkout, authentication, or legal pages; get explicit approval first.

## Questions?

Open an issue or check the `QA.md` gap list before asking the maintainer.
