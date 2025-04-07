'use client'

import footerConfig from '@/config/footer.json'
import { getLocaleFromPath } from '@/utils'
import { Link } from '@heroui/react'
import { usePathname } from 'next/navigation'

export const Footer = () => {
    // --- Get current locale from pathname ---
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)
    const footerMessage = footerConfig.footerMessage[currentLocale].message

    return (
        <footer className='container mx-auto max-w-7xl pt-16 pb-4 px-12'>
            <div className='flex flex-col justify-center items-center gap-0'>
                <p className='text-sm text-default-400'>
                    © {new Date().getFullYear()} Fernando Chicaiza. Web Developer.
                </p>
                <p className='text-sm text-default-400'>
                    {footerMessage}&nbsp;
                    <Link isExternal href='https://www.heroui.com'>
                        HeroUI
                    </Link>
                    &nbsp;{','}&nbsp;
                    <Link isExternal href='https://nextjs.org'>
                        Next.js
                    </Link>
                    &nbsp;{','}&nbsp;
                    <Link isExternal href='https://r3f.docs.pmnd.rs'>
                        ReactThreeFiber
                    </Link>
                    &nbsp;&amp;&nbsp;
                    <Link isExternal href='https://contentlayer.dev'>
                        ContentLayer2
                    </Link>
                </p>
            </div>
        </footer>
    )
}
