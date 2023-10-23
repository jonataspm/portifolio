import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProfileDiv from '../components/profile/profileDiv'
import { Header } from '../components/header'
import MenuSideBar from '../components/menu'
import { useRef } from 'react'

const Home: NextPage = () => {

  const homeRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const knowledgesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.container}>
      <Head>
        <base target="_blank"/>
        <title>Portfolio</title>
        <meta name="description" content="Alocate peoples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>     
        <div className={styles.left_side}>
          <ProfileDiv/>
        </div> 

        <div className={styles.middle_side}>
          <Header innerRefs={{ homeRef, introductionRef, workRef, knowledgesRef, projectsRef, contactRef }} />
        </div>

        <div className={styles.right_side}>
          <MenuSideBar innerRefs={{ homeRef, introductionRef, workRef, knowledgesRef, projectsRef, contactRef }}/>
        </div>
        
      </main>
    </div>
  )
}

export default Home
