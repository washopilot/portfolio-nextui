'use client'

import { Card, CardBody, CardHeader, Image, Link } from '@heroui/react'
import { Project } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'

const ProjectCard = (project: Project) => {
    const router = useRouter()
    const handlePress = () => {
        if (project.url) {
            router.push(project.url)
        }
    }

    return (
        <Card
            suppressHydrationWarning={true}
            isBlurred
            className='p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]'
            isPressable={!!project.url}
            onPress={handlePress}>
            <CardHeader>
                <Link className='text-secondary-500 font-semibold ' href={project.url} size='lg' underline='hover'>
                    {project.title}
                </Link>
            </CardHeader>
            <CardBody className='pt-0 px-2 pb-1'>
                {project.image ? (
                    <Image
                        className='mb-4 w-full object-cover object-top h-44'
                        width={'100%'}
                        src={project.image}
                        alt='alt'
                    />
                ) : null}
                <p className='font-normal w-full text-default-600 text-sm'>{project.description}</p>
            </CardBody>
        </Card>
    )
}

export const ProjectList = ({ projects }: { projects: Project[] }) => {
    return (
        <div className='mt-10 mx-10 grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
            ))}
        </div>
    )
}
