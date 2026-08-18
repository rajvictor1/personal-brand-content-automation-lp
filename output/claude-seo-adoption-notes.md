# Claude-SEO Repo Adoption Notes for BrandOps

Source: https://github.com/AgriciDaniel/claude-seo (open-source Claude Code SEO plugin)

## What we are adopting

### 1. GEO / AI-search optimization
- Optimize passages for AI citation: 134–167 word blocks, direct answers in first 40–60 words.
- Use question-based H2/H3 headings.
- Include specific stats with source attribution where possible.
- Keep AI crawlers allowed in robots.txt (already done for GPTBot, ClaudeBot, PerplexityBot, etc.).

### 2. Content quality scoring
- E-E-A-T signals: first-hand experience, author credentials, citations, trust signals.
- Blog posts should comprehensively cover topic (claude-seo suggests 1,500+ words as a coverage floor, not a ranking factor).
- Avoid generic AI phrasing, repetitive structure, and factual inaccuracies.

### 3. Schema / structured data
- Prefer JSON-LD, absolute URLs, ISO 8601 dates.
- Keep Organization, Article, WebSite, Person schema (already done).
- **FAQPage schema stays relevant for BrandOps** because:
  - It matches question-based AEO content.
  - It structures content for "People also ask" and voice search.
  - It supports GEO/AEO citation even though Google retired FAQ rich results in May 2026.
- Do not add FAQPage schema purely for Google SERP features; add it because every article has a real FAQ section.

### 4. Technical SEO depth
- Core Web Vitals thresholds: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1.
- INP replaced FID; never reference FID.
- Validate sitemap completeness, canonical consistency, and AI crawler access.

### 5. Sitemap quality
- priority/changefreq tags are ignored by Google but harmless.
- Ensure lastmod reflects real significant changes.
- Keep sitemap under 50,000 URLs and 50MB.

## What we are NOT adopting

- The full claude-seo plugin ecosystem (built for Claude Code, heavy for our needs).
- DataForSEO / Moz / paid tool integrations (BrandOps uses free-tier first).
- Automated mass programmatic pages (doorway-page risk for a small brand).
- Removing FAQPage schema (contradicts our AEO/GEO strategy).

## Action items from claude-seo insights

1. Keep FAQ sections and FAQPage schema in every article where it fits naturally.
2. Add more statistic-backed claims with source attribution in high-priority guides.
3. Add question-based H2/H3 headings to new and refreshed articles.
4. Run a Core Web Vitals audit once GSC data is available.
5. Review content for generic AI phrasing during every future article edit.

## Status

- FAQPage schema implementation: ✅ Done on 5 resource articles.
- Future articles: continue adding FAQ sections + FAQPage schema.
- No changes needed to existing schema work.
