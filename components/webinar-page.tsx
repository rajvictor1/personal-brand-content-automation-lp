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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]"></div>
          <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px]"></div>
        </div>

        <section className="pt-24 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary">
                  {isUpcoming ? "Free Live Webinar" : "Webinar Replay"}
                </Badge>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mx-auto max-w-4xl text-balance text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {webinar.title.split(":").map((part, i) => (
                  i === 0 ? (
                    <span key={i} className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>:{part}</span>
                  )
                ))}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
                {webinar.description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2">
                  <Calendar className="h-4 w-4 text-primary" /> {webinar.date}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2">
                  <Clock className="h-4 w-4 text-primary" /> {webinar.time} {webinar.timezone}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2">
                  <PlayCircle className="h-4 w-4 text-primary" /> {webinar.duration}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={isUpcoming ? "#register" : webinar.replayLink || "#"} target={isUpcoming ? undefined : "_blank"}>
                  <Button size="lg" className="rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:opacity-90">
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

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <Reveal delay={0.1}>
                <Card className="h-full border-border/50 bg-card/40">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground">What You Will Learn</h2>
                    <ul className="mt-6 space-y-4">
                      {webinar.learningPoints.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.2}>
                <Card className="h-full border-border/50 bg-card/40">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground">Who Should Attend</h2>
                    <p className="mt-4 text-muted-foreground">This webinar is for you if:</p>
                    <ul className="mt-4 space-y-3">
                      {webinar.audience.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="mb-10 text-center">
                <Badge variant="outline" className="mb-3 border-primary/30 bg-primary/10 text-primary">Agenda</Badge>
                <h2 className="text-3xl font-bold text-foreground">{webinar.duration.split(" ")[0]} minutes. No fluff.</h2>
              </div>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {webinar.agenda.map((item, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <Card className="border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60">
                    <CardContent className="p-6">
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <Card className="border-border/50 bg-gradient-to-br from-primary/10 to-card/40">
                <CardContent className="p-8 sm:p-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Meet Your Host</h2>
                  <p className="mt-2 text-lg font-semibold text-primary">Rajesh Kumar</p>
                  <p className="text-sm text-muted-foreground">Founder, BrandOps</p>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Rajesh Kumar helps founders and businesses build personal brand content and marketing systems that run without becoming a second job.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={0.1}>
              <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              </div>
            </Reveal>
            <div className="space-y-4">
              {webinar.faqs.map((faq, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <Card className="border-border/50 bg-card/40">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground">{faq.q}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {isUpcoming && (
          <section id="register" className="pb-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-primary/20 via-primary/10 to-card/40 p-8 text-center sm:p-12">
                  <h2 className="text-3xl font-bold text-foreground">Save your seat before spots fill.</h2>
                  <p className="mt-3 text-muted-foreground">
                    {webinar.date} · {webinar.time} {webinar.timezone} · Google Meet
                  </p>
                  <div className="mt-8">
                    <Link href={webinar.registrationFormUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="rounded-full bg-primary px-8 py-6 text-lg font-semibold text-primary-foreground hover:opacity-90">
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
