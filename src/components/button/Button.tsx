import styles from "./button.module.css";

export default function Button({ children }: React.PropsWithChildren) {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
}
