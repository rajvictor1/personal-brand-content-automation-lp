import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/animations";
import { resources, ResourcePost, ResourceCategory } from "@/lib/resources";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildCollectionPage,
  renderSchemas,
} from "@/lib/schema";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  return ["guides", "templates", "glossary"].map((c) => ({ category: c }));
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

const categories: ResourceCategory[] = ["Guides", "Templates", "Glossary"];

function ResourceCard({ post }: { post: ResourcePost }) {
  return (
    <Card className="group flex h-full flex-col border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-center gap-3">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            {post.category}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {post.readingTime} min read
          </span>
        </div>
        <Link href={`/resources/${post.slug}`} className="group-hover:text-primary">
          <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.description}</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </CardContent>
    </Card>
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
        buildCollectionPage(
          `${category} for Personal Brands`,
          `Free ${category.toLowerCase()}, playbooks, and workflow guides for solo founders and trainers building a review-first LinkedIn and newsletter content system.`,
          url,
          itemUrls
        ),
        breadcrumb,
      ])}
      <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl"><span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">{category}</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {filtered.length} resource{filtered.length === 1 ? "" : "s"} for personal-brand builders.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.3} className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/resources"
                className="rounded-full border border-border/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
              >
                All
              </Link>
              {categories.map((cat) => {
                const active = cat === category;
                return (
                  <Link
                    key={cat}
                    href={`/resources/category/${cat.toLowerCase()}`}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border/50 text-foreground hover:border-primary/30 hover:bg-primary/10"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Reveal key={post.slug} delay={0.1}>
                <ResourceCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
