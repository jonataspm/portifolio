import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProfileDiv from '../components/profile/profileDiv'
import { Header } from '../components/header'
import ContainerDiv from '../components/container/style'

const Home: NextPage = () => {
  return (
    <ContainerDiv>
      <Head>
        <title>Forms</title>
        <meta name="description" content="Alocate peoples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>      
        <ProfileDiv/>
        <Header/>
      </main>

      
    </ContainerDiv>
  )
}

export default Home
