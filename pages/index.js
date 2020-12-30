import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imajinr - We turn your product ideas into reality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          We Turn Your Product Ideas Into Reality
        </h1>

        <div style={{ margin: '0 auto', width: 968 }}>
          <div style={{ marginTop: '2rem', fontSize: '1.5rem' }}>
            We are a team consists of experienced engineers in building scalable systems and applications. We've been working with clients and companies from Indonesia and over the seas.
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
