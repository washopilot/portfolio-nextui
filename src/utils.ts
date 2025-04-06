import { i18n, Locale } from '@/i18n-config'

/**
 * Extracts the locale from a given pathname.
 * If the first segment of the path matches a configured locale, it returns that locale.
 * Otherwise, it returns the default locale.
 *
 * @param path - The pathname string (e.g., '/en/about', '/es/projects/my-project', '/').
 * @returns The extracted locale.
 */
export const getLocaleFromPath = (path: string): Locale => {
    const segments = path.split('/')
    // Check if the first segment (index 1) is a valid locale
    return (i18n.locales.includes(segments[1] as Locale) ? segments[1] : i18n.defaultLocale) as Locale
}
