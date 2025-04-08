import Paragraph from '@/components/home/paragraph'
import { ProjectList } from '@/components/project-list'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { allProjects } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

export default async function ProjectsPage({ params: { lang } }: { params: { lang: Locale } }) {
    const { projects_page } = await getDictionary(lang)

    // Add lang to params
    const projects = allProjects
        .filter((project) => project.lang === lang) // Filter by language
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        ?.filter((post) => {
            if (post.draft) {
                return false
            }

            return true
        })

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-8 text-justify hyphens-auto leading-normal'>
            <Paragraph title={projects_page.title} />
            <ProjectList projects={projects} />
        </article>
    )
}
