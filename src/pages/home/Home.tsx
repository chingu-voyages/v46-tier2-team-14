import Hero from "./hero/Hero";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* TODO: component for under 30mins recipes here */}
    </main>
  );
}
