import Hero from '@/components/hero'

export default function Home() {
    return (
        <main className='container mx-auto max-w-7xl px-6 flex justify-center'>
            <section className='md:w-1/2 w-full pt-5'>
                <Hero />
            </section>
        </main>
    )
}
