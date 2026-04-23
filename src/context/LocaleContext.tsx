"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { getDict, type Dictionary, type Locale, SUPPORTED_LOCALES } from "@/i18n/dictionary";

interface LocaleContextType {
  locale: Locale;
  t: (key: keyof Dictionary) => string;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);
const STORAGE_KEY = "dinespower_locale_v1";

function readStored(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw && (SUPPORTED_LOCALES as string[]).includes(raw)) return raw as Locale;
  } catch {
    // ignore
  }
  return "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = readStored();
    if (stored !== "en") setLocaleState(stored);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const dict = useMemo(() => getDict(locale), [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.lang = next;
      }
    } catch {
      // ignore
    }
  };

  const t = (key: keyof Dictionary) => dict[key];

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
