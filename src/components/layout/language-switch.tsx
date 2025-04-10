'use client'

import { GlobeIcon } from '@/components/icons'
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
                'p-1 w-8 h-8 transition-opacity hover:opacity-80 cursor-pointer', // Adjusted classes similar to ThemeSwitch
                'flex items-center justify-center',
                '!text-default-600 dark:!text-default-500',
                'relative', // Added for positioning the subscript
                className
            )}>
            <GlobeIcon size={22} />
            <span
                className='absolute bottom-0 right-0 text-sm font-bold uppercase'
                style={{ lineHeight: '1', transform: 'translate(25%, 25%)' }}>
                {currentLocale}
            </span>
        </button>
    )
}
