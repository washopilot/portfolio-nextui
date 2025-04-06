'use client'

import { getLocaleFromPath } from '@/utils' // Import the utility function
import { Link } from '@heroui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const MoreLink = () => {
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)

    return (
        <Link
            as={NextLink}
            isBlock
            showAnchorIcon
            href={`/${currentLocale}/about`}
            className='text-lg font-bold italic text-secondary-500'>
            <span>&nbsp;¿quieres saber más?</span>
        </Link>
    )
}

export default MoreLink
