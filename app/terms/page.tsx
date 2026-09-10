import { Reveal } from "@/components/animations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BrandOps Content Platform Agreement",
  description:
    "Read the BrandOps terms of service. Learn the rules for using our review-first AI content platform for LinkedIn carousels and newsletters.",
  alternates: { canonical: "https://www.brandops.site/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Legal</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              These Terms of Service govern your use of BrandOps. By accessing or using the service,
              you agree to be bound by these terms. If you do not agree, do not use the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Service description</h2>
            <p>
              BrandOps is a review-first content workspace that helps users generate LinkedIn carousel
              assets and newsletter drafts from current research sources. BrandOps does not publish
              content automatically; every publish action requires explicit user review and confirmation.
            </p>

            <h2 className="text-xl font-semibold text-foreground">2. User accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of any credentials, API keys, or
              tokens used with the service. You may not share access with unauthorized third parties.
            </p>

            <h2 className="text-xl font-semibold text-foreground">3. Acceptable use</h2>
            <p>You agree not to use BrandOps to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Generate or distribute unlawful, harmful, defamatory, or infringing content.</li>
              <li>Abuse third-party APIs or violate their terms of service.</li>
              <li>Reverse engineer, scrape, or interfere with the platform.</li>
              <li>Use the service to spam or mislead audiences.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">4. Third-party services</h2>
            <p>
              BrandOps integrates with third-party services such as Firecrawl, OpenAI, Resend, and
              LinkedIn. Your use of those services is governed by their respective terms and policies.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Disclaimers</h2>
            <p>
              BrandOps is provided &ldquo;as is&rdquo; without warranties of any kind. Generated content is
              produced with AI assistance and should be reviewed before publication.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, BrandOps and its operators shall not be liable
              for any indirect, incidental, or consequential damages arising from your use of the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Changes to terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the service after changes
              constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
            <p>For questions about these terms, contact us at <a href="/contact" className="text-primary hover:underline">brandops.site/contact</a>.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
