"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2, Mail, Calendar, Shield, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const features = [
  {
    icon: Sparkles,
    text: "See how AI turns one research topic into a LinkedIn carousel and a cited newsletter.",
  },
  {
    icon: Users,
    text: "Understand the review-first workflow where you approve every slide and paragraph.",
  },
  {
    icon: Shield,
    text: "Learn how server-side credentials and approval gates keep your brand safe.",
  },
  {
    icon: Calendar,
    text: "Get your questions answered and receive a clear onboarding plan for your use case.",
  },
];

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const from_name = `${formData.get("first_name")} ${formData.get("last_name")}`.trim();

    const templateParams = {
      from_name,
      from_email: formData.get("email"),
      phone: formData.get("phone") || "Not provided",
      company: formData.get("company") || "Not provided",
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zjgaiae",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_s5q3416",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "n4OeXbwa_zVHVMPml"
      );
      setIsSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or email us directly at support@brandops.site.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left column - value prop */}
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary">
                  Personalized walkthrough
                </Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Book a 30-minute{" "}
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    demo
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  A personalized tour of the BrandOps workspace and see how we help solo founders, trainers, and consultants publish content without losing control.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">What happens during the demo</h2>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-4 rounded-xl border border-border/50 bg-muted/30 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-muted/30 p-6">
                <p className="text-sm text-muted-foreground">
                  Trusted by solo operators who want a review-first AI content system for LinkedIn carousels and newsletters.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right column - form card */}
          <Reveal delay={0.15}>
            <div className="relative rounded-2xl border border-border/50 bg-card p-6 shadow-2xl sm:p-8">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50 blur-sm" />
              <div className="relative space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-foreground">See BrandOps in action</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill the form and we will reach out within 24 hours.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center space-y-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                    <CheckCircle className="h-12 w-12 text-emerald-500" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-emerald-500">Request sent</h3>
                      <p className="text-sm text-muted-foreground">
                        We received your demo request. Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first_name">First name *</Label>
                        <Input
                          id="first_name"
                          name="first_name"
                          placeholder="Jane"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last_name">Last name *</Label>
                        <Input
                          id="last_name"
                          name="last_name"
                          placeholder="Smith"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Work email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc."
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help? *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="I want to understand how BrandOps can help me publish LinkedIn carousels and newsletters every week."
                        required
                        rows={4}
                        className="bg-background/50 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400">{error}</p>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      We respect your privacy. By submitting, you agree to our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>
                      .
                    </p>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
