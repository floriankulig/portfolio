import { useState, useEffect } from "react";

export const useScrollDir = (initialDirection) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    let lastYOffset = window.pageYOffset;

    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setScrollDir(yOffset > lastYOffset ? "down" : "up");
      lastYOffset = yOffset > 0 ? yOffset : 0;
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll");
  }, [initialDirection]);

  return scrollDir;
};
