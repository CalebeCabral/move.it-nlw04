import Head from "next/head";
import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ChallengesProviderProps } from "../utils/types/types";

import Layout from "../layout";

import { ExpBar } from "../components/ExpBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home(props: ChallengesProviderProps) {
  const { level, currentExp, challengesCompleted, prevLevelExp } = props;

  return (
    <ChallengesProvider
      level={level}
      currentExp={currentExp}
      challengesCompleted={challengesCompleted}
      prevLevelExp={prevLevelExp}
    >
      <Layout>
        <div className={styles.container}>
          <Head>
            <title>Move.it - Home</title>
          </Head>

          <ExpBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </Layout>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExp,
    challengesCompleted,
    prevLevelExp,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level) || 1,
      currentExp: Number(currentExp) || 0,
      challengesCompleted: Number(challengesCompleted) || 0,
      prevLevelExp: Number(prevLevelExp) || 0,
    },
  };
};
