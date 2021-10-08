import { ReactNode } from 'react';
import Project from './projectSchema'


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
    Project: any
}