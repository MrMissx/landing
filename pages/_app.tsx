import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
    const [ showButton, setJumpButton] = useState(false)
    const jumpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300){
                setJumpButton(true)
            } else {
                setJumpButton(false)
            }
        })
    }, [])

    return (
        <ThemeProvider attribute="class">
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
            }}>
                <Component {...pageProps} />
                {showButton && (
                    <button
                        onClick={jumpToTop}
                        className="fixed bottom-0 right-0 rounded-full h-8 w-8 flex items-center justify-center bg-blue-300 dark:bg-neutral-600 mb-5 mr-5"
                    >
                        <FontAwesomeIcon icon={['fas', 'angle-up']} />
                    </button>
                )}
            </motion.div>
        </ThemeProvider>
    )
}
export default MyApp
