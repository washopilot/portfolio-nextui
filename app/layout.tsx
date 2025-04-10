import Hero from '@/components/home/hero'
import AnimateLayout from '@/components/layout/animate-layout'
import BackgroundSVG from '@/components/layout/bg-svg'
import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { google_font } from '@/config/fonts'
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
        <html suppressHydrationWarning>
            <body className={clsx('min-h-screen text-foreground antialiased select-none', google_font.className)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark', children }}>
                    <Navbar routes={manifest.routes} />
                    <main className='container mx-auto max-w-3xl px-6 flex flex-col justify-center'>
                        <Hero />
                        <AnimateLayout>{children}</AnimateLayout>
                    </main>
                    <Footer />
                    <BackgroundSVG />
                </Providers>
            </body>
        </html>
    )
}
