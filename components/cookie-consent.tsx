"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-card p-5 shadow-2xl md:left-auto md:right-6 md:w-[420px]">
      <p className="text-sm text-foreground">
        <strong className="block text-base font-semibold mb-1">We use cookies</strong>
        We use essential cookies and tools like Google Analytics, Microsoft Clarity, and Meta Pixel to understand visitor behaviour, improve our website, and measure marketing effectiveness.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
        <Button variant="ghost" size="sm" onClick={handleDecline} className="text-muted-foreground hover:text-foreground">
          No, adjust
        </Button>
        <Button size="sm" onClick={handleAccept} className="rounded-xl bg-primary text-primary-foreground hover:brightness-110">
          Accept all
        </Button>
      </div>
    </div>
  );
}
