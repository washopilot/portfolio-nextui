'use client'

import BgLeftSVG from '@/components/bg-left'
import { SmallLogo } from '@/components/home/logo'
import { useTheme } from 'next-themes'

const BackgroundSVG = () => {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <BgLeftSVG className='fixed z-[-1] w-96 h-auto bottom-0 left-0 scale-[4] blur-3xl' />
            <SmallLogo className='fixed z-[-10] w-[40vw] h-auto -top-[10vh] -right-[10vw] text-[#020d24] opacity-50' />
        </>
    )
}

export default BackgroundSVG
