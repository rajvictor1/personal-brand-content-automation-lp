import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, Clock, Mail, User, Video } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "fs";
import { join } from "path";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/animations";
import { getResourceBySlug, resources } from "@/lib/resources";
import { components } from "@/components/mdx-components";
import {
  BRANDOPS_URL,
  buildArticle,
  buildBreadcrumbList,
  buildFAQPage,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

interface ResourcePageProps {
  params: { slug: string };
}

const FAQ_POSTS: string[] = [
  "best-ai-tools-linkedin-carousels-newsletters-2026",
  "how-to-write-cited-ai-newsletter",
  "linkedin-carousel-design-framework-non-designers",
  "ai-safety-personal-brands-review-first-publishing",
  "linkedin-carousel-hook-formulas",
  "ai-newsletter-subject-line-formulas",
  "automate-linkedin-carousels-from-research",
  "linkedin-carousel-newsletter-one-hour-workflow",
  "review-first-publishing-workflow",
];

function extractFaqs(source: string): Array<{ question: string; answer: string }> {
  const faqs: Array<{ question: string; answer: string }> = [];
  const regex = /^###\s+(.*?)(?=\n)\n+([\s\S]*?)(?=\n^#{1,3}\s|\Z)/gm;
  let match;
  while ((match = regex.exec(source)) !== null) {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n+/g, " ").replace(/\*\*/g, "");
    if (question.endsWith("?") && answer.length > 20) {
      faqs.push({ question, answer });
    }
  }
  return faqs.slice(0, 8);
}

function countWords(source: string): number {
  const text = source
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[#*_\-|`]/g, "")
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
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
    alternates: { canonical: `https://www.brandops.site/resources/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.brandops.site/resources/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function stripFrontmatter(source: string): string {
  return source.replace(/^---[\s\S]*?---\n?/, "");
}

export default function ResourcePostPage({ params }: ResourcePageProps) {
  const post = getResourceBySlug(params.slug);
  if (!post) return notFound();

  const filePath = join(process.cwd(), "content/resources", `${post.slug}.mdx`);
  const rawSource = readFileSync(filePath, "utf-8");
  const source = stripFrontmatter(rawSource);

  const related = resources
    .filter((r) => r.category === post.category && r.slug !== post.slug)
    .slice(0, 2);

  const relatedWorkflows = [
    { href: "/features/carousel-workflow", label: "LinkedIn carousel workflow", desc: "Research to five-slide carousel" },
    { href: "/features/newsletter-workflow", label: "Newsletter workflow", desc: "Cited newsletter drafts" },
    { href: "/features/review-first-publishing", label: "Review-first publishing", desc: "Approve before anything goes live" },
  ];

  const wordCount = countWords(source);
  const articleUrl = `${BRANDOPS_URL}/resources/${post.slug}`;
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Resources", url: `${BRANDOPS_URL}/resources` },
    { name: post.title, url: articleUrl },
  ]);

  const articleSchema = buildArticle(post, wordCount);
  const faqs = FAQ_POSTS.includes(post.slug) ? extractFaqs(source) : [];
  const faqSchema = buildFAQPage(faqs);
  const webPageSchema = buildWebPage(post.title, post.description, articleUrl);

  const schemas = faqSchema
    ? [webPageSchema, articleSchema, breadcrumb, faqSchema]
    : [webPageSchema, articleSchema, breadcrumb];

  return (
    <>
      {renderSchemas(schemas)}
      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-4 inline-flex items-center gap-3">
              <Badge variant="outline" className="border-white/10 bg-card text-primary">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime} min read
              </span>
            </div>
          </Reveal>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
        </div>
      </section>

      <article className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal delay={0.4}>
            <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-primary">
                <User className="h-4 w-4" />
              </div>
              <div>
                <Link href="https://github.com/rajvictor1" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary hover:underline">
                  {post.author}
                </Link>
                <p className="text-xs">{post.authorRole}</p>
              </div>
              <span className="ml-auto flex items-center gap-1 text-xs">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </Reveal>

          <Separator className="my-6 bg-white/10" />

          <Reveal delay={0.3}>
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight prose-h1:mb-8 prose-h1:text-4xl prose-h1:leading-tight prose-h2:mt-14 prose-h2:mb-5 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3 prose-h3:mt-10 prose-h3:mb-4 prose-p:mt-4 prose-p:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:my-6 prose-ol:my-6 prose-li:my-2 prose-li:text-muted-foreground prose-li:leading-relaxed prose-blockquote:my-8 prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-table:my-8 prose-table:border-white/10 prose-th:border-white/10 prose-th:bg-card prose-th:p-3 prose-td:border-white/10 prose-td:p-3 prose-img:rounded-xl">
              <MDXRemote source={source} components={components} options={{ parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } }} />
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={0.4}>
              <div className="mt-12 rounded-2xl border border-white/10 bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Related in {post.category}</h3>
                <ul className="mt-4 space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/resources/${r.slug}`} className="text-sm text-primary hover:underline">
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.5}>
            <div className="mt-6 rounded-2xl border border-white/10 bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Try it in BrandOps</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                These workflows are built into the BrandOps content workspace. Pick one to see how research turns into a ready-to-review asset.
              </p>
              <ul className="mt-4 space-y-2">
                {relatedWorkflows.map((w) => (
                  <li key={w.href}>
                    <Link href={w.href} className="group inline-flex items-center text-sm font-medium text-primary hover:underline">
                      {w.label}
                      <span className="ml-2 text-xs text-muted-foreground">— {w.desc}</span>
                      <ArrowRight className="ml-1 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/demo"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
                  <Video className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Book a demo</p>
                  <p className="text-xs text-muted-foreground">30-minute walkthrough</p>
                </div>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Get early access</p>
                  <p className="text-xs text-muted-foreground">Join the waitlist</p>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
