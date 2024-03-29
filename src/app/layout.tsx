import { Navbar } from '@/components/navbar'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'
import { Link } from '@nextui-org/link'
import clsx from 'clsx'
import type { Viewport } from 'next'
import { Metadata } from 'next'
import { Providers } from './providers'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    }
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head />
            <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
                    <div className='relative flex flex-col h-screen'>
                        <Navbar />
                        <main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>{children}</main>
                        <footer className='w-full flex flex-col items-center justify-center py-3 leading-3'>
                            <p className='text-default-foreground font-bold text-tiny'>
                                ©2024 Fernando Chicaiza. Todos los derechos reservados
                            </p>
                            <div className='flex items-center gap-1'>
                                <p className='text-default-600'>Impulsado por</p>
                                <Link isExternal href='https://nextui.org/' title='nextui.org homepage'>
                                    <span className='text-primary'>NextUI</span>
                                </Link>
                                <p className='text-default-600'>&</p>
                                <Link isExternal href='https://nextjs.org/' title='nextjs.org homepage'>
                                    <span className='text-danger'>NextJs</span>
                                </Link>
                            </div>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
