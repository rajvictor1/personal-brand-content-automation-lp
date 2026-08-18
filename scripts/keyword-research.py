#!/usr/bin/env python3
"""
BrandOps Keyword Research Agent
Free-tier keyword research using Google autocomplete suggestions.

Usage:
    python scripts/keyword-research.py

Outputs:
    output/keyword-research/brandops-keywords.csv
    output/keyword-research/keyword-content-plan.md

No paid SEO tools required. No API keys required.
"""

import csv
import json
import re
import time
import urllib.parse
import urllib.request
from pathlib import Path
from datetime import datetime

# Seed keywords for BrandOps
SEED_KEYWORDS = [
    "LinkedIn carousel",
    "LinkedIn carousel generator",
    "AI LinkedIn carousel",
    "LinkedIn newsletter",
    "AI newsletter generator",
    "cited newsletter",
    "personal brand content automation",
    "review first publishing",
    "review-first publishing",
    "AI content workflow",
    "content automation for LinkedIn",
    "LinkedIn content strategy",
    "personal brand LinkedIn",
    "AI tools for LinkedIn",
    "newsletter subject lines",
    "LinkedIn carousel template",
    "carousel design for LinkedIn",
    "AI content safety",
    "content repurposing",
    "one topic many formats",
]

# Country and language for autocomplete
HL = "en"
GL = "us"

# Intent classification patterns
INTENT_PATTERNS = {
    "informational": [
        "how to", "what is", "why", "guide", "tutorial", "examples", "tips",
        "best practices", "framework", "workflow", "meaning", "vs", "vs.",
        "difference between", "compare", "comparison"
    ],
    "commercial": [
        "best", "top", "tools", "software", "platform", "service", "review",
        "reviews", "pricing", "alternative", "alternatives", "vs", "compare"
    ],
    "transactional": [
        "buy", "free trial", "demo", "sign up", "get started", "download",
        "template", "cheat sheet", "checklist", "book"
    ],
    "navigational": [
        "brandops", "login", "app", "dashboard"
    ],
}


def classify_intent(keyword: str) -> str:
    """Classify keyword search intent based on trigger words."""
    lower = keyword.lower()
    scores = {k: 0 for k in INTENT_PATTERNS}
    for intent, patterns in INTENT_PATTERNS.items():
        for p in patterns:
            if p in lower:
                scores[intent] += 1
    # Tie-break: informational beats commercial unless strong commercial signal
    if scores["commercial"] >= 2 and scores["informational"] <= 1:
        return "commercial"
    if scores["transactional"] >= 1:
        return "transactional"
    if scores["commercial"] >= 1 and scores["informational"] == 0:
        return "commercial"
    if scores["informational"] >= 1:
        return "informational"
    if scores["navigational"] >= 1:
        return "navigational"
    return "informational"  # default


def get_google_autocomplete(keyword: str) -> list[str]:
    """
    Fetch Google autocomplete suggestions for a keyword.
    Uses the Google Suggest API (unofficial, public endpoint).
    """
    try:
        encoded = urllib.parse.quote(keyword)
        url = f"http://suggestqueries.google.com/complete/search?q={encoded}&hl={HL}&gl={GL}&client=firefox"
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": (
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                )
            },
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            suggestions = data[1] if len(data) > 1 else []
            return suggestions
    except Exception as e:
        print(f"Warning: could not fetch autocomplete for '{keyword}': {e}")
        return []


def expand_keywords(seed_keywords: list[str]) -> dict[str, list[str]]:
    """Expand each seed keyword with autocomplete suggestions."""
    results = {}
    for seed in seed_keywords:
        print(f"Researching: {seed}")
        suggestions = get_google_autocomplete(seed)
        # Clean suggestions: remove the seed itself if it appears
        cleaned = [s for s in suggestions if s.lower() != seed.lower()]
        results[seed] = cleaned
        time.sleep(0.5)  # be polite to Google
    return results


def dedupe_keywords(results: dict[str, list[str]]) -> list[dict]:
    """Flatten and dedupe all keywords, adding intent and source seed."""
    seen = set()
    rows = []
    for seed, suggestions in results.items():
        for kw in suggestions:
            kw = kw.strip()
            if not kw or kw.lower() in seen:
                continue
            seen.add(kw.lower())
            rows.append({
                "keyword": kw,
                "intent": classify_intent(kw),
                "source_seed": seed,
            })
    return rows


def score_keyword(row: dict) -> int:
    """
    Simple priority score based on relevance to BrandOps.
    Higher = more aligned with product and content strategy.
    """
    score = 0
    kw = row["keyword"].lower()

    # Strong product-fit terms
    brandops_terms = [
        "linkedin carousel", "linkedin newsletter", "ai newsletter", "cited newsletter",
        "review-first", "review first", "personal brand", "content automation",
        "content workflow", "ai content", "carousel generator", "newsletter generator"
    ]
    for term in brandops_terms:
        if term in kw:
            score += 3

    # Medium-fit terms
    medium_terms = [
        "linkedin content", "linkedin strategy", "newsletter subject", "content repurposing",
        "one topic", "content calendar", "hook formulas", "carousel template",
        "carousel design", "ai tools", "content workflow"
    ]
    for term in medium_terms:
        if term in kw:
            score += 2

    # Intent bonus
    if row["intent"] == "commercial":
        score += 2
    elif row["intent"] == "transactional":
        score += 2
    elif row["intent"] == "informational":
        score += 1

    # Length bonus: mid-tail keywords (3-6 words) often easier to rank for
    word_count = len(kw.split())
    if 3 <= word_count <= 6:
        score += 1

    return score


def map_to_page(row: dict, existing_slugs: list[str]) -> str:
    """
    Map a keyword to an existing BrandOps page or recommend a new one.
    """
    kw = row["keyword"].lower()

    # Existing page mappings
    if "carousel" in kw and ("workflow" in kw or "generator" in kw):
        return "/features/carousel-workflow"
    if "newsletter" in kw and ("workflow" in kw or "generator" in kw):
        return "/features/newsletter-workflow"
    if "review" in kw and ("first" in kw or "publish" in kw):
        return "/features/review-first-publishing"
    if "pricing" in kw or "cost" in kw or "plan" in kw:
        return "/pricing"
    if "demo" in kw or "walkthrough" in kw or "book" in kw:
        return "/demo"
    if "contact" in kw or "support" in kw:
        return "/contact"
    if "ai workflow" in kw or "tools" in kw:
        return "/resources/ai-workflows-linkedin-personal-brands"
    if "carousel" in kw and ("one hour" in kw or "one topic" in kw):
        return "/resources/linkedin-carousel-newsletter-one-hour-workflow"
    if "best" in kw and ("tool" in kw or "software" in kw):
        return "/resources/best-ai-tools-linkedin-carousels-newsletters-2026"
    if "cited" in kw or "newsletter" in kw and "write" in kw:
        return "/resources/how-to-write-cited-ai-newsletter"
    if "carousel" in kw and ("design" in kw or "framework" in kw or "template" in kw):
        return "/resources/linkedin-carousel-design-framework-non-designers"
    if "ai safety" in kw or "risk" in kw or "review" in kw:
        return "/resources/ai-safety-personal-brands-review-first-publishing"
    if "repurpose" in kw or "many formats" in kw:
        return "/resources/one-topic-many-formats-content-system"
    if "aeo" in kw or "geo" in kw or "answer engine" in kw:
        return "/resources/aeo-geo-personal-brands"

    # Recommend new content based on keyword
    if "subject line" in kw:
        return "NEW: /resources/ai-newsletter-subject-line-formulas"
    if "hook" in kw or "scroll" in kw:
        return "NEW: /resources/linkedin-carousel-hook-formulas"
    if "calendar" in kw:
        return "NEW: /resources/linkedin-content-calendar-template"
    if "checklist" in kw and "review" in kw:
        return "NEW: /resources/review-first-publishing-checklist"
    if "canva" in kw:
        return "NEW: /resources/canva-vs-ai-carousel-tools"
    if "topical authority" in kw or "authority" in kw:
        return "NEW: /resources/personal-brand-topical-authority"
    if "deliverability" in kw:
        return "NEW: /resources/newsletter-deliverability-basics"
    if "consultant" in kw:
        return "NEW: /resources/ai-content-workflow-for-consultants"

    return "/resources"


def recommend_content(row: dict) -> str:
    """Generate a content recommendation for a keyword."""
    intent = row["intent"]
    kw = row["keyword"].lower()

    if "subject line" in kw:
        return "Cheat sheet with subject line formulas and examples"
    if "hook" in kw or "scroll" in kw:
        return "Hook formula guide with LinkedIn carousel examples"
    if "calendar" in kw:
        return "Downloadable content calendar template + workflow"
    if "checklist" in kw and "review" in kw:
        return "Step-by-step review checklist + downloadable PDF"
    if "canva" in kw or "vs" in kw:
        return "Comparison article with feature table and verdict"
    if "best" in kw or "tools" in kw:
        return "Comparison article with pricing/features table"
    if "how to" in kw:
        return "Tutorial guide with step-by-step workflow"
    if "what is" in kw or "meaning" in kw:
        return "Definition article with examples and FAQ"
    if "template" in kw or "cheat sheet" in kw:
        return "Downloadable template or quick-reference guide"
    if intent == "commercial":
        return "Comparison or buying guide"
    if intent == "transactional":
        return "Landing page or template download"
    return "Informational guide or FAQ article"


def load_existing_slugs() -> list[str]:
    """Read existing resource slugs from lib/resources.ts."""
    try:
        resources_path = Path("lib/resources.ts")
        text = resources_path.read_text()
        slugs = re.findall(r'slug:\s*"([^"]+)"', text)
        return slugs
    except Exception:
        return []


def main():
    project_root = Path(__file__).parent.parent
    output_dir = project_root / "output" / "keyword-research"
    output_dir.mkdir(parents=True, exist_ok=True)

    # Work from project root so paths resolve correctly
    import os
    os.chdir(project_root)

    print("=" * 60)
    print("BrandOps Keyword Research Agent")
    print("=" * 60)

    existing_slugs = load_existing_slugs()
    print(f"Found {len(existing_slugs)} existing resource slugs")

    print("\nExpanding seed keywords with Google autocomplete...")
    expanded = expand_keywords(SEED_KEYWORDS)

    print("\nClassifying intent and mapping keywords...")
    rows = dedupe_keywords(expanded)

    for row in rows:
        row["priority_score"] = score_keyword(row)
        row["target_page"] = map_to_page(row, existing_slugs)
        row["content_recommendation"] = recommend_content(row)

    # Sort by priority score descending
    rows.sort(key=lambda r: r["priority_score"], reverse=True)

    # Save CSV
    csv_path = output_dir / "brandops-keywords.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        fieldnames = [
            "keyword", "intent", "priority_score", "source_seed",
            "target_page", "content_recommendation"
        ]
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    print(f"\nSaved CSV: {csv_path} ({len(rows)} keywords)")

    # Build markdown content plan
    md_path = output_dir / "keyword-content-plan.md"
    md_lines = [
        "# BrandOps Keyword Research + Content Plan",
        "",
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"Keywords researched: {len(rows)}",
        "Source: Google autocomplete (free-tier)",
        "",
        "## Top 30 Priority Keywords",
        "",
        "| Priority | Keyword | Intent | Target Page | Content Recommendation |",
        "|----------|---------|--------|-------------|------------------------|",
    ]

    for row in rows[:30]:
        md_lines.append(
            f"| {row['priority_score']} | {row['keyword']} | {row['intent']} | `{row['target_page']}` | {row['content_recommendation']} |"
        )

    md_lines.extend([
        "",
        "## Content Gaps Requiring New Pages",
        "",
    ])

    new_pages = [r for r in rows if r["target_page"].startswith("NEW:")]
    if new_pages:
        md_lines.append("| Keyword | Proposed Slug | Recommendation |")
        md_lines.append("|---------|---------------|------------------|")
        for row in new_pages[:15]:
            slug = row["target_page"].replace("NEW: ", "")
            md_lines.append(f"| {row['keyword']} | `{slug}` | {row['content_recommendation']} |")
    else:
        md_lines.append("No new pages strongly recommended from this keyword set. Consider expanding seeds.")

    md_lines.extend([
        "",
        "## Existing Pages to Optimize",
        "",
    ])

    existing_pages = {}
    for row in rows:
        if not row["target_page"].startswith("NEW:") and row["target_page"] != "/resources":
            existing_pages.setdefault(row["target_page"], []).append(row)

    for page, mapped_rows in sorted(existing_pages.items(), key=lambda x: -sum(r["priority_score"] for r in x[1]))[:10]:
        md_lines.append(f"### {page}")
        for r in mapped_rows[:5]:
            md_lines.append(f"- **{r['keyword']}** ({r['intent']}, score {r['priority_score']}) — {r['content_recommendation']}")
        md_lines.append("")

    md_lines.extend([
        "",
        "## Next Steps",
        "",
        "1. Review top 30 keywords and confirm priority.",
        "2. Create the top 3 'NEW' pages first.",
        "3. Refresh existing pages with keywords mapped to them.",
        "4. Re-run this script monthly with updated seed keywords.",
        "",
    ])

    md_path.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"Saved plan: {md_path}")

    print("\n" + "=" * 60)
    print("Keyword research complete.")
    print("=" * 60)


if __name__ == "__main__":
    main()
