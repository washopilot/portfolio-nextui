import Hero from '@/components/hero'

export default function Home() {
    return (
        <main className='container mx-auto max-w-7xl px-6 flex-grow'>
            <section className='flex flex-col items-center justify-center'>
                <Hero />
            </section>
        </main>
    )
}
