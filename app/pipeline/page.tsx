import { Pipeline } from "@/components/pipeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline",
  description:
    "See how Firecrawl, OpenAI, review gates, and publishing connect in the content automation workflow.",
};

export default function PipelinePage() {
  return (
    <div className="pt-16">
      <Pipeline />
    </div>
  );
}
