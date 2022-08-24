import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

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

                {/* <!-- Google tag (gtag.js) --> */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TREXD7HF0H" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-TREXD7HF0H');
                `}
                </Script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}