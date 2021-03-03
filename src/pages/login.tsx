import Head from "next/head";
import styles from "../styles/pages/Login.module.css";
import { capitalize } from "../utils/helpers/utils";

interface AuthButtonProps {
  provider: string;
}

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>move.it - Login</title>
      </Head>

      <div className={styles.login}>
        <img src="/logo-full.svg" alt="move.it" />

        <h1>Bem-vindo</h1>
        <p>Faça login para começar</p>

        <AuthButton provider="github" />
        <AuthButton provider="google" />
      </div>
    </div>
  );
}

export function AuthButton({ provider }: AuthButtonProps) {
  return (
    <button type="button">
      <div>
        <img
          className={styles.providerImage}
          src={`./icons/providers/${provider}.svg`}
          alt={capitalize(provider)}
        />
        <p>Continuar com {capitalize(provider)}</p>
      </div>
      <span>
        <img
          src="/icons/arrow-right.svg"
          alt={`Continuar com ${capitalize(provider)}`}
        />
      </span>
    </button>
  );
}
