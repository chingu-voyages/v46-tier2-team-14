import * as React from "react";

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [savedSearch, setSavedSearch] = React.useState<string[]>(() => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return defaultValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(savedSearch));
  }, [savedSearch, key]);

  return { savedSearch, setSavedSearch };
};
export default useLocalStorage;
