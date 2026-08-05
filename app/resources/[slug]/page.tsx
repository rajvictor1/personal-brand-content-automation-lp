import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "fs";
import { join } from "path";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/animations";
import { getResourceBySlug, resources } from "@/lib/resources";
import { components } from "@/components/mdx-components";

interface ResourcePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const post = getResourceBySlug(params.slug);
  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://brandops.site/resources/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://brandops.site/resources/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

function loadMDXSource(slug: string): string {
  const filePath = join(process.cwd(), "content", "resources", `${slug}.mdx`);
  return readFileSync(filePath, "utf-8");
}

function stripFrontmatter(source: string): string {
  return source.replace(/^---\s*[\r\n]+[\s\S]*?[\r\n]+---\s*[\r\n]*/, "");
}

export default async function ResourcePostPage({ params }: ResourcePageProps) {
  const post = getResourceBySlug(params.slug);
  if (!post) notFound();

  let rawSource: string;
  try {
    rawSource = loadMDXSource(params.slug);
  } catch {
    notFound();
  }

  const source = stripFrontmatter(rawSource);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <article className="mx-auto max-w-3xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/resources"
            className="text-sm font-medium text-primary hover:underline"
          >
            ← Back to resources
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
            {post.category}
          </Badge>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" /> {post.author}, {post.authorRole}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readingTime} min read
            </span>
          </div>
        </Reveal>

        <Separator className="my-8" />

        <Reveal delay={0.3}>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight prose-h1:mb-8 prose-h1:text-4xl prose-h1:leading-tight prose-h2:mt-14 prose-h2:mb-5 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3 prose-h3:mt-10 prose-h3:mb-4 prose-p:mt-4 prose-p:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:text-muted-foreground prose-li:leading-relaxed prose-blockquote:my-8 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-table:my-8 prose-table:border-border prose-th:border-border prose-th:bg-muted/30 prose-th:p-3 prose-td:border-border prose-td:p-3 prose-img:rounded-xl">
            <MDXRemote source={source} components={components} />
          </div>
        </Reveal>
      </article>
    </div>
  );
}
