import { useEffect, useState } from "react";

export default function useImageLoaded(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  useEffect(() => {
    const img = new Image();
    img.addEventListener("load", handleLoad);
    img.src = src;

    return () => {
      img.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return isLoaded;
}
