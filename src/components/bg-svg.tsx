import BgLeftSVG from '@/components/bg-left'
import { SmallLogo } from '@/components/home/logo'

const BackgroundSVG = () => {
    return (
        <>
            <BgLeftSVG className='fixed z-[-1] w-1/2 h-auto bottom-0 -left-16 scale-[2] blur-2xl' />
            <SmallLogo className='fixed z-[-1] w-auto h-1/2 -top-16 -right-16 text-secondary-100 opacity-50 blur-sm' />
        </>
    )
}

export default BackgroundSVG
