'use client'

import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Action = () => {
    const router = useRouter()
    return (
        <Button
            className='w-1/2 m-auto'
            color='secondary'
            size='lg'
            endContent={<BxRightArrowCircleIcon size={48} />}
            onClick={() => router.push('/projects')}>
            Mi Portafolio
        </Button>
    )
}

export default Action
