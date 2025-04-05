import CTAButton from '@/components/home/cta-button'
import Paragraph from '@/components/home/paragraph'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { Link, Spacer } from '@heroui/react'
import NextLink from 'next/link'

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang) // en
    // console.log('Params:', lang)
    // console.log('Dictionary:', dict)

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
