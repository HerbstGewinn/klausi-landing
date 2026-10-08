/**
 * Absolute origin used for canonicals, the sitemap, JSON-LD and share images.
 * On Vercel this is the project's production domain, so connecting a custom
 * domain and redeploying updates every URL automatically. Override with
 * NEXT_PUBLIC_SITE_URL when the live domain should differ from that.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return `https://${production.replace(/^https?:\/\//, "")}`;
  const deployment = process.env.VERCEL_URL?.trim();
  if (deployment) return `https://${deployment.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/** Preview deployments must not compete with production in search results. */
export const IS_PRODUCTION_INDEXABLE = process.env.VERCEL_ENV !== "preview";

export const APP_STORE_ID = "6760970000";
export const APP_STORE_URL = `https://apps.apple.com/de/app/klausi-lernnotizen-zu-quiz/id${APP_STORE_ID}`;

export const PRIVACY_URL = "https://www.notion.so/Datenschutzerkl-rung-Klausi-32b88543db9a8038825af7e521b9e6fc";
export const TERMS_URL = "https://www.notion.so/Nutzungsbedingungen-Klausi-32b88543db9a809e8deef527ba296105";

/** Public GA4 measurement ID. Safe to ship in the page; it only identifies this property. */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-ZBW3XMEKJT";

export const SITE_NAME = "Klausi";
export const SITE_TAGLINE = "Foto machen, Quiz spielen, Prüfung rocken.";

/** Bump when page content changes meaningfully; feeds the sitemap and JSON-LD. */
export const LAST_UPDATED = "2026-10-08";

export const SUPPORTED_FORMATS = ["Fotos", "PDF", "Word", "PowerPoint", "Excel", "CSV", "TXT"] as const;

export type PageEntry = {
  path: string;
  title: string;
  /** Short label for navigation and breadcrumbs */
  label: string;
  description: string;
  priority: number;
};

export const PAGES = {
  home: {
    path: "/",
    title: "KI Lernapp fürs Studium",
    label: "Startseite",
    description:
      "Klausi ist die KI Lernapp für Studenten: Fotografiere deine Notizen oder lade ein PDF hoch – Klausi macht daraus in Sekunden ein Quiz für deine Klausur. Mit Spaced Repetition und Schwächentraining.",
    priority: 1,
  },
  pdf: {
    path: "/quiz-aus-pdf-erstellen",
    title: "Quiz aus PDF erstellen",
    label: "Quiz aus PDF",
    description:
      "Quiz aus PDF erstellen mit KI: Lade Vorlesungsfolien, Skript oder Paper hoch und Klausi erstellt in Sekunden 10 Multiple-Choice-Fragen mit Hinweisen und Erklärungen – auf Deutsch.",
    priority: 0.9,
  },
  klausur: {
    path: "/ki-klausurvorbereitung",
    title: "KI Klausurvorbereitung",
    label: "Klausurvorbereitung",
    description:
      "KI Klausurvorbereitung fürs Studium: Probeklausur mit KI aus deinem Skript erstellen, Wissenslücken finden und mit Spaced Repetition gezielt wiederholen. Prüfungsvorbereitung, die wirklich hängen bleibt.",
    priority: 0.9,
  },
} satisfies Record<string, PageEntry>;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
