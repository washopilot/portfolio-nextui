'use client'

import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { Button } from '@heroui/react'
import NextLink from 'next/link'

const CTAButton = () => {
    return (
        <Button
            as={NextLink}
            className='m-auto bg-secondary-400 text-content1-foreground font-bold px-16 border border-foreground-500 rounded-medium py-6'
            endContent={<BxRightArrowIcon className='scale-[4]' />}
            href='/projects'>
            MIS PROYECTOS&nbsp;
        </Button>
    )
}

export default CTAButton
