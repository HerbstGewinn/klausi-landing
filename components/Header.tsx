import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/lib/site";
import { AppStoreButton } from "./ui";

const NAV = [
  { href: PAGES.pdf.path, label: "Quiz aus PDF" },
  { href: PAGES.klausur.path, label: "Klausurvorbereitung" },
  { href: "/#so-funktionierts", label: "So funktioniert's" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-line/70 bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Klausi – zur Startseite">
          <Image src="/brand/klausi-maskottchen.png" alt="" width={40} height={40} className="size-10" priority />
          <span className="text-2xl font-black tracking-tight">Klausi</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-xl px-3 py-2 text-[0.95rem] font-extrabold text-muted transition hover:bg-white hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AppStoreButton size="sm" />
          <details className="relative md:hidden">
            <summary
              aria-label="Menü öffnen"
              className="grid size-10 place-items-center rounded-xl border-2 border-line bg-white shadow-[0_3px_0_var(--color-edge)]"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.8} strokeLinecap="round" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Mobile Navigation" className="card-3d absolute right-0 top-12 grid w-60 gap-1 p-2 animate-pop">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="rounded-xl px-3 py-2.5 font-extrabold hover:bg-canvas">
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
