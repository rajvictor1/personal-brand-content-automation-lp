import { Pipeline } from "@/components/pipeline";
import { Metadata } from "next";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Content Pipeline | Research to LinkedIn Publish",
  description:
    "See the BrandOps pipeline: research with Firecrawl, draft with OpenAI, review everything, and publish to LinkedIn only when you approve.",
  alternates: { canonical: `${BRANDOPS_URL}/pipeline` },
};

export default function PipelinePage() {
  const url = `${BRANDOPS_URL}/pipeline`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Pipeline", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(
          "Content Pipeline | Research to LinkedIn Publish",
          "See the BrandOps pipeline: research with Firecrawl, draft with OpenAI, review everything, and publish when you approve.",
          url
        ),
        breadcrumb,
      ])}
      <div className="pt-16">
        <Pipeline />
      </div>
    </>
  );
}
