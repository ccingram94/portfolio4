import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import Card from '@material-ui/core/Card'
import { motion, AnimatePresence } from 'framer-motion'

const useStyles = makeStyles({
    button: {
        /* backgroundImage: 'linear-gradient(45deg, #efc7d0, #aa4465)', */
        /* backgroundImage: 'linear-gradient(180deg, #efc7d0, #ff956e)', */
        backgroundColor: '#efc7d0',
        background: 'black',
        border: 0,
        borderRadius: 3,
        color: '#aa4465',
        height: 48,
        padding: '20px',
        margin: '20px',
    },
});

export default function Contact() {

  const classes = useStyles();
  const [isVisible, setVisible] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>ConstanceIngram.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.buttonbar}>
            <Link href="/"><ArrowBackIosIcon fontSize="large" className={styles.icon}></ArrowBackIosIcon></Link>
            <h1 className={styles.title}> Contact </h1>
          </div>
          <div className={styles.buttonbar}>
            <Link href="https://www.linkedin.com/in/constance-ingram-7aa067161/"><LinkedInIcon className={styles.icon} fontSize="large"></LinkedInIcon></Link>
            <Link href="https://github.com/ccingram94"><GitHubIcon className={styles.icon} fontSize="large"></GitHubIcon></Link>
            <EmailIcon className={styles.icon} fontSize="large" onClick={() => setVisible(!isVisible)}></EmailIcon>
          </div>
            <motion.div className={styles.modal}
              >
                  <AnimatePresence>
                      {isVisible && (
                          <motion.div
                              style={{
                                  borderRadius: 15,
                                  backgroundColor: "#fff",
                                  margin: 35,
                              }}
                              initial={{ opacity: 0, scale: 0.75 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0 }}
                          >
                            <Card>
                              <p style={{ margin: 40}}>Feel free to email me directly: </p>
                            </Card>
                          </motion.div>
                      )}
                  </AnimatePresence>
              </motion.div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
