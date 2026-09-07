export interface AIFindabilityCategory {
  name: string;
  score: number; // 0-100
  weight: number;
  feedback: string;
}

export interface AIFindabilityResult {
  overallScore: number;
  url: string;
  categories: AIFindabilityCategory[];
  quickWins: string[];
  pdfHeadline: string;
}

function normalizeUrl(input: string): string {
  let url = input.trim();
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  return url;
}

export async function auditAIFindability(inputUrl: string): Promise<AIFindabilityResult> {
  const url = normalizeUrl(inputUrl);
  let html = "";
  let fetchOk = false;

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; BrandOpsAIFindabilityBot/1.0)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
    fetchOk = true;
  } catch {
    // Site unreachable
  }

  const lowerHtml = html.toLowerCase();

  // 1. AI Crawler Access
  let crawlerScore = 50;
  const blockedCrawlers: string[] = [];
  let robotsTxt = "";
  try {
    const robotsUrl = new URL("/robots.txt", url).toString();
    const robotsRes = await fetch(robotsUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (robotsRes.ok) robotsTxt = (await robotsRes.text()).toLowerCase();
  } catch {
    // ignore
  }
  const aiAgents = ["gptbot", "claudebot", "perplexitybot", "oai-searchbot", "google-extended", "applebot-extended", "anthropic-ai"];
  for (const agent of aiAgents) {
    if (robotsTxt.includes("user-agent: " + agent) && robotsTxt.includes("disallow: /")) {
      blockedCrawlers.push(agent);
    }
  }
  if (blockedCrawlers.length === 0) crawlerScore = 90;
  else if (blockedCrawlers.length <= 2) crawlerScore = 60;
  else crawlerScore = 30;
  if (!fetchOk) crawlerScore = 0;

  // 2. Content Citability
  const hasH1 = /<h1[\s>]/i.test(html);
  const hasFAQ = /faq|frequently asked questions/i.test(html) && /<details|<faq/i.test(html);
  const hasLists = /<ul[\s>]/i.test(html) || /<ol[\s>]/i.test(html);
  const wordCount = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  let citabilityPoints = 0;
  if (hasH1) citabilityPoints += 20;
  if (wordCount > 300) citabilityPoints += 20;
  if (hasLists) citabilityPoints += 20;
  if (hasFAQ || lowerHtml.includes("what is") || lowerHtml.includes("how to")) citabilityPoints += 20;
  if (/<h2[\s>]/i.test(html) && /<h3[\s>]/i.test(html)) citabilityPoints += 20;
  const citabilityScore = fetchOk ? citabilityPoints : 0;

  // 3. E-E-A-T Signals
  const hasAuthor = /author|byline|written by/i.test(html);
  const hasAbout = /about/i.test(html);
  const hasDate = /published|updated|\d{4}-\d{2}-\d{2}/i.test(html);
  const hasSourceLinks = /<a[^>]+href="https?:\/\//i.test(html);
  let eeatPoints = 0;
  if (hasAuthor) eeatPoints += 25;
  if (hasAbout) eeatPoints += 25;
  if (hasDate) eeatPoints += 25;
  if (hasSourceLinks) eeatPoints += 25;
  const eeatScore = fetchOk ? eeatPoints : 0;

  // 4. Schema / Structured Data
  let schemaScore = 0;
  if (lowerHtml.includes("application/ld+json")) {
    schemaScore = 40;
    if (lowerHtml.includes("organization")) schemaScore += 15;
    if (lowerHtml.includes("person")) schemaScore += 15;
    if (lowerHtml.includes("article")) schemaScore += 15;
    if (lowerHtml.includes("website")) schemaScore += 15;
  } else {
    schemaScore = 15;
  }
  if (!fetchOk) schemaScore = 0;

  // 5. Technical GEO
  const isHttps = url.startsWith("https://");
  const hasViewport = /<meta[^>]+viewport/i.test(html);
  const hasCanonical = /<link[^>]+rel="canonical"/i.test(html);
  const hasLang = /<html[^>]+lang=/i.test(html);
  let techPoints = 0;
  if (isHttps) techPoints += 25;
  if (hasViewport) techPoints += 25;
  if (hasCanonical) techPoints += 25;
  if (hasLang) techPoints += 25;
  const technicalScore = fetchOk ? techPoints : 0;

  // 6. Platform / Shareability
  const hasOG = /<meta[^>]+property="og:/i.test(html);
  const hasTwitter = /<meta[^>]+name="twitter:/i.test(html);
  const hasLLMsTxt = lowerHtml.includes("llms.txt");
  let platformPoints = 0;
  if (hasOG) platformPoints += 35;
  if (hasTwitter) platformPoints += 35;
  if (hasLLMsTxt) platformPoints += 30;
  const platformScore = fetchOk ? platformPoints : 20;

  const categories: AIFindabilityCategory[] = [
    { name: "AI Crawler Access", score: crawlerScore, weight: 0.2, feedback: crawlerFeedback(crawlerScore, blockedCrawlers) },
    { name: "Content Citability", score: citabilityScore, weight: 0.25, feedback: citabilityFeedback(citabilityScore) },
    { name: "E-E-A-T Signals", score: eeatScore, weight: 0.15, feedback: eeatFeedback(eeatScore) },
    { name: "Schema & Structured Data", score: schemaScore, weight: 0.15, feedback: schemaFeedback(schemaScore) },
    { name: "Technical GEO", score: technicalScore, weight: 0.1, feedback: technicalFeedback(technicalScore) },
    { name: "Platform Readiness", score: platformScore, weight: 0.15, feedback: platformFeedback(platformScore) },
  ];

  const overallScore = Math.round(
    categories.reduce((sum, cat) => sum + cat.score * cat.weight, 0)
  );

  const quickWins = deriveQuickWins(categories, { hasOG, hasTwitter, hasSchema: lowerHtml.includes("application/ld+json"), hasH1, hasAbout, hasAuthor });

  return {
    overallScore,
    url,
    categories,
    quickWins,
    pdfHeadline: scoreLabel(overallScore),
  };
}

function crawlerFeedback(score: number, blocked: string[]): string {
  if (score >= 90) return "Major AI crawlers can access your site.";
  if (score >= 60) return `${blocked.length} AI crawler(s) may be blocked; review robots.txt.`;
  if (score === 0) return "Could not reach your site or all AI crawlers appear blocked.";
  return "Several AI crawlers appear blocked; this limits AI search visibility.";
}

function citabilityFeedback(score: number): string {
  if (score >= 80) return "Content is well-structured for AI extraction.";
  if (score >= 50) return "Add more headings, lists, and direct answers to improve AI quotes.";
  return "Content is thin or poorly structured; AI systems will struggle to cite it.";
}

function eeatFeedback(score: number): string {
  if (score >= 75) return "Strong author and trust signals.";
  if (score >= 50) return "Add clearer author attribution and publication dates.";
  return "Missing author, about, or date signals; trust is low for AI citation.";
}

function schemaFeedback(score: number): string {
  if (score >= 70) return "Good schema coverage; keep it validated.";
  if (score >= 40) return "Add Organization, Person, Article, or WebSite schema.";
  return "No structured data found; AI engines have little context about your brand.";
}

function technicalFeedback(score: number): string {
  if (score >= 75) return "Technical fundamentals are solid.";
  if (score >= 50) return "Add canonical tags, viewport, or language attributes.";
  return "Technical GEO basics are missing; fix HTTPS, viewport, and canonical tags.";
}

function platformFeedback(score: number): string {
  if (score >= 70) return "Social/Open Graph tags are present.";
  if (score >= 40) return "Add Open Graph and Twitter Card tags for richer AI previews.";
  return "Missing Open Graph and Twitter tags; sharing and AI previews are weak.";
}

function scoreLabel(score: number): string {
  if (score >= 80) return "Highly AI-findable";
  if (score >= 60) return "AI-findable with gaps";
  if (score >= 40) return "Weak AI findability";
  return "Hard to find by AI";
}

function deriveQuickWins(
  categories: AIFindabilityCategory[],
  flags: Record<string, boolean>
): string[] {
  const wins: string[] = [];
  const low = categories.filter((c) => c.score < 60).sort((a, b) => a.score - b.score);
  for (const cat of low.slice(0, 3)) {
    if (cat.name === "AI Crawler Access") wins.push("Allow major AI crawlers in robots.txt (GPTBot, ClaudeBot, PerplexityBot).");
    if (cat.name === "Content Citability") wins.push("Add an H1 + FAQ section with direct answers to common questions.");
    if (cat.name === "E-E-A-T Signals") wins.push("Add an About page and author byline with credentials on key pages.");
    if (cat.name === "Schema & Structured Data") wins.push("Add JSON-LD Organization and Person schema to your homepage.");
    if (cat.name === "Technical GEO") wins.push("Add canonical URL, viewport, and lang attributes to every page.");
    if (cat.name === "Platform Readiness") wins.push("Add Open Graph and Twitter Card meta tags for richer AI previews.");
  }
  if (!flags.hasOG) wins.push("Add Open Graph title, description, and image meta tags.");
  if (!flags.hasSchema) wins.push("Implement JSON-LD schema for your brand and key pages.");
  if (!flags.hasAbout) wins.push("Create a clear About page that explains who you are and why you matter.");

  return wins.slice(0, 3);
}
