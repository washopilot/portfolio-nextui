import type { Locale } from '@/i18n-config'
import 'server-only'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
    en: () => import('@/config/messages/en.json').then((module) => module.default),
    es: () => import('@/config/messages/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en()
