'use client'

import { i18n, Locale } from '@/i18n-config'
import { clsx } from '@heroui/shared-utils'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface LanguageSwitchProps {
    className?: string
}

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
    const [currentLocale, setCurrentLocale] = useState<Locale>(i18n.defaultLocale)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        // Get locale from pathname
        const paths = pathname.split('/')
        const pathLocale = paths[1] as Locale | undefined
        if (pathLocale && i18n.locales.includes(pathLocale)) {
            setCurrentLocale(pathLocale)
        }
    }, [pathname])

    const changeLanguage = (locale: Locale) => {
        if (!i18n.locales.includes(locale)) return

        // Remove current locale from pathname
        const paths = pathname.split('/')
        const pathWithoutLocale = i18n.locales.includes(paths[1] as Locale) ? paths.slice(2).join('/') : pathname

        router.push(`/${locale}/${pathWithoutLocale}`)
        document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;SameSite=Lax` // Set cookie
    }

    const toggleLanguage = () => {
        const newLocale = currentLocale === 'en' ? 'es' : 'en'
        changeLanguage(newLocale)
    }

    return (
        <button
            onClick={toggleLanguage}
            className={clsx(
                'w-auto h-auto',
                'bg-transparent',
                'flex items-center justify-center',
                'group-data-[selected=true]:bg-transparent',
                '!text-default-600 dark:!text-default-500',
                'pt-px',
                'px-0',
                'mx-2',
                'uppercase',
                'font-bold',
                'text-2xl',
                className
            )}>
            {currentLocale}
        </button>
    )
}
