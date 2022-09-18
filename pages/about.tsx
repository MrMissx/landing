import { GetStaticProps } from 'next';
import Animation from '../components/animation'
import Tools from '../components/Tools'
import Layout from '../components/Layout'
import ScrollUpButton from "../components/ScrollUpButton";
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../firebase/client';
import { AboutProps } from "../models/types"


export default function About(props: AboutProps) {
    let { data } = props

    return (
        <Layout pageTitle="About Me">
            <div className="mx-14 md:mx-28 lg:mx-52">
                <div className="font-light text-sm lg:text-base mt-5">
                    {data.content.map((text, idx) => {
                        return (
                            <Animation.SlideLeft key={idx} delay={0.2} custom={idx}>{text} <br /><br /></Animation.SlideLeft>
                        )
                    })}
                </div>
                <Tools />
            </div>
            <ScrollUpButton />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const docRef = doc(db, 'about', '1');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { props: { data: docSnap.data() } };
    }
    return { props: { data: {} }, revalidate: 86400 };
}
