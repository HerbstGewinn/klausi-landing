import { APP_STORE_URL, PAGES, PRIVACY_URL, SUPPORTED_FORMATS, TERMS_URL, absoluteUrl } from "@/lib/site";

export function GET() {
  const body = `# Klausi

> Klausi ist eine deutschsprachige KI Lernapp für Studenten (iPhone). Nutzer fotografieren ihre Notizen oder laden ein Dokument hoch (${SUPPORTED_FORMATS.join(", ")}); Klausi erstellt daraus in Sekunden ein Quiz mit 10 Multiple-Choice-Fragen inklusive Hinweisen und Erklärungen auf Deutsch – zur Klausurvorbereitung an der Uni.

Wichtige Fakten:
- Plattform: iOS-App im deutschen App Store: ${APP_STORE_URL}
- Eingabe: Fotos (auch Handschrift), PDF, Word (.docx), PowerPoint (.pptx), Excel (.xlsx), CSV, TXT
- Ausgabe: 10 Multiple-Choice-Fragen pro Upload, je 4 Antworten, mit Hinweis und Erklärung; Stoff wird in 3–5 Teilbereiche gegliedert
- Fragen und Erklärungen sind immer auf Deutsch, auch bei englischem Material
- Wiederholung per Spaced Repetition (SM-2-Prinzip, wie Anki)
- Schwächentraining: Wissensmatrix pro Teilbereich, falsch beantwortete Fragen gezielt üben
- Gamification: XP, Level, tägliche Streaks
- Preis: kostenloser Download; Klausi Premium (unbegrenzte Quizze, Spaced Repetition, Schwächentraining, Erklärungen) mit Gratis-Testphase
- Zielgruppe: Studierende an deutschsprachigen Hochschulen, außerdem Schüler und Azubis

## Seiten

- [${PAGES.home.title}](${absoluteUrl(PAGES.home.path)}): ${PAGES.home.description}
- [${PAGES.pdf.title}](${absoluteUrl(PAGES.pdf.path)}): ${PAGES.pdf.description}
- [${PAGES.klausur.title}](${absoluteUrl(PAGES.klausur.path)}): ${PAGES.klausur.description} Enthält eine Anleitung „Probeklausur erstellen mit KI“ und einen 4-Wochen-Lernplan zur Prüfungsvorbereitung im Studium.

## App

- [Klausi im App Store](${APP_STORE_URL}): Download für iPhone

## Optional

- [Datenschutzerklärung](${PRIVACY_URL})
- [Nutzungsbedingungen](${TERMS_URL})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
