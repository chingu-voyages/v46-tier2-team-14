import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
