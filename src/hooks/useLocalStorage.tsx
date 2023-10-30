import * as React from "react";

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = React.useState(() => {
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return defaultValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
export default useLocalStorage;
