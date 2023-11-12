import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

import ThemeToggle from "../../theme-toggle/ThemeToggle";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <Link to="/" className={styles.branding}>
        <h1>
          <span className="aria-hidden">📖</span> swad.
        </h1>
      </Link>
      <div className={styles.icons}>
        <a
          href="https://github.com/chingu-voyages/v46-tier2-team-14"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        >
          <RxGithubLogo aria-hidden size={24} />
          <span className="sr-only">Github</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
