import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

import useTheme from "../../hooks/useTheme";
import styles from "./theme-toggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.button}
      aria-label={theme}
      aria-live="polite"
      title="toggles light and dark mode"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <BsMoonStarsFill aria-hidden size={24} />
      ) : (
        <BsSunFill aria-hidden size={24} />
      )}
    </button>
  );
}
