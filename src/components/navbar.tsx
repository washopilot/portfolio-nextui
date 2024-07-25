'use client'

import { GithubIcon, TwitterIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { Route } from '@/libs/page'
import {
    link,
    Link,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar
} from '@nextui-org/react'
import { clsx } from 'clsx'
import { includes } from 'lodash'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'
import { LargeLogo, SmallLogo } from './logo'
import { ThemeSwitch } from './theme-switch'

export interface NavbarProps {
    routes: Route[]
    mobileRoutes?: Route[]
    tag?: string
    slug?: string
    children?: ReactNode
}

export const Navbar = ({ children, routes, mobileRoutes = [], slug, tag }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false)

    const pathname = usePathname()
    const navLinkClasses = clsx(link({ color: 'foreground' }), 'data-[active=true]:text-primary')

    useEffect(() => {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <NextUINavbar
            className={clsx({
                'z-[100001]': isMenuOpen
            })}
            isMenuOpen={isMenuOpen}
            maxWidth='xl'
            position='sticky'
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
                <NavbarBrand className='gap-3 max-w-fit'>
                    <NextLink
                        aria-label='Home'
                        className='flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50'
                        href='/'>
                        <SmallLogo className='w-12 h-auto md:hidden' />
                        <LargeLogo className='hidden md:block h-5 md:h-14 w-auto' />
                    </NextLink>
                </NavbarBrand>

                <ul className='hidden lg:flex gap-4 justify-start items-center px-2'>
                    <NavbarItem>
                        <NextLink className={navLinkClasses} color='foreground' data-active={pathname == '/'} href='/'>
                            Inicio
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'about')}
                            href='/about'>
                            Acerca
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'projects')}
                            href='/projects'>
                            Proyectos
                        </NextLink>
                    </NavbarItem>
                </ul>
            </NavbarContent>

            <NavbarContent className='flex w-full gap-2 sm:hidden' justify='end'>
                <NavbarItem className='flex h-full items-center'>
                    <Link isExternal aria-label='Github' className='p-1' href={siteConfig.links.github}>
                        <GithubIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                </NavbarItem>
                <NavbarItem className='flex h-full items-center'>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className='w-10 h-full'>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className='w-full h-full pt-1'
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
                <NavbarItem className='hidden sm:flex'></NavbarItem>
                <NavbarItem className='hidden sm:flex'>
                    <Link isExternal aria-label='Twitter' className='p-1' href={siteConfig.links.twitter}>
                        <TwitterIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                    <Link isExternal aria-label='Github' className='p-1' href={siteConfig.links.github}>
                        <GithubIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>

                {/* <NavbarItem className='hidden lg:flex'>{searchButton}</NavbarItem> */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='hidden sm:flex lg:hidden ml-4'
                />
            </NavbarContent>

            <NavbarMenu>
                {routes.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={pathname === item.path ? 'primary' : 'foreground'}
                            className='w-full'
                            href={item.path}
                            size='lg'>
                            {item.title}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    )
}
