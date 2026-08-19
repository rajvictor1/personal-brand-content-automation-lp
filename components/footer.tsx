import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Carousel workflow", href: "/features/carousel-workflow" },
      { label: "Newsletter workflow", href: "/features/newsletter-workflow" },
      { label: "Review-first publishing", href: "/features/review-first-publishing" },
      { label: "LinkedIn carousel generator", href: "/linkedin-carousel-generator" },
      { label: "AI newsletter generator", href: "/ai-newsletter-generator" },
      { label: "LinkedIn automation tool", href: "/linkedin-automation-tool" },
      { label: "Pipeline", href: "/pipeline" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "All resources", href: "/resources" },
      { label: "Guides", href: "/resources/category/guides" },
      { label: "Cheat Sheets", href: "/resources/cheat-sheets" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Templates", href: "/resources/category/templates" },
      { label: "Glossary", href: "/resources/category/glossary" },
    ],
  },
    {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Contact", href: "/contact" },
      { label: "Book a Demo", href: "/demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal hub", href: "/legal" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "GDPR", href: "/legal/gdpr" },
      { label: "Security", href: "/legal/security" },
      { label: "Data Retention", href: "/legal/data-retention" },
    ],
  },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "GitHub", href: "https://github.com" },
];

const SocialIcon = ({ label }: { label: string }) => {
  if (label === "Twitter") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              BrandOps
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A review-first content workspace for solo operators, trainers, and founders who want to publish more without losing control.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border/50 bg-background p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} BrandOps. All rights reserved.</p>
          <p>Built for solo operators. Review-first.</p>
        </div>
      </div>
    </footer>
  );
}
