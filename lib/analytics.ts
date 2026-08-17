"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GTag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: GTag;
  }
}

export function sendGAEvent(name: string, params?: Record<string, unknown>) {
  if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function useGAPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined" || !window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag("config", GA_ID, { page_path: url });
  }, [pathname, searchParams]);
}
