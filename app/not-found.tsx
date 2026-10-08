import type { Metadata } from "next";
import { Button3D, Mascot, SpeechBubble } from "@/components/ui";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="sky-backdrop">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center">
        <SpeechBubble tail="bottom" className="text-lg">
          Hoppla – diese Seite hat sich weggezaubert. 🪄
        </SpeechBubble>
        <Mascot size={200} className="mt-6 animate-float" />
        <h1 className="mt-6 text-4xl font-black">Seite nicht gefunden</h1>
        <p className="mt-3 text-lg font-semibold text-muted">Der Link ist vielleicht veraltet. Auf der Startseite geht&apos;s weiter.</p>
        <Button3D href="/" tone="orange" className="mt-8 text-lg">
          Zur Startseite
        </Button3D>
      </div>
    </section>
  );
}
