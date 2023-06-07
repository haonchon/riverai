// lib/analytics.ts

// Replace G-XXXXXXXXXX with your actual Google Analytics measurement ID
export const GA_TRACKING_ID = "G-XXXXXXXXXX";

// Log the pageview with their URL
export const pageview = (url: string): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events happening
interface EventParams {
  action: string;
  params?: Record<string, any>;
}

export const event = ({ action, params }: EventParams): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
};
