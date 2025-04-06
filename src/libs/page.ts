export interface Route {
    key?: string
    title?: string
    path?: string
}

export interface RoutesByLanguage {
    routes: {
        en: Route[]
        es: Route[]
    }
}
