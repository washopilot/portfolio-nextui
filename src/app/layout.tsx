import { Providers } from '@/app/provider'
import Hero from '@/components/hero'
import PageTransition from '@/components/page-transitions'
import { inter } from '@/config/fonts'
import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Navbar } from '../components/navbar'
import './globals.css'

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
            <body className={clsx('min-h-screen bg-background text-foreground antialiased', inter.className)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'light', children }}>
                    <Navbar routes={manifest.routes} />
                    <main className='container mx-auto max-w-8xl px-6 flex flex-col justify-center'>
                        <section className='md:w-1/2 w-4/5 pt-5 self-center'>
                            <Hero />
                        </section>
                        <PageTransition>{children}</PageTransition>
                    </main>
                </Providers>
            </body>
        </html>
    )
}
