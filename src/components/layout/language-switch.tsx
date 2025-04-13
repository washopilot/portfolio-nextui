'use client'

import { GlobeIcon } from '@/components/icons'
import { i18n, Locale } from '@/i18n-config'
import { clsx } from '@heroui/shared-utils'
import { usePathname, useRouter } from 'next/navigation'

export interface LanguageSwitchProps {
    className?: string
}

export const LanguageSwitch = ({ className }: LanguageSwitchProps) => {
    const router = useRouter()
    const pathname = usePathname()

    // Derive current locale directly from pathname
    const paths = pathname.split('/')
    const pathLocale = paths[1] as Locale | undefined
    const currentLocale = pathLocale && i18n.locales.includes(pathLocale) ? pathLocale : i18n.defaultLocale

    const changeLanguage = (locale: Locale) => {
        if (!i18n.locales.includes(locale)) return

        // Remove current locale from pathname if it exists
        const currentPaths = pathname.split('/')
        const pathWithoutLocale = i18n.locales.includes(currentPaths[1] as Locale)
            ? currentPaths.slice(2).join('/')
            : pathname.startsWith('/')
            ? pathname.substring(1)
            : pathname // Handle root path and ensure no double slash

        router.push(`/${locale}/${pathWithoutLocale}`, { scroll: false })
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
