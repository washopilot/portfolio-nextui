import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { Link } from '@nextui-org/react'
import profilePic from '../../public/profile.jpg'

export default function Home() {
    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Paragraph title='En construcción'>Próximamente...</Paragraph>
        </article>
    )
}
