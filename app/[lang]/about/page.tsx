import profilePic from '@/../public/profile.jpg'
import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { Link } from '@heroui/react'
import ReactMarkdown from 'react-markdown'

const AboutPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
    const { about } = await getDictionary(lang) // en

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle={about.profile_subtitle} />
            <Paragraph title={about.paragraph_title}>
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
                    {about.paragraph_content}
                </ReactMarkdown>
            </Paragraph>
            <Paragraph title='Destrezas y tecnologías'>
                JavaScript / TypeScript / React / React Native / Next.js / Laravel / PHP / MySQL / HTML5 / CSS /
                Tailwind / Diseño Responsive & Mobile-First
            </Paragraph>
            <Paragraph title='Lenguajes'>Javascript/Typescript, PHP &amp; Python</Paragraph>
        </article>
    )
}

export default AboutPage
