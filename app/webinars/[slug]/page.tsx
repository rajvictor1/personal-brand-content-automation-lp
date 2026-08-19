import { getWebinarBySlug, webinars } from "@/lib/webinars";
import { WebinarPage as WebinarPageComponent, generateWebinarMetadata } from "@/components/webinar-page";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return webinars.map((webinar) => ({
    slug: webinar.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const webinar = getWebinarBySlug(params.slug);
  if (!webinar) return {};
  return generateWebinarMetadata(webinar);
}

export default function WebinarDetailPage({ params }: { params: { slug: string } }) {
  const webinar = getWebinarBySlug(params.slug);
  if (!webinar) {
    notFound();
  }
  return <WebinarPageComponent webinar={webinar} />;
}
