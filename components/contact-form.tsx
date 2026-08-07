"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const from_name = `${formData.get("first_name")} ${formData.get("last_name")}`.trim();
    const from_email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const company = String(formData.get("company") ?? "");
    const message = String(formData.get("message") ?? "");

    const issues: Record<string, string> = {};
    if (from_name.length < 2) issues.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email)) issues.email = "Enter a valid email";
    if (message.length < 10) issues.message = "Message must be at least 10 characters";

    if (Object.keys(issues).length > 0) {
      setErrors(issues);
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_zjgaiae",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_s5q3416",
        {
          from_name,
          from_email,
          phone: phone || "Not provided",
          company: company || "Not provided",
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "n4OeXbwa_zVHVMPml"
      );

      toast.success("Thank you — we'll be in touch soon.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again or email us directly at support@brandops.site.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first_name">First name *</Label>
          <Input
            id="first_name"
            name="first_name"
            placeholder="Jane"
            className="border-border/50 bg-background/50"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name">Last name *</Label>
          <Input
            id="last_name"
            name="last_name"
            placeholder="Smith"
            className="border-border/50 bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="border-border/50 bg-background/50"
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="border-border/50 bg-background/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Inc."
            className="border-border/50 bg-background/50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us what you are building..."
          rows={5}
          className="border-border/50 bg-background/50"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Send className="mr-2 h-4 w-4" />
        )}
        Send message
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Want a personal walkthrough?{" "}
        <Link href="/demo" className="text-primary hover:underline">
          Book a 30-minute demo
        </Link>
        .
      </p>
    </form>
  );
}
