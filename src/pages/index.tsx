import Head from 'next/head';

import { ExpBar } from '../components/ExpBar';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <ExpBar />

      <section>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}
