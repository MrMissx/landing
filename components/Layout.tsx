import Head from "next/head"

import Header from "./Header"
import Footer from "./Footer"
import { LayoutProps } from "../models/types"


export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <Head>
                <title>{ pageTitle }</title>
            </Head>
            <Header name={pageTitle}/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}
