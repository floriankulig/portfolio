import React from "react";
import { Button } from "../Button";
import { baseUrl, navLinks } from "../../helpers";
import { ReactComponent as Logo } from "../../images/logo-header.svg";

export const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header>
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
                    style={{ animationDelay: `${i / 9 + 0.2}s` }}
                  >
                    <span className="link-idx">0{i + 1}. </span>
                    <a href={baseUrl + url}>{name}</a>
                  </li>
                ) : (
                  <li
                    className="nav-link"
                    style={{ animationDelay: `${i / 9 + 0.2}s` }}
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
