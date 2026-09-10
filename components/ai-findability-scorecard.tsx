"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Loader2, Download, Search, CheckCircle2, AlertCircle } from "lucide-react";
import jsPDF from "jspdf";
import { AIFindabilityResult } from "@/lib/aiFindabilityAudit";

function scoreColor(score: number): string {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-amber-500";
  if (score >= 40) return "bg-orange-500";
  return "bg-rose-500";
}

function generatePDF(result: AIFindabilityResult) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 16;
  let y = 20;

  doc.setFillColor(15, 15, 25);
  doc.rect(0, 0, pageWidth, 40, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.text("AI Findability Scorecard", margin, 25);
  doc.setFontSize(11);
  doc.text(`for ${result.url}`, margin, 33);

  y = 52;
  doc.setTextColor(30, 30, 40);
  doc.setFontSize(12);
  doc.text("Overall Score", margin, y);
  y += 8;
  doc.setFontSize(36);
  doc.setTextColor(result.overallScore >= 80 ? 16 : result.overallScore >= 60 ? 245 : 239, 185, 129);
  doc.text(`${result.overallScore}/100`, margin, y);
  y += 10;
  doc.setFontSize(12);
  doc.setTextColor(80, 80, 90);
  doc.text(`${result.pdfHeadline} | ${new Date().toLocaleDateString()}`, margin, y);
  y += 14;

  doc.setTextColor(30, 30, 40);
  doc.setFontSize(13);
  doc.text("Category Breakdown", margin, y);
  y += 8;

  for (const cat of result.categories) {
    doc.setFontSize(11);
    doc.text(`${cat.name}: ${cat.score}/100`, margin, y);
    y += 6;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 110);
    const split = doc.splitTextToSize(cat.feedback, pageWidth - margin * 2);
    doc.text(split, margin, y);
    y += split.length * 4 + 6;
  }

  y += 4;
  doc.setTextColor(30, 30, 40);
  doc.setFontSize(13);
  doc.text("Top 3 Quick Wins", margin, y);
  y += 8;
  doc.setFontSize(10);
  for (const win of result.quickWins) {
    const split = doc.splitTextToSize(`• ${win}`, pageWidth - margin * 2);
    doc.text(split, margin, y);
    y += split.length * 4.5 + 3;
  }

  y += 8;
  if (y > 240) {
    doc.addPage();
    y = 20;
  }
  doc.setFillColor(245, 245, 250);
  doc.rect(margin, y, pageWidth - margin * 2, 40, "F");
  doc.setTextColor(30, 30, 40);
  doc.setFontSize(12);
  doc.text("Want to keep your personal brand AI-findable?", margin + 4, y + 10);
  doc.setFontSize(10);
  doc.text("BrandOps turns one research topic into a cited LinkedIn carousel + newsletter", margin + 4, y + 18);
  doc.setTextColor(79, 70, 229);
  doc.text("with a review-first publish gate.", margin + 4, y + 25);
  doc.text("Join the early-access list at brandops.site", margin + 4, y + 33);

  doc.save(`ai-findability-scorecard-${result.url.replace(/[^a-z0-9]/gi, "_")}.pdf`);
}

export function AIFindabilityScorecard() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AIFindabilityResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!url.trim()) {
      setError("Enter a website URL.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email to get your scorecard.");
      return;
    }
    if (!consent) {
      setError("Please agree to receive your scorecard and follow-up tips.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/geo-scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Audit failed");
      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Card className="border border-white/10 bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Search className="h-5 w-5 text-primary" />
            Enter your website and email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="scorecard-url">Website URL</Label>
                <Input
                  id="scorecard-url"
                  type="url"
                  placeholder="https://yourdomain.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="scorecard-email">Email address</Label>
                <Input
                  id="scorecard-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white/10 bg-background text-primary"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                I agree to receive my scorecard and a short AI findability tip series from BrandOps. No spam. Unsubscribe anytime.
              </span>
            </label>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-400">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full rounded-xl bg-primary text-primary-foreground hover:brightness-110"
              size="lg"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing your site…
                </>
              ) : (
                "Get my free AI Findability score"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <div className="mt-10 space-y-6">
          <Card className="border border-white/10 bg-card">
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-muted-foreground">Overall AI Findability Score</p>
                  <h3 className="text-5xl font-bold text-foreground">{result.overallScore}/100</h3>
                  <p className="mt-1 text-lg font-medium text-primary">{result.pdfHeadline}</p>
                </div>
                <Button
                  onClick={() => generatePDF(result)}
                  className="rounded-xl bg-primary text-primary-foreground hover:brightness-110"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF report
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {result.categories.map((cat) => (
              <Card key={cat.name} className="border border-white/10 bg-card">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{cat.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{cat.feedback}</p>
                    </div>
                    <Badge className={`${scoreColor(cat.score)} text-white`}>
                      {cat.score}
                    </Badge>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full ${scoreColor(cat.score)}`}
                      style={{ width: `${cat.score}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border border-white/10 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Your top 3 quick wins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.quickWins.map((win, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {i + 1}
                    </span>
                    {win}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Separator className="bg-white/10" />

          <div className="rounded-xl border border-white/10 bg-card p-6 text-center">
            <p className="text-sm font-medium text-foreground">
              Want to keep your personal brand AI-findable?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              BrandOps turns one research topic into a cited LinkedIn carousel + newsletter with a review-first publish gate.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Join the early-access list
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
