import Action from '@/components/home/action'
import Bio from '@/components/home/bio'
import Profile from '@/components/home/profile'
import { Spacer } from '@nextui-org/react'
import profilePic from '../public/profile.jpg'

const Home = () => {
    return (
        <>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle='Desarrollador / Artista / Diseñador' />
            <article className='flex w-full pt-16 flex-col gap-2 sm:gap-6 md:gap-x-10 text-justify hyphens-auto leading-normal'>
                <Bio />
                <Spacer y={3} />
                <Action />
                <Action />
                <Action />
            </article>
        </>
    )
}

export default Home
