import type { Metadata } from "next";
import { BrainIcon, CalendarIcon, CheckIcon, FileIcon, SparkIcon, TargetIcon } from "@/components/icons";
import { Breadcrumbs, CtaBand, FaqSection, RelatedPages } from "@/components/sections";
import { AppStoreButton, Button3D, Eyebrow, IconTile, Mascot, SectionHeading, SpeechBubble, StepBadge } from "@/components/ui";
import { JsonLd, breadcrumbs, faqPage, howTo, webPage, type Faq } from "@/lib/jsonld";
import { PAGES } from "@/lib/site";

const page = PAGES.klausur;

export const metadata: Metadata = {
  title: "KI Klausurvorbereitung & Probeklausur erstellen mit KI",
  description: page.description,
  alternates: { canonical: page.path },
  openGraph: {
    title: "KI Klausurvorbereitung fürs Studium – Probeklausur mit KI | Klausi",
    description: page.description,
    url: page.path,
  },
};

const MOCK_EXAM_STEPS = [
  {
    name: "Stoff in Kapitel aufteilen",
    text: "Sammle Folien, Skript und Mitschriften und teile den Klausurstoff in Kapitel oder Vorlesungen auf.",
  },
  {
    name: "Pro Kapitel ein Quiz erstellen",
    text: "Lade jedes Kapitel als PDF, Word, PowerPoint oder Foto in Klausi hoch. Pro Upload entstehen 10 Prüfungsfragen.",
  },
  {
    name: "Probeklausur unter echten Bedingungen spielen",
    text: "Spiel alle Quizze am Stück – ohne Hinweise, ohne nachzuschauen. So simulierst du die Klausur.",
  },
  {
    name: "Auswertung lesen und Schwächen trainieren",
    text: "Die Wissensmatrix zeigt pro Teilbereich, was sitzt. Mit dem Schwächentraining übst du gezielt deine Fehler.",
  },
];

const PLAN = [
  {
    when: "4 Wochen vorher",
    title: "Material sammeln & Basis-Quizze",
    items: ["Prüfungsrelevante Themen klären", "Pro Vorlesung ein Quiz in Klausi erstellen", "Täglich die ersten Runden spielen"],
    tone: "blue" as const,
  },
  {
    when: "3 Wochen vorher",
    title: "Täglich wiederholen",
    items: ["10–15 Minuten fällige Fragen pro Tag", "Neue Kapitel direkt nach dem Lernen quizzen", "Streak halten – Konstanz schlägt Marathon"],
    tone: "purple" as const,
  },
  {
    when: "2 Wochen vorher",
    title: "Probeklausur schreiben",
    items: ["Alle Quizze am Stück und ohne Hinweise spielen", "Wissensmatrix auswerten", "Schwache Teilbereiche im Skript nacharbeiten"],
    tone: "orange" as const,
  },
  {
    when: "Letzte Woche",
    title: "Schwächen schließen",
    items: ["Schwächentraining statt alles neu lesen", "Nur noch fällige Fragen und Fehler wiederholen", "Am Abend vorher: kurz wiederholen, dann schlafen"],
    tone: "green" as const,
  },
];

const FAQS: Faq[] = [
  {
    q: "Wie hilft KI bei der Klausurvorbereitung?",
    a: "Eine KI wie Klausi nimmt dir die zeitaufwändigste Arbeit ab: Aus deinen Folien, Skripten oder Mitschriften erstellt sie in Sekunden Prüfungsfragen mit Erklärungen. Du verbringst deine Lernzeit also mit aktivem Abrufen statt mit Abtippen und Karteikarten schreiben – und die App plant die Wiederholungen für dich.",
  },
  {
    q: "Kann ich mit KI eine Probeklausur erstellen?",
    a: "Ja. Mit Klausi lädst du den Klausurstoff Kapitel für Kapitel hoch, pro Upload entstehen 10 Multiple-Choice-Fragen. Spielst du alle Quizze am Stück und ohne Hinweise, hast du eine Probeklausur zu deinem eigenen Stoff – inklusive Auswertung pro Teilbereich.",
  },
  {
    q: "Wann sollte ich mit der Klausurvorbereitung im Studium anfangen?",
    a: "Für eine normale Semesterklausur sind drei bis vier Wochen ein guter Startpunkt. Noch besser: Erstelle direkt nach jeder Vorlesung ein Quiz. Dann wiederholt Klausi den Stoff schon während des Semesters und die eigentliche Prüfungsvorbereitung wird deutlich entspannter.",
  },
  {
    q: "Wie viel Zeit pro Tag brauche ich mit Klausi?",
    a: "Für die Wiederholung fälliger Fragen reichen meist 10 bis 15 Minuten am Tag. Kurze, regelmäßige Lerneinheiten sind laut Lernforschung wirksamer als wenige lange Sessions kurz vor der Prüfung.",
  },
  {
    q: "Ersetzt Klausi das Lernen mit dem Skript?",
    a: "Nein, Klausi ergänzt es. Du verstehst den Stoff weiterhin mit Vorlesung und Skript – Klausi sorgt dafür, dass du ihn abrufen kannst, zeigt dir deine Lücken und erinnert dich rechtzeitig ans Wiederholen.",
  },
  {
    q: "Eignet sich Klausi auch für Staatsexamen oder große Prüfungen?",
    a: "Klausi funktioniert mit jedem Material, das du hochlädst – also auch für umfangreiche Prüfungen. Bei großen Stoffmengen lohnt es sich besonders, früh anzufangen und den Stoff in viele kleine Quizze aufzuteilen, damit Spaced Repetition seine Wirkung entfalten kann.",
  },
];

const SCIENCE = [
  {
    icon: <BrainIcon className="size-7" />,
    tone: "purple" as const,
    title: "Testeffekt",
    text: "Wer sich Wissen aktiv abfragt, behält es deutlich länger als jemand, der denselben Text noch einmal liest.",
    source: "Roediger & Karpicke, 2006",
  },
  {
    icon: <CalendarIcon className="size-7" />,
    tone: "blue" as const,
    title: "Spacing-Effekt",
    text: "Über mehrere Tage verteilte Wiederholungen schlagen eine lange Lernsession am Abend vor der Klausur.",
    source: "Cepeda et al., 2006",
  },
  {
    icon: <TargetIcon className="size-7" />,
    tone: "red" as const,
    title: "Feedback auf Fehler",
    text: "Fehler sind nur dann nützlich, wenn du sofort erfährst, warum. Deshalb gibt Klausi zu jeder Frage eine Erklärung.",
    source: "Dunlosky et al., 2013",
  },
];

export default function KlausurvorbereitungPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage(page),
          breadcrumbs(page),
          howTo(page, "Probeklausur erstellen mit KI", MOCK_EXAM_STEPS, "PT10M"),
          faqPage(page, FAQS),
        ]}
      />

      <div className="sky-backdrop">
        <Breadcrumbs page={page} />
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-14">
          <div>
            <Eyebrow tone="orange">Klausurvorbereitung im Studium</Eyebrow>
            <h1 className="mt-5 text-balance text-[2.5rem] font-black leading-[1.05] tracking-tight sm:text-6xl">
              <span className="text-orange">KI Klausurvorbereitung:</span> Probeklausur aus deinem Skript
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg font-semibold leading-relaxed text-muted sm:text-xl">
              Klausi macht aus deinen Vorlesungsunterlagen Prüfungsfragen, zeigt dir, welche Themen noch wackeln, und
              plant deine Wiederholungen bis zum Prüfungstag. Prüfungsvorbereitung im Studium, die wirklich hängen bleibt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <Button3D href="#lernplan" tone="white" className="!py-[0.9rem] text-lg">
                4-Wochen-Lernplan
              </Button3D>
            </div>
          </div>

          <ExamVisual />
        </section>
      </div>

      {/* ── Why classic prep fails ─────────────────────────── */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <SectionHeading
          eyebrow="Lernforschung"
          tone="purple"
          title="Warum Skript-Durchlesen dich nicht durch die Klausur bringt"
          intro="Markieren und Wiederlesen fühlt sich produktiv an, bringt aber wenig. Die drei Prinzipien, auf denen Klausi aufbaut, gehören zu den am besten belegten Lernmethoden überhaupt."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SCIENCE.map((s) => (
            <article key={s.title} className="card-3d reveal flex flex-col p-6">
              <IconTile tone={s.tone}>{s.icon}</IconTile>
              <h3 className="mt-5 text-xl font-black">{s.title}</h3>
              <p className="mt-2 flex-1 font-semibold leading-relaxed text-muted">{s.text}</p>
              <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-faint">{s.source}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Mock exam ──────────────────────────────────────── */}
      <section id="probeklausur" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-5">
        <div className="grid items-start gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="md:sticky md:top-28">
            <SectionHeading
              center={false}
              eyebrow="Probeklausur erstellen"
              tone="green"
              title="Probeklausur erstellen mit KI – so geht's"
            />
            <div className="prose-klausi mt-5">
              <p>
                Altklausuren gibt es nicht für jedes Fach, und sie passen selten genau zu deinem Semester. Mit Klausi
                baust du dir deine eigene Probeklausur – aus genau dem Stoff, den dein Prof behandelt hat.
              </p>
              <p>
                Jedes Quiz enthält 10 Fragen aus den Bereichen <strong>Verständnis, Anwendung, Definitionen und
                Zusammenhänge</strong>. Mehrere Quizze zusammen ergeben eine Probeklausur, die den ganzen Stoff abdeckt.
              </p>
            </div>
            <div className="mt-8 hidden items-end gap-3 md:flex">
              <Mascot size={120} className="animate-float" />
              <SpeechBubble tail="left" className="mb-14 max-w-[15rem] text-sm">
                Ohne Hinweise spielen – dann ist es wie in der echten Klausur! 📝
              </SpeechBubble>
            </div>
          </div>

          <ol className="grid gap-4">
            {MOCK_EXAM_STEPS.map((s, i) => (
              <li key={s.name} className="card-3d reveal flex gap-5 p-6">
                <StepBadge n={i + 1} tone={(["blue", "purple", "orange", "green"] as const)[i]} />
                <div>
                  <h3 className="text-xl font-black">{s.name}</h3>
                  <p className="mt-1.5 font-semibold leading-relaxed text-muted">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 4-week plan ────────────────────────────────────── */}
      <section id="lernplan" className="mt-28 scroll-mt-20 bg-gradient-to-b from-white to-canvas py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Lernplan"
            tone="orange"
            title="Prüfungsvorbereitung im Studium: dein 4-Wochen-Plan"
            intro="Ein realistischer Plan für eine Semesterklausur. Bei großen Prüfungen streckst du ihn einfach."
          />
          <ol className="relative mt-14 grid gap-5 md:grid-cols-4">
            {PLAN.map((p, i) => (
              <li key={p.when} className="card-3d reveal flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <StepBadge n={i + 1} tone={p.tone} />
                  <span className="text-sm font-black uppercase tracking-wider text-faint">{p.when}</span>
                </div>
                <h3 className="mt-4 text-xl font-black">{p.title}</h3>
                <ul className="mt-3 grid gap-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 font-semibold text-muted">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-green" />
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Long-form ──────────────────────────────────────── */}
      <section className="mx-auto mt-24 max-w-3xl px-5">
        <div className="prose-klausi">
          <h2>Klausurvorbereitung im Studium: Was wirklich hilft</h2>
          <p>
            Im Studium ist der Stoff pro Prüfung oft größer als ein ganzes Schuljahr. Wer erst zwei Tage vorher anfängt,
            kann ihn vielleicht kurz auswendig lernen – aber selten verstehen und noch seltener behalten. Gute
            Klausurvorbereitung setzt deshalb auf drei Dinge: <strong>früh anfangen</strong>,{" "}
            <strong>aktiv abfragen</strong> und <strong>gezielt an den Lücken arbeiten</strong>.
          </p>
          <h3>Aktiv abfragen statt passiv lesen</h3>
          <p>
            Jede Frage, die du beantwortest, zwingt dein Gehirn, Wissen abzurufen. Genau dieser Abruf stärkt die
            Erinnerung. Mit Klausi musst du die Fragen nicht selbst schreiben – du{" "}
            <a href={PAGES.pdf.path}>erstellst das Quiz direkt aus deinem PDF</a> oder einem Foto deiner Notizen.
          </p>
          <h3>Wiederholen, bevor du vergisst</h3>
          <p>
            Klausi plant Wiederholungen nach dem SM-2-Prinzip, das auch Anki nutzt. Fragen, die du sicher beantwortest,
            kommen in immer größeren Abständen wieder. Fragen, bei denen du danebenliegst, siehst du schon bald erneut.
            Auf dem Startbildschirm steht jeden Tag, wie viele Fragen fällig sind.
          </p>
          <h3>Lücken sichtbar machen</h3>
          <p>
            Das Gefährlichste in der Prüfungsvorbereitung sind Themen, von denen du glaubst, sie zu können. Nach jedem
            Quiz ordnet Klausi deine Antworten den Teilbereichen des Stoffs zu. So siehst du schwarz auf weiß, ob
            „Basenpaare“ oder „Genexpression“ noch wackelt – und trainierst mit einem Tipp genau diese Fehler.
          </p>
          <h3>Dranbleiben mit Streaks</h3>
          <p>
            Die beste Lernmethode bringt nichts, wenn du sie nicht durchziehst. XP, Level und deine tägliche Streak
            machen aus der Klausurvorbereitung ein kleines Spiel – und aus fünf Minuten Wiederholung eine Gewohnheit.
          </p>
        </div>

        <aside className="card-3d mt-10 p-6">
          <p className="text-sm font-black uppercase tracking-wider text-faint">Quellen</p>
          <ul className="mt-3 grid gap-2 text-sm font-semibold text-muted">
            <li>Roediger, H. L. & Karpicke, J. D. (2006). Test-Enhanced Learning. Psychological Science, 17(3).</li>
            <li>Cepeda, N. J. et al. (2006). Distributed Practice in Verbal Recall Tasks. Psychological Bulletin, 132(3).</li>
            <li>
              Dunlosky, J. et al. (2013). Improving Students’ Learning With Effective Learning Techniques. Psychological
              Science in the Public Interest, 14(1).
            </li>
          </ul>
        </aside>
      </section>

      <FaqSection faqs={FAQS} title="Fragen zur KI Klausurvorbereitung" />

      <CtaBand
        title="Deine Probeklausur ist nur ein Foto entfernt."
        text="Lade Klausi kostenlos, lade dein erstes Kapitel hoch und finde heute noch heraus, was schon sitzt."
        bubble="Zusammen schaffen wir die Klausur! 💪"
      />

      <RelatedPages exclude={page.path} />
    </>
  );
}

function ExamVisual() {
  const rows = [
    { name: "DNA-Struktur", v: 3, of: 3, bar: "var(--color-green)", top: "var(--color-green-light)" },
    { name: "Basenpaare", v: 2, of: 4, bar: "var(--color-orange)", top: "var(--color-orange-light)" },
    { name: "Gene", v: 1, of: 3, bar: "var(--color-red)", top: "var(--color-red-light)" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="card-3d absolute -top-6 right-2 z-10 flex items-center gap-3 !rounded-2xl px-4 py-3 rotate-3 animate-float" style={{ ["--tilt" as string]: "3deg" }}>
        <span className="grid size-10 place-items-center rounded-xl bg-orange-soft text-orange-shade">
          <CalendarIcon className="size-6" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-extrabold text-faint">Biologie-Klausur</span>
          <span className="block text-lg font-black">in 21 Tagen</span>
        </span>
      </div>

      <div className="card-3d p-6 pt-16">
        <p className="text-sm font-black uppercase tracking-wider text-faint">Deine Wissensmatrix</p>
        <ul className="mt-4 grid gap-4">
          {rows.map((r) => (
            <li key={r.name}>
              <div className="flex justify-between font-extrabold">
                <span>{r.name}</span>
                <span className="text-faint">
                  {r.v}/{r.of}
                </span>
              </div>
              <div className="progress-3d mt-1.5 !h-3.5">
                <span style={{ width: `${(r.v / r.of) * 100}%`, ["--bar" as string]: r.bar, ["--bar-top" as string]: r.top }} />
              </div>
            </li>
          ))}
        </ul>
        <div className="btn-3d tone-orange mt-6 w-full !justify-between text-left">
          <span>
            <span className="block text-lg">Trainiere deine Schwächen</span>
            <span className="block text-sm font-bold opacity-90">4 Fehler gezielt üben</span>
          </span>
          <SparkIcon className="size-6" />
        </div>
      </div>

      <div className="card-3d absolute -bottom-8 -left-4 flex items-center gap-2 !rounded-2xl px-3.5 py-2.5 -rotate-3 animate-float-slow" style={{ ["--tilt" as string]: "-3deg" }}>
        <FileIcon className="size-5 text-red" />
        <span className="text-sm font-black">6 Fragen sind fällig</span>
      </div>
    </div>
  );
}
