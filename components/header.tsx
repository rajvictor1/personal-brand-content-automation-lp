"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Sparkles, X, ChevronDown } from "lucide-react";

const nav = [
  {
    label: "Home",
    href: "/",
    type: "simple" as const,
  },
  {
    label: "Services",
    href: "/services",
    type: "dropdown" as const,
    items: [
      { label: "AI Content for LinkedIn \u0026 Newsletter", href: "/services/linkedin-content", description: "Turn expertise into consistent LinkedIn and newsletter content" },
      { label: "AI-Ready Website Design \u0026 Development", href: "/services/ai-website-design-development", description: "Fast, search-friendly Next.js websites" },
      { label: "Website Lead Magnets", href: "/services/website-lead-magnets", description: "Capture leads with useful downloadable assets" },
      { label: "AEO/GEO Visibility Card", href: "/services/aeo-geo-visibility", description: "Understand how your brand appears in AI-generated answers" },
      { label: "YouTube Research \u0026 Content Strategy", href: "/services/youtube-research", description: "Turn competitor and video research into content briefs" },
    ],
  },
  {
    label: "Features",
    href: "/features",
    type: "dropdown" as const,
    items: [
      { label: "Carousel workflow", href: "/features/carousel-workflow", description: "Research to LinkedIn carousel" },
      { label: "Newsletter workflow", href: "/features/newsletter-workflow", description: "Cited newsletter drafts" },
      { label: "Review-first publishing", href: "/features/review-first-publishing", description: "Approve before anything goes live" },
      { label: "LinkedIn carousel generator", href: "/linkedin-carousel-generator", description: "Free AI carousel generator" },
      { label: "AI newsletter generator", href: "/ai-newsletter-generator", description: "Free AI newsletter generator" },
      { label: "LinkedIn automation tool", href: "/linkedin-automation-tool", description: "Automate LinkedIn content" },
    ],
  },
  {
    label: "Pipeline",
    href: "/pipeline",
    type: "simple" as const,
  },
  {
    label: "Resources",
    href: "/resources",
    type: "dropdown" as const,
    items: [
      { label: "Guides", href: "/resources/category/guides", description: "Step-by-step workflows" },
      { label: "Webinars", href: "/resources/webinars", description: "Live trainings and replays" },
      { label: "Cheat Sheets", href: "/resources/cheat-sheets", description: "Quick-reference one-pagers" },
      { label: "Templates", href: "/resources/category/templates", description: "Ready-to-use templates" },
      { label: "Glossary", href: "/resources/category/glossary", description: "SEO and AI search terms" },
      { label: "Reports", href: "/resources/category/reports", description: "Data and statistics" },
      { label: "Videos", href: "/resources/videos", description: "Tutorials and walkthroughs" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    type: "dropdown" as const,
    items: [
      { label: "About", href: "/about", description: "Mission and values" },
      { label: "Founder", href: "/founder", description: "Meet the operator" },
      { label: "Careers", href: "/careers", description: "Join our team" },
      { label: "Support", href: "/support", description: "24/7 help" },
      { label: "Contact", href: "/contact", description: "Get in touch" },
      { label: "Book a Demo", href: "/demo", description: "30-min walkthrough" },
    ],
  },
];

const mobileNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "AI Content", href: "/services/linkedin-content" },
  { label: "Website Design", href: "/services/ai-website-design-development" },
  { label: "Lead Magnets", href: "/services/website-lead-magnets" },
  { label: "AEO/GEO Visibility", href: "/services/aeo-geo-visibility" },
  { label: "YouTube Research", href: "/services/youtube-research" },
  { label: "Features", href: "/features" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function NavDropdown({
  section,
}: {
  section: {
    label: string;
    href: string;
    items: { label: string; href: string; description: string }[];
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={() => setOpen(!open)}
      >
        <Link href={section.href} className="hover:text-foreground">{section.label}</Link>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-[240px] rounded-xl border border-white/10 bg-card p-2 shadow-xl">
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md p-3 transition-colors hover:bg-secondary"
                  onClick={() => setOpen(false)}
                >
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-lg font-semibold tracking-tight">BrandOps</span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-muted-foreground md:flex">
          {nav.map((item) =>
            item.type === "simple" ? (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 font-medium transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <NavDropdown key={item.label} section={item} />
            )
          )}
          <Link
            href="/contact"
            className="ml-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-110"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-muted-foreground md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-lg font-semibold tracking-tight">BrandOps</span>
            </Link>
            <button
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-muted-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              {mobileNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
