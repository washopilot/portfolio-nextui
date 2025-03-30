import { Chip, Image, Link } from '@heroui/react'

const CustomChip = ({ children }: { children: React.ReactNode }) => {
    return <Chip classNames={{ base: 'rounded-md text-warning-600' }}>{children}</Chip>
}

const CustomLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return (
        <Link isBlock showAnchorIcon isExternal underline='always' href={href} color='secondary'>
            {children}
        </Link>
    )
}

const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null

    return <Image src={src} alt={alt} radius='lg' className='my-4 w-full' width={'100%'} />
}

const CustomLi = ({ children }: { children: React.ReactNode }) => {
    return <li className='my-1'>{children}</li>
}

const CustomP = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>
}

const mdxComponents = {
    CustomChip,
    a: CustomLink,
    img: CustomImage,
    li: CustomLi,
    p: CustomP
}

export default mdxComponents
