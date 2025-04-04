import CTAButton from '@/components/home/cta-button'
import Paragraph from '@/components/home/paragraph'
import { Link, Spacer } from '@heroui/react'
import NextLink from 'next/link'
import { getDictionary } from './dictionaries'

export default async function HomePage({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang) // en
    console.log('Params:', params)
    console.log('Dictionary:', dict)

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-8 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Paragraph title={dict.home.title}>
                {dict.home.description}
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
