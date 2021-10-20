import { ReactNode } from 'react';


export interface Project {
    _id: number
    name: string,
    description: string,
    photo: string,
    link?: string,
    __v: number
}

export interface MainPage {
    image: string,
    about: string,
    __v: number
}

export interface About {
    _id: number,
    content: Array<string>,
    __v: number
}

export interface AboutProps {
    data: About
}

export interface MainProps {
    data: MainPage,
    children?: ReactNode
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
