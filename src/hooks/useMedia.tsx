import { useEffect, useState } from "react";

export default function useMedia(query: string) {
  const [state, setState] = useState(() => window.matchMedia(query).matches);
  const handleChange = (e: MediaQueryListEvent) => setState(e.matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [query]);

  return state;
}
