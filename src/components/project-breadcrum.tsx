'use client'

import { i18n, Locale } from '@/i18n-config' // Import i18n and Locale
import { BreadcrumbItem, Breadcrumbs, Chip } from '@heroui/react'
import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation' // Import usePathname

export default function ProjectBreadcrum({
    projectTitle,
    projectYear
}: {
    projectTitle: string
    projectYear?: string
}) {
    // --- Get current locale from pathname ---
    const pathname = usePathname()
    const getLocaleFromPath = (path: string): Locale => {
        const segments = path.split('/')
        return (i18n.locales.includes(segments[1] as Locale) ? segments[1] : i18n.defaultLocale) as Locale
    }
    const currentLocale = getLocaleFromPath(pathname)
    // --- End get current locale ---

    const navLinkClasses = clsx(
        'text-danger font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-danger after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
    )
    return (
        <Breadcrumbs size='lg'>
            <BreadcrumbItem>
                <NextLink href={`/${currentLocale}/projects`} className={navLinkClasses}>
                    {/* Add locale */}
                    Proyectos
                </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem className='font-bold'>
                {projectTitle}&nbsp;
                {projectYear ? (
                    <Chip color='secondary' variant='bordered'>
                        {projectYear}
                    </Chip>
                ) : null}
            </BreadcrumbItem>
        </Breadcrumbs>
    )
}
