import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const [black, extraBold, mascot] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/Nunito_900Black.ttf")),
  readFile(join(process.cwd(), "assets/fonts/Nunito_800ExtraBold.ttf")),
  readFile(join(process.cwd(), "public/brand/klausi-maskottchen.png")),
]);
const mascotSrc = `data:image/png;base64,${mascot.toString("base64")}`;

export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(160deg, #EAF5FF 0%, #F5F7FA 55%, #FFF1E0 100%)",
          fontFamily: "Nunito",
          color: "#1A1A2E",
          padding: 64,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mascotSrc} width={64} height={64} alt="" />
            <span style={{ fontSize: 40, fontWeight: 900 }}>Klausi</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 44,
              alignSelf: "flex-start",
              background: "#8B5CF6",
              color: "white",
              fontSize: 24,
              fontWeight: 800,
              padding: "8px 18px",
              borderRadius: 14,
              boxShadow: "0 5px 0 #6D28D9",
            }}
          >
            {eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 70, fontWeight: 900, lineHeight: 1.04, letterSpacing: -1.5 }}>
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 30, fontWeight: 800, color: "#6B7280", lineHeight: 1.3 }}>
            {subtitle}
          </div>
          <div style={{ display: "flex", marginTop: "auto" }}>
            <div
              style={{
                display: "flex",
                background: "#111",
                color: "white",
                fontSize: 26,
                fontWeight: 800,
                padding: "12px 24px",
                borderRadius: 16,
                boxShadow: "0 6px 0 #000",
              }}
            >
              Kostenlos im App Store
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", width: 400 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mascotSrc} width={400} height={400} alt="" />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Nunito", data: black, weight: 900, style: "normal" },
        { name: "Nunito", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
