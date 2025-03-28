// app/posts/[slug]/page.tsx
import mdxComponents from '@/components/mdx-components' // Importa los componentes personalizados
import MDXContent from '@/components/mdx-content'
import ProjectBreadcrum from '@/components/project-breadcrum'
import { allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project._raw.flattenedPath
    }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = allProjects.find((project) => project._raw.flattenedPath === params.slug)
    if (!project) notFound()

    // console.log(project)

    return (
        <article className='flex w-full pt-16 flex-col gap-8 sm:gap-10 md:gap-12 text-justify hyphens-auto leading-normal'>
            {/* Some code ... */}
            <ProjectBreadcrum projectTitle={project.title} projectYear={project.year} />
            <MDXContent code={project.body.code} components={mdxComponents} />
        </article>
    )
}
