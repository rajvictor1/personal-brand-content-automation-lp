#!/usr/bin/env python3
"""
Free query fan-out research for BrandOps.

No paid API. Uses:
- Google autocomplete suggestions
- Pattern-based fan-out expansion
- Existing keyword research CSV

Usage:
    cd /Users/mac/Desktop/personal-brand-content-automation-lp
    python3 scripts/query-fanout-free.py
"""

import csv
import json
import urllib.request
from datetime import datetime
from pathlib import Path
from urllib.parse import quote

SEED_KEYWORDS = [
    "best AI LinkedIn carousel generator",
    "AI newsletter generator",
    "LinkedIn automation tool for founders",
    "LinkedIn content system for personal brands",
    "LinkedIn carousel templates",
    "LinkedIn carousel size 2026",
    "AI LinkedIn post generator",
    "newsletter examples for founders",
    "personal brand content strategy",
    "LinkedIn content calendar template",
    "how to create LinkedIn carousels from research",
    "LinkedIn carousel hook examples",
    "best AI tools for LinkedIn personal brands",
    "cited newsletter guide",
    "AI safety for personal brands",
    "review first publishing workflow",
    "LinkedIn carousel design for non designers",
    "one topic many formats content system",
    "automate LinkedIn carousels",
    "LinkedIn newsletter generator",
]

FAN_OUT_PATTERNS = {
    "comparison": [
        "best",
        "top 5",
        "top 10",
        "free",
        "free vs paid",
        "for founders",
        "for consultants",
        "for coaches",
        "for agencies",
    ],
    "informational": [
        "what is",
        "how does it work",
        "why use",
        "benefits of",
    ],
    "how_to": [
        "how to create",
        "how to make",
        "how to write",
        "how to design",
        "how to automate",
        "step by step",
    ],
    "commercial": [
        "pricing",
        "cost",
        "free trial",
        "discount",
        "reviews",
        "testimonials",
    ],
    "templates": [
        "templates",
        "examples",
        "ideas",
        "cheat sheet",
        "checklist",
        "prompts",
    ],
    "technical": [
        "size",
        "dimensions",
        "format",
        "font",
        "color",
        "aspect ratio",
        "file size",
        "resolution",
    ],
    "safety_trust": [
        "is safe",
        "safe to use",
        "privacy",
        "risks",
        "disadvantages",
        "pros and cons",
    ],
}


def get_google_autocomplete(keyword: str) -> list:
    """Fetch Google autocomplete suggestions."""
    try:
        url = f"https://suggestqueries.google.com/complete/search?client=firefox&q={quote(keyword)}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode("utf-8"))
            return data[1] if len(data) > 1 else []
    except Exception as e:
        print(f"Autocomplete error for '{keyword}': {e}")
        return []


def expand_fan_out(keyword: str) -> list:
    """Generate fan-out queries from patterns + autocomplete."""
    queries = []

    # Pattern-based expansion
    for intent, patterns in FAN_OUT_PATTERNS.items():
        for pattern in patterns:
            if any(x in pattern for x in ["for", "pricing", "cost", "reviews", "testimonials", "is safe", "safe to use", "privacy", "disadvantages"]):
                q = f"{keyword} {pattern}"
            elif any(x in pattern for x in ["how does", "why use", "benefits of"]):
                q = f"{pattern} {keyword}"
            else:
                q = f"{pattern} {keyword}"

            queries.append({
                "query": q,
                "intent": intent,
                "recommended_page_type": map_page_type(intent),
            })

    # Autocomplete-based expansion
    autocomplete = get_google_autocomplete(keyword)
    for q in autocomplete:
        if q.lower() == keyword.lower():
            continue
        intent = classify_intent(q)
        queries.append({
            "query": q,
            "intent": intent,
            "recommended_page_type": map_page_type(intent),
        })

    # Deduplicate
    seen = set()
    unique = []
    for item in queries:
        key = item["query"].lower()
        if key not in seen and len(key) > 5:
            seen.add(key)
            unique.append(item)

    return unique


def classify_intent(query: str) -> str:
    q = query.lower()
    if any(x in q for x in ["how to", "tutorial", "step by step", "create", "make", "write", "design"]):
        return "how_to"
    if any(x in q for x in ["vs", "compare", "alternative", "best", "top"]):
        return "comparison"
    if any(x in q for x in ["what is", "why", "meaning", "how does", "benefits"]):
        return "informational"
    if any(x in q for x in ["free", "price", "cost", "buy", "tool", "generator", "software"]):
        return "commercial"
    if any(x in q for x in ["template", "example", "sample", "cheat sheet", "checklist", "prompts"]):
        return "templates"
    if any(x in q for x in ["size", "dimensions", "format", "font", "color", "aspect ratio"]):
        return "technical"
    return "informational"


def map_page_type(intent: str) -> str:
    mapping = {
        "comparison": "comparison article",
        "informational": "glossary/explainer",
        "how_to": "how-to guide",
        "commercial": "landing page",
        "templates": "template/cheat sheet",
        "technical": "specs guide",
    }
    return mapping.get(intent, "article")


def load_existing_keywords() -> list:
    csv_path = Path("output/keyword-research/brandops-keywords.csv")
    if not csv_path.exists():
        return []
    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return [row["keyword"].strip() for row in reader if row.get("keyword")]


def main():
    output_dir = Path("output/query-fanout-research")
    output_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    csv_file = output_dir / f"brandops-fanout-queries-free-{timestamp}.csv"
    md_file = output_dir / f"brandops-fanout-report-free-{timestamp}.md"

    csv_rows = []
    report_sections = []

    print(f"Running FREE query fan-out research for {len(SEED_KEYWORDS)} seed keywords...\n")

    for i, keyword in enumerate(SEED_KEYWORDS, 1):
        print(f"[{i}/{len(SEED_KEYWORDS)}] Analyzing: {keyword}")
        fan_out = expand_fan_out(keyword)

        report_sections.append(f"\n## {keyword}\n")
        report_sections.append(f"*Generated {len(fan_out)} fan-out queries*\n\n")

        for item in fan_out:
            query_text = item["query"]
            intent = item["intent"]
            page_type = item["recommended_page_type"]

            csv_rows.append({
                "seed_keyword": keyword,
                "fan_out_query": query_text,
                "intent": intent,
                "recommended_page_type": page_type,
            })
            report_sections.append(f"- **{query_text}** — {intent} → {page_type}\n")

    # Write CSV
    with open(csv_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["seed_keyword", "fan_out_query", "intent", "recommended_page_type"])
        writer.writeheader()
        writer.writerows(csv_rows)

    # Write Markdown report
    md_content = f"""# BrandOps Query Fan-Out Research Report (Free Method)

Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
Seed keywords: {len(SEED_KEYWORDS)}
Fan-out queries found: {len(csv_rows)}
Method: Google autocomplete + pattern expansion

---

""" + "".join(report_sections)

    md_file.write_text(md_content, encoding="utf-8")

    print(f"\n✅ Done.")
    print(f"CSV: {csv_file}")
    print(f"Report: {md_file}")
    print(f"Total fan-out queries: {len(csv_rows)}")


if __name__ == "__main__":
    main()
