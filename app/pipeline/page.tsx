import { Pipeline } from "@/components/pipeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "See how BrandOps connects Firecrawl, OpenAI, review gates, and publishing into one content workflow.",
};

export default function PipelinePage() {
  return (
    <div className="pt-16">
      <Pipeline />
    </div>
  );
}
