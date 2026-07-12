/** GA4 measurement ID (public — embedded in page source). */
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export function isAnalyticsEnabled(): boolean {
  return gaMeasurementId.length > 0 && gaMeasurementId.startsWith("G-");
}

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
    dataLayer?: unknown[];
  }
}

export function trackPageView(url: string): void {
  if (!isAnalyticsEnabled() || typeof window.gtag !== "function") return;

  window.gtag("config", gaMeasurementId, {
    page_path: url,
  });
}
