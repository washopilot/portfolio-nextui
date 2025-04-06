import { IconSvgProps } from '@/types'

export const GlobeIcon = ({ size = 24, width, height, ...props }: IconSvgProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={size || width}
        height={size || height}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
        focusable='false'
        role='presentation'
        {...props}>
        <circle cx='12' cy='12' r='10' />
        <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
        <path d='M2 12h20' />
    </svg>
)
