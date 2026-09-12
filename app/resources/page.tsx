import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations";
import { resources, ResourcePost, ResourceCategory } from "@/lib/resources";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildCollectionPage,
  buildOrganization,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Resources | Guides for Creators",
  description:
    "Free guides, cheat sheets, and templates for solo founders and trainers building a review-first LinkedIn and newsletter content system.",
  alternates: { canonical: "https://www.brandops.site/resources" },
};

const categories: ResourceCategory[] = ["Guides", "Templates", "Glossary", "Cheat Sheets"];
const extraCategories = ["Videos", "Webinars"];

function categoryHref(cat: ResourceCategory | "Videos" | "Webinars"): string {
  if (cat === "Cheat Sheets") return "/resources/cheat-sheets";
  if (cat === "Videos") return "/resources/videos";
  if (cat === "Webinars") return "/resources/webinars";
  return `/resources/category/${cat.toLowerCase()}`;
}

function ResourceCard({ post }: { post: ResourcePost }) {
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/20"
    >
      <div className="mb-4 flex items-center gap-3">
        <Badge variant="outline" className="border-white/10 bg-card text-primary">
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

export default function ResourcesPage() {
  const featured = resources[0];
  const rest = resources.slice(1);
  const url = `${BRANDOPS_URL}/resources`;
  const itemUrls = resources.map((r) => `${BRANDOPS_URL}/resources/${r.slug}`);
  const breadcrumb = buildBreadcrumbList([
    { name: "Home", url: BRANDOPS_URL },
    { name: "Resources", url },
  ]);

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildCollectionPage(
          "BrandOps Resources",
          "Free guides, cheat sheets, and templates for solo founders and trainers building a review-first LinkedIn and newsletter content system.",
          url,
          itemUrls
        ),
        breadcrumb,
      ])}
      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),rgba(99,102,241,0.15)_40%,transparent_70%)]" />
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Resources</p>
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl">
              Build a citable personal brand
            </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Guides, templates, and workflow playbooks for solo operators who want to create faster and publish safer.
            </p>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.3} className="mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="/resources"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={categoryHref(cat)}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                >
                  {cat}
                </Link>
              ))}
              {extraCategories.map((cat) => (
                <Link
                  key={cat}
                  href={categoryHref(cat as "Videos" | "Webinars")}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mb-12 rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <Badge className="mb-3 border-white/10 bg-card text-primary">Featured: {featured.category}</Badge>
                  <Link href={`/resources/${featured.slug}`}>
                    <h2 className="text-xl font-semibold text-foreground hover:text-primary">{featured.title}</h2>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground">{featured.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {featured.readingTime} min read
                    </span>
                    <span>{new Date(featured.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link href={`/resources/${featured.slug}`}>
                  <Button className="rounded-xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                    Read now
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mb-12 rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <Badge className="mb-3 border-white/10 bg-card text-primary">Upcoming Webinar</Badge>
                  <Link href="/webinar">
                    <h2 className="text-xl font-semibold text-foreground hover:text-primary">
                      How to Build a Personal Brand Content System That Runs 90% Without You
                    </h2>
                  </Link>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Free live webinar for founders. Learn the 5-part BrandOps Content System and produce 30 days of content from one 90-minute session.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> September 10, 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> 7:00 PM IST
                    </span>
                  </div>
                </div>
                <Link href="/webinar">
                  <Button className="rounded-xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:brightness-110">
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Reveal key={post.slug} delay={0.1}>
                <ResourceCard post={post} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-16 rounded-2xl border border-white/10 bg-card p-8 text-center">
            <h3 className="text-2xl font-semibold text-foreground">Get new resources first</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              New guides, templates, and workflow playbooks are added regularly. Join early access to get them before anyone else.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110"
              >
                Join early access
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                Book a demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
