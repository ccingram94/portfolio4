import '../styles/globals.css'
import { motion } from 'framer-motion'
//import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    //<Layout>
      <motion.div id="background" 
      initial={{ opacity: 0}} 
      animate={{ opacity: 1 }} 
      exit={{ oapcity: 0 }}
      transition={{ duration: 0.2}}>
        <Component {...pageProps} />
      </motion.div>
    //</Layout>

  )
}

export default MyApp
