// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files'

// Define nested types for the JSON structure
const HomePage = defineNestedType(() => ({
    name: 'HomePage',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'markdown', required: true },
        more_link_title: { type: 'string', required: true },
        cta_title: { type: 'string', required: true }
    }
}))

const AboutPage = defineNestedType(() => ({
    name: 'AboutPage',
    fields: {
        profile_subtitle: { type: 'string', required: true },
        paragraph_01_title: { type: 'string', required: true },
        paragraph_01_content: { type: 'mdx', required: true },
        paragraph_02_title: { type: 'string', required: true },
        paragraph_02_content: { type: 'mdx', required: true },
        paragraph_03_title: { type: 'string', required: true },
        paragraph_03_content: { type: 'mdx', required: true }
    }
}))

const ProjectsPage = defineNestedType(() => ({
    name: 'ProjectsPage',
    fields: {
        title: { type: 'string', required: true }
    }
}))

const SingleProjectPage = defineNestedType(() => ({
    name: 'SingleProjectPage',
    fields: {
        breadcrum_title: { type: 'string', required: true }
    }
}))

// Define the main document type for the JSON message files
export const Messages = defineDocumentType(() => ({
    name: 'Messages',
    filePathPattern: `messages/(en|es).json`,
    contentType: 'data',
    fields: {
        home_page: { type: 'nested', of: HomePage, required: true },
        about_page: { type: 'nested', of: AboutPage, required: true },
        projects_page: { type: 'nested', of: ProjectsPage, required: true },
        single_project_page: { type: 'nested', of: SingleProjectPage, required: true }
    },
    computedFields: {
        lang: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.split('/')[1] // Extract lang (en/es) from filename
        }
    }
}))

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

export default makeSource({
    contentDirPath: './src/content',
    documentTypes: [Project, Messages]
})
