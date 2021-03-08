import { GetServerSideProps } from "next";
import { getSession, providers } from "next-auth/client";
import Head from "next/head";

import { AuthButton } from "../components/AuthButton";

import styles from "../styles/pages/Login.module.css";

interface Provider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

export default function Login({ providers }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>move.it - Login</title>
      </Head>

      <div className={styles.login}>
        <img src="/logo-full.svg" alt="move.it" />
        <h1>Bem-vindo</h1>
        <p>Faça login para começar</p>
        {Object.values(providers).map((provider: Provider) => (
          <AuthButton key={provider.id} provider={provider.id} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    props: {
      session: null,
      providers: await providers(),
    },
  };
};
