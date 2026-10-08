import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "KI Klausurvorbereitung mit Klausi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Klausurvorbereitung im Studium",
    title: "KI Klausurvorbereitung",
    subtitle: "Probeklausur aus deinem Skript erstellen und Lücken schließen.",
  });
}
