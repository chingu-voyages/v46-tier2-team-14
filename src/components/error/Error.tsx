/* eslint-disable react/require-default-props */
import { Link } from "react-router-dom";

import Button from "../button/Button";
import styles from "./error.module.css";

type Props = {
  title?: React.ReactNode;
  message?: React.ReactNode;
};

type TryAgainProps = Props & { onRetry: () => void };
export function TryAgain({
  title = "Oops!",
  message = "Something went wrong, try again",
  onRetry,
}: TryAgainProps) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <Button onClick={onRetry}>Try Again</Button>
    </section>
  );
}
export function GoHome({
  title = "Oops!",
  message = "Something went wrong, go home",
}: Props) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </section>
  );
}
