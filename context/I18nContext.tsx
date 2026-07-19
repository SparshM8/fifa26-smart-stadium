"use client";

import * as React from "react";
import type { SupportedLocale, Translations } from "@/lib/i18n";
import { getTranslations, getLocaleInfo, SUPPORTED_LOCALES } from "@/lib/i18n";

interface I18nContextValue {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "stadiumos-locale";

/**
 * I18nProvider — wraps the app and provides locale state + translations
 * to all child components via the useI18n hook.
 */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<SupportedLocale>("en");

  // Restore saved locale preference on mount
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLocale | null;
      if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
        setLocaleState(saved);
      }
    } catch {
      // localStorage unavailable in some environments
    }
  }, []);

  // Update <html> lang + dir attributes on locale change
  React.useEffect(() => {
    const info = getLocaleInfo(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = info.dir;
  }, [locale]);

  const setLocale = React.useCallback((next: SupportedLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: getTranslations(locale),
      dir: getLocaleInfo(locale).dir,
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/**
 * useI18n — returns the current locale, its translations, and a locale setter.
 * Must be used inside an I18nProvider.
 */
export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
