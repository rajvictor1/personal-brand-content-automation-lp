import { Pipeline } from "@/components/pipeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Pipeline | Research to LinkedIn Publish",
  description:
    "See the BrandOps pipeline: research with Firecrawl, draft with OpenAI, review everything, and publish to LinkedIn only when you approve.",
  alternates: { canonical: "https://www.brandops.site/pipeline" },
};

export default function PipelinePage() {
  return (
    <div className="pt-16">
      <Pipeline />
    </div>
  );
}
