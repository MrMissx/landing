import { ReactNode } from 'react';

export interface PageProps {
    children: ReactNode;
}

export interface Project {
    name: string,
    description: string,
    photo: string,
    link?: string,
    _id?: string,
}

export interface MainPage {
    image: string,
    bio: string
}

export interface About {
    content: Array<string>,
}

export interface AboutProps {
    data: About
}

export interface MainProps extends PageProps {
    data: MainPage,
}

export interface HeaderProps {
    name?: string
}

export interface LayoutProps extends PageProps {
    pageTitle: string
}

export interface ProjectCardProps {
    data: Project,
    id: number
}

export interface ProjectProps {
    projects: Array<Project>
}

export interface AdminContextProps {
    user?: string | null
}
