import profilePic from '@/../public/profile.jpg'
import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { Link } from '@heroui/react'
import ReactMarkdown from 'react-markdown'

const AboutPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { about_page } = await getDictionary(lang) // en

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle={about_page.profile_subtitle} />
            <Paragraph title={about_page.paragraph_01_title}>
                <ReactMarkdown
                    components={{
                        a: ({ node, ...props }) => (
                            <Link
                                isBlock
                                showAnchorIcon
                                isExternal
                                href={props.href}
                                className='font-bold italic text-secondary-500'>
                                {props.children}
                            </Link>
                        )
                    }}>
                    {about_page.paragraph_01_content}
                </ReactMarkdown>
            </Paragraph>
            <Paragraph title={about_page.paragraph_02_title}>
                <ReactMarkdown>{about_page.paragraph_02_content}</ReactMarkdown>
            </Paragraph>
            <Paragraph title={about_page.paragraph_03_title}>
                <ReactMarkdown>{about_page.paragraph_03_content}</ReactMarkdown>
            </Paragraph>
        </article>
    )
}

export default AboutPage
