import React, { useState, useEffect, useRef } from "react";
import { Button } from "../Button";
import { navLinks } from "../../constants";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { useOnClickOutside, useScrollDir } from "../../hooks";
import { useTranslation } from "react-i18next";

export const Header = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const scrollDir = useScrollDir("down");
  const { t } = useTranslation("common");

  const ref = useRef();
  useOnClickOutside(ref, () => setMenuOpen(false));

  const handleScroll = () => {
    setScrolled(window.pageYOffset >= 50);
  };

  const handleLinkClick = (linkUrl) => {
    setMenuOpen(false);
    const timeout = setTimeout(
      () =>
        document.querySelector(linkUrl).scrollIntoView({ behavior: "smooth" }),
      300
    );

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = null);

    if (!menuOpen) {
      document.addEventListener("scroll", handleScroll);
    }

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
          <a className="logo" href="./" aria-label="Reload Page">
            <Logo />
          </a>
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            {navLinks &&
              navLinks.map(({ url, name }, i) =>
                name !== "Lebenslauf" ? (
                  <li
                    className="nav-link"
                    style={{ animationDelay: `${i / 9 + 0.3}s` }}
                    key={name}
                    onClick={() => handleLinkClick(url)}
                    onKeyDown={() => handleLinkClick(url)}
                  >
                    <span className="link-idx">0{i + 1}. </span>
                    {t(`${url.slice(1)}.header`)}
                  </li>
                ) : (
                  <li
                    className="nav-link"
                    style={{ animationDelay: `${i / 9 + 0.3}s` }}
                    key={name}
                  >
                    <a href="./resume.pdf">
                      <Button basic={false}>{t("resume.name")}</Button>
                    </a>
                  </li>
                )
              )}
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
