import Bio from '@/components/home/bio'
import CTAButton from '@/components/home/cta-button'
import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Spacer } from '@nextui-org/react'
import NextLink from 'next/link'

const Home = () => {
    return (
        <article className='flex w-full pt-16 flex-col gap-2 sm:gap-6 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Bio title='Hola, mi nombre es FERNANDO'>
                Soy Desarrollador, Artista Digital y Diseñador
                <NextLink href='/about' className='text-lg font-bold italic'>
                    <span>&nbsp;... ¿quieres saber más?&nbsp;&nbsp;</span>
                    <BxRightArrowCircleIcon className='inline scale-[1.5]' />
                </NextLink>
            </Bio>
            <Spacer y={0} />
            <CTAButton />
        </article>
    )
}

export default Home
