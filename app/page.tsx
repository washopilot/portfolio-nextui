import Profile from '@/components/home/profile'
import profilePic from '../public/profile.jpg'

const Home = () => {
    return (
        <section className='flex w-full pt-5 justify-center items-center flex-wrap gap-4 sm:gap-12 md:gap-x-20'>
            <Profile profilePic={profilePic} />
        </section>
    )
}

export default Home
