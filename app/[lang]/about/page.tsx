import profilePic from '@/../public/profile.jpg'
import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import mdxComponents from '@/components/mdx-components'
import MDXContent from '@/components/mdx-content'
import { Locale } from '@/i18n-config'
import { allMessages } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

const AboutPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const messages = allMessages.find((msg) => msg.lang === lang)

    if (!messages) {
        notFound()
    }

    const { about_page } = messages

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle={about_page.profile_subtitle} />
            <Paragraph title={about_page.paragraph_01_title}>
                <MDXContent code={about_page.paragraph_01_content.code} components={mdxComponents} />
            </Paragraph>
            <Paragraph title={about_page.paragraph_02_title}>
                <MDXContent code={about_page.paragraph_02_content.code} components={mdxComponents} />
            </Paragraph>
            <Paragraph title={about_page.paragraph_03_title}>
                <MDXContent code={about_page.paragraph_03_content.code} components={mdxComponents} />
            </Paragraph>
        </article>
    )
}

export default AboutPage
