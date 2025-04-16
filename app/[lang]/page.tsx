import CTAButton from '@/components/home/cta-button'
import MoreLink from '@/components/home/more-link'
import Paragraph from '@/components/home/paragraph'
import { Locale } from '@/i18n-config'
import { Spacer } from '@heroui/react'
import { allMessages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const messages = allMessages.find((msg) => msg.lang === lang)

    if (!messages) {
        notFound()
    }

    const { home_page } = messages

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-8 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Paragraph title={home_page.title}>
                <div dangerouslySetInnerHTML={{ __html: home_page.description.html }} />
                <MoreLink more_link_title={home_page.more_link_title} />
            </Paragraph>
            <Spacer y={0} />
            <CTAButton cta_title={home_page.cta_title} />
        </article>
    )
}
