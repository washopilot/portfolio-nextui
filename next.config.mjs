import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    experimental: {
        turbo: {
            resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
        },
        mdxRs: true
    }
}

export default withMDX()(nextConfig)
