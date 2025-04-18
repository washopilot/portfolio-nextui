'use client'

import { GithubIcon, LinkedInIcon, XIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { RoutesByLanguage } from '@/libs/page'
import { getLocaleFromPath } from '@/utils' // Import the utility function
import {
    Link,
    link,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar
} from '@heroui/react'
import { clsx } from 'clsx'
import { includes } from 'lodash'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LargeLogo } from '../home/logo'
import { LanguageSwitch } from './language-switch'
import { ThemeSwitch } from './theme-switch'

export interface NavbarProps {
    routes: RoutesByLanguage['routes']
    mobileRoutes?: RoutesByLanguage['routes']
}

const Navbar = ({ routes }: NavbarProps) => {
    // console.log('routes', routes)

    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false)

    // --- Get current locale from pathname ---
    const pathname = usePathname()
    const currentLocale = getLocaleFromPath(pathname)
    // --- End get current locale ---

    // console.log('currentLocale', currentLocale)

    const navLinkClasses = clsx(
        link({ color: 'foreground' }),
        'data-[active=true]:text-danger data-[active=true]:font-bold data-[active=true]:after:scale-x-100',
        'font-normal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
    )

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
            isBordered
            isMenuOpen={isMenuOpen}
            maxWidth='lg'
            position='sticky'
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
                <NavbarBrand className='gap-3 max-w-fit transition-all duration-300 ease-in-out hover:drop-shadow-[0_2px_2px_hsl(var(--heroui-foreground))]'>
                    <NextLink
                        scroll={false}
                        aria-label='Home'
                        className='flex justify-start items-center gap-2 tap-highlight-transparent transition-opacity active:opacity-50'
                        href={`/${currentLocale}`}>
                        {/* Add locale */}
                        <LargeLogo className='w-auto h-10 md:hidden' />
                        <LargeLogo className='hidden md:block h-5 md:h-12 w-auto' />
                    </NextLink>
                </NavbarBrand>

                <ul className='hidden lg:flex gap-4 justify-start items-center px-2'>
                    <NavbarItem>
                        <NextLink
                            scroll={false}
                            className={navLinkClasses}
                            color='foreground'
                            data-active={pathname === `/${currentLocale}`}
                            href={`/${currentLocale}`}>
                            {routes[currentLocale].find((route) => route.key === 'home')?.title}
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            scroll={false}
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'about')}
                            href={`/${currentLocale}/about`}>
                            {/* Add locale */}
                            {routes[currentLocale].find((route) => route.key === 'about')?.title}
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NextLink
                            scroll={false}
                            className={navLinkClasses}
                            color='foreground'
                            data-active={includes(pathname, 'projects')}
                            href={`/${currentLocale}/projects`}>
                            {/* Add locale */}
                            {routes[currentLocale].find((route) => route.key === 'projects')?.title}
                        </NextLink>
                    </NavbarItem>
                    <NavbarItem>
                        <Link
                            showAnchorIcon
                            anchorIcon={<GithubIcon className='text-default-600 dark:text-default-500' />}
                            className={navLinkClasses}
                            color='foreground'
                            isExternal
                            href={routes[currentLocale].find((route) => route.key === 'code')?.path}>
                            {routes[currentLocale].find((route) => route.key === 'code')?.title}&nbsp;
                        </Link>
                    </NavbarItem>
                </ul>
            </NavbarContent>

            <NavbarContent className='flex w-full gap-3 sm:hidden' justify='end'>
                <NavbarItem className='flex h-full items-center'>
                    <ThemeSwitch />
                    <LanguageSwitch />
                </NavbarItem>
                <NavbarItem className='w-10 h-full'>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        className='w-full h-full pt-1'
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
                {/* <NavbarItem className='hidden sm:flex'></NavbarItem> */}
                <NavbarItem className='hidden sm:flex'>
                    <Link isExternal aria-label='X' className='px-1' href={siteConfig.links.twitter}>
                        <XIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                    <Link isExternal aria-label='Github' className='px-1' href={siteConfig.links.github}>
                        <GithubIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                    <Link isExternal aria-label='LinkedIn' className='px-1' href={siteConfig.links.linkedin}>
                        <LinkedInIcon className='text-default-600 dark:text-default-500' />
                    </Link>
                    <ThemeSwitch />
                    <LanguageSwitch />
                </NavbarItem>

                {/* <NavbarItem className='hidden lg:flex'>{searchButton}</NavbarItem> */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className='hidden sm:flex lg:hidden ml-4'
                />
            </NavbarContent>

            <NavbarMenu>
                {routes[currentLocale].map(
                    (item, index) =>
                        item.path && (
                            <NavbarMenuItem key={`${item.path}-${index}`}>
                                <Link
                                    color={pathname === `/${currentLocale}${item.path}` ? 'danger' : 'foreground'}
                                    className='pt-1 font-bold w-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left'
                                    href={
                                        item.key === 'code'
                                            ? item.path
                                            : `/${currentLocale}${
                                                  item.path.startsWith('/') ? item.path : '/' + item.path
                                              }`
                                    }
                                    isExternal={item.key === 'code'}
                                    size='lg'>
                                    {item.title}
                                </Link>
                            </NavbarMenuItem>
                        )
                )}
            </NavbarMenu>
        </NextUINavbar>
    )
}

export default Navbar
