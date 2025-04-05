import BackgroundSVG from '@/components/bg-svg'
import { Footer } from '@/components/footer'
import Hero from '@/components/home/hero'
import Navbar from '@/components/navbar'
import { google_font } from '@/config/fonts'
import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
import { i18n, type Locale } from '@/i18n-config'
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

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{ lang: Locale }>
}) {
    const { lang } = await params

    return (
        <html suppressHydrationWarning lang={lang}>
            <body className={clsx('min-h-screen text-foreground antialiased select-none', google_font.className)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark', children }}>
                    <Navbar routes={manifest.routes} />
                    <main className='container mx-auto max-w-3xl px-6 flex flex-col justify-center'>
                        <Hero />
                        {children}
                    </main>
                    <Footer />
                    <BackgroundSVG />
                </Providers>
            </body>
        </html>
    )
}
