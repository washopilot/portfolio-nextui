'use client'

import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const CTAButton = () => {
    const router = useRouter()
    return (
        <Button
            className='m-auto bg-secondary-800 text-content1 px-16 border border-foreground-500 rounded-medium'
            color='secondary'
            size='lg'
            endContent={<BxRightArrowCircleIcon size={'2em'} />}
            onClick={() => router.push('/projects')}>
            Mi Portafolio
        </Button>
    )
}

export default CTAButton
