import type { MetadataRoute } from "next";
import { APP_STORE_ID, APP_STORE_URL, PAGES } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Klausi – KI Lernapp fürs Studium",
    short_name: "Klausi",
    description: PAGES.home.description,
    lang: "de",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FA",
    theme_color: "#F5F7FA",
    icons: [{ src: "/brand/klausi-app-icon.png", sizes: "1024x1024", type: "image/png" }],
    related_applications: [{ platform: "itunes", url: APP_STORE_URL, id: APP_STORE_ID }],
    prefer_related_applications: true,
  };
}
