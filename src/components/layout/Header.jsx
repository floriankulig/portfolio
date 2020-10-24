import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { navLinks } from "../../constants";
import { ReactComponent as Logo } from "../../images/logo-header.svg";
import { useScrollDir } from "../../hooks";

export const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDir = useScrollDir("down");

  const handleScroll = () => {
    setScrolled(window.pageYOffset >= 50);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        scrolled && scrollDir === "down"
          ? "scrolled down"
          : scrolled && scrollDir === "up"
          ? "scrolled up"
          : undefined
      }
    >
      <div className="container">
        <nav>
          <div className="logo">
            <Logo />
          </div>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            {navLinks &&
              navLinks.map(({ url, name }, i) =>
                name !== "Lebenslauf" ? (
                  <li
                    className="nav-link"
                    style={{ animationDelay: `${i / 9 + 0.3}s` }}
                    key={name}
                  >
                    <span className="link-idx">0{i + 1}. </span>
                    <a href={url}>{name}</a>
                  </li>
                ) : (
                  <li
                    className="nav-link"
                    style={{ animationDelay: `${i / 9 + 0.3}s` }}
                    key={name}
                  >
                    <Button basic={false}>{name}</Button>
                  </li>
                )
              )}
            <li></li>
          </ul>
          <div
            className={menuOpen ? "burger open" : "burger"}
            onClick={() => setMenuOpen((prev) => !prev)}
            onKeyDown={() => setMenuOpen((prev) => !prev)}
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};
