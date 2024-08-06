import { IconSvgProps } from '@/types'

export const BxRightArrowIcon = ({ size = '1em', width, height, ...props }: IconSvgProps) => {
    return (
        <svg
            fill='currentColor'
            height={height || size}
            viewBox='0 0 24 24'
            width={width || size}
            xmlns='http://www.w3.org/2000/svg'
            {...props}>
            <path d='M12 10.994H8v2h4V16l4.005-4.005L12 7.991z' />
        </svg>
    )
}
