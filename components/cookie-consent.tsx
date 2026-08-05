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
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-border/50 bg-card/90 p-5 shadow-2xl backdrop-blur-xl md:left-auto md:right-6 md:w-[420px]">
      <p className="text-sm text-foreground">
        <strong className="block text-base font-semibold mb-1">We use cookies</strong>
        We may place these for analysis of our visitor data, to improve our website, show personalised content and to give you a great website experience.
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
        <Button variant="ghost" size="sm" onClick={handleDecline} className="text-muted-foreground hover:text-foreground">
          No, adjust
        </Button>
        <Button size="sm" onClick={handleAccept} className="bg-primary text-primary-foreground hover:opacity-90">
          Accept all
        </Button>
      </div>
    </div>
  );
}
