// app/posts/[slug]/page.tsx
import mdxComponents from '@/components/mdx-components' // Importa los componentes personalizados
import MDXContent from '@/components/mdx-content'
import ProjectBreadcrum from '@/components/project-breadcrum'
import { getDictionary } from '@/get-dictionaries'
import { Locale } from '@/i18n-config'
import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    // Generate params for each project in each language
    return allProjects.map((project) => ({
        lang: project.lang, // Use the computed lang field
        slug: project.slug // Use the computed slug field
    }))
}

export default async function ProjectPage({ params }: { params: { slug: string; lang: Locale } }) {
    const { single_project_page } = await getDictionary(params.lang)

    // Add lang to params
    // Find the project matching both slug and lang
    const project = allProjects.find((project) => project.slug === params.slug && project.lang === params.lang)
    if (!project) notFound() // If no project matches, return 404

    // console.log(project)

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
