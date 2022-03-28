import Head from "next/head"


export default function Metadata() {
    const desc: string = "Hii... Welcome to my personal website."
    const baseUrl: string = "https://mrmiss.my.id"
    const imagePath: string = "/profile.jpg"

    return (
        <Head>
            <meta name="image" content={ baseUrl + imagePath }/>
            <link rel="icon" href={ baseUrl + "/favicon.ico"} />
            <meta name="description" content={ desc } />
            <meta name="keywords"
                content="MrMiss, Mr_Miss, keselekpermen, Gaung Ramadhan Bagaswara, Gaung Ramadhan, Gaung" />

            <meta property="og:type" content="article" />
            <meta property="og:title" content="Mr.Miss" />
            <meta property="og:image" content={ baseUrl + imagePath } />
            <meta property="og:description" content={ desc } />
            <meta property="og:url" content={ baseUrl } />

            <meta property="twitter:card" content="summary"/>
            <meta property="twitter:title" content="MrMiss"/>
            <meta property="twitter:site" content="@mrmissx"/>
            <meta property="twitter:image" content={ baseUrl + imagePath } />
            <meta property="twitter:creator" content="@mrmissx" />
            <meta property="twitter:description" content={ desc }/>
        </Head>
    )
}
