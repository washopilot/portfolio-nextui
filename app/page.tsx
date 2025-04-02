import CTAButton from '@/components/home/cta-button'
import Paragraph from '@/components/home/paragraph'
import { Link, Spacer } from '@heroui/react'
import NextLink from 'next/link'

export default function HomePage() {
    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-8 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Paragraph title='Hola, mi nombre es FERNANDO'>
                Soy un Desarrollador Full-Stack, Artista Digital y Diseñador, especialista en&nbsp;
                <strong>Laravel y React</strong>
                <Link
                    as={NextLink}
                    isBlock
                    showAnchorIcon
                    href='/about'
                    className='text-lg font-bold italic text-secondary-500'>
                    <span>&nbsp;¿quieres saber más?</span>
                </Link>
            </Paragraph>
            <Spacer y={0} />
            <CTAButton />
        </article>
    )
}
