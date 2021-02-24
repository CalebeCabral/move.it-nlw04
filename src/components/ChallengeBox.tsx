import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const activeChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src={`icons/body.svg`} />
            <strong>Novo Desafio</strong>
            <p>
              Estique um de seus braços com a palma da mão virada para frente e
              puxe os dedos para cima por 10 segundos por mão.
            </p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengesNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Suba de nível completando os desafios
          </p>
        </div>
      )}
    </div>
  );
}
