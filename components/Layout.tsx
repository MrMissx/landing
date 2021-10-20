import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Metadata from './Metadata'
import { LayoutProps } from '../models/types'


export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Metadata/>
            <Head>
                <title>pageTitle</title>
            </Head>
            <Header name={pageTitle}/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}
