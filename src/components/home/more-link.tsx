'use client'

import { getLocaleFromPath } from '@/utils' // Import the utility function
import { Link } from '@heroui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const MoreLink = ({ more_link_title }: { more_link_title: string }) => {
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)

    return (
        <Link
            as={NextLink}
            isBlock
            showAnchorIcon
            href={`/${currentLocale}/about`}
            className='text-lg font-bold italic text-secondary-500'>
            <span>{more_link_title}</span>
        </Link>
    )
}

export default MoreLink
