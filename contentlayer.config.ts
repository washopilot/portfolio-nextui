// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        date: { type: 'date', required: true },
        draft: { type: 'boolean', required: false },
        tags: { type: 'list', of: { type: 'string' } },
        image: { type: 'string', required: false }
    },
    computedFields: {
        url: { type: 'string', resolve: (project) => `/projects/${project._raw.flattenedPath}` }
    }
}))

export default makeSource({ contentDirPath: './src/projects', documentTypes: [Project] })
