import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Resume.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Card from '@material-ui/core/Card'
import resume from '../public/resume.jpg'

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

export default function Resume() {

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
            <h1 className={styles.title}> Resume </h1>
          </div>
          <div className={styles.pagecard}>
              <Card variant="outlined" className={styles.innercard}>
                  <Image src={resume}></Image>
              </Card>
          </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}
