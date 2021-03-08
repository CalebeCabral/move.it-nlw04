import { MouseEvent } from "react";

import { signIn } from "next-auth/client";

import { capitalize } from "../utils/helpers/utils";

import styles from "../styles/components/AuthButton.module.css";

interface AuthButtonProps {
  provider: string;
}

export function AuthButton({ provider }: AuthButtonProps) {
  const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    signIn(provider);
  };

  return (
    <button className={styles.authButton} type="button" onClick={handleLogin}>
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

export function LogoutButton() {
  const handleLogout = (e: MouseEvent) => {
    e.preventDefault();
    signIn();
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
}
