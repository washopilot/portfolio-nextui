const Paragraph = ({ title, children }: { title: string; children?: React.ReactNode }) => {
    return (
        <section>
            <h3 className='text-danger-500 text-2xl font-bold underline underline-offset-8 decoration-danger-300 decoration-4 pb-3'>
                {title}
            </h3>
            <article className='text-normal font-normal'>{children}</article>
        </section>
    )
}

export default Paragraph
