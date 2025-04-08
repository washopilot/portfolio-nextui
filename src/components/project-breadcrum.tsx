'use client'

import { getLocaleFromPath } from '@/utils'
import { BreadcrumbItem, Breadcrumbs, Chip } from '@heroui/react'
import clsx from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function ProjectBreadcrum({
    breadcrum_title,
    projectTitle,
    projectYear
}: {
    breadcrum_title: string
    projectTitle: string
    projectYear?: string
}) {
    // --- Get current locale from pathname ---
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)
    // --- End get current locale ---

    const navLinkClasses = clsx(
        'text-danger font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-danger after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
    )
    return (
        <Breadcrumbs size='lg'>
            <BreadcrumbItem>
                <NextLink href={`/${currentLocale}/projects`} className={navLinkClasses}>
                    {breadcrum_title}
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
