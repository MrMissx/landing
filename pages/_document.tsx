import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    const desc: string = "Hii... I'm MrMiss. Welcome to my personal site :)."
    const baseUrl: string = "https://mrmiss.my.id"
    const imagePath: string = "/profile.jpg"

    return (
        <Html lang="en">
            <Head>
                <meta name="image" content={baseUrl + imagePath} />
                <link rel="icon" href={baseUrl + "/favicon.ico"} />
                <meta name="description" content={desc} />
                <meta name="keywords"
                    content="MrMiss, Mr_Miss, MrMissx, Gaung Ramadhan Bagaswara, Gaung Ramadhan, Gaung" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="Mr.Miss" />
                <meta property="og:image" content={baseUrl + imagePath} />
                <meta property="og:description" content={desc} />
                <meta property="og:url" content={baseUrl} />

                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content="MrMiss" />
                <meta property="twitter:site" content="@mrmissx" />
                <meta property="twitter:image" content={baseUrl + imagePath} />
                <meta property="twitter:creator" content="@mrmissx" />
                <meta property="twitter:description" content={desc} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}