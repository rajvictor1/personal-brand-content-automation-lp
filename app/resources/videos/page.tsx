import { Metadata } from "next";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import { Reveal } from "@/components/animations";

export const metadata: Metadata = {
  title: "Videos — Resources",
  description: "Video guides and tutorials for personal-brand content automation.",
};

const videos = [
  {
    id: "carousel-review-first",
    title: "How to build a review-first carousel in 5 minutes",
    description:
      "A walkthrough of the BrandOps carousel workflow: research one topic, generate four value slides and a follow slide, review the output, and prepare to publish.",
    duration: "2:45",
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder-carousel",
  },
  {
    id: "research-to-newsletter",
    title: "Turn one research session into a carousel and newsletter",
    description:
      "See how the same research sources feed both a LinkedIn carousel and a cited newsletter, so your channels stay aligned without double the work.",
    duration: "3:10",
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder-newsletter",
  },
  {
    id: "ai-mistakes",
    title: "3 mistakes that break AI-assisted personal brands",
    description:
      "Common pitfalls when using AI for LinkedIn content, and how a review-first workflow protects your credibility and your calendar.",
    duration: "2:20",
    youtubeUrl: "https://www.youtube.com/watch?v=placeholder-mistakes",
  },
];

export default function VideosPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <section className="mx-auto max-w-5xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <Link href="/resources" className="text-sm font-medium text-primary hover:underline">
            ← Back to resources
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Videos
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Short tutorials and walkthroughs for building a review-first personal-brand content system.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={0.1 + index * 0.1}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/40 transition-all hover:border-primary/30 hover:bg-card/60">
                <div className="relative aspect-video bg-muted/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {video.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{video.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{video.duration}</span>
                  </div>
                  <Link
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                  >
                    <Play className="h-4 w-4 fill-current" /> Watch video
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
