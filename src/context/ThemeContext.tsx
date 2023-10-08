import { createContext, useState, useEffect } from "react";

// types
type Theme = "light" | "dark";

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

const storageKey = "theme";

export const ThemeContext = createContext<ThemeContextState>(null!);
ThemeContext.displayName = "ThemeContext";

export function ThemeProvider(props: { children: React.ReactNode }) {
  // get OS/browser's preferred color scheme
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  const [theme, setTheme] = useState<Theme>(() => {
    // use localStorage value if available, otherwise use prefersDarkMode
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    return storedTheme || (prefersDarkMode ? "dark" : "light");
  });

  // update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem(storageKey, theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme: () =>
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark")),
  };

  return <ThemeContext.Provider value={value} {...props} />;
}
