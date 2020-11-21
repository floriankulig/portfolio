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

// from https://usehooks.com/useOnClickOutside/
export const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements

        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);

      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);

        document.removeEventListener("touchstart", listener);
      };
    },

    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.

    [ref, handler]
  );
};

export const useProjects = (lang) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let newProjects;
    if (lang) newProjects = require(`../languages/projects_${lang}.json`);

    setProjects(newProjects.projects);
    console.log(projects);
  }, [lang, projects]);

  return projects;
};
