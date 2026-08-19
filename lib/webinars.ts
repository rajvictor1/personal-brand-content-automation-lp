export interface Webinar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  problem: string;
  promise: string;
  angle: string;
  date: string;
  time: string;
  timezone: string;
  duration: string;
  status: "upcoming" | "live" | "replay" | "ended";
  registrationFormUrl: string;
  googleMeetLink?: string;
  calendlyLink: string;
  replayLink?: string;
  ctaText: string;
  learningPoints: string[];
  audience: string[];
  agenda: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

export const webinars: Webinar[] = [
  {
    id: "sep-2026-personal-brand-system",
    slug: "personal-brand-content-system",
    shortTitle: "Personal Brand Content System",
    title: "How to Build a Personal Brand Content System That Runs 90% Without You",
    description:
      "Free live webinar for founders: learn the 5-part BrandOps Content System to produce 30 days of content from one 90-minute session.",
    problem: "Founders burn out trying to create content manually every day.",
    promise: "Learn the 5-part BrandOps Content System to produce 30 days of content from one 90-minute session.",
    angle: "A system that runs 90% without you.",
    date: "September 10, 2026",
    time: "7:00 PM",
    timezone: "IST",
    duration: "60 min + Q&A",
    status: "upcoming",
    registrationFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJUmDDO5jbDUG5XRG6m671DIJr7tct5Qc1rUE7t4p6Dqihxw/viewform",
    googleMeetLink: "https://meet.google.com/hwj-gpgy-ggk",
    calendlyLink: "https://calendly.com/rkrajeshk2018/brandops-strategy-call",
    ctaText: "Save My Seat — Free Live Training",
    learningPoints: [
      "Stop starting from a blank page every morning.",
      "Produce 30 days of content from one 90-minute founder session.",
      "Keep your real voice while delegating execution.",
      "Build a distribution calendar that actually gets seen.",
      "Turn content into booked calls, not just likes.",
    ],
    audience: [
      "You are the face of your company but content always falls off your to-do list.",
      "You have tried outsourcing content but it never sounds like you.",
      "You post in bursts, then disappear for weeks.",
      "You know personal brand content drives revenue, but you cannot systematize it.",
      "You are a founder, consultant, coach, agency owner, or expert selling high-trust services.",
    ],
    agenda: [
      { title: "The 3 traps", description: "That kill founder content consistency" },
      { title: "The 5-part BrandOps Content System", description: "Your complete content machine" },
      { title: "Content Bank", description: "Build it from what you already know" },
      { title: "Founder Capture Ritual", description: "90 minutes → 30 days of content" },
      { title: "Repurposing Engine", description: "One idea, many assets" },
      { title: "Live case studies", description: "Real founder results" },
      { title: "Your next step", description: "Book your BrandOps Strategy Call" },
    ],
    faqs: [
      {
        q: "Is this live or recorded?",
        a: "Live. There will be a replay for 48 hours if you register.",
      },
      {
        q: "What if I cannot make it live?",
        a: "Register anyway. We will send you the replay link.",
      },
      {
        q: "Will you try to sell me something?",
        a: "I will share a complete system you can implement yourself. At the end I will invite you to book a free strategy call if you want help building it.",
      },
      {
        q: "I am not a good writer. Will this work for me?",
        a: "Yes. The system is built around capturing your spoken voice, not writing from scratch.",
      },
      {
        q: "How long is the webinar?",
        a: "60 minutes plus Q&A.",
      },
      {
        q: "What do I need to bring?",
        a: "A notebook or notes app. Optional: one content problem you want solved.",
      },
    ],
  },
  {
    id: "oct-2026-repurposing-engine",
    slug: "linkedin-content-repurposing-engine",
    shortTitle: "LinkedIn Repurposing Engine",
    title: "The LinkedIn Content Repurposing Engine: Turn One Idea Into 30 Assets",
    description:
      "Free live webinar for founders: learn how to turn one core idea into 30+ assets across LinkedIn, email, blog, and short video.",
    problem: "Founders create content that dies after one post. They are not getting enough mileage from their ideas.",
    promise: "Learn how to turn one core idea into 30+ assets across LinkedIn, email, blog, and short video.",
    angle: "One idea. Many assets. No more one-and-done content.",
    date: "October 8, 2026",
    time: "7:00 PM",
    timezone: "IST",
    duration: "60 min + Q&A",
    status: "upcoming",
    registrationFormUrl: "https://forms.gle/PLACEHOLDER_OCTOBER_WEBINAR",
    googleMeetLink: "https://meet.google.com/PLACEHOLDER",
    calendlyLink: "https://calendly.com/rkrajeshk2018/content-repurposing-audit",
    ctaText: "Register Now — Free Live Training",
    learningPoints: [
      "Stop letting good ideas die after one post.",
      "Turn one long-form piece into 30+ micro-assets.",
      "Repurpose without sounding repetitive.",
      "Build a distribution calendar that multiplies reach.",
      "Track which formats actually drive calls and sales.",
    ],
    audience: [
      "You create content but feel like you are starting from zero every week.",
      "You have a backlog of posts, articles, or videos that no one saw.",
      "You want more reach without creating more original content.",
      "You struggle to adapt one idea across LinkedIn, email, and short video.",
      "You are a founder, consultant, coach, or content-led business owner.",
    ],
    agenda: [
      { title: "The content mileage problem", description: "Why most content dies after one post" },
      { title: "The Idea Core", description: "How to isolate one strong, reusable idea" },
      { title: "The Format Ladder", description: "Long → medium → micro across channels" },
      { title: "The LinkedIn Engine", description: "Post, thread, carousel, video, comment hook" },
      { title: "The Newsletter Bridge", description: "Turn posts into email sections" },
      { title: "The Distribution Calendar", description: "When and where each asset goes" },
      { title: "Your next step", description: "Book your Content Repurposing Audit" },
    ],
    faqs: [
      {
        q: "Is this live or recorded?",
        a: "Live. A replay will be available for 48 hours to registered attendees.",
      },
      {
        q: "Do I need to create new content first?",
        a: "No. We will use one existing idea or asset you already have.",
      },
      {
        q: "Will this work if I am not active on every platform?",
        a: "Yes. You can adapt the engine to the channels you actually use.",
      },
      {
        q: "How is this different from just reposting?",
        a: "Reposting repeats the same thing. Repurposing reshapes the idea for each channel and audience moment.",
      },
      {
        q: "How long is the webinar?",
        a: "60 minutes plus Q&A.",
      },
      {
        q: "What do I need to bring?",
        a: "One piece of content you have already created, or one strong opinion you want to share.",
      },
    ],
  },
  {
    id: "nov-2026-marketing-systems",
    slug: "marketing-systems-for-founders",
    shortTitle: "Marketing Systems for Founders",
    title: "Marketing Systems for Founders Who Hate Marketing",
    description:
      "Free live webinar for founders: build a marketing operating system that runs on your strengths and removes the parts you hate.",
    problem: "Product-first or technical founders find marketing exhausting and inconsistent.",
    promise: "Build a marketing operating system that runs on your strengths and removes the parts you hate.",
    angle: "Marketing is a system, not a personality trait.",
    date: "November 12, 2026",
    time: "7:00 PM",
    timezone: "IST",
    duration: "60 min + Q&A",
    status: "upcoming",
    registrationFormUrl: "https://forms.gle/PLACEHOLDER_NOVEMBER_WEBINAR",
    googleMeetLink: "https://meet.google.com/PLACEHOLDER",
    calendlyLink: "https://calendly.com/rkrajeshk2018/marketing-os-strategy-call",
    ctaText: "Register Now — Free Live Training",
    learningPoints: [
      "Design marketing around your strengths, not someone else's playbook.",
      "Remove the marketing tasks you hate through automation and delegation.",
      "Build a weekly rhythm that does not depend on motivation.",
      "Connect content, lead generation, and sales follow-up in one loop.",
      "Measure only what matters for your business model.",
    ],
    audience: [
      "You are a product-first or technical founder who knows marketing matters but resents it.",
      "You have tried marketing tactics but nothing sticks.",
      "You want a marketing system that feels like an extension of your product thinking.",
      "You need consistency without becoming a full-time marketer.",
      "You run a B2B, SaaS, consulting, or expert-led business.",
    ],
    agenda: [
      { title: "The founder marketing trap", description: "Why tactics fail without a system" },
      { title: "Your marketing operating system", description: "Inputs, processes, outputs, feedback" },
      { title: "Strengths-first design", description: "Build around what you are good at" },
      { title: "The hate list", description: "Automate or delegate the draining tasks" },
      { title: "Weekly marketing rhythm", description: "A repeatable 90-minute operating cadence" },
      { title: "Connecting content to revenue", description: "From post to call to close" },
      { title: "Your next step", description: "Book your Marketing OS Strategy Call" },
    ],
    faqs: [
      {
        q: "Is this live or recorded?",
        a: "Live. A replay will be available for 48 hours to registered attendees.",
      },
      {
        q: "I am not good at marketing. Will this help?",
        a: "Yes. The whole point is to design a system that works for you, not against you.",
      },
      {
        q: "Do I need a big team?",
        a: "No. This is built for solo founders and small teams.",
      },
      {
        q: "Will you talk about ads?",
        a: "Only briefly. The focus is organic, founder-led marketing systems.",
      },
      {
        q: "How long is the webinar?",
        a: "60 minutes plus Q&A.",
      },
      {
        q: "What do I need to bring?",
        a: "A list of the marketing tasks you enjoy and the ones you avoid.",
      },
    ],
  },
  {
    id: "dec-2026-newsletter-converts",
    slug: "founder-newsletter-that-converts",
    shortTitle: "Newsletter That Converts",
    title: "The Founder Newsletter That Actually Converts",
    description:
      "Free live webinar for founders: learn the newsletter structure, offer placement, and follow-up rhythm that turns readers into clients.",
    problem: "Newsletters get opens but no booked calls or sales.",
    promise: "Learn the newsletter structure, offer placement, and follow-up rhythm that turns readers into clients.",
    angle: "Your newsletter should sell trust, not just content.",
    date: "December 10, 2026",
    time: "7:00 PM",
    timezone: "IST",
    duration: "60 min + Q&A",
    status: "upcoming",
    registrationFormUrl: "https://forms.gle/PLACEHOLDER_DECEMBER_WEBINAR",
    googleMeetLink: "https://meet.google.com/PLACEHOLDER",
    calendlyLink: "https://calendly.com/rkrajeshk2018/newsletter-conversion-audit",
    ctaText: "Register Now — Free Live Training",
    learningPoints: [
      "Turn subscribers into buyers with the right structure.",
      "Place your offer without feeling salesy.",
      "Use the 3-email follow-up rhythm after every newsletter.",
      "Write subject lines that get opens from the right people.",
      "Measure newsletter ROI beyond open rates.",
    ],
    audience: [
      "You have a newsletter but it is not generating sales calls.",
      "You struggle to sell in email without feeling pushy.",
      "Your open rates are good but replies and bookings are low.",
      "You want a repeatable newsletter format that builds trust and converts.",
      "You are a founder, consultant, or expert selling high-trust services.",
    ],
    agenda: [
      { title: "Why opens do not pay", description: "The metric mistake most founders make" },
      { title: "The trust-first newsletter structure", description: "Hook, lesson, proof, transition, offer" },
      { title: "Offer placement", description: "Where and how to ask for the call" },
      { title: "The reply loop", description: "Turn replies into conversations" },
      { title: "The 3-email follow-up", description: "What to send after each newsletter" },
      { title: "Live teardown", description: "Before/after newsletter examples" },
      { title: "Your next step", description: "Book your Newsletter Conversion Audit" },
    ],
    faqs: [
      {
        q: "Is this live or recorded?",
        a: "Live. A replay will be available for 48 hours to registered attendees.",
      },
      {
        q: "Do I need a big list?",
        a: "No. The system works even with a small, focused subscriber base.",
      },
      {
        q: "Will this work for B2B?",
        a: "Yes. It is designed for high-trust B2B services and consulting.",
      },
      {
        q: "I use Substack / Beehiiv / Mailchimp. Does it matter?",
        a: "No. The framework works on any email platform.",
      },
      {
        q: "How long is the webinar?",
        a: "60 minutes plus Q&A.",
      },
      {
        q: "What do I need to bring?",
        a: "One recent newsletter you sent, even if it had low response.",
      },
    ],
  },
];

export function getUpcomingWebinars(): Webinar[] {
  return webinars.filter((w) => w.status === "upcoming" || w.status === "live");
}

export function getPastWebinars(): Webinar[] {
  return webinars.filter((w) => w.status === "replay" || w.status === "ended");
}

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return webinars.find((w) => w.slug === slug);
}

export function getWebinarById(id: string): Webinar | undefined {
  return webinars.find((w) => w.id === id);
}
