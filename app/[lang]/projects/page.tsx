import Paragraph from '@/components/home/paragraph'
import { ProjectList } from '@/components/project-list'
import { allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default function ProjectsPage() {
    const projects = allProjects
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        ?.filter((post) => {
            if (post.draft) {
                return false
            }

            return true
        })

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-8 text-justify hyphens-auto leading-normal'>
            <Paragraph title='Proyectos' />
            <ProjectList projects={projects} />
        </article>
    )
}
