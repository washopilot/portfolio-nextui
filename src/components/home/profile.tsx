import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'

type ProfileProps = {
    profilePic: StaticImport
    title?: string
    subtitle?: string
}

const Profile = ({
    profilePic,
    title = 'Fernando Chicaiza',
    subtitle = 'Desarrollador / Artista / Diseñador'
}: ProfileProps) => (
    <>
        <div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p className='text-small font-light'>{subtitle}</p>
        </div>
        <NextImage
            sizes='30vw'
            src={profilePic}
            alt='Picture of the author'
            placeholder='blur'
            className='flex-none object-cover rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden border-large border-foreground'
        />
    </>
)

export default Profile
