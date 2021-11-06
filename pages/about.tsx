import Layout from '../components/Layout'

import dbConnect from "../models"
import { AboutProps } from "../models/types"
import AboutSchema from "../models/aboutSchema"


export default function About(props: AboutProps) {
    let { data } = props

    return (
        <Layout pageTitle="About Me">
            <div className="mx-14 md:mx-28 lg:mx-52">
                {data.content.map((text, idx) => {
                    return (
                        <p key={ idx } className="font-light text-base lg:text-lg" style={{ textIndent: 30 }}>{ text } <br></br><br></br></p>
                    )
                })}
            </div>
        </Layout>
    )
}


export async function getStaticProps() {
    await dbConnect()
    const data = await AboutSchema.findOne({ _id: 1 })
    return { props: { data: data.toObject() } }
}
