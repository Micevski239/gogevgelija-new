import type { Dictionary } from "./dictionaries/types";
import en from "./dictionaries/en";
import mk from "./dictionaries/mk";

export const locales = ["en", "mk"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, mk };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
