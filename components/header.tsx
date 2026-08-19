"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const nav = [
  {
    label: "Home",
    href: "/",
    type: "simple" as const,
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
      { label: "All resources", href: "/resources", description: "Guides, webinars, cheat sheets, and videos" },
      { label: "Guides", href: "/resources/category/guides", description: "Step-by-step workflows" },
      { label: "Webinars", href: "/resources/webinars", description: "Live trainings and replays" },
      { label: "Cheat Sheets", href: "/resources/cheat-sheets", description: "Quick-reference one-pagers" },
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
  { label: "Features", href: "/features" },
  { label: "Pipeline", href: "/pipeline" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Support", href: "/support" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
  { label: "Book Demo", href: "/demo" },
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
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        onClick={() => setOpen(!open)}
      >
        <Link href={section.href} className="hover:text-foreground">{section.label}</Link>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 w-[240px] rounded-xl border border-border/50 bg-card/95 p-2 shadow-xl backdrop-blur-xl">
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
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">BrandOps</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) =>
            item.type === "simple" ? (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <NavDropdown key={item.label} section={item} />
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 md:block"
          >
            Book a demo
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:block"
          >
            Get early access
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {mobileNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                >
                  Get early access
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
