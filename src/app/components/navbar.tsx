'use client'

import { ReactNode } from 'react'
import { Route } from '../libs/page'

export interface NavbarProps {
    routes: Route[]
    mobileRoutes?: Route[]
    tag?: string
    slug?: string
    children?: ReactNode
}

export const Navbar = ({ children, routes, mobileRoutes = [], slug, tag }: NavbarProps) => {
    return <h1>Este es un navbar</h1>
}
