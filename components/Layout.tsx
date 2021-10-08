import Header from './Header'
import Footer from './Footer'
import HeadContent from './HeadContent'
import { LayoutProps } from '../models/types'


export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props
    return (
        <>
            <HeadContent title={pageTitle}/>
            <Header name={pageTitle}/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}
