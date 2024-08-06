import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
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
            </Paragraph>
            <Paragraph title='Destrezas y tecnologías'>React, Laravel, Blender, Three.js, Docker</Paragraph>
        </article>
    )
}
