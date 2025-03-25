// app/providers.tsx
'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { useRouter } from 'next/navigation'

export interface ProvidersProps extends ThemeProviderProps {
    themeProps: ThemeProviderProps
}
export function Providers({ children, themeProps }: ProvidersProps) {
    const router = useRouter()

    return (
        <HeroUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </HeroUIProvider>
    )
}
