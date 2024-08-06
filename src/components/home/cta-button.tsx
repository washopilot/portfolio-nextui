'use client'

import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import NextLink from 'next/link'

const CTAButton = () => {
    return (
        <Button
            as={NextLink}
            className='m-auto bg-secondary-800 text-content1 font-bold px-16 border border-foreground-500 rounded-medium py-6'
            endContent={<BxRightArrowIcon className='scale-[5]' />}
            href='/projects'>
            MIS PROYECTOS&nbsp;&nbsp;&nbsp;
        </Button>
    )
}

export default CTAButton
