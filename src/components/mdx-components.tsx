import { Chip, Link } from '@heroui/react'

const CustomChip = ({ children }: { children: React.ReactNode }) => {
    return (
        <Chip classNames={{ base: 'border-warning-500 rounded-md text-warning-500' }} variant='bordered'>
            {children}
        </Chip>
    )
}

const CustomLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <Link isBlock showAnchorIcon isExternal underline='always' href={href} color='secondary'>
            {children}
        </Link>
    )
}

const CustomLi = ({ children }: { children: React.ReactNode }) => {
    return <li className='my-1'>{children}</li>
}

const mdxComponents = {
    Chip,
    CustomChip,
    CustomLink,
    li: CustomLi
}

export default mdxComponents
