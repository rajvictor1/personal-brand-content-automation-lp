import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, PlayCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="group flex h-full flex-col border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60">
      <CardContent className="flex h-full flex-col p-6">
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
        <Link href={`/webinars/${webinar.slug}`} className="group-hover:text-primary">
          <h3 className="text-xl font-semibold text-foreground">{webinar.title}</h3>
        </Link>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{webinar.description}</p>
        <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {webinar.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {webinar.time} {webinar.timezone}
          </span>
        </div>
        <div className="mt-6">
          <Link href={`/webinars/${webinar.slug}`}>
            <Button variant="outline" className="w-full rounded-full border-primary/30 text-primary hover:bg-primary/10">
              {isUpcoming ? "Register Now" : "Watch Replay"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
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
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
        </div>

        <section className="pt-24 pb-16 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                Webinars
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Live trainings for{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  founder growth
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Free webinars on personal brand content systems, LinkedIn growth, and marketing systems that run without you.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-bold text-foreground">Upcoming Webinars</h2>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.length > 0 ? (
                upcoming.map((webinar, i) => (
                  <Reveal key={webinar.id} delay={0.1 * i}>
                    <WebinarCard webinar={webinar} isUpcoming={true} />
                  </Reveal>
                ))
              ) : (
                <Reveal delay={0.1}>
                  <Card className="border-border/50 bg-card/40">
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">No upcoming webinars scheduled. Check back soon or watch our replays below.</p>
                    </CardContent>
                  </Card>
                </Reveal>
              )}
            </div>

            {past.length > 0 && (
              <>
                <Reveal delay={0.1}>
                  <div className="mb-8 mt-16 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <h2 className="text-2xl font-bold text-foreground">Past Webinars & Replays</h2>
                  </div>
                </Reveal>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </>
  );
}
