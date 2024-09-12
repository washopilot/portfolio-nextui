import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true
}

export default withContentlayer(nextConfig)
