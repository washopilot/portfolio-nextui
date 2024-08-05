import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage from 'next/image'

const Profile = ({
    profilePic,
    title = 'Fernando Chicaiza',
    subtitle = 'Desarrollador / Artista / Diseñador'
}: {
    profilePic: StaticImport
    title?: string
    subtitle?: string
}) => (
    <section className='flex w-full pt-5 justify-center items-center flex-wrap gap-4 sm:gap-12 md:gap-x-20'>
        <div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='text-small font-light'>{subtitle}</p>
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

export default Profile
