import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Klausi – die KI Lernapp fürs Studium";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({
    eyebrow: "Lernapp für Studenten",
    title: "KI Lernapp fürs Studium",
    subtitle: "Foto oder PDF rein – Quiz für deine Klausur raus.",
  });
}
