const Bio = ({ title, children }: { title: string; children?: React.ReactNode }) => {
    return (
        <>
            <h3 className='text-2xl font-bold underline underline-offset-8 decoration-danger-300 decoration-4'>
                {title}
            </h3>
            <p className='text-normal font-normal'>{children}</p>
        </>
    )
}

export default Bio
