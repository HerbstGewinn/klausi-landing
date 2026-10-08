import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  BrainIcon,
  CameraIcon,
  CheckIcon,
  FileIcon,
  FlameIcon,
  KeyIcon,
  SparkIcon,
  TargetIcon,
  XIcon,
} from "@/components/icons";
import { QuizDemo } from "@/components/QuizDemo";
import { CtaBand, FaqSection } from "@/components/sections";
import { AppStoreButton, Button3D, IconTile, Mascot, PhoneFrame, SectionHeading, SpeechBubble, StepBadge } from "@/components/ui";
import { JsonLd, faqPage, webPage, type Faq } from "@/lib/jsonld";
import { PAGES, SUPPORTED_FORMATS } from "@/lib/site";

const page = PAGES.home;

export const metadata: Metadata = {
  title: { absolute: "KI Lernapp fürs Studium | Klausi – Lernapp für Studenten" },
  description: page.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Klausi – die KI Lernapp fürs Studium",
    description: page.description,
    url: "/",
  },
};

const FAQS: Faq[] = [
  {
    q: "Was ist Klausi?",
    a: "Klausi ist eine KI Lernapp für Studenten und Schüler. Du fotografierst deine Notizen oder lädst ein Dokument hoch, und Klausi erstellt daraus in Sekunden ein Quiz mit 10 Multiple-Choice-Fragen, Hinweisen und Erklärungen. Danach erinnert dich Klausi mit Spaced Repetition ans Wiederholen und trainiert gezielt deine Schwächen.",
  },
  {
    q: "Welche Dateien kann ich hochladen?",
    a: "Fotos von Mitschriften, Tafelbildern oder Buchseiten, außerdem PDF, Word (.docx), PowerPoint (.pptx), Excel (.xlsx), CSV und Textdateien. Klausi erkennt auch Handschrift. Alte Office-Formate (.doc, .ppt, .xls) speicherst du am besten vorher als PDF.",
  },
  {
    q: "Ist Klausi kostenlos?",
    a: "Du kannst Klausi kostenlos im App Store laden und direkt ein Beispiel-Quiz spielen. Klausi Premium schaltet unbegrenzt viele Quizze, Spaced Repetition, Schwächentraining sowie Hinweise und ausführliche Erklärungen frei – und lässt sich vorher gratis testen.",
  },
  {
    q: "Auf welchen Geräten läuft Klausi?",
    a: "Klausi gibt es aktuell als App für das iPhone im deutschen App Store.",
  },
  {
    q: "Wie viele Fragen erstellt Klausi pro Quiz?",
    a: "Pro Upload entstehen 10 Multiple-Choice-Fragen mit je vier Antworten. Klausi teilt dein Material dabei in 3 bis 5 Teilbereiche auf, damit du nach dem Quiz siehst, welche Themen schon sitzen und wo du noch Lücken hast.",
  },
  {
    q: "Funktioniert Klausi auch mit englischen Vorlesungsfolien?",
    a: "Ja. Klausi liest auch englisches Material und stellt dir die Fragen und Erklärungen auf Deutsch.",
  },
  {
    q: "Ist Klausi nur für Studenten?",
    a: "Klausi ist für das Lernen im Studium gebaut – für Vorlesungsfolien, Skripte und Mitschriften. Genauso gut funktioniert die App aber für Schüler, Azubis und alle, die sich auf eine Prüfung vorbereiten.",
  },
];

const STEPS = [
  {
    title: "Notizen hochladen",
    text: "Fotografiere deine Mitschrift oder wähle ein PDF, Word-Dokument oder deine PowerPoint-Folien aus.",
    tone: "blue" as const,
  },
  {
    title: "Quiz in Sekunden",
    text: "Klausi erkennt die Schlüsselkonzepte und zaubert 10 Quizfragen – mit Hinweisen und Erklärungen.",
    tone: "green" as const,
  },
  {
    title: "Wiederholen & Lücken schließen",
    text: "Klausi erinnert dich, bevor du etwas vergisst, und übt gezielt die Fragen, die noch nicht sitzen.",
    tone: "orange" as const,
  },
];

const FEATURES = [
  {
    icon: <BrainIcon className="size-7" />,
    tone: "purple" as const,
    title: "Spaced Repetition",
    text: "Klausi plant deine Wiederholungen nach dem SM-2-Prinzip – dem Algorithmus hinter Anki. Fällige Fragen siehst du direkt auf dem Startbildschirm.",
  },
  {
    icon: <TargetIcon className="size-7" />,
    tone: "red" as const,
    title: "Schwächen trainieren",
    text: "Nach jedem Quiz zeigt dir die Wissensmatrix, welche Teilbereiche sitzen. Ein Tipp – und du übst gezielt deine Fehler.",
  },
  {
    icon: <KeyIcon className="size-7" />,
    tone: "orange" as const,
    title: "Hinweise & Erklärungen",
    text: "Zu jeder Frage gibt es einen Hinweis, der die Lösung nicht verrät, und eine Erklärung, warum die richtige Antwort richtig ist.",
  },
  {
    icon: <FlameIcon className="size-7" />,
    tone: "green" as const,
    title: "XP, Level & Streaks",
    text: "Lernen fühlt sich an wie ein Spiel: XP sammeln, aufleveln, Streak halten. Kurze Runden statt Lernmarathon.",
  },
  {
    icon: <CameraIcon className="size-7" />,
    tone: "blue" as const,
    title: "Liest deine Handschrift",
    text: "Tafelbild, Collegeblock oder Buchseite: Ein Foto genügt. Klausi erkennt auch handschriftliche Notizen.",
  },
  {
    icon: <SparkIcon className="size-7" />,
    tone: "purple" as const,
    title: "Fragen auf Deutsch",
    text: "Fragen und Erklärungen bekommst du auf Deutsch – auch wenn deine Folien oder Paper auf Englisch sind.",
  },
];

const SUBJECTS = [
  "Medizin & Pharmazie",
  "Jura",
  "BWL & VWL",
  "Psychologie",
  "Biologie & Chemie",
  "Informatik",
  "Ingenieurwesen",
  "Lehramt",
  "Soziale Arbeit",
  "Pflege",
];

const SCREENS = [
  { src: "/screens/klausi-startseite.png", alt: "Klausi Startseite mit Level, Streak und fälligen Fragen", caption: "Fällige Fragen auf einen Blick" },
  { src: "/screens/klausi-quiz-frage.png", alt: "Quizfrage zur DNA-Struktur in der Klausi App", caption: "Quizfragen aus deinem Material" },
  { src: "/screens/klausi-auswertung.png", alt: "Auswertung mit Teilbereichen und Erklärungen", caption: "Erklärungen & Schwächentraining" },
  { src: "/screens/klausi-streak-xp.png", alt: "XP-Fortschritt und Tages-Streak in Klausi", caption: "XP, Level & Streak" },
];

const COMPARE = [
  ["Karteikarten selbst schreiben", "Klausi erstellt die Fragen aus deinem Material"],
  ["Stundenlang Zusammenfassungen tippen", "Foto oder PDF hochladen – fertig in Sekunden"],
  ["Wiederholen, wenn es dir einfällt", "Erinnerung genau dann, bevor du vergisst"],
  ["Nicht wissen, was noch fehlt", "Wissensmatrix zeigt jede Lücke pro Thema"],
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[webPage(page), faqPage(page, FAQS)]} />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="sky-backdrop relative overflow-hidden">
        <span className="sparkle left-[8%] top-[18%] animate-float" />
        <span className="sparkle left-[46%] top-[10%] scale-75 animate-float-slow" />
        <span className="sparkle bottom-[16%] right-[6%] animate-float" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.08fr_0.92fr] md:pb-28 md:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-line bg-white px-3.5 py-1.5 text-sm font-extrabold shadow-[0_3px_0_var(--color-edge)]">
              <span className="size-2.5 rounded-full bg-green shadow-[0_0_0_3px_var(--color-green-soft)]" />
              Die Lernapp für Studenten
            </span>

            <h1 className="mt-6 text-balance text-[2.6rem] font-black leading-[1.03] tracking-tight sm:text-6xl">
              <span className="text-orange">KI Lernapp</span> fürs Studium:{" "}
              <span className="relative whitespace-nowrap">
                Aus deinem Skript
                <svg viewBox="0 0 300 14" className="absolute -bottom-2 left-0 w-full text-blue-light" aria-hidden preserveAspectRatio="none">
                  <path d="M3 10c60-7 140-9 294-4" stroke="currentColor" strokeWidth="7" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              wird ein Quiz.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg font-semibold leading-relaxed text-muted sm:text-xl">
              Fotografiere deine Mitschrift oder lade die Vorlesungsfolien als PDF hoch. Klausi macht daraus in Sekunden
              10 Quizfragen – und erinnert dich ans Wiederholen, <strong className="text-ink">bevor</strong> du etwas vergisst.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <Button3D href="#demo" tone="white" className="!py-[0.9rem] text-lg">
                Demo ausprobieren
              </Button3D>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-extrabold text-muted">
              {["Kostenlos laden", "Für iPhone", "Fragen auf Deutsch"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="size-4 text-green" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-[72%] max-w-[300px] md:w-full">
            <PhoneFrame
              src="/screens/klausi-startseite.png"
              alt="Die Startseite der Klausi App mit Level, Streak und fälligen Quizfragen"
              priority
              className="rotate-[2.5deg]"
            />

            <div className="absolute -left-16 top-[14%] animate-float sm:-left-24" style={{ ["--tilt" as string]: "-4deg" }}>
              <div className="card-3d flex items-center gap-2.5 !rounded-2xl px-3 py-2.5 shadow-xl">
                <span className="grid size-9 place-items-center rounded-xl bg-red-soft text-red-shade">
                  <FileIcon className="size-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-black">Skript_Biochemie.pdf</span>
                  <span className="block text-xs font-extrabold text-green-shade">→ 10 Fragen erstellt</span>
                </span>
              </div>
            </div>

            <div className="absolute -right-6 top-[46%] animate-float-slow sm:-right-12" style={{ ["--tilt" as string]: "5deg" }}>
              <span className="chip-3d text-lg">+166 XP</span>
            </div>

            <div className="absolute -bottom-8 -left-14 flex items-end sm:-bottom-6 sm:-left-20">
              <Mascot size={150} priority className="w-[104px] drop-shadow-[0_12px_10px_rgba(26,26,46,0.18)] sm:w-[150px]" />
              <SpeechBubble tail="left" className="mb-24 -ml-1 hidden w-44 text-sm sm:block">
                Foto machen, Quiz spielen, Prüfung rocken! ✨
              </SpeechBubble>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formats strip ──────────────────────────────────── */}
      <section aria-label="Unterstützte Formate" className="relative z-10 mx-auto -mt-8 max-w-5xl px-5">
        <div className="card-3d flex flex-col items-center gap-4 px-6 py-5 md:flex-row md:justify-between">
          <p className="font-black">Klausi liest alles – sogar deine Handschrift.</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {SUPPORTED_FORMATS.map((f) => (
              <li key={f} className="rounded-xl bg-canvas px-3 py-1.5 text-sm font-extrabold text-muted">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section id="so-funktionierts" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-5">
        <SectionHeading
          eyebrow="So funktioniert's"
          tone="green"
          title="Vom Collegeblock zur Probeklausur in drei Schritten"
          intro="Kein Abtippen, keine Karteikarten basteln. Du lieferst das Material aus deiner Vorlesung – Klausi macht den Rest."
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="card-3d reveal flex flex-col overflow-hidden">
              <div className="relative h-56 overflow-hidden bg-gradient-to-b from-sky to-white">
                {i === 0 ? (
                  <UploadVisual />
                ) : (
                  <Image
                    src={i === 1 ? "/screens/klausi-quiz-frage.png" : "/screens/klausi-auswertung.png"}
                    alt={i === 1 ? "Quizfrage in Klausi" : "Auswertung nach Teilbereichen in Klausi"}
                    width={473}
                    height={1024}
                    sizes="260px"
                    className="mx-auto mt-6 w-[62%] rounded-t-[1.6rem] border-[6px] border-b-0 border-[#16182a] object-cover object-top"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <StepBadge n={i + 1} tone={s.tone} />
                <h3 className="text-xl font-black">{s.title}</h3>
                <p className="font-semibold leading-relaxed text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Live demo ──────────────────────────────────────── */}
      <section id="demo" className="mt-28 scroll-mt-20 bg-gradient-to-b from-white to-canvas py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Probier's aus"
              tone="orange"
              title="So fühlt sich Lernen mit Klausi an"
              intro="Drei Beispielfragen, genau wie in der App: Antwort tippen, Feedback bekommen, Erklärung lesen. Mit deinem eigenen Skript sind es 10 Fragen pro Quiz."
            />
            <div className="mt-8 hidden items-end gap-3 md:flex">
              <Mascot size={140} className="animate-float" />
              <SpeechBubble tail="left" className="mb-16 max-w-xs">
                Brauchst du Hilfe? Nimm einen <span className="text-orange">Hinweis</span> – der verrät die Lösung nicht. 🔑
              </SpeechBubble>
            </div>
          </div>
          <QuizDemo />
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────── */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <SectionHeading
          eyebrow="Funktionen"
          tone="purple"
          title="Warum Klausi die KI Lernapp für dein Studium ist"
          intro="Andere Apps geben dir fertige Karteikarten. Klausi arbeitet mit genau dem Stoff, der in deiner Klausur drankommt."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="card-3d reveal p-6">
              <IconTile tone={f.tone}>{f.icon}</IconTile>
              <h3 className="mt-5 text-xl font-black">{f.title}</h3>
              <p className="mt-2 font-semibold leading-relaxed text-muted">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Screenshot gallery ─────────────────────────────── */}
      <section className="mt-28" aria-labelledby="screens-title">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="Einblick" tone="blue" title={<span id="screens-title">Ein Blick in die App</span>} />
        </div>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-10">
          {SCREENS.map((s, i) => (
            <figure key={s.src} className="w-[62vw] max-w-[250px] shrink-0 snap-center sm:w-[250px]">
              <PhoneFrame src={s.src} alt={s.alt} className={i % 2 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"} />
              <figcaption className="mt-6 text-center font-extrabold">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── For students ───────────────────────────────────── */}
      <section className="mx-auto mt-20 max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1fr_1.05fr] md:items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Für dein Fach"
              tone="green"
              title="Eine Lernapp für Studenten, die mit deinem Material lernt"
            />
            <div className="prose-klausi mt-5">
              <p>
                Im Studium lernst du nicht aus einem Schulbuch, sondern aus Folien, Skripten, Papern und deinen eigenen
                Mitschriften. Genau dafür ist Klausi gebaut: Die KI liest dein Material, findet die Schlüsselkonzepte und
                stellt dir die Fragen, die ein Prüfer stellen würde – Verständnis, Anwendung, Definitionen und
                Zusammenhänge.
              </p>
              <p>
                Ob Biochemie-Skript, BWL-Formelsammlung oder Jura-Mitschrift: Du lernst aktiv statt passiv zu lesen. Und
                das ist laut Lernforschung einer der wirksamsten Wege, sich Wissen langfristig zu merken.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Beliebte Studienfächer">
              {SUBJECTS.map((s) => (
                <li key={s} className="rounded-xl border-2 border-line bg-white px-3 py-1.5 text-sm font-extrabold shadow-[0_3px_0_var(--color-edge)]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="card-3d overflow-hidden">
            <div className="grid grid-cols-2 border-b-2 border-line text-sm font-black uppercase tracking-wider">
              <p className="bg-canvas p-4 text-muted">Ohne Klausi</p>
              <p className="flex items-center gap-2 bg-green-soft p-4 text-green-shade">
                <Image src="/brand/klausi-maskottchen.png" alt="" width={24} height={24} /> Mit Klausi
              </p>
            </div>
            <ul>
              {COMPARE.map(([without, withK]) => (
                <li key={without} className="grid grid-cols-2 border-b-2 border-line last:border-b-0">
                  <p className="flex gap-2 p-4 font-bold text-muted">
                    <XIcon className="mt-0.5 size-4 shrink-0 text-red" /> {without}
                  </p>
                  <p className="flex gap-2 p-4 font-extrabold">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-green" /> {withK}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Use cases → money pages ────────────────────────── */}
      <section className="mx-auto mt-28 max-w-6xl px-5">
        <SectionHeading eyebrow="Loslegen" tone="orange" title="Wofür nutzt du Klausi?" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link href={PAGES.pdf.path} className="card-3d group relative overflow-hidden p-7 transition hover:-translate-y-1">
            <IconTile tone="red">
              <FileIcon className="size-7" />
            </IconTile>
            <h3 className="mt-5 text-2xl font-black">Quiz aus PDF erstellen</h3>
            <p className="mt-2 font-semibold leading-relaxed text-muted">
              Vorlesungsfolien, Skript oder Paper als PDF hochladen und sofort mit 10 Fragen zum Inhalt üben.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-black text-blue-shade">
              So geht’s <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
            </span>
          </Link>
          <Link href={PAGES.klausur.path} className="card-3d group relative overflow-hidden p-7 transition hover:-translate-y-1">
            <IconTile tone="orange">
              <TargetIcon className="size-7" />
            </IconTile>
            <h3 className="mt-5 text-2xl font-black">KI Klausurvorbereitung</h3>
            <p className="mt-2 font-semibold leading-relaxed text-muted">
              Probeklausur mit KI erstellen, Wissenslücken finden und bis zum Prüfungstag gezielt wiederholen.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-black text-blue-shade">
              Zum Lernplan <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <FaqSection faqs={FAQS} title="Fragen zur KI Lernapp" />

      <CtaBand
        title="Deine nächste Klausur? Lass uns zaubern."
        text="Lade Klausi kostenlos, fotografiere deine erste Seite Notizen und spiel in einer Minute dein erstes Quiz."
        bubble="Ich warte schon auf dein Skript! 🪄"
      />
    </>
  );
}

function UploadVisual() {
  return (
    <div className="absolute inset-0 grid place-items-center p-6">
      <div className="grid w-full max-w-[260px] gap-3">
        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-b from-blue-light to-blue p-4 text-white shadow-[0_5px_0_var(--color-blue-shade)]">
          <CameraIcon className="size-8" />
          <span className="text-lg font-black">Kamera</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border-2 border-line bg-white p-3 text-center shadow-[0_4px_0_var(--color-edge)]">
            <span className="text-2xl" aria-hidden>🖼️</span>
            <p className="font-black">Fotos</p>
          </div>
          <div className="rounded-2xl border-2 border-line bg-white p-3 text-center shadow-[0_4px_0_var(--color-edge)]">
            <FileIcon className="mx-auto size-7 text-blue-shade" />
            <p className="font-black">Datei</p>
            <p className="text-[0.65rem] font-bold text-muted">PDF, Word, Excel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
