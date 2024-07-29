import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import { recursive } from '@/config/fonts'
import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
import clsx from 'clsx'
import type { Metadata } from 'next'
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
    return (
        <html suppressHydrationWarning lang='en'>
            <body className={clsx('min-h-screen bg-background text-foreground antialiased', recursive.className)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark', children }}>
                    <Navbar routes={manifest.routes} />
                    <main className='container mx-auto max-w-8xl px-6 flex flex-col justify-center'>
                        <section className='md:w-1/2 w-4/5 pt-5 self-center'>
                            <Hero />
                            {children}
                        </section>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
