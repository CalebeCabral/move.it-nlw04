import Head from "next/head";
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>move.it - Login</title>
      </Head>
      <div>
        <img src="/bg-logo.png" />
      </div>

      <div className={styles.login}>
        <img src="/logo-full.svg" alt="move.it" />

        <h3>Bem-vindo</h3>
        <p>Faça login para começar</p>

        <button type="button">
          <img src="/github.svg" />
          <span>Github</span>
        </button>
      </div>
    </div>
  );
}
