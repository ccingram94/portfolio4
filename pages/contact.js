import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div className={styles.buttonbar}>
            <Link href="/"><ArrowBackIosIcon fontSize="large" className={styles.icon}></ArrowBackIosIcon></Link>
            <h1 className={styles.title}> Contact </h1>
          </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
