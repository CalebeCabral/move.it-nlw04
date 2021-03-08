import Link from "./ActiveLink";

import { signOut } from "next-auth/client";

import { HomeIcon } from "../icons/HomeIcon";
import { AwardIcon } from "../icons/AwardIcon";

import { AuthButton, LogoutButton } from "../components/AuthButton";

import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <img src="./logo.svg" alt="Move.it" />
      </div>
      <div className={styles.links}>
        <Link href="/" activeClassName={styles.selected}>
          <a>
            <HomeIcon />
          </a>
        </Link>
        <Link href="/leaderboard" activeClassName={styles.selected}>
          <a>
            <AwardIcon />
          </a>
        </Link>
      </div>
      <AuthButton provider="github" />
      <LogoutButton />
    </nav>
  );
}
