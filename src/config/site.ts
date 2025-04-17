export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Fernando Chicaiza - Professional Portfolio',
    description: 'Fernando Chicaiza, Digital Artist',
    ogImage: 'https://fchicaiza.site/logo_card.png',
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
                url: 'https://fchicaiza.site/logo_card.png',
                width: 900,
                height: 800,
                alt: 'logocard'
            }
        ]
    },
    keywords: ['Fernando Chicaiza', 'Portfolio', 'Artist', 'Digital', 'Developer'],
    twitter: {
        card: 'summary_large_image',
        title: 'Fernando Chicaiza',
        description: 'Tech Entusiast - Web Developer',
        image: 'https://fchicaiza.site/logo_card.png',
        creator: '@washopilot'
    },
    links: {
        github: 'https://github.com/washopilot',
        twitter: 'https://x.com/washopilot',
        linkedin: 'https://linkedin.com/in/fernando-chicaiza-cruz'
    }
}
