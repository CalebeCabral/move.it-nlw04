import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExpBar.module.css";

export function ExpBar() {
  const { level, currentExp, prevLevelExp, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const realCurrentExp = currentExp - prevLevelExp;
  const realExperienceToNextLevel = experienceToNextLevel - prevLevelExp;

  const percentToNextLevel = Number(
    Math.round(realCurrentExp * 100) / realExperienceToNextLevel
  );

  return (
    <header className={styles.experienceBar}>
      <span>{prevLevelExp} xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentLevel}>Level {level}</span>

        {currentExp >= 10 && (
          <span
            className={styles.currentExperience}
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExp} px
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
