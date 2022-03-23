
import Link from 'next/link'

import { HeaderProps } from '../models/types'
import ThemeToggle from './ThemeToggle'


export default function Header(props: HeaderProps) {
    let { name } = props;
    if (name === undefined) {
        name = "Mr.Miss"
    }

    return (
        <nav className="flex justify-between py-3">
            <div className="text-center block py-2 px-4 text-2xl">
                <p><b>{name}</b></p>
            </div>
            <ul className="flex">
                <li className="mr-3">
                    <ThemeToggle className="my-2.5" />
                </li>
                <li className="mr-3">
                    <Link href="/">
                        <a className="text-center block border border-grey rounded hover:border-gray-200 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:bg-stone-800 dark:hover:bg-gray-700 py-2 px-4 shadow-md transform duration-500 hover:scale-110">Home</a>
                    </Link>
                </li>
                <li className="mr-3">
                    <Link href="/about">
                        <a className="text-center block border border-grey rounded hover:border-gray-200 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:bg-stone-800 dark:hover:bg-gray-700 py-2 px-4 shadow-md transform duration-500 hover:scale-110">About</a>
                    </Link>
                </li>
                <li className="mr-3">
                    <Link href="/project">
                        <a className="text-center block border border-grey rounded hover:border-gray-200 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:bg-stone-800 dark:hover:bg-gray-700 py-2 px-4 shadow-md transform duration-500 hover:scale-110">Projects</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
