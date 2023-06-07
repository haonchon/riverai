// global.d.ts

declare global {
  interface Window {
    gtag: (
      type: "config" | "event",
      googleAnalyticsKey: string,
      options?: Record<string, any>
    ) => void;
  }
}

export {};
