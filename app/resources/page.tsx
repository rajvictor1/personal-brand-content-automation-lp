import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/animations";
import { resources, ResourcePost, ResourceCategory } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates, and workflow playbooks for personal-brand content automation. Built for creators, trainers, and solo operators.",
};

const categories: (ResourceCategory | "Videos" | "Cheat Sheets")[] = [
  "Guides",
  "Templates",
  "Glossary",
  "Videos",
  "Cheat Sheets",
];

function categoryHref(cat: ResourceCategory | "Videos" | "Cheat Sheets"): string {
  if (cat === "Videos") return "/resources/videos";
  if (cat === "Cheat Sheets") return "/resources/cheat-sheets";
  return `/resources/category/${cat.toLowerCase()}`;
}

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

export default function ResourcesPage() {
  const featured = resources[0];
  const rest = resources.slice(1);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="pt-24 pb-16 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
              Resources
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build a citable personal brand
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Guides, templates, and workflow playbooks for solo operators who want to create faster and publish safer.
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
                className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={categoryHref(cat)}
                  className="rounded-full border border-border/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-primary/10"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mb-12 rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 to-card/40 p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex-1">
                  <Badge className="mb-3 border-primary/30 bg-primary/10 text-primary">Featured — {featured.category}</Badge>
                  <Link href={`/resources/${featured.slug}`}>
                    <h2 className="text-2xl font-bold text-foreground hover:text-primary">{featured.title}</h2>
                  </Link>
                  <p className="mt-2 text-muted-foreground">{featured.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {featured.readingTime} min read
                    </span>
                    <span>{new Date(featured.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Reveal key={post.slug} delay={0.1}>
                <ResourceCard post={post} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-16 rounded-2xl border border-border/50 bg-card/40 p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Get new resources first</h3>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              New guides, templates, and workflow playbooks are added regularly. Join early access to get them before anyone else.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Join early access
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
