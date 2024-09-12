// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: 'string', required: true },
        date: { type: 'date', required: true }
    },
    computedFields: {
        url: { type: 'string', resolve: (project) => `/projects/${project._raw.flattenedPath}` }
    }
}))

export default makeSource({ contentDirPath: './src/projects', documentTypes: [Project] })
