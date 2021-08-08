import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>

  )
}

export default MyApp
