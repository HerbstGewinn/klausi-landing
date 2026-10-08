import {
  APP_STORE_ID,
  APP_STORE_URL,
  LAST_UPDATED,
  PAGES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  type PageEntry,
} from "./site";

type Json = Record<string, unknown>;

export function JsonLd({ data }: { data: Json | Json[] }) {
  const payload = Array.isArray(data) ? { "@context": "https://schema.org", "@graph": data } : { "@context": "https://schema.org", ...data };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export const organization = (): Json => ({
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: absoluteUrl("/brand/klausi-app-icon.png"), width: 1024, height: 1024 },
  sameAs: [APP_STORE_URL],
});

export const website = (): Json => ({
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: "Klausi – KI Lernapp fürs Studium",
  inLanguage: "de-DE",
  publisher: { "@id": ORG_ID },
});

export const mobileApp = (): Json => ({
  "@type": "MobileApplication",
  "@id": APP_ID,
  name: "Klausi – Lernnotizen zu Quiz",
  alternateName: "Klausi",
  description: PAGES.home.description,
  operatingSystem: "iOS",
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "Lernapp",
  inLanguage: "de",
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  installUrl: APP_STORE_URL,
  identifier: `id${APP_STORE_ID}`,
  image: absoluteUrl("/brand/klausi-app-icon.png"),
  screenshot: [
    "/screens/klausi-startseite.png",
    "/screens/klausi-quiz-frage.png",
    "/screens/klausi-auswertung.png",
    "/screens/klausi-streak-xp.png",
  ].map((p) => absoluteUrl(p)),
  featureList: [
    "Quiz aus PDF, Word, PowerPoint, Excel, CSV und Fotos erstellen",
    "Handschriftliche Notizen per Foto erkennen",
    "10 Multiple-Choice-Fragen mit Hinweisen und Erklärungen pro Quiz",
    "Spaced Repetition nach dem SM-2-Prinzip",
    "Schwächentraining mit Wissensmatrix pro Teilbereich",
    "XP, Level und Streaks",
  ],
  audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Studierende" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", category: "free", availability: "https://schema.org/InStock" },
  publisher: { "@id": ORG_ID },
});

export const webPage = (page: PageEntry, extra: Json = {}): Json => ({
  "@type": "WebPage",
  "@id": `${absoluteUrl(page.path)}#webpage`,
  url: absoluteUrl(page.path),
  name: page.title,
  description: page.description,
  inLanguage: "de-DE",
  isPartOf: { "@id": SITE_ID },
  about: { "@id": APP_ID },
  dateModified: LAST_UPDATED,
  primaryImageOfPage: absoluteUrl(`${page.path === "/" ? "" : page.path}/opengraph-image`),
  ...extra,
});

export const breadcrumbs = (page: PageEntry): Json => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: PAGES.home.label, item: SITE_URL },
    { "@type": "ListItem", position: 2, name: page.label, item: absoluteUrl(page.path) },
  ],
});

export type Faq = { q: string; a: string };

export const faqPage = (page: PageEntry, faqs: Faq[]): Json => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl(page.path)}#faq`,
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

export const howTo = (page: PageEntry, name: string, steps: { name: string; text: string }[], totalTime = "PT2M"): Json => ({
  "@type": "HowTo",
  "@id": `${absoluteUrl(page.path)}#howto`,
  name,
  totalTime,
  tool: { "@type": "HowToTool", name: "Klausi (iPhone-App)" },
  step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
});
