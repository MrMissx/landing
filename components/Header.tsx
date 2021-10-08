
import Link from 'next/link'

import { HeaderProps } from '../models/types'


export default function Header(props: HeaderProps) {
    let { name } = props;
    if(name === undefined){
        name = "Mr.Miss"
    }

    return (
        <nav className="flex justify-between">
            <div className="text-center block py-2 px-4">
                <p>{name}</p>
            </div>
            <ul className="flex">
                <li className="mr-3">
                    <Link href="/"><a className="text-center block border border-grey rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">Home</a></Link>
                </li>
                <li className="mr-3">
                    <Link href="/about"><a className="text-center block border border-grey rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">About</a></Link>
                </li>
                <li className="mr-3">
                    <Link href="/project"><a className="text-center block border border-grey rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">Projects</a></Link>
                </li>
            </ul>
        </nav>
    )
}
