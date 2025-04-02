import Paragraph from '@/components/home/paragraph'
import Profile from '@/components/home/profile'
import { BxRightArrowIcon } from '@/components/icons/arrow-right'
import { Link } from '@heroui/react'
import profilePic from '../../public/profile.jpg'

export default function AboutPage() {
    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle='Desarrollador / Artista / Diseñador' />
            <Paragraph title='Sobre mí'>
                Soy un desarrollador freelance apasionado, con más de cuatro años de experiencia en el desarrollo web y
                móvil. A lo largo de mi carrera, he entregado proyectos de alta calidad para diversos clientes,
                utilizando un stack tecnológico versátil tanto en frontend como en backend. Mi experiencia se centra
                en&nbsp;<strong>Laravel y React</strong>, pero siempre estoy abierto a aprender y adoptar nuevas
                tecnologías. He trabajado con múltiples clientes en mi país de origen, Ecuador, lo que me ha permitido
                adquirir una valiosa experiencia y un profundo conocimiento de las mejores prácticas en desarrollo web.
                <br /> <br /> Mi compromiso con la excelencia y la mejora continua me impulsa a ofrecer soluciones
                innovadoras y eficientes en cada proyecto. Me apasiona aprender nuevas herramientas y tecnologías,
                trabajar en equipo y resolver desafíos complejos. La comunicación efectiva, la colaboración y el
                pensamiento analítico son clave en mi enfoque de trabajo. ¡Construyamos algo increíble juntos!
                <br /> <br /> Amo lo que hago y siempre busco nuevas formas de crecer y mejorar. La satisfacción del
                cliente es mi máxima prioridad, y me enorgullece crear soluciones eficientes, escalables y visualmente
                impactantes. Si buscas un profesional comprometido y con gran potencial, soy la persona indicada
                <Link
                    isBlock
                    showAnchorIcon
                    isExternal
                    href='/resume.pdf'
                    className='font-bold italic text-secondary-500'>
                    <span>&nbsp;... mi CV</span>
                </Link>
            </Paragraph>
            <Paragraph title='Destrezas y tecnologías'>
                JavaScript / TypeScript React / React Native / Next.js Vue.js / Nuxt Laravel / PHP / MySQL HTML5 / CSS /
                Tailwind / Diseño Responsive & Mobile-First
            </Paragraph>
            <Paragraph title='Lenguajes'>Javascript/Typescript, PHP &amp; Python</Paragraph>
        </article>
    )
}
