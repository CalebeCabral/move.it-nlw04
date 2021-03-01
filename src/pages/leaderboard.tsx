import Head from "next/head";
import React from "react";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ChallengesProviderProps } from "../utils/types";

import Layout from "../layout";

import styles from "../styles/pages/Leaderboard.module.css";

export default function Leaderboard(props: ChallengesProviderProps) {
  return (
    <ChallengesProvider>
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Move.it - Leaderboard</title>
          </Head>

          <h1>Leaderboard</h1>
        </div>
      </Layout>
    </ChallengesProvider>
  );
}
