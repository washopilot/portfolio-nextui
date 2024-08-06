'use client'

import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const CTAButton = () => {
    const router = useRouter()
    return (
        <Button
            className='m-auto bg-secondary-800 text-content1 font-bold px-16 border border-foreground-500 rounded-medium py-8'
            color='secondary'
            size='lg'
            endContent={<BxRightArrowCircleIcon className='scale-[3]' />}
            onClick={() => router.push('/projects')}>
            Mi Portafolio&nbsp;&nbsp;&nbsp;
        </Button>
    )
}

export default CTAButton
