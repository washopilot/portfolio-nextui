import Bio from '@/components/home/bio'
import Profile from '@/components/home/profile'
import profilePic from '../public/profile.jpg'

const Home = () => {
    return (
        <>
            <Profile profilePic={profilePic} title='Fernando Chicaiza' subtitle='Desarrollador / Artista / Diseñador' />
            <Bio />
        </>
    )
}

export default Home
