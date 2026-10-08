import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/lib/jsonld";
import { PAGES, type PageEntry } from "@/lib/site";
import { ArrowIcon } from "./icons";
import { AppStoreButton, Mascot, SectionHeading, SpeechBubble } from "./ui";

export function FaqSection({ faqs, title = "Häufige Fragen", id = "faq" }: { faqs: Faq[]; title?: string; id?: string }) {
  return (
    <section id={id} className="mx-auto mt-28 max-w-3xl scroll-mt-24 px-5">
      <SectionHeading eyebrow="FAQ" tone="blue" title={title} />
      <div className="mt-10 grid gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="card-3d group overflow-hidden">
            <summary className="flex items-center justify-between gap-4 px-6 py-5 text-left text-lg font-extrabold">
              <h3>{f.q}</h3>
              <span className="faq-plus grid size-9 shrink-0 place-items-center rounded-xl bg-sky text-2xl font-black text-blue-shade transition-transform">
                +
              </span>
            </summary>
            <p className="px-6 pb-6 text-[1.05rem] font-semibold leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ title, text, bubble }: { title: ReactNode; text: string; bubble: string }) {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-orange-light to-orange px-6 py-12 text-white shadow-[0_8px_0_var(--color-orange-shade)] sm:px-12 md:py-14">
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/15" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-white/10" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-xl text-lg font-bold text-white/90">{text}</p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <AppStoreButton />
              <span className="text-sm font-extrabold text-white/90">Kostenlos laden · für iPhone</span>
            </div>
          </div>
          <div className="relative hidden items-end gap-2 md:flex">
            <SpeechBubble tail="bottom" className="absolute -top-12 right-24 w-48 text-ink">
              {bubble}
            </SpeechBubble>
            <Mascot size={210} className="animate-float drop-shadow-[0_14px_10px_rgba(0,0,0,0.18)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ page }: { page: PageEntry }) {
  return (
    <nav aria-label="Brotkrumen" className="mx-auto max-w-6xl px-5 pt-6 text-sm font-bold text-muted">
      <ol className="flex items-center gap-2">
        <li><Link href="/" className="hover:text-ink">{PAGES.home.label}</Link></li>
        <li aria-hidden>›</li>
        <li aria-current="page" className="text-ink">{page.label}</li>
      </ol>
    </nav>
  );
}

export function RelatedPages({ exclude }: { exclude: string }) {
  const items = [
    {
      page: PAGES.home,
      title: "KI Lernapp fürs Studium",
      text: "Alles über Klausi: vom Foto deiner Mitschrift bis zur Wiederholung kurz vor der Prüfung.",
      tone: "bg-sky text-blue-shade",
    },
    {
      page: PAGES.pdf,
      title: "Quiz aus PDF erstellen",
      text: "Folien, Skript oder Paper hochladen – 10 Quizfragen mit Erklärungen in Sekunden.",
      tone: "bg-green-soft text-green-shade",
    },
    {
      page: PAGES.klausur,
      title: "KI Klausurvorbereitung",
      text: "Probeklausur erstellen, Schwächen finden und bis zur Prüfung gezielt wiederholen.",
      tone: "bg-orange-soft text-orange-shade",
    },
  ].filter((i) => i.page.path !== exclude);

  return (
    <section className="mx-auto mt-28 max-w-6xl px-5">
      <h2 className="text-2xl font-black">Weiterlesen</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {items.map((i) => (
          <Link key={i.page.path} href={i.page.path} className="card-3d group flex items-start gap-4 p-6 transition hover:-translate-y-1">
            <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${i.tone}`}>
              <ArrowIcon className="size-6 transition group-hover:translate-x-0.5" />
            </span>
            <span>
              <span className="block text-xl font-black">{i.title}</span>
              <span className="mt-1 block font-semibold text-muted">{i.text}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
