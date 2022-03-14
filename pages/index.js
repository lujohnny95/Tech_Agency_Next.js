import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Connect</title>
        <meta name="description" content="Next gen tech agency" />
      </Head>
      <Intro />
    </div>
  )
}
