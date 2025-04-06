import CTAButton from '@/components/home/cta-button'
import MoreLink from '@/components/home/more-link'
import Paragraph from '@/components/home/paragraph'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { Spacer } from '@heroui/react'

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getDictionary(lang) // en
    // console.log('Params:', lang)
    // console.log('Dictionary:', dict)

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-8 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Paragraph title={dict.home.title}>
                {dict.home.description}
                <MoreLink />
            </Paragraph>
            <Spacer y={0} />
            <CTAButton />
        </article>
    )
}
