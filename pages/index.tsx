import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'

import Animation from '../components/animation'
import dbConnect from '../models'
import mainSchema from '../models/mainSchema'
import { MainProps } from '../models/types'
import Metadata from '../components/Metadata'
import Social from '../components/Social'
import { renderText } from '../utils'

export default function Home(props: MainProps) {
    const { data } = props;
    return (
        <>
            <Metadata />
            <Head>
                <title>Mr.Miss</title>
            </Head>
            <main>
                <motion.div className="flex flex-col md:flex-row items-center justify-center h-screen md:mx-20 mx-10"
                initial="hidden" animate="visible" variants={{
                    hidden: {
                        opacity: 0,
                        scale: 0.8
                    },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delay: 0.5
                        }
                    }
                }}>
                    <div className="w-7/12 md:w-5/12 lg:w-3/12">
                        <Image
                            src="/profile.jpg"
                            alt="Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-full border border-gray-100 shadow-sm"
                        />
                    </div>
                    <div className="sm:ml-8 mt-8">
                        <div className="px-10">
                            <Animation.SlideLeft delay={0.4}>
                                <p className="text-gray-500 hover:text-black md:text-xl text-l">
                                    Hi there 👋🏻! My name is
                                </p>
                            </Animation.SlideLeft>
                            <Animation.SlideLeft delay={0.6}>
                                <p className="md:text-3xl text-xl"><b>Gaung</b> Ramadhan</p>
                            </Animation.SlideLeft>
                            <Animation.SlideLeft delay={0.8}>
                                <p className="text-gray-500 hover:text-black md:text-xl text-sm rounded-full bg-pink-200 w-max px-3 py-px">Mr.Miss</p>
                            </Animation.SlideLeft>
                            <Animation.SlideLeft delay={1}>
                                <p className="mt-1 text-sm md:text-base" dangerouslySetInnerHTML={{ __html: renderText(data.about) }} />
                            </Animation.SlideLeft>
                        </div>

                        <Animation.FadeIn delay={1}>
                            <Social />
                        </Animation.FadeIn>
                        <div>
                            <ul className="flex justify-evenly">
                                <Animation.FadeIn delay={1.2}>
                                    <li className="mr-3">
                                        <Link href="/about">
                                            <a className="text-center block border border-grey rounded text-xs md:text-base hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-2 px-4">
                                                About Me
                                            </a>
                                        </Link>
                                    </li>
                                </Animation.FadeIn>
                                <Animation.FadeIn delay={1.4}>
                                    <li className="mr-3">
                                        <Link href="/project">
                                            <a className="text-center block border border-grey rounded text-xs md:text-base hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-2 px-4">
                                                Projects
                                            </a>
                                        </Link>
                                    </li>
                                </Animation.FadeIn>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </main>
        </>
    )
}


export async function getServerSideProps() {
    await dbConnect()
    const res = await mainSchema.findOne({_id: 1})
    return { props: { data: res.toObject() } }
}   