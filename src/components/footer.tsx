'use client'
import { Link } from '@nextui-org/react'

export const Footer = () => {
    const getCurrentYear = (): number => {
        return new Date().getFullYear()
    }

    return (
        <footer className='container mx-auto max-w-7xl pt-16 pb-4 px-12'>
            <div className='flex flex-col justify-center items-center gap-0'>
                <p className='text-sm text-default-400'>© {getCurrentYear()} Fernando Chicaiza. Developer.</p>
                <p className='text-sm text-default-400'>
                    Con el soporte de
                    <Link isExternal isBlock href='https://nextui.org' className='py-0'>
                        NextUI
                    </Link>
                    &amp;
                    <Link isExternal isBlock href='https://nextjs.org' className='py-0'>
                        Next.js
                    </Link>
                </p>
            </div>
        </footer>
    )
}
