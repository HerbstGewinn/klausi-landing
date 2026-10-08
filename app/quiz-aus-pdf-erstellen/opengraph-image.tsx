import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Quiz aus PDF erstellen mit Klausi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "PDF rein, Quiz raus",
    title: "Quiz aus PDF erstellen – mit KI",
    subtitle: "10 Fragen mit Hinweisen und Erklärungen in Sekunden.",
  });
}
