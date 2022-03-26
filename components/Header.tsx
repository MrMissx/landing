
import Link from "next/link"
import { useState } from "react";

import { HeaderProps } from "../models/types"
import ThemeToggle from "./ThemeToggle"

export default function Header(props: HeaderProps) {
    const [active, setActive] = useState(false);
    let { name } = props;

    if (name === undefined) {
        name = "Mr.Miss"
    }

    return (
        <nav className="flex items-center flex-wrap p-3 ">
            <span className="text-xl font-bold tracking-wide">
                {name}
            </span>
            <ThemeToggle className="px-3 ml-auto md:hidden" />
            <button
                className="inline-flex p-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded md:hidden outline-none"
                onClick={() => setActive(!active)}
            >
                <svg  // hamburger menu icon
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={`${active ? "" : "hidden"
                    }   w-full md:inline-flex md:flex-grow md:w-auto`}
            >
                <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
                    <ThemeToggle className="my-2.5 md:flex hidden" />
                    <Link href="/">
                        <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-700">
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-700">
                            About
                        </a>
                    </Link>
                    <Link href="/project">
                        <a className="md:inline-flex md:w-auto w-full px-3 py-2 rounded  font-bold items-center justify-center hover:bg-neutral-300 dark:hover:bg-neutral-700">
                            Project
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
