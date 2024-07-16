import { Providers } from '@/app/provider'
import { inter } from '@/config/fonts'
import manifest from '@/config/routes.json'
import { siteConfig } from '@/config/site'
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
        <html lang='en' className='dark'>
            <body className={inter.variable}>
                <Providers>
                    <Navbar routes={manifest.routes} />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
