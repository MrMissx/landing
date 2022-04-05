import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import NextNProgress from "nextjs-progressbar";

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faMoon } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faTwitter,
    faLinkedin,
    faInstagram,
    faTelegram
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faGithub, faTwitter, faLinkedin, faInstagram, faTelegram, faAngleUp, faMoon)


function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <NextNProgress height={4} options={{ showSpinner: false }}/>
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
            }}>
                <Component {...pageProps} />
            </motion.div>
        </ThemeProvider>
    )
}
export default MyApp
