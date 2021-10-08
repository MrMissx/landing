import Head from "next/head"
import { MetaTag } from '../models/types'


export default function HeadContent(props: MetaTag) {
    const { title } = props
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}
