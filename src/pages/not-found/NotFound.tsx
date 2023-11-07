import { GoHome } from "../../components/error/Error";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <GoHome
      title={
        <span aria-label="404" className={styles.span}>
          4🍽️4
        </span>
      }
      message="Oops! The page you are looking for does not exist :/"
    />
  );
}
