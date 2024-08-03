'use client'

import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Action = () => {
    const router = useRouter()
    return (
        <Button
            className='w-1/2 m-auto bg-secondary-50 text-secondary-700'
            color='secondary'
            size='lg'
            endContent={<BxRightArrowCircleIcon size={48} />}
            onClick={() => router.push('/projects')}
            variant='faded'>
            Mi Portafolio
        </Button>
    )
}

export default Action
