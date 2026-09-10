import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, PlayCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations";
import { webinars, getUpcomingWebinars, getPastWebinars, Webinar } from "@/lib/webinars";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildCollectionPage,
  renderSchemas,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "BrandOps Webinars | Live Trainings for Founders",
  description:
    "Join free live webinars on personal brand content systems, LinkedIn growth, and founder marketing. Watch replays and book your strategy call.",
  alternates: { canonical: `${BRANDOPS_URL}/resources/webinars` },
};

function WebinarCard({ webinar, isUpcoming }: { webinar: Webinar; isUpcoming: boolean }) {
  return (
    <Link
      href={`/webinars/${webinar.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-primary/30"
    >
      <div className="mb-4 flex items-center justify-between">
        <Badge
          variant="outline"
          className={
            isUpcoming
              ? "border-green-500/30 bg-green-500/10 text-green-500"
              : "border-primary/30 bg-primary/10 text-primary"
          }
        >
          {isUpcoming ? "Upcoming" : "Replay Available"}
        </Badge>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <PlayCircle className="h-3 w-3" /> {webinar.duration}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{webinar.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{webinar.description}</p>
      <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" /> {webinar.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-3 w-3" /> {webinar.time} {webinar.timezone}
        </span>
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:underline">
        {isUpcoming ? "Register Now" : "Watch Replay"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export default function WebinarsListingPage() {
  const url = `${BRANDOPS_URL}/resources/webinars`;
  const upcoming = getUpcomingWebinars();
  const past = getPastWebinars();

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildCollectionPage(
          "BrandOps Webinars",
          "Free live webinars on personal brand content systems, LinkedIn growth, and founder marketing.",
          url,
          webinars.map((w) => `${BRANDOPS_URL}/webinars/${w.slug}`)
        ),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Resources", url: `${BRANDOPS_URL}/resources` },
          { name: "Webinars", url },
        ]),
      ])}

      <section className="relative px-4 pb-12 pt-16 text-center sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
              ← Back to resources
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Live trainings for founder growth
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Free webinars on personal brand content systems, LinkedIn growth, and marketing systems that run without you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/10 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.1}>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <h2 className="text-xl font-semibold text-foreground">Upcoming Webinars</h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.length > 0 ? (
              upcoming.map((webinar, i) => (
                <Reveal key={webinar.id} delay={0.1 * i}>
                  <WebinarCard webinar={webinar} isUpcoming={true} />
                </Reveal>
              ))
            ) : (
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-white/10 bg-card p-6">
                  <p className="text-sm text-muted-foreground">No upcoming webinars scheduled. Check back soon or watch our replays below.</p>
                </div>
              </Reveal>
            )}
          </div>

          {past.length > 0 && (
            <>
              <Reveal delay={0.1}>
                <div className="mb-6 mt-14 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <h2 className="text-xl font-semibold text-foreground">Past Webinars \u0026 Replays</h2>
                </div>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {past.map((webinar, i) => (
                  <Reveal key={webinar.id} delay={0.1 * i}>
                    <WebinarCard webinar={webinar} isUpcoming={false} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
