import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'es-EC', 'es']
let defaultLocale = 'en-US'

function getLocale(request: NextRequest) {
    const matcher = match(languages, locales, defaultLocale)
    return matcher
}

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // console.log('Middleware running')
    // console.log('Locale:', getLocale(request))

    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    // console.log('Pathname:', pathname)

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    // return NextResponse.redirect(request.nextUrl)
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        // Skip all internal paths (_next)
        // '/((?!_next).*)'
        // Optional: only run on root (/) URL
        '/'
    ]
}
