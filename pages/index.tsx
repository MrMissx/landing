import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import HeadContent from '../components/HeadContent'
import Social from '../components/Social'


const Home: NextPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen mx-20">
            <HeadContent title="Mr.Miss" />
            <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-full border border-gray-100 shadow-sm"
            />
            <div className="md:ml-8 mt-8">
                <div className="px-10">
                    <p className="text-gray-500 hover:text-black md:text-xl text-l">
                        Hi there 👋🏻! My name is
                    </p>
                    <p className="md:text-3xl text-xl"><b>Gaung</b> Ramadhan</p>
                    <p className="text-gray-500 hover:text-black md:text-xl text-lg">Mr.Miss</p>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil asperiores animi, illum dolor cum?
                    </p>
                </div>
                <Social />
                <div>
                    <ul className="flex justify-evenly">
                        <li className="mr-3">
                            <Link href="/about">
                                <a className="text-center block border border-grey rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-2 px-4">
                                    About Me
                                </a>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/project">
                                <a className="text-center block border border-grey rounded hover:border-gray-200 text-gray-600 hover:bg-gray-200 py-2 px-4">
                                    Projects
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
