import Animation from '../components/animation'
import Tools from '../components/Tools'
import Layout from '../components/Layout'

import dbConnect from "../models"
import { AboutProps } from "../models/types"
import AboutSchema from "../models/aboutSchema"


export default function About(props: AboutProps) {
    let { data } = props

    return (
        <Layout pageTitle="About Me">
            <div className="mx-14 md:mx-28 lg:mx-52">
                <div className="font-light text-sm lg:text-base">
                    {data.content.map((text, idx) => {
                        return (
                            <Animation.SlideLeft key={ idx } delay={0.2} custom={idx}>{ text } <br/><br/></Animation.SlideLeft>
                        )
                    })}
                </div>
                <Tools />
            </div>
        </Layout>
    )
}


export async function getServerSideProps() {
    await dbConnect()
    const data = await AboutSchema.findOne({ _id: 1 })
    return { props: { data: data.toObject() } }
}
