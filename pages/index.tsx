import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
// components
import FeaturedMovies from '../Component/Featured_Comp/FeaturedMovies'
import Header from '../Component/Header_Comp/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ztreminx!</title>
        <meta name="movie streaming" content="watch movie for free and get killed afterwards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FeaturedMovies />
    </div>
  )
}

export default Home
