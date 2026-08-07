import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact BrandOps | Get Help With Your Content Workflow",
  description:
    "Reach the BrandOps team for setup help, feature questions, or partnership inquiries. We read every message and reply with clear next steps.",
  alternates: { canonical: "https://brandops.site/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
          >
            Early access
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 text-lg text-muted-foreground">
            Tell us what you are building and we will add you to the early-access list.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border/50 bg-card/40 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
