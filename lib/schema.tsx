import {
  Article,
  BreadcrumbList,
  CollectionPage,
  FAQPage,
  ItemAvailability,
  Organization,
  Person,
  Product,
  Service,
  Thing,
  WebPage,
  WithContext,
} from "schema-dts";

function toISODate(date: string): string {
  const d = new Date(date);
  if (isNaN(d.getTime())) return date;
  return d.toISOString();
}

export const BRANDOPS_URL = "https://www.brandops.site";
export const LOGO_URL = `${BRANDOPS_URL}/logo.png`;
export const OG_IMAGE_URL = `${BRANDOPS_URL}/og.png`;
export const FOUNDER_IMAGE_URL = `${BRANDOPS_URL}/founder-rk.png`;
export const LINKEDIN_URL = "https://www.linkedin.com/in/rajesh-demand-gen-gtm-expert/";
export const GITHUB_URL = "https://github.com/rajvictor1";

export function renderSchemas(schemas: WithContext<Thing>[]): JSX.Element {
  return (
    <>
      {schemas.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}

export function buildOrganization(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BrandOps",
    url: BRANDOPS_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    sameAs: [LINKEDIN_URL],
  };
}

export function buildPerson(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajesh Kumar",
    url: GITHUB_URL,
    image: FOUNDER_IMAGE_URL,
    jobTitle: "Founder, BrandOps",
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    worksFor: {
      "@type": "Organization",
      name: "BrandOps",
      url: BRANDOPS_URL,
    },
  };
}

export function buildWebPage(
  title: string,
  description: string,
  url: string
): WithContext<WebPage> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en",
  };
}

export function buildBreadcrumbList(
  items: { name: string; url: string }[]
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticle(
  post: {
    slug: string;
    title: string;
    description: string;
    category: string;
    publishedAt: string;
    updatedAt: string;
    readingTime: number;
    author: string;
    authorRole: string;
  },
  wordCount: number
): WithContext<Article> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: OG_IMAGE_URL,
    author: {
      "@type": "Person",
      name: post.author,
      url: GITHUB_URL,
      image: FOUNDER_IMAGE_URL,
      jobTitle: post.authorRole,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
    },
    publisher: {
      "@type": "Organization",
      name: "BrandOps",
      url: BRANDOPS_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    datePublished: toISODate(post.publishedAt),
    dateModified: toISODate(post.updatedAt),
    timeRequired: `PT${post.readingTime}M`,
    articleSection: post.category,
    keywords: post.category,
    wordCount,
    inLanguage: "en",
    url: `${BRANDOPS_URL}/resources/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BRANDOPS_URL}/resources/${post.slug}`,
    },
  };
}

export function buildFAQPage(
  questions: Array<{ question: string; answer: string }>
): WithContext<FAQPage> | null {
  if (!questions.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function buildService(
  name: string,
  description: string,
  url: string
): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "BrandOps",
      url: BRANDOPS_URL,
    },
  };
}

export function buildOffers(): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BrandOps",
    description:
      "Review-first AI content workspace for LinkedIn carousels and newsletters.",
    url: `${BRANDOPS_URL}/pricing`,
    brand: {
      "@type": "Organization",
      name: "BrandOps",
      url: BRANDOPS_URL,
    },
    offers: [
      {
        "@type": "Offer",
        name: "Solo",
        description: "Free forever plan for personal-brand builders.",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${BRANDOPS_URL}/contact`,
      },
      {
        "@type": "Offer",
        name: "Operator",
        description: "$49/month plan for creators ready to scale.",
        price: "49",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${BRANDOPS_URL}/contact`,
      },
    ],
  };
}

export function buildProduct(
  name: string,
  description: string,
  url: string,
  offer: { price: number; priceCurrency: string; availability: string }
): WithContext<Product> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Organization",
      name: "BrandOps",
      url: BRANDOPS_URL,
    },
    offers: {
      "@type": "Offer",
      price: offer.price.toString(),
      priceCurrency: offer.priceCurrency,
      availability: offer.availability as ItemAvailability,
      url,
    },
  };
}

export function buildCollectionPage(
  name: string,
  description: string,
  url: string,
  itemUrls: string[]
): WithContext<CollectionPage> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    inLanguage: "en",
    hasPart: itemUrls.map((u) => ({
      "@type": "Article",
      url: u,
    })),
  };
}
