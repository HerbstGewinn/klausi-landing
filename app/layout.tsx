import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { JsonLd, mobileApp, organization, website } from "@/lib/jsonld";
import { APP_STORE_ID, IS_PRODUCTION_INDEXABLE, PAGES, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PAGES.home.title} | ${SITE_NAME} – Lernapp für Studenten`,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGES.home.description,
  applicationName: SITE_NAME,
  category: "education",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
  itunes: { appId: APP_STORE_ID },
  appleWebApp: { title: SITE_NAME },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image" },
  robots: IS_PRODUCTION_INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
      }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#F5F7FA",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${nunito.variable} antialiased`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex min-h-dvh flex-col">
        <JsonLd data={[organization(), website(), mobileApp()]} />
        <a
          href="#inhalt"
          className="sr-only z-[100] rounded-xl bg-ink px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
