import Hero from '@/components/home/hero'
import Navbar from '@/components/navbar'
import { recursive } from '@/config/fonts'
import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
import clsx from 'clsx'
import type { Metadata } from 'next'
import Image from 'next/image'
import backgroundLeftSVG from '../public/gradients/bg-left.svg'
import './globals.css'
import { Providers } from './provider'

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    icons: {
        icon: '/favicon.ico'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const BackgroundSVG = () => {
        return (
            <div className='fixed -bottom-1/4 -left-1/3 w-full h-full overflow-hidden -z-10 scale-[2]'>
                <Image
                    src={backgroundLeftSVG}
                    alt='Background'
                    fill
                    sizes='10vw'
                    quality={100}
                    className='object-contain'
                />
            </div>
        )
    }

    return (
        <html suppressHydrationWarning lang='en'>
            <body className={clsx('min-h-screen text-foreground antialiased', recursive.className)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark', children }}>
                    <Navbar routes={manifest.routes} />
                    <main className='container mx-auto max-w-3xl px-6 flex flex-col justify-center'>
                        <Hero />
                        {children}
                    </main>
                    <BackgroundSVG />
                </Providers>
            </body>
        </html>
    )
}
