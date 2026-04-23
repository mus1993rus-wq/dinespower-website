"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "dinespower_cookie_consent_v1";

type ConsentValue = "accepted" | "rejected";

export function getCookieConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "accepted" || raw === "rejected") return raw;
  } catch {
    // ignore
  }
  return null;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const existing = window.localStorage.getItem(STORAGE_KEY);
      if (existing !== "accepted" && existing !== "rejected") {
        // Delay showing slightly to avoid jarring appearance on page load
        const t = setTimeout(() => setShow(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // ignore
    }
  }, []);

  const save = (value: ConsentValue) => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, value);
        // Notify other listeners (e.g. Analytics component) in the same tab
        window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: value }));
      }
    } catch {
      // ignore
    }
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[90] px-3 tablet:px-4 pb-3 tablet:pb-4 pointer-events-none"
    >
      <div className="max-w-[1340px] mx-auto pointer-events-auto bg-[#181818] text-white rounded-[16px] shadow-[0_-4px_24px_rgba(0,0,0,0.2)] p-4 tablet:p-5 desktop:p-6 flex flex-col tablet:flex-row tablet:items-center gap-4 tablet:gap-6">
        <div className="flex-1 flex flex-col gap-1">
          <p id="cookie-consent-title" className="text-[15px] tablet:text-[16px] font-semibold leading-[22px]">
            We use cookies 🍪
          </p>
          <p id="cookie-consent-desc" className="text-[13px] tablet:text-[14px] text-white/70 leading-5">
            We use essential cookies for site functionality and optional analytics cookies to understand usage. You can accept or reject optional cookies at any time. See our{" "}
            <Link href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 tablet:shrink-0">
          <button
            onClick={() => save("rejected")}
            className="cursor-pointer flex-1 tablet:flex-none h-11 px-5 bg-transparent border border-white/30 hover:border-white rounded-[8px] text-[14px] font-semibold text-white transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => save("accepted")}
            className="cursor-pointer flex-1 tablet:flex-none h-11 px-6 bg-[#FF6701] hover:bg-[#E65D00] rounded-[8px] text-[14px] font-semibold text-white transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
