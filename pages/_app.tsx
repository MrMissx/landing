import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faTelegram 
} from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faTwitter, faLinkedin, faInstagram, faTelegram)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
