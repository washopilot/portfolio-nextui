// app/posts/[slug]/page.tsx
import mdxComponents from '@/components/mdx-components' // Importa los componentes personalizados
import MDXContent from '@/components/mdx-content'
import ProjectBreadcrum from '@/components/project-breadcrum'
import { Locale } from '@/i18n-config'
import { allMessages, allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        lang: project.lang,
        slug: project.slug
    }))
}

export default async function ProjectPage({ params }: { params: { slug: string; lang: Locale } }) {
    const messages = allMessages.find((msg) => msg.lang === params.lang)

    if (!messages) {
        notFound()
    }

    const { single_project_page } = messages

    const project = allProjects.find((project) => project.slug === params.slug && project.lang === params.lang)
    if (!project) notFound()

    return (
        <article className='flex text-sm max-w-lg mx-auto pt-16 flex-col gap-4 sm:gap-4 md:gap-6 text-justify hyphens-auto leading-normal'>
            <ProjectBreadcrum
                breadcrum_title={single_project_page.breadcrum_title}
                projectTitle={project.title}
                projectYear={project.year}
            />
            <MDXContent code={project.body.code} components={mdxComponents} />
        </article>
    )
}
