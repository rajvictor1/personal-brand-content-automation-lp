#!/usr/bin/env python3
"""
Query fan-out research for BrandOps.

Uses Gemini API with Google Search Grounding to extract the actual sub-queries
Google uses internally to answer a complex search query.

Usage:
    cd /Users/mac/Desktop/personal-brand-content-automation-lp
    python3 scripts/query-fanout-research.py

Requires:
    GEMINI_API_KEY in .env.local
"""

import csv
import json
import os
import re
import time
from datetime import datetime
from pathlib import Path

from dotenv import load_dotenv
from google import genai
from google.genai.types import GenerateContentConfig, Tool, GoogleSearch

# Load API key from .env.local
load_dotenv(Path(__file__).parent.parent / ".env.local")
API_KEY = os.getenv("GEMINI_API_KEY")

if not API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env.local")

# Seed keywords to analyze
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

PROMPT_TEMPLATE = """You are a search engine query analyst.

A user searches for this exact query on Google:
"{keyword}"

To answer this query in AI Mode or AI Overview, Google uses "query fan-out" — it breaks the main query into multiple related sub-queries and searches for each one.

Your task:
1. List the exact sub-queries (fan-out queries) Google would likely run to build a complete answer.
2. For each sub-query, state the search intent (informational, commercial, comparison, how-to).
3. Suggest what type of page would best answer each sub-query (landing page, comparison article, how-to guide, template, FAQ).

Return your response as valid JSON in this exact format:
{{
  "fan_out_queries": [
    {{
      "query": "exact sub-query",
      "intent": "informational|commercial|comparison|how-to|navigational",
      "recommended_page_type": "landing page|comparison article|how-to guide|template|faq|glossary|cheat sheet"
    }}
  ]
}}

Return ONLY JSON. No extra text, no markdown formatting."""


def call_gemini(keyword: str) -> dict:
    """Call Gemini API with Google Search Grounding and return parsed JSON."""
    client = genai.Client(api_key=API_KEY)
    google_search_tool = Tool(google_search=GoogleSearch())

    prompt = PROMPT_TEMPLATE.format(keyword=keyword)

    response = client.models.generate_content(
        model="gemini-3.6-flash",
        contents=prompt,
        config=GenerateContentConfig(
            tools=[google_search_tool],
            response_modalities=["TEXT"],
        ),
    )

    text = response.text
    # Extract JSON from possible markdown code block
    if "```json" in text:
        text = text.split("```json")[1].split("```")[0]
    elif "```" in text:
        text = text.split("```")[1].split("```")[0]

    # Clean stray characters
    text = text.strip()
    return json.loads(text)


def main():
    output_dir = Path("output/query-fanout-research")
    output_dir.mkdir(parents=True, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    csv_file = output_dir / f"brandops-fanout-queries-{timestamp}.csv"
    md_file = output_dir / f"brandops-fanout-report-{timestamp}.md"

    csv_rows = []
    report_sections = []

    print(f"Running query fan-out research for {len(SEED_KEYWORDS)} seed keywords...\n")

    for i, keyword in enumerate(SEED_KEYWORDS, 1):
        print(f"[{i}/{len(SEED_KEYWORDS)}] Analyzing: {keyword}")
        try:
            data = call_gemini(keyword)
            queries = data.get("fan_out_queries", [])

            report_sections.append(f"\n## {keyword}\n")
            for q in queries:
                query_text = q.get("query", "").strip()
                intent = q.get("intent", "").strip()
                page_type = q.get("recommended_page_type", "").strip()

                if query_text:
                    csv_rows.append({
                        "seed_keyword": keyword,
                        "fan_out_query": query_text,
                        "intent": intent,
                        "recommended_page_type": page_type,
                    })
                    report_sections.append(f"- **{query_text}** — {intent} → {page_type}\n")

            time.sleep(1.5)  # Be nice to the API
        except Exception as e:
            print(f"Error for '{keyword}': {e}")
            report_sections.append(f"\n## {keyword}\n\nError: {e}\n")

    # Write CSV
    with open(csv_file, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["seed_keyword", "fan_out_query", "intent", "recommended_page_type"])
        writer.writeheader()
        writer.writerows(csv_rows)

    # Write Markdown report
    md_content = f"""# BrandOps Query Fan-Out Research Report

Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
Seed keywords: {len(SEED_KEYWORDS)}
Fan-out queries found: {len(csv_rows)}

---

""" + "".join(report_sections)

    md_file.write_text(md_content, encoding="utf-8")

    print(f"\n✅ Done.")
    print(f"CSV: {csv_file}")
    print(f"Report: {md_file}")
    print(f"Total fan-out queries: {len(csv_rows)}")


if __name__ == "__main__":
    main()
