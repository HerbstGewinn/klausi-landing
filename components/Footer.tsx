import Image from "next/image";
import Link from "next/link";
import { APP_STORE_URL, PAGES, PRIVACY_URL, SITE_TAGLINE, TERMS_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3 text-white">
            <Image src="/brand/klausi-maskottchen.png" alt="" width={48} height={48} />
            <span className="text-2xl font-black">Klausi</span>
          </Link>
          <p className="mt-4 max-w-sm font-semibold leading-relaxed">
            Die KI Lernapp fürs Studium. {SITE_TAGLINE}
          </p>
        </div>

        <nav aria-label="Lernen mit Klausi">
          <p className="text-sm font-black uppercase tracking-widest text-white/45">Lernen</p>
          <ul className="mt-4 grid gap-2.5 font-bold">
            <li><Link className="hover:text-white" href={PAGES.home.path}>KI Lernapp fürs Studium</Link></li>
            <li><Link className="hover:text-white" href={PAGES.pdf.path}>Quiz aus PDF erstellen</Link></li>
            <li><Link className="hover:text-white" href={PAGES.klausur.path}>KI Klausurvorbereitung</Link></li>
            <li><Link className="hover:text-white" href={`${PAGES.klausur.path}#probeklausur`}>Probeklausur erstellen mit KI</Link></li>
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <p className="text-sm font-black uppercase tracking-widest text-white/45">Klausi</p>
          <ul className="mt-4 grid gap-2.5 font-bold">
            <li><a className="hover:text-white" href={APP_STORE_URL} target="_blank" rel="noopener">App Store</a></li>
            <li><a className="hover:text-white" href={PRIVACY_URL} target="_blank" rel="noopener">Datenschutz</a></li>
            <li><a className="hover:text-white" href={TERMS_URL} target="_blank" rel="noopener">Nutzungsbedingungen</a></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-sm font-semibold text-white/45">
          © 2026 Klausi · Apple und App Store sind Marken von Apple Inc.
        </p>
      </div>
    </footer>
  );
}
