'use client'

import { MoonFilledIcon, SunFilledIcon } from '@/components/icons'
import { Switch } from '@heroui/react'
import { useIsSSR } from '@react-aria/ssr'
import { useTheme } from 'next-themes'

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme()
    const isSSR = useIsSSR()

    const onChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Switch
            className='md:mx-5 mx-2'
            isSelected={!isSSR && theme === 'light'}
            aria-label={`Switch to ${isSSR ? 'dark' : theme === 'light' ? 'dark' : 'light'} mode`}
            onChange={onChange}
            color='secondary'
            endContent={<MoonFilledIcon size={16} />}
            size='md'
            startContent={<SunFilledIcon size={16} />}
        />
    )
}
