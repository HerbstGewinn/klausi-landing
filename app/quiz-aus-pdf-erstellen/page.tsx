import type { Metadata } from "next";
import { ArrowIcon, BrainIcon, CheckIcon, FileIcon, KeyIcon, SparkIcon, TargetIcon } from "@/components/icons";
import { Breadcrumbs, CtaBand, FaqSection, RelatedPages } from "@/components/sections";
import { AppStoreButton, Button3D, Eyebrow, IconTile, Mascot, SectionHeading, SpeechBubble, StepBadge } from "@/components/ui";
import { JsonLd, breadcrumbs, faqPage, howTo, webPage, type Faq } from "@/lib/jsonld";
import { PAGES } from "@/lib/site";

const page = PAGES.pdf;

export const metadata: Metadata = {
  title: "Quiz aus PDF erstellen mit KI – in Sekunden",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "Quiz aus PDF erstellen – mit KI in Sekunden | Klausi",
    description: page.description,
    url: page.path,
  },
};

const STEPS = [
  {
    name: "PDF in Klausi öffnen",
    text: "Tippe in Klausi auf das Plus und wähle „Datei“. Du kannst dein PDF aus der Dateien-App, iCloud Drive oder einem Mail-Anhang auswählen.",
  },
  {
    name: "KI analysiert dein Material",
    text: "Klausi liest das PDF, erkennt die Schlüsselkonzepte und sortiert den Stoff in 3 bis 5 thematische Teilbereiche.",
  },
  {
    name: "10 Quizfragen spielen",
    text: "Du bekommst 10 Multiple-Choice-Fragen mit je vier Antworten, einem Hinweis und einer Erklärung – auf Deutsch.",
  },
  {
    name: "Wiederholen und Lücken schließen",
    text: "Klausi plant die Wiederholung deiner Fragen mit Spaced Repetition und übt mit dir gezielt die Fragen, die du falsch hattest.",
  },
];

const PDF_TYPES = [
  { title: "Vorlesungsfolien", text: "Die PowerPoint deines Profs als PDF – oder direkt als .pptx." },
  { title: "Skripte", text: "Ganze Kapitel aus dem Vorlesungsskript, Kapitel für Kapitel." },
  { title: "Paper & Studien", text: "Wissenschaftliche Artikel, auch auf Englisch." },
  { title: "Lehrbuchkapitel", text: "Ausschnitte aus Fachbüchern und Lernheften." },
  { title: "Übungsblätter", text: "Inhalte aus Tutorien und Übungen als Wiederholung." },
  { title: "Eigene Zusammenfassungen", text: "Deine Lernzettel aus Notability, GoodNotes oder Word." },
];

const FAQS: Faq[] = [
  {
    q: "Wie kann ich aus einem PDF ein Quiz erstellen?",
    a: "Lade die Klausi App auf dein iPhone, tippe auf das Plus, wähle „Datei“ und dann dein PDF. Klausi erstellt daraus in Sekunden ein Quiz mit 10 Multiple-Choice-Fragen inklusive Hinweisen und Erklärungen.",
  },
  {
    q: "Kann ich kostenlos ein Quiz aus einem PDF erstellen?",
    a: "Klausi ist kostenlos im App Store erhältlich. Unbegrenzt viele Quizze aus PDFs und anderen Dateien gibt es mit Klausi Premium, das du vorher gratis testen kannst.",
  },
  {
    q: "Welche PDFs funktionieren am besten?",
    a: "Am besten funktionieren PDFs mit markierbarem Text, zum Beispiel Vorlesungsfolien, Skripte oder Paper. Für eingescannte oder handschriftliche Seiten fotografierst du die Seiten einfach direkt mit der Kamera in Klausi – die App erkennt auch Handschrift.",
  },
  {
    q: "Wie viele Fragen erstellt Klausi aus einem PDF?",
    a: "Pro PDF entstehen 10 Multiple-Choice-Fragen. Bei langen Skripten lädst du am besten Kapitel für Kapitel hoch – so deckt jedes Quiz ein Thema gründlich ab und du bekommst insgesamt mehr Fragen.",
  },
  {
    q: "Kann ich auch aus PowerPoint oder Word ein Quiz erstellen?",
    a: "Ja. Neben PDF unterstützt Klausi PowerPoint (.pptx), Word (.docx), Excel (.xlsx), CSV, Textdateien und Fotos. Alte Formate wie .ppt oder .doc speicherst du vorher als PDF.",
  },
  {
    q: "Mein PDF ist auf Englisch. Sind die Fragen dann auch auf Englisch?",
    a: "Nein, Klausi stellt die Fragen und Erklärungen auf Deutsch – auch wenn das PDF auf Englisch ist. Praktisch für englische Paper und Folien im deutschen Studium.",
  },
  {
    q: "Was ist der Unterschied zu ChatGPT?",
    a: "Du kannst ChatGPT bitten, Fragen zu einem PDF zu schreiben. Klausi macht daraus ohne Prompten ein spielbares Quiz mit Hinweisen, Auswertung pro Teilbereich, Wiederholungsplan nach Spaced Repetition und gezieltem Schwächentraining – alles in einer App.",
  },
];

export default function QuizAusPdfPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage(page),
          breadcrumbs(page),
          howTo(page, "Quiz aus PDF erstellen mit Klausi", STEPS),
          faqPage(page, FAQS),
        ]}
      />

      <div className="sky-backdrop">
        <Breadcrumbs page={page} />
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-14">
          <div>
            <Eyebrow tone="green">PDF rein, Quiz raus</Eyebrow>
            <h1 className="mt-5 text-balance text-[2.5rem] font-black leading-[1.05] tracking-tight sm:text-6xl">
              Quiz aus PDF erstellen – <span className="text-green">mit KI in Sekunden</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg font-semibold leading-relaxed text-muted sm:text-xl">
              Lade deine Vorlesungsfolien, dein Skript oder ein Paper als PDF hoch. Klausi erstellt daraus 10
              Quizfragen mit Hinweisen und Erklärungen – damit du aktiv lernst, statt nur zu lesen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <Button3D href="#anleitung" tone="white" className="!py-[0.9rem] text-lg">
                Anleitung ansehen
              </Button3D>
            </div>
          </div>

          <PdfHeroVisual />
        </section>
      </div>

      {/* ── How-to ─────────────────────────────────────────── */}
      <section id="anleitung" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5">
        <SectionHeading
          eyebrow="Anleitung"
          tone="blue"
          title="So erstellst du ein Quiz aus deinem PDF"
          intro="Vier Schritte, keine Prompts, kein Abtippen. Das Ganze dauert meist weniger als eine Minute."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.name} className="card-3d reveal p-6">
              <StepBadge n={i + 1} tone={(["blue", "purple", "green", "orange"] as const)[i]} />
              <h3 className="mt-5 text-xl font-black">{s.name}</h3>
              <p className="mt-2 font-semibold leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Anatomy of a question ──────────────────────────── */}
      <section className="mx-auto mt-28 max-w-6xl px-5">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Was du bekommst"
              tone="purple"
              title="Keine Lückentexte, sondern echte Prüfungsfragen"
            />
            <div className="prose-klausi mt-5">
              <p>
                Klausi fragt nicht ab, was auf Seite 4 oben links steht. Die KI mischt bewusst verschiedene Fragetypen:
                <strong> Verständnis, Anwendung, Definitionen und Zusammenhänge</strong> – so wie in einer echten Klausur.
              </p>
              <ul>
                <li>Vier Antwortmöglichkeiten, die richtige an zufälliger Stelle</li>
                <li>Ein Hinweis pro Frage, der die Lösung nicht verrät</li>
                <li>Eine Erklärung, warum die richtige Antwort stimmt</li>
                <li>Jede Frage ist einem Teilbereich zugeordnet – für deine Wissensmatrix</li>
              </ul>
            </div>
          </div>

          <div className="card-3d relative p-6">
            <p className="text-xs font-extrabold text-blue-shade">Teilbereich: Enzymkinetik</p>
            <h3 className="mt-2 text-xl font-black leading-snug">
              Was beschreibt die Michaelis-Konstante K<sub>M</sub>?
            </h3>
            <ul className="mt-4 grid gap-2.5">
              {[
                ["Die maximale Reaktionsgeschwindigkeit", false],
                ["Die Substratkonzentration bei halbmaximaler Geschwindigkeit", true],
                ["Die Anzahl aktiver Zentren eines Enzyms", false],
                ["Die Temperatur, bei der das Enzym denaturiert", false],
              ].map(([t, ok]) => (
                <li
                  key={t as string}
                  className={`flex items-center gap-3 rounded-2xl border-2 p-3 font-extrabold ${
                    ok ? "border-green bg-green text-white shadow-[0_4px_0_var(--color-green-shade)]" : "border-line bg-white text-faint shadow-[0_4px_0_var(--color-edge)]"
                  }`}
                >
                  {ok ? <CheckIcon className="size-5" /> : <span className="size-5" />}
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-2xl bg-orange-soft p-3.5 text-sm font-bold text-orange-shade">
              <KeyIcon className="mr-1 inline size-4" /> Hinweis: Denk an „halb“ – nicht an „maximal“.
            </p>
            <p className="mt-3 rounded-2xl bg-green-soft p-3.5 text-sm font-semibold text-ink/80">
              <strong className="text-green-shade">Erklärung:</strong> K<sub>M</sub> ist die Substratkonzentration, bei der
              ein Enzym die Hälfte seiner Maximalgeschwindigkeit erreicht. Ein kleiner Wert bedeutet hohe Affinität.
            </p>
          </div>
        </div>
      </section>

      {/* ── Which PDFs ─────────────────────────────────────── */}
      <section className="mx-auto mt-28 max-w-6xl px-5">
        <SectionHeading
          eyebrow="Material"
          tone="orange"
          title="Aus welchen PDFs Klausi ein Quiz macht"
          intro="Alles, was in deiner Vorlesung vorkommt. Je klarer der Text, desto besser die Fragen."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PDF_TYPES.map((t) => (
            <div key={t.title} className="card-3d reveal flex items-start gap-4 p-5">
              <IconTile tone="red">
                <FileIcon className="size-6" />
              </IconTile>
              <div>
                <h3 className="text-lg font-black">{t.title}</h3>
                <p className="mt-1 font-semibold text-muted">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tips (long-form) ───────────────────────────────── */}
      <section className="mx-auto mt-28 max-w-3xl px-5">
        <div className="prose-klausi">
          <h2>Tipps: So wird dein Quiz aus dem PDF richtig gut</h2>
          <h3>1. Lieber ein Kapitel als das ganze Semester</h3>
          <p>
            Klausi erstellt pro Upload 10 Fragen. Wenn du ein 200-seitiges Skript auf einmal hochlädst, verteilen sich
            diese 10 Fragen über alles. Lädst du stattdessen jedes Kapitel einzeln hoch, bekommst du pro Thema 10
            Fragen – und am Ende eine viel vollständigere Probeklausur.
          </p>
          <h3>2. Text schlägt Scan</h3>
          <p>
            PDFs, in denen du Text markieren kannst, liefern die besten Ergebnisse. Hast du nur einen Scan oder eine
            handschriftliche Mitschrift? Dann fotografiere die Seiten direkt mit der Kamera in Klausi – die App liest
            auch Handschrift.
          </p>
          <h3>3. Direkt nach der Vorlesung quizzen</h3>
          <p>
            Der beste Zeitpunkt für ein Quiz ist kurz nach der Vorlesung, solange alles noch frisch ist. Die
            Wiederholungen plant Klausi dann automatisch mit <strong>Spaced Repetition</strong>: Fragen, die du sicher
            kannst, siehst du seltener, schwierige öfter.
          </p>
          <h3>4. Fehler sind Gold wert</h3>
          <p>
            Jede falsche Antwort landet in deinem Schwächentraining. Nach dem Quiz siehst du in der Wissensmatrix, welcher
            Teilbereich noch wackelt, und kannst genau diese Fragen gezielt üben. Mehr dazu, wie du daraus einen
            kompletten Lernplan machst, liest du in unserem Guide zur{" "}
            <a href={PAGES.klausur.path}>KI Klausurvorbereitung</a>.
          </p>
        </div>

        <div className="card-3d mt-10 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
          <IconTile tone="blue">
            <SparkIcon className="size-7" />
          </IconTile>
          <p className="flex-1 font-bold">
            Kein PDF zur Hand? Klausi nimmt auch <strong>Word, PowerPoint, Excel, CSV, TXT</strong> und{" "}
            <strong>Fotos</strong> deiner Notizen.
          </p>
        </div>
      </section>

      {/* ── Benefits row ───────────────────────────────────── */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: <BrainIcon className="size-7" />, tone: "purple" as const, t: "Aktiv statt passiv", d: "Fragen beantworten verankert Wissen besser als erneutes Durchlesen." },
            { icon: <TargetIcon className="size-7" />, tone: "red" as const, t: "Lücken sichtbar", d: "Die Auswertung pro Teilbereich zeigt, wo du noch nacharbeiten musst." },
            { icon: <ArrowIcon className="size-7" />, tone: "green" as const, t: "In Sekunden fertig", d: "Kein Fragenschreiben, kein Prompten – PDF wählen und loslegen." },
          ].map((b) => (
            <div key={b.t} className="card-3d p-6">
              <IconTile tone={b.tone}>{b.icon}</IconTile>
              <h3 className="mt-4 text-xl font-black">{b.t}</h3>
              <p className="mt-2 font-semibold text-muted">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection faqs={FAQS} title="Fragen zum Quiz aus PDF" />

      <CtaBand
        title="Dein erstes Quiz aus PDF – in unter einer Minute."
        text="Klausi kostenlos laden, PDF auswählen, losspielen."
        bubble="Gib mir dein PDF, ich mach' ein Quiz draus! 📄✨"
      />

      <RelatedPages exclude={page.path} />
    </>
  );
}

function PdfToQuizVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6">
      <div className="card-3d relative w-[48%] -rotate-6 p-4 animate-float" style={{ ["--tilt" as string]: "-6deg" }}>
        <div className="flex items-center justify-between">
          <span className="rounded-lg bg-red px-2 py-0.5 text-xs font-black text-white shadow-[0_3px_0_var(--color-red-shade)]">PDF</span>
          <span className="text-[0.65rem] font-extrabold text-faint">32 Seiten</span>
        </div>
        <p className="mt-3 text-sm font-black leading-tight">Biochemie I – Kapitel 3: Enzyme</p>
        <div className="mt-3 grid gap-1.5">
          {[92, 78, 85, 60, 88, 70, 50].map((w, i) => (
            <span key={i} className="h-1.5 rounded-full bg-line" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>

      <div className="z-10 -mx-3 grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-b from-purple-light to-purple text-white shadow-[0_5px_0_var(--color-purple-shade)]">
        <SparkIcon className="size-7" />
      </div>

      <div className="card-3d relative w-[50%] rotate-3 p-4 animate-float-slow" style={{ ["--tilt" as string]: "3deg" }}>
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] font-black uppercase tracking-widest text-faint">Frage 1 / 10</span>
          <span className="chip-3d !px-2 !py-0.5 text-[0.65rem]">0 XP</span>
        </div>
        <p className="mt-2 text-sm font-black leading-tight">Was beschreibt K<sub>M</sub>?</p>
        <div className="mt-3 grid gap-1.5">
          <span className="h-5 rounded-lg border-2 border-line" />
          <span className="h-5 rounded-lg bg-green shadow-[0_2px_0_var(--color-green-shade)]" />
          <span className="h-5 rounded-lg border-2 border-line" />
          <span className="h-5 rounded-lg border-2 border-line" />
        </div>
      </div>

    </div>
  );
}

function PdfHeroVisual() {
  return (
    <div className="flex flex-col items-center gap-4">
      <PdfToQuizVisual />
      <div className="flex items-end gap-2">
        <Mascot size={120} className="w-[96px] animate-float sm:w-[120px]" />
        <SpeechBubble tail="left" className="mb-10 text-sm">
          10 Fragen, frisch gezaubert! 🪄
        </SpeechBubble>
      </div>
    </div>
  );
}
