import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Search Console reads the raw HTML and only accepts the tag inside <head>.
 * A next/script tag is not enough: Next preloads it and runs the snippet later.
 * Skipped in local development.
 */
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  );
}
