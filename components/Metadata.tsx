import Head from "next/head"


export default function Metadata() {
    const desc: string = "Hii... Welcome to my personal website."
    const image: string = "http://mrmiss.me/profile.jpg"

    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <meta name="description" content={ desc } />
            <meta name="image" content={ image }/>

            <meta property="og:title" content="Mr.Miss" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="http://mrmiss.me" />
            <meta property="og:image" content={ image } />
            <meta property="og:description" content={ desc } />

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:site" content="@mrmissx"/>
            <meta property="twitter:creator" content="@mrmissx" />
            <meta property="twitter:title" content="MrMiss"/>
            <meta property="twitter:description" content={ desc }/>
            <meta property="twitter:image" content={ image } />
        </Head>
    )
}
