# Klausi – Landingpage

Next.js-Website für die iPhone-App [Klausi](https://apps.apple.com/de/app/klausi-lernnotizen-zu-quiz/id6760970000).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Domain

Canonicals, Sitemap, `robots.txt`, `llms.txt`, Open-Graph-Bilder und JSON-LD nutzen automatisch die
Produktionsdomain von Vercel (`VERCEL_PROJECT_PRODUCTION_URL`). Nach dem Verbinden einer eigenen Domain
einmal neu deployen, damit alle URLs umgestellt werden. Mit `NEXT_PUBLIC_SITE_URL` lässt sich die Domain
fest überschreiben.

## SEO-Struktur

| Seite | Keyword-Fokus |
| --- | --- |
| `/` | KI Lernapp, Lernapp für Studenten |
| `/quiz-aus-pdf-erstellen` | Quiz aus PDF erstellen |
| `/ki-klausurvorbereitung` | KI Klausurvorbereitung, Klausurvorbereitung Studium, Prüfungsvorbereitung Studium, Probeklausur erstellen KI |

Spätere Artikel (erst nach diesen drei Seiten): Vorlesung zusammenfassen KI, Skript zusammenfassen KI,
Übungsfragen aus Skript erstellen, Karteikarten aus PDF erstellen, Lernzettel erstellen KI.

Neue Seiten in `lib/site.ts` (`PAGES`) eintragen – Sitemap und `llms.txt` lesen von dort. `LAST_UPDATED` bei
inhaltlichen Änderungen hochsetzen.
