'use client'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/react'

export default function ProjectBreadcrum() {
    return (
        <Breadcrumbs>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
    )
}
