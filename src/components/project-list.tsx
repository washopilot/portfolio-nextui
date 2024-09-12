'use client'

import { Card, CardBody, CardFooter, CardHeader, Image, Link } from '@nextui-org/react'
import { Project } from 'contentlayer/generated'

import { format, parseISO } from 'date-fns'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'

// import { useIsMounted } from '@/hooks/use-is-mounted'
// import { trackEvent } from '@/utils/va'

const ProjectCard = (project: Project) => {
    const router = useRouter()
    const handlePress = () => {
        if (project.url) {
            router.push(project.url)
        }
    }

    return (
        <Card
            suppressHydrationWarning
            isBlurred
            // as={NextLink}
            className='p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
            // href={project.url}
            isPressable={!!project.url}
            onPress={handlePress}>
            <CardHeader>
                <Link
                    as={NextLink}
                    className='font-semibold '
                    href={project.url}
                    size='lg'
                    underline='hover'
                    onPress={handlePress}>
                    {project.title}
                </Link>
            </CardHeader>
            <CardBody className='pt-0 px-2 pb-1'>
                <Image className='mb-4' src={project.image} alt='alt' />
                <p className='font-normal w-full text-default-600'>{project.description}</p>
            </CardBody>
            <CardFooter className='flex justify-between items-center'>
                <time className='block text-small text-default-500' dateTime={project.date}>
                    {format(parseISO(project.date), 'LLLL d, yyyy')}
                    {project?.draft && ' (Draft)'}
                </time>
                {/* <Avatar size='sm' src={project.author?.avatar} /> */}
            </CardFooter>
        </Card>
    )
}

export const ProjectList = ({ projects }: { projects: Project[] }) => {
    return (
        <div className='mt-10 grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    )
}
