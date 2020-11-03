import React, { useState, useEffect, useRef } from "react";
import { Button } from "../Button";
import { navLinks } from "../../constants";
import { ReactComponent as Logo } from "../../images/logo-header.svg";
import { useOnClickOutside, useScrollDir } from "../../hooks";

export const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDir = useScrollDir("down");

  const ref = useRef();
  useOnClickOutside(ref, () => setMenuOpen(false));

  const handleScroll = () => {
    setScrolled(window.pageYOffset >= 50);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={
        scrolled && scrollDir === "down"
          ? "scrolled up"
          : scrolled && scrollDir === "up"
          ? "scrolled down"
          : undefined
      }
      ref={ref}
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
