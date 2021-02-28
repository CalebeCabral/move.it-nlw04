import { createContext, useState, ReactNode, useEffect } from "react";

import Cookies from "js-cookie";

import challenges from "../../challenges.json";

import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExp: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  prevLevelExp: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExp: number;
  challengesCompleted: number;
  prevLevelExp: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [prevLevelExp, setPrevLevelExp] = useState(rest.prevLevelExp ?? 0);

  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2) + prevLevelExp;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", level.toString());
    Cookies.set("currentExp", currentExp.toString());
    Cookies.set("challengesCompleted", challengesCompleted.toString());
    Cookies.set("prevLevelExp", prevLevelExp.toString());
  }, [level, currentExp, challengesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted" && !document.hasFocus()) {
      new Notification("🔥 Novo Desafio!", {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExp = currentExp + amount;

    if (finalExp >= experienceToNextLevel) {
      setPrevLevelExp(experienceToNextLevel);
      levelUp();
    }

    setCurrentExp(finalExp);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExp,
        challengesCompleted,
        prevLevelExp,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}
