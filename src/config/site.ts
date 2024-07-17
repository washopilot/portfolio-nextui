export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Fernando Chicaiza - Portafolio Profesional',
    description: 'Fernando Chicaiza, Artista digital',
    // ogImage: 'https://nextui.org/twitter-cards/nextui.jpeg',
    author: 'Fernando Chicaiza',
    email: 'washopilot@gmail.com',
    // siteUrl: 'https://nextui.org',
    // creator: '@getnextui',
    openGraph: {
        type: 'website',
        locale: 'es_EC',
        // url: 'https://nextui.org',
        siteName: 'FernandoChicaiza',
        description: 'Fernando Chicaiza, Artista digital',
        images: [
            // {
            //     url: 'https://nextui.org/twitter-cards/nextui.jpeg',
            //     width: 1200,
            //     height: 630,
            //     alt: 'NextUI'
            // }
        ]
    },
    keywords: ['Fernando Chicaiza', 'Portfolio', 'Artist', 'Digital', 'Developer'],
    twitter: {
        card: 'summary_large_image',
        title: 'Fernando Chicaiza',
        description: 'Civil Engineer - Tech Entusiast - Web Developer',
        // image: 'https://nextui.org/twitter-cards/nextui.jpeg',
        creator: '@washopilot'
    },
    links: {
        github: 'https://github.com/washopilot',
        twitter: 'https://x.com/washopilot'
    }
}
