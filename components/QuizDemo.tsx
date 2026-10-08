"use client";

import { useState } from "react";
import { APP_STORE_URL } from "@/lib/site";
import { AppleIcon, CheckIcon, FlameIcon, KeyIcon, XIcon } from "./icons";

type Question = {
  subtopic: string;
  q: string;
  options: string[];
  correct: number;
  hint: string;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    subtopic: "Biologie · DNA-Struktur",
    q: "Welche räumliche Form hat die DNA?",
    options: [
      "Zwei getrennte Reihen ohne Verbindung",
      "Ein geschlossener Ring aus einem Strang",
      "Eine schraubenförmig gewundene Doppelstruktur",
      "Ein flaches, verzweigtes Netz",
    ],
    correct: 2,
    hint: "Watson und Crick haben die Form 1953 beschrieben – sie erinnert an eine verdrehte Leiter.",
    explanation:
      "Die DNA ist eine Doppelhelix: Zwei Stränge winden sich umeinander, verbunden über Basenpaare wie die Sprossen einer Leiter.",
  },
  {
    subtopic: "Psychologie · Gedächtnis",
    q: "Was beschreibt die Vergessenskurve nach Ebbinghaus?",
    options: [
      "Wir vergessen Gelerntes gleichmäßig über viele Jahre",
      "Ohne Wiederholung geht ein Großteil neuer Inhalte schon in den ersten Tagen verloren",
      "Wer einmal lernt, behält alles dauerhaft",
      "Vergessen hängt nur von der Tageszeit ab",
    ],
    correct: 1,
    hint: "Die Kurve fällt am Anfang besonders steil ab.",
    explanation:
      "Ebbinghaus zeigte, dass wir kurz nach dem Lernen am meisten vergessen. Genau deshalb wiederholt Klausi Fragen in wachsenden Abständen – Spaced Repetition.",
  },
  {
    subtopic: "BWL · Kostenrechnung",
    q: "Was gibt der Break-even-Point an?",
    options: [
      "Den Zeitpunkt der höchsten Fixkosten",
      "Den maximal möglichen Gewinn eines Produkts",
      "Die Menge, bei der Erlöse und Gesamtkosten gleich hoch sind",
      "Den Preis, ab dem keine Steuern anfallen",
    ],
    correct: 2,
    hint: "Ab diesem Punkt beginnt die Gewinnzone.",
    explanation:
      "Am Break-even-Point decken die Erlöse genau die fixen und variablen Kosten. Jede weitere verkaufte Einheit bringt Gewinn.",
  },
];

const LETTERS = ["A", "B", "C", "D"];

export function QuizDemo() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hintsLeft, setHintsLeft] = useState(2);
  const [showHint, setShowHint] = useState(false);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUESTIONS[index];
  const answered = picked !== null;
  const correct = answered && picked === question.correct;
  const progress = ((index + (answered ? 1 : 0)) / QUESTIONS.length) * 100;

  function pick(i: number) {
    if (answered) return;
    setPicked(i);
    if (i === question.correct) {
      setXp((x) => x + (showHint ? 5 : 10));
      setStreak((s) => s + 1);
      setScore((s) => s + 1);
    } else {
      setStreak(0);
    }
  }

  function next() {
    if (index === QUESTIONS.length - 1) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    setShowHint(false);
  }

  function restart() {
    setIndex(0);
    setPicked(null);
    setHintsLeft(2);
    setShowHint(false);
    setXp(0);
    setStreak(0);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="card-3d mx-auto w-full max-w-md p-7 text-center animate-pop">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-faint">Beispiel-Quiz geschafft</p>
        <p className="mt-3 text-5xl font-black text-orange">
          {score} / {QUESTIONS.length}
        </p>
        <p className="mt-2 text-lg font-extrabold">
          {score === QUESTIONS.length ? "Perfekt! Du bist bereit für mehr." : "Stark! Genau so findest du deine Lücken."}
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <span className="chip-3d">+{xp} XP</span>
          <span className="chip-3d" style={{ ["--chip" as string]: "var(--color-blue)", ["--chip-shade" as string]: "var(--color-blue-shade)" }}>
            <FlameIcon className="size-4" /> Streak gestartet
          </span>
        </div>
        <p className="mt-6 font-semibold text-muted">
          In der App entsteht so ein Quiz aus <strong className="text-ink">deinem</strong> Skript – mit 10 Fragen, Hinweisen und Erklärungen.
        </p>
        <div className="mt-6 grid gap-3">
          <a href={APP_STORE_URL} target="_blank" rel="noopener" className="btn-3d tone-green w-full text-lg">
            <AppleIcon className="size-5" /> Mit eigenem Skript testen
          </a>
          <button type="button" onClick={restart} className="py-2 font-extrabold text-muted hover:text-ink">
            Nochmal spielen
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card-3d relative mx-auto w-full max-w-md p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <div className="progress-3d flex-1" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100} aria-label="Fortschritt">
          <span style={{ width: `${Math.max(progress, 6)}%` }} />
        </div>
        <span className="flex items-center gap-1 rounded-xl border-2 border-line px-2 py-0.5 font-black text-muted">
          <FlameIcon className="size-5" />
          {streak}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-black uppercase tracking-[0.12em] text-faint">
          Frage {index + 1} / {QUESTIONS.length}
        </span>
        <span className="chip-3d !px-2.5 !py-1 text-sm">{xp} XP</span>
      </div>
      <p className="mt-1 text-xs font-extrabold text-blue-shade">{question.subtopic}</p>
      <h3 className="mt-2 text-balance text-2xl font-black leading-tight">{question.q}</h3>

      <ul className="mt-5 grid gap-3">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correct;
          const isPicked = i === picked;
          let state = "bg-white border-line text-ink shadow-[0_4px_0_var(--color-edge)] hover:bg-canvas active:translate-y-1 active:shadow-none";
          if (answered && isCorrect)
            state = "bg-green border-green text-white shadow-[0_4px_0_var(--color-green-shade)]";
          else if (answered && isPicked)
            state = "bg-red border-red text-white shadow-[0_4px_0_var(--color-red-shade)]";
          else if (answered) state = "bg-white border-line text-faint shadow-[0_4px_0_var(--color-edge)] opacity-70";
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => pick(i)}
                disabled={answered}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 p-3.5 text-left font-extrabold leading-snug transition ${state}`}
              >
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-lg text-sm font-black ${
                    answered && (isCorrect || isPicked) ? "bg-white/25 text-white" : "bg-canvas text-faint"
                  }`}
                >
                  {answered && isCorrect ? <CheckIcon className="size-4" /> : answered && isPicked ? <XIcon className="size-4" /> : LETTERS[i]}
                </span>
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite">
        {!answered && showHint && (
          <p className="mt-4 rounded-2xl bg-orange-soft p-4 font-bold text-orange-shade animate-pop">💡 {question.hint}</p>
        )}

        {answered && (
          <div
            className={`mt-5 rounded-2xl border-2 p-4 animate-pop ${
              correct ? "border-green/40 bg-green-soft" : "border-red/30 bg-red-soft"
            }`}
          >
            <p className={`text-xl font-black ${correct ? "text-green-shade" : "text-red-shade"}`}>
              {correct ? "RICHTIG!" : "FAST!"}
              <span className="ml-2 text-sm font-extrabold opacity-80">{correct ? `+${showHint ? 5 : 10} XP` : "+0 XP"}</span>
            </p>
            <p className="mt-1.5 font-semibold leading-relaxed text-ink/80">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="mt-5 flex justify-center">
        {answered ? (
          <button type="button" onClick={next} className={`btn-3d w-full text-lg ${correct ? "tone-green" : "tone-orange"}`}>
            {index === QUESTIONS.length - 1 ? "Ergebnis ansehen" : "Weiter"}
          </button>
        ) : (
          <button
            type="button"
            disabled={hintsLeft === 0 || showHint}
            onClick={() => {
              setShowHint(true);
              setHintsLeft((h) => h - 1);
            }}
            className="btn-3d tone-white !py-2.5 text-base disabled:opacity-50"
          >
            <KeyIcon className="size-5 text-orange" /> Hinweis · {hintsLeft} übrig
          </button>
        )}
      </div>
    </div>
  );
}
