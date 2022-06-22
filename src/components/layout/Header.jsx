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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
      document.addEventListener("scroll", handleScroll);
    }

    return () => document.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={
        scrolled && scrollDir === "down" && !menuOpen
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
                    aria-label={`Go to ${url.slice(1)}-section`}
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
                    {/* <a href={t("resume.file")} target="_blank"> */}
                    <a href={"/"} target="_blank">
                      <Button disabled basic={false}>
                        {t("resume.name")}
                      </Button>
                    </a>
                  </li>
                )
              )}
          </ul>
          <div
            className={menuOpen ? "burger open" : "burger"}
            onClick={() => setMenuOpen((prev) => !prev)}
            onKeyDown={() => setMenuOpen((prev) => !prev)}
            aria-label="Open/Close Sidebar Nav"
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
