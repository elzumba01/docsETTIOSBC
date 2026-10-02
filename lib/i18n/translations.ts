import { es } from './es';
import { it } from './it';
import { pt } from './pt';

export type Lang = 'en' | 'es' | 'it' | 'pt';

export const languageOptions: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

/**
 * Translation dictionaries (split per language: ./es.ts, ./it.ts, ./pt.ts).
 * Keys are the exact English source strings (whitespace-normalized).
 * Any string not present in the dictionary is left in English.
 * Code samples, URLs and identifiers are never translated.
 */
export const translations: Record<Exclude<Lang, 'en'>, Record<string, string>> = {
  es,
  it,
  pt,
};
