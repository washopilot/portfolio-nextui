import { Recursive } from 'next/font/google'

export const recursive = Recursive({
    variable: '--font-recursive',
    adjustFontFallback: true,
    display: 'optional',
    fallback: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
    ],
    preload: true,
    style: 'normal',
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})
