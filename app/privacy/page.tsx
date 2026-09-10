import { Reveal } from "@/components/animations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | How BrandOps Handles Your Data",
  description:
    "Read the BrandOps privacy policy. Learn what data we collect, how we use it, who we share it with, and how to request deletion or access.",
  alternates: { canonical: "https://www.brandops.site/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="relative px-4 pb-24 pt-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Legal</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p>
              This Privacy Policy explains how BrandOps collects, uses, and protects your information
              when you use our website and services.
            </p>

            <h2 className="text-xl font-semibold text-foreground">1. Information we collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Contact information (name, email) when you join the early-access waitlist.</li>
              <li>Usage data such as pages visited and interaction events to improve the product.</li>
              <li>API keys and configuration settings supplied by you to enable generation features.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">2. How we use information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Provide and improve the BrandOps workspace.</li>
              <li>Communicate with you about early access, updates, and support.</li>
              <li>Understand product usage and fix issues.</li>
            </ul>

            <h2 className="text-xl font-semibold text-foreground">3. Data security</h2>
            <p>
              Provider credentials such as API keys are read only by server-side code and are never
              exposed to the browser or embedded in client-side bundles.
            </p>

            <h2 className="text-xl font-semibold text-foreground">4. Third-party services</h2>
            <p>
              BrandOps uses third-party providers including Firecrawl, OpenAI, Resend, and LinkedIn.
              Your data is processed according to their respective privacy policies when you use those
              integrations.
            </p>

            <h2 className="text-xl font-semibold text-foreground">5. Cookies and analytics</h2>
            <p>
              We may use essential cookies and analytics tools to understand how visitors use the site.
              You can disable non-essential tracking through your browser settings.
            </p>

            <h2 className="text-xl font-semibold text-foreground">6. Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data by contacting
              us. We will respond within a reasonable timeframe.
            </p>

            <h2 className="text-xl font-semibold text-foreground">7. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              available at this URL.
            </p>

            <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
            <p>For privacy questions, contact us at <a href="/contact" className="text-primary hover:underline">brandops.site/contact</a>.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
