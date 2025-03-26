import { useMDXComponent } from 'next-contentlayer2/hooks'

const MDXContent = ({ code, components }: { code: string; components?: any }) => {
    const Component = useMDXComponent(code)
    return <Component components={components} />
}

export default MDXContent
