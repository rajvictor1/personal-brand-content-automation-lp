"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Download } from "lucide-react";
import { Reveal } from "@/components/animations";

export function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    // Placeholder: hook into your email tool here (EmailJS, Beehiiv, ConvertKit)
    setSubmitted(true);
  };

  return (
    <Reveal>
      <div className="rounded-xl border border-white/10 bg-card p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Download className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">Get the LinkedIn Content System</h3>
            <p className="mt-2 text-muted-foreground">
              A 7-step checklist + prompt pack to turn one research topic into a carousel and newsletter every week. Free.
            </p>

            {submitted ? (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-card p-4 text-sm text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Thanks. We will send the checklist to {email} shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 rounded-xl border-white/10 bg-background px-4"
                />
                <Button
                  type="submit"
                  className="h-12 rounded-xl bg-primary px-6 text-primary-foreground transition hover:brightness-110"
                >
                  Send me the checklist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}

            <p className="mt-3 text-xs text-muted-foreground">
              No spam. Unsubscribe anytime. We use your email only to deliver the checklist and BrandOps updates.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function SmallLeadCapture({ label = "Get early access" }: { label?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md">
      {submitted ? (
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-3 text-sm text-foreground">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span>Thanks. We will be in touch.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-11 flex-1 rounded-full border-white/10 bg-background px-4"
          />
          <Button
            type="submit"
            className="h-11 rounded-xl bg-primary px-5 text-primary-foreground transition hover:brightness-110"
          >
            {label}
          </Button>
        </form>
      )}
    </div>
  );
}
