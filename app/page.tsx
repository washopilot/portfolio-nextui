import Bio from '@/components/home/bio'
import CTAButton from '@/components/home/cta-button'
import { Spacer } from '@nextui-org/react'

const Home = () => {
    return (
        <article className='flex w-full pt-16 flex-col gap-2 sm:gap-6 md:gap-x-10 text-justify hyphens-auto leading-normal'>
            <Bio
                title='Hola, mi nombre es FERNANDO'
                description='Soy Desarrollador Web, Artista Digital y Diseñador'
                href={'/about'}
                link_description='  ...saber más?'
            />
            <Spacer y={0} />
            <CTAButton />
        </article>
    )
}

export default Home
