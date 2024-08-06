import { Url } from 'next/dist/shared/lib/router/router'
import NextLink from 'next/link'

const Bio = ({
    title,
    description,
    href,
    link_description
}: {
    title: string
    description: string
    href?: Url
    link_description?: string
}) => {
    return (
        <>
            <h3 className='text-2xl font-bold underline underline-offset-8 decoration-danger-300 decoration-4'>
                {title}
            </h3>
            <p className='text-normal font-normal'>
                {description}
                {href && (
                    <span className='font-bold underline underline-offset-4'>
                        <NextLink href={href}>{link_description}</NextLink>
                    </span>
                )}
            </p>
        </>
    )
}

export default Bio
