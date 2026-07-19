import { describe, it, expect } from "vitest";
import { getTranslations, getLocaleInfo, SUPPORTED_LOCALES } from "@/lib/i18n";
import type { SupportedLocale } from "@/lib/i18n";

describe("getTranslations", () => {
  it("returns English translations by default", () => {
    const t = getTranslations("en");
    expect(t.hero.badge).toContain("FIFA World Cup 2026");
    expect(t.nav.platform).toBe("Platform");
  });

  it("returns Spanish translations for 'es' locale", () => {
    const t = getTranslations("es");
    expect(t.nav.platform).toBe("Plataforma");
    expect(t.common.live).toBe("En vivo");
  });

  it("returns French translations for 'fr' locale", () => {
    const t = getTranslations("fr");
    expect(t.nav.platform).toBe("Plateforme");
    expect(t.map.food).toBe("Restauration");
  });

  it("returns Arabic translations for 'ar' locale", () => {
    const t = getTranslations("ar");
    expect(t.nav.platform).toBe("المنصة");
    expect(t.common.live).toBe("مباشر");
  });

  it("returns Portuguese translations for 'pt' locale", () => {
    const t = getTranslations("pt");
    expect(t.nav.platform).toBe("Plataforma");
    expect(t.map.restrooms).toBe("Banheiros");
  });

  it("returns all required translation keys for every locale", () => {
    const requiredNavKeys: (keyof ReturnType<typeof getTranslations>["nav"])[] =
      [
        "platform",
        "intelligence",
        "accessibility",
        "deploy",
        "signIn",
        "getDemo",
      ];
    const locales: SupportedLocale[] = ["en", "es", "fr", "ar", "pt"];
    locales.forEach((locale) => {
      const t = getTranslations(locale);
      requiredNavKeys.forEach((key) => {
        expect(t.nav[key]).toBeTruthy();
      });
    });
  });

  it("every locale has non-empty common translations", () => {
    const locales: SupportedLocale[] = ["en", "es", "fr", "ar", "pt"];
    locales.forEach((locale) => {
      const t = getTranslations(locale);
      expect(t.common.loading.length).toBeGreaterThan(0);
      expect(t.common.noWait.length).toBeGreaterThan(0);
      expect(t.common.live.length).toBeGreaterThan(0);
    });
  });
});

describe("getLocaleInfo", () => {
  it("returns correct info for 'en'", () => {
    const info = getLocaleInfo("en");
    expect(info.code).toBe("en");
    expect(info.dir).toBe("ltr");
    expect(info.flag).toBe("🇺🇸");
  });

  it("returns RTL direction for Arabic", () => {
    const info = getLocaleInfo("ar");
    expect(info.dir).toBe("rtl");
    expect(info.name).toBe("Arabic");
  });

  it("returns LTR direction for all other locales", () => {
    const ltrLocales: SupportedLocale[] = ["en", "es", "fr", "pt"];
    ltrLocales.forEach((locale) => {
      expect(getLocaleInfo(locale).dir).toBe("ltr");
    });
  });
});

describe("SUPPORTED_LOCALES", () => {
  it("contains exactly 5 locales", () => {
    expect(SUPPORTED_LOCALES.length).toBe(5);
  });

  it("all locales have required fields", () => {
    SUPPORTED_LOCALES.forEach((locale) => {
      expect(locale.code).toBeTruthy();
      expect(locale.name).toBeTruthy();
      expect(locale.nativeName).toBeTruthy();
      expect(locale.flag).toBeTruthy();
      expect(["ltr", "rtl"]).toContain(locale.dir);
    });
  });

  it("FIFA World Cup 2026 key languages are present", () => {
    const codes = SUPPORTED_LOCALES.map((l) => l.code);
    // English, Spanish (host country), French (FIFA official), Arabic, Portuguese
    expect(codes).toContain("en");
    expect(codes).toContain("es");
    expect(codes).toContain("fr");
    expect(codes).toContain("ar");
    expect(codes).toContain("pt");
  });
});
