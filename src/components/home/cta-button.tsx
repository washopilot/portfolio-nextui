'use client'

import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { getLocaleFromPath } from '@/utils' // Import the utility function
import { Button } from '@heroui/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

const CTAButton = ({ cta_title }: { cta_title: string }) => {
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)

    return (
        <Button
            as={NextLink}
            className='m-auto bg-secondary-400 text-content1-foreground font-bold px-16 border border-foreground-500 rounded-medium py-6'
            endContent={<BxRightArrowIcon className='scale-[4]' />}
            href={`/${currentLocale}/projects`}>
            {cta_title}&nbsp;
        </Button>
    )
}

export default CTAButton
