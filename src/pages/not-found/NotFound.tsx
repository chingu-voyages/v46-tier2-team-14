import { Link } from "react-router-dom";

import Button from "../../components/button/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 aria-label="404" className={styles.title}>
        4🍽️4
      </h1>
      <p className={styles.subtitle}>
        Oops! the page you are looking for does not exist :/
      </p>
      <Link to="/" aria-label="back to home">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
}
