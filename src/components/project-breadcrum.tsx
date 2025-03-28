'use client'

import { BreadcrumbItem, Breadcrumbs, Chip } from '@heroui/react'
import clsx from 'clsx'
import NextLink from 'next/link'

export default function ProjectBreadcrum({
    projectTitle,
    projectYear
}: {
    projectTitle: string
    projectYear?: string
}) {
    const navLinkClasses = clsx(
        'text-danger font-bold relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[3px] after:bg-danger after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
    )
    return (
        <Breadcrumbs>
            <BreadcrumbItem>
                <NextLink href='/projects' className={navLinkClasses}>
                    Proyectos
                </NextLink>
            </BreadcrumbItem>
            <BreadcrumbItem className='font-bold'>
                {projectTitle}
                {projectYear ? <Chip color='secondary'>{projectYear}</Chip> : null}
            </BreadcrumbItem>
        </Breadcrumbs>
    )
}
