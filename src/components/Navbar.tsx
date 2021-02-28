import Link from "./ActiveLink";

import { HomeIcon } from "../icons/HomeIcon";
import { AwardIcon } from "../icons/AwardIcon";
import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.container}>
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
    </nav>
  );
}
