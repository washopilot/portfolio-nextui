import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { Link } from '@heroui/react'
import profilePic from '../../public/profile.jpg'

export default function Home() {
    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle='Desarrollador / Artista / Diseñador' />
            <Paragraph title='Sobre mí'>
                Soy un Desarrollador Full-Stack Freelance radicado en Loja, Ecuador. Apasionado por la tecnología y la
                creación de soluciones digitales, me especializo en el desarrollo integral de productos tecnológicos
                desde su conceptualización y diseño hasta la implementación y optimización, enfocándome en resolver
                problemas reales a través de la programación.
                <Link
                    isBlock
                    showAnchorIcon
                    isExternal
                    href='/resume.pdf'
                    className='font-bold italic text-secondary-500'
                    anchorIcon={<BxRightArrowIcon className='inline scale-[3]' />}>
                    <span>&nbsp;... mi CV&nbsp;&nbsp;</span>
                </Link>
            </Paragraph>
            <Paragraph title='Destrezas y tecnologías'>
                Node, React, Angular, Laravel, Blender, Three.js &amp; Docker
            </Paragraph>
            <Paragraph title='Lenguajes'>Javascript/Typescript, PHP &amp; Python</Paragraph>
        </article>
    )
}
