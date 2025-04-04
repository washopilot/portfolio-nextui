import 'server-only'
import en from '@/../messages/en.json'

type Dictionary = typeof en

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    en: () => import('@/../messages/en.json').then((module) => module.default),
    es: () => import('@/../messages/es.json').then((module) => module.default)
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
