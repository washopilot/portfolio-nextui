'use client'

import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Action = () => {
    const router = useRouter()
    return (
        <Button
            className='m-auto bg-secondary-50 text-secondary-700 px-16'
            color='secondary'
            size='lg'
            endContent={<BxRightArrowCircleIcon size={'2em'} />}
            onClick={() => router.push('/projects')}
            variant='faded'>
            Mi Portafolio
        </Button>
    )
}

export default Action
