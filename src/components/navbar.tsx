'use client'

import { GithubIcon } from '@/components/icons'
import { Route } from '@/libs/page'
import { link, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from '@nextui-org/react'
import { clsx } from 'clsx'
import { includes } from 'lodash'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { ThemeSwitch } from './theme-switch'

export interface NavbarProps {
    routes: Route[]
    mobileRoutes?: Route[]
    tag?: string
    slug?: string
    children?: ReactNode
}

export const Navbar = ({ children, routes, mobileRoutes = [], slug, tag }: NavbarProps) => {
    const pathname = usePathname()

    const navLinkClasses = clsx(link({ color: 'foreground' }), 'data-[active=true]:text-primary')

    return (
        <NextUINavbar
            className={clsx({
                'z-[100001]': true
            })}
            maxWidth='xl'
            position='sticky'>
            <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
                <NavbarBrand as='li' className='gap-3 max-w-fit'>
                    <NextLink
                        aria-label='Home'
                        className='flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50'
                        href='/'>
                        LOGO
                        {/* <SmallLogo className='w-6 h-6 md:hidden' />
                            <LargeLogo className='h-5 md:h-6' /> */}
                    </NextLink>
                </NavbarBrand>

                <ul className='hidden lg:flex gap-4 justify-start items-center'>
                    <NavbarItem>
                        <NextLink
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'components')}
                            href='/docs/components/avatar'>
                            Components
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'blog')}
                            href='/blog'>
                            Blog
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'figma')}
                            href='/figma'>
                            Figma
                        </NextLink>
                    </NavbarItem>
                </ul>
            </NavbarContent>

            <NavbarContent className='flex w-full gap-2 sm:hidden' justify='end'>
                <NavbarItem className='flex h-full items-center'>
                    <Link isExternal aria-label='Github' className='p-1' href='https://github.com/nextui-org/nextui'>
                        <GithubIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                </NavbarItem>
                <NavbarItem className='flex h-full items-center'>
                    <ThemeSwitch />
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )
}