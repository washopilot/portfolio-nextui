import { Raleway as Google_Font } from 'next/font/google'

export const google_font = Google_Font({
    variable: '--font-google-font',
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
    style: ['normal', 'italic'],
    subsets: ['latin'],
    weight: ['300', '400', '700']
})
