import styles from "./button.module.css";

export default function Button({
  children,
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
