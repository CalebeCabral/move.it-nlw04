import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExpBar.module.css';

export function ExpBar() {
  const { currentExp, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel =
    Math.round(currentExp * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExp} px
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
