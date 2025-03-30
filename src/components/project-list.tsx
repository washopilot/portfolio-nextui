'use client'

import { Card, CardBody, CardHeader, Image, Link } from '@heroui/react'
import { Project } from 'contentlayer/generated'
import { useRouter } from 'next/navigation'
import { MouseEvent, useCallback, useState } from 'react'

// Utility function for throttling
function throttle<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void {
    let lastCall = 0
    return (...args: Parameters<T>) => {
        const now = new Date().getTime()
        if (now - lastCall < delay) return
        lastCall = now
        func(...args)
    }
}

// Component for individual project cards
const ProjectCard = ({ project }: { project: Project }) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 })
    const router = useRouter()

    const handlePress = () => {
        if (project.url) router.push(project.url)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onMouseMove = useCallback(
        throttle((e: MouseEvent<HTMLDivElement>) => {
            const card = e.currentTarget
            const box = card.getBoundingClientRect()
            const x = e.clientX - box.left
            const y = e.clientY - box.top
            const centerX = box.width / 2
            const centerY = box.height / 2
            const rotateX = (y - centerY) / 10
            const rotateY = (centerX - x) / 10

            setRotate({ x: rotateX, y: rotateY })
        }, 100),
        []
    )

    const onMouseLeave = () => setRotate({ x: 0, y: 0 })

    // Extracted styles for better readability
    const cardStyle = {
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s'
    }

    return (
        <Card
            suppressHydrationWarning
            isBlurred
            className='p-2 h-full border-transparent text-start bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] relative transition-transform will-change-transform'
            isPressable={!!project.url}
            onPress={handlePress}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={cardStyle}>
            <CardHeader>
                <Link className='text-secondary-500 font-semibold' href={project.url} size='lg' underline='hover'>
                    {project.title}
                </Link>
            </CardHeader>
            <CardBody className='pt-0 px-2 pb-1'>
                {project.image && (
                    <Image
                        className='mb-4 w-full object-cover object-top h-44'
                        width={'100%'}
                        src={project.image}
                        alt={project.title || 'Project image'}
                    />
                )}
                <p className='font-normal w-full text-default-600 text-sm'>{project.description}</p>
            </CardBody>
        </Card>
    )
}

// Component for the project list
export const ProjectList = ({ projects }: { projects: Project[] }) => {
    return (
        <div className='mt-0 mx-0 sm:mx-12 grid gap-6 grid-cols-[repeat(auto-fill,minmax(13em,1fr))]'>
            {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
        </div>
    )
}
