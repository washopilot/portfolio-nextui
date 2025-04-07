'use client'

import footerConfig from '@/config/footer.json'
import { getLocaleFromPath } from '@/utils'
import { Link } from '@heroui/react'
import { usePathname } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export const Footer = () => {
    // --- Get current locale from pathname ---
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)
    const footerMessages = footerConfig.footerMessages[currentLocale]

    return (
        <footer className='container mx-auto max-w-7xl pt-16 pb-4 px-12'>
            <div className='flex flex-col justify-center items-center gap-0'>
                <p className='text-sm text-default-400'>
                    © {new Date().getFullYear()} Fernando Chicaiza. Web Developer.
                </p>
                <article className='text-sm text-default-400'>
                    <ReactMarkdown
                        components={{
                            a: ({ node, ...props }) => (
                                <Link isExternal href={props.href}>
                                    {props.children}
                                </Link>
                            )
                        }}>
                        {footerMessages.message}
                    </ReactMarkdown>
                </article>
                <article className='text-sm text-default-400'>
                    <ReactMarkdown
                        components={{
                            a: ({ node, ...props }) => (
                                <Link isExternal href={props.href}>
                                    {props.children}
                                </Link>
                            )
                        }}>
                        {footerMessages.gratitude}
                    </ReactMarkdown>
                </article>
            </div>
        </footer>
    )
}
