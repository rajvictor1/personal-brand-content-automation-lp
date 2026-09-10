import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { resources, ResourcePost, ResourceCategory } from "@/lib/resources";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildCollectionPage,
  buildOrganization,
  renderSchemas,
} from "@/lib/schema";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return ["guides", "templates", "glossary", "reports"].map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const label = params.category.charAt(0).toUpperCase() + params.category.slice(1);
  const labelLower = label.toLowerCase();
  return {
    title: `${label} for Personal Brands | BrandOps Resources`,
    description: `Free ${labelLower}, playbooks, and workflow guides for solo founders and trainers building a review-first LinkedIn and newsletter content system.`,
    alternates: { canonical: `${BRANDOPS_URL}/resources/category/${params.category}` },
  };
}

const categories: ResourceCategory[] = ["Guides", "Templates", "Glossary", "Reports"];

function ResourceCard({ post }: { post: ResourcePost }) {
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-primary/30"
    >
      <div className="mb-4 flex items-center gap-3">
        <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
          {post.category}
        </Badge>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" /> {post.readingTime} min read
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.description}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </Link>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1) as ResourceCategory;
  const filtered = resources.filter((r) => r.category === category);
  const url = `${BRANDOPS_URL}/resources/category/${params.category}`;
  const itemUrls = filtered.map((r) => `${BRANDOPS_URL}/resources/${r.slug}`);
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Resources", url: `${BRANDOPS_URL}/resources` },
    { name: category, url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildCollectionPage(
          `${category} for Personal Brands`,
          `Free ${category.toLowerCase()}, playbooks, and workflow guides for solo founders and trainers building a review-first LinkedIn and newsletter content system.`,
          url,
          itemUrls
        ),
        breadcrumb,
      ])}
      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              {category}
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {filtered.length} resource{filtered.length === 1 ? "" : "s"} for personal-brand builders.
            </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.3} className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/resources"
                className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                All
              </Link>
              {categories.map((cat) => {
                const active = cat === category;
                return (
                  <Link
                    key={cat}
                    href={`/resources/category/${cat.toLowerCase()}`}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-primary text-primary-foreground"
                        : "border border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </Reveal>

          {filtered.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <Reveal key={post.slug} delay={0.1}>
                  <ResourceCard post={post} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-card p-10 text-center">
              <p className="text-muted-foreground">No {category.toLowerCase()} resources yet. Check back soon.</p>
              <Link
                href="/resources"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                View all resources
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
