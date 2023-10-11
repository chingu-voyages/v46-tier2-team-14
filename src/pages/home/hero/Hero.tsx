import { BiSearch } from "react-icons/bi";

import styles from "./hero.module.css";

export default function Hero() {
  // header for main
  return (
    <header className={styles.hero}>
      {/* text */}
      <section className={styles.wrapper}>
        <h1 className={styles.title} aria-hidden>
          All your <span className={styles.highlight}>recipes</span> <br /> in
          one place
        </h1>
        <h1 className="sr-only">All your recipes in one place</h1>
        {/* button that looks like an input but opens a search modal */}
        <button
          type="button"
          className={styles.bait_input}
          aria-label="Open recipe search modal"
        >
          <BiSearch size={24} className={styles.icon} aria-hidden />
          <p className={styles.text}>Search recipes...</p>
        </button>
      </section>
      {/* image */}
      <img
        className={styles.image}
        src="https://em-content.zobj.net/source/telegram/358/hamburger_1f354.webp"
        alt="hamburger"
        width="300"
        height="300" /* explict sizes to prevent CLS */
        aria-hidden
      />
    </header>
  );
}
