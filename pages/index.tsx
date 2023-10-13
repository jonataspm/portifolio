import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProfileDiv from '../components/profile/profileDiv'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <base target="_blank"/>
        <title>Forms</title>
        <meta name="description" content="Alocate peoples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>     
        <div className={styles.left_side}>
          {/* <ProfileDiv/> */}
        </div> 

        <div className={styles.middle_side}>
          <Header/>
        </div>

        <div className={styles.right_side}>
          <p>home</p>
        </div>
        
      </main>
    </div>
  )
}

export default Home
