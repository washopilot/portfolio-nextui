import NextImage from 'next/image'
import profilePic from '../public/profile.jpg'

export default function Home() {
    return (
        <section className='flex w-full pt-5 justify-center items-center flex-wrap gap-4 sm:gap-12 md:gap-x-20'>
            <div>
                <h1 className='text-3xl font-bold'>Fernando Chicaiza</h1>
                <p className='text-small font-light'>Desarrollador / Artista / Diseñador</p>
            </div>
            <NextImage
                sizes='30vw'
                src={profilePic}
                alt='Picture of the author'
                placeholder='blur'
                className='flex-none object-cover rounded-full w-28 h-28 md:w-36 md:h-36 overflow-hidden border-large border-foreground'
            />
        </section>
    )
}
