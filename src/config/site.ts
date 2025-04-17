export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Fernando Chicaiza - Professional Portfolio',
    description: 'Fernando Chicaiza, Digital Artist',
    ogImage: 'https://fchicaiza.site/logo_card.jpg',
    author: 'Fernando Chicaiza',
    email: 'washopilot@gmail.com',
    siteUrl: 'https://fchicaiza.site',
    creator: '@getnextui',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://fchicaiza.site',
        siteName: 'Fernando Chicaiza',
        description: 'Fernando Chicaiza, Digital Artist',
        images: [
            {
                url: 'https://fchicaiza.site/logo_card.jpg',
                width: 1200,
                height: 630,
                alt: 'logocard'
            }
        ]
    },
    keywords: ['Fernando Chicaiza', 'Portfolio', 'Artist', 'Digital', 'Developer'],
    twitter: {
        card: 'summary_large_image',
        title: 'Fernando Chicaiza',
        description: 'Tech Entusiast - Web Developer',
        image: 'https://fchicaiza.site/logo_card.jpg',
        creator: '@washopilot'
    },
    links: {
        github: 'https://github.com/washopilot',
        twitter: 'https://x.com/washopilot',
        linkedin: 'https://linkedin.com/in/fernando-chicaiza-cruz'
    }
}
