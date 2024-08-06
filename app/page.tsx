import CTAButton from '@/components/home/cta-button'
import Paragraph from '@/components/home/paragraph'
import { BxRightArrowCircleIcon } from '@/components/icons/arrow-right'
import { Spacer } from '@nextui-org/react'
import NextLink from 'next/link'

const Home = () => {
    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-8 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Paragraph title='Hola, mi nombre es FERNANDO'>
                Soy Desarrollador, Artista Digital y Diseñador
                <NextLink href='/about' className='text-lg font-bold italic'>
                    <span>&nbsp;... ¿quieres saber más?&nbsp;&nbsp;</span>
                    <BxRightArrowCircleIcon className='inline scale-[1.5]' />
                </NextLink>
            </Paragraph>
            <Spacer y={0} />
            <CTAButton />
        </article>
    )
}

export default Home
