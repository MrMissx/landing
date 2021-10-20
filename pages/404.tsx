import Link from "next/link"


export default function NotFound() {
    return (
        <div className="text-center pt-7 text-gray-600">
            <h1 className="text-4xl">Whooops...</h1>
            <h1 className="text-4xl">I think you&apos;ve passed the border of my page</h1><br />
            <Link href="/"><a className="text-blue-500 text-2xl">Oh nooo... take me back!!!</a></Link>
        </div>
    )
}
