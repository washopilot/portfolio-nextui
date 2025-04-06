// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `(en|es)/*.mdx`, // Match files in en/ or es/ subfolders
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        year: { type: 'string', required: false },
        draft: { type: 'boolean', required: false },
        tags: { type: 'list', of: { type: 'string' } },
        image: { type: 'string', required: false }
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (project) => project._raw.flattenedPath.split('/').slice(1).join('/') // Extract slug after lang prefix
        },
        lang: {
            type: 'string',
            resolve: (project) => project._raw.flattenedPath.split('/')[0] // Extract lang prefix (en/es)
        },
        url: {
            type: 'string',
            resolve: (project) => {
                const parts = project._raw.flattenedPath.split('/')
                const lang = parts[0]
                const slug = parts.slice(1).join('/')
                return `/${lang}/projects/${slug}`
            }
        }
    }
}))

export default makeSource({ contentDirPath: './src/projects', documentTypes: [Project] })
