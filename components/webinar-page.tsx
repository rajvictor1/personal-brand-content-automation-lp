import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, PlayCircle, ArrowRight, CheckCircle, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/animations";
import { Webinar } from "@/lib/webinars";
import {
  BRANDOPS_URL,
  buildBreadcrumbList,
  buildOrganization,
  buildWebPage,
  renderSchemas,
} from "@/lib/schema";

export function generateWebinarMetadata(webinar: Webinar): Metadata {
  const url = `${BRANDOPS_URL}/webinars/${webinar.slug}`;
  return {
    title: webinar.title,
    description: webinar.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "BrandOps",
      title: webinar.title,
      description: webinar.description,
      url,
      images: [{ url: `${BRANDOPS_URL}/og.png`, width: 1200, height: 630, alt: webinar.shortTitle }],
    },
  };
}

export function WebinarPage({ webinar }: { webinar: Webinar }) {
  const url = `${BRANDOPS_URL}/webinars/${webinar.slug}`;
  const isUpcoming = webinar.status === "upcoming" || webinar.status === "live";

  return (
    <>
      {renderSchemas([
        buildOrganization(),
        buildWebPage(webinar.title, webinar.description, url),
        buildBreadcrumbList([
          { name: "Home", url: BRANDOPS_URL },
          { name: "Resources", url: `${BRANDOPS_URL}/resources` },
          { name: "Webinars", url: `${BRANDOPS_URL}/resources/webinars` },
          { name: webinar.shortTitle, url },
        ]),
      ])}
      <div className="relative">
        <section className="relative px-4 pb-12 pt-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary">
                {isUpcoming ? "Free Live Webinar" : "Webinar Replay"}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {webinar.title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {webinar.description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2">
                  <Calendar className="h-4 w-4 text-primary" /> {webinar.date}
                </span>
                <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2">
                  <Clock className="h-4 w-4 text-primary" /> {webinar.time} {webinar.timezone}
                </span>
                <span className="flex items-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2">
                  <PlayCircle className="h-4 w-4 text-primary" /> {webinar.duration}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={isUpcoming ? "#register" : webinar.replayLink || "#"} target={isUpcoming ? undefined : "_blank"}>
                  <Button size="lg" className="rounded-xl bg-primary px-6 py-5 text-base font-medium text-primary-foreground transition hover:brightness-110">
                    {isUpcoming ? webinar.ctaText : "Watch Replay"}
                  </Button>
                </Link>
              </div>
              {isUpcoming && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Replay available for 48 hours. Limited spots so I can answer every question live.
                </p>
              )}
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 lg:grid-cols-2">
              <Reveal delay={0.1}>
                <Card className="h-full border-white/10 bg-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground">What you will learn</h2>
                    <ul className="mt-5 space-y-3">
                      {webinar.learningPoints.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.2}>
                <Card className="h-full border-white/10 bg-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground">Who should attend</h2>
                    <p className="mt-4 text-sm text-muted-foreground">This webinar is for you if:</p>
                    <ul className="mt-3 space-y-3">
                      {webinar.audience.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0.1}>
              <div className="mb-10 text-center">
                <Badge variant="outline" className="mb-3 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                  Agenda
                </Badge>
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  {webinar.duration.split(" ")[0]} minutes. No fluff.
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {webinar.agenda.map((item, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <Card className="border-white/10 bg-card transition-colors hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {i + 1}
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0.1}>
              <Card className="border-white/10 bg-card">
                <CardContent className="p-8 text-center sm:p-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Meet your host</h2>
                  <p className="mt-2 text-lg font-semibold text-primary">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Founder, BrandOps</p>
                  <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                    Rajesh Kumar helps founders and businesses build personal brand content and marketing systems that run without becoming a second job.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Reveal delay={0.1}>
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently asked questions</h2>
              </div>
            </Reveal>
            <div className="space-y-4">
              {webinar.faqs.map((faq, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <Card className="border-white/10 bg-card">
                    <CardContent className="p-6">
                      <h3 className="text-base font-semibold text-foreground">{faq.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {isUpcoming && (
          <section id="register" className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <Reveal delay={0.1}>
                <div className="rounded-xl border border-white/10 bg-card p-8 text-center sm:p-12">
                  <h2 className="text-2xl font-semibold text-foreground">Save your seat before spots fill.</h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {webinar.date} · {webinar.time} {webinar.timezone} · Google Meet
                  </p>
                  <div className="mt-8">
                    <Link href={webinar.registrationFormUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="rounded-xl bg-primary px-6 py-5 text-base font-medium text-primary-foreground transition hover:brightness-110">
                        {webinar.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    By registering, you agree to receive webinar reminders and follow-up emails. You can unsubscribe at any time.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
