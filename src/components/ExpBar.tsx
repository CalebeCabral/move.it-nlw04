import styles from '../styles/components/ExpBar.module.css';

export function ExpBar() {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />

        <span className={styles.currentExperience} style={{ left: '50%' }}>
          600 px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}
