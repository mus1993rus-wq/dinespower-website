"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { getCookieConsent } from "./CookieConsent";

// Google Analytics 4 integration.
// Gated by:
//   1. NEXT_PUBLIC_GA_MEASUREMENT_ID env var (e.g. "G-XXXXXXXXXX")
//   2. User cookie consent (only loads after "accepted")
//
// To enable: set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local or Vercel env.
// Without it this component renders nothing.

export default function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consent, setConsent] = useState<"accepted" | "rejected" | null>(null);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setConsent(getCookieConsent());
    function handler(e: Event) {
      const detail = (e as CustomEvent<"accepted" | "rejected">).detail;
      setConsent(detail);
    }
    window.addEventListener("cookie-consent-change", handler);
    return () => window.removeEventListener("cookie-consent-change", handler);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!GA_ID) return null;
  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
