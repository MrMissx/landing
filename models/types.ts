import { ReactNode } from 'react';

export interface Project {
    _id: number
    name: string,
    description: string,
    photo: string,
    link?: string,
    __v: number
}

export interface MetaTag {
    title: string
}

export interface HeaderProps {
    name?: string
}

export interface LayoutProps {
    children: ReactNode,
    pageTitle: string
}

export interface ProjectProps {
    projects: Array<Project>
}
