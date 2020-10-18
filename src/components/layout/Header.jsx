import React from "react";
import { Button } from "../Button";
import { baseUrl } from "../../helpers";

const navLinks = [
    { name: "Über Mich", url: "/#about" },
    { name: "Projekte", url: "/#projects" },
    { name: "Kontakt", url: "/#contact" },
    { name: "Lebenslauf", url: "/resume.pdf" },
];

export const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header>
            <div className="container">
                <nav>
                    <h2 className="logo">Florian Kulig</h2>
                    <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                        {navLinks &&
                            navLinks.map(({ url, name }, i) =>
                                name !== "Lebenslauf" ? (
                                    <li
                                        className="nav-link"
                                        style={{ animationDelay: `${i / 9 + 0.2}s` }}
                                    >
                                        0{i + 1}. <a href={baseUrl + url}>{name}</a>
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
                        onClick={() => setMenuOpen(prev => !prev)}
                        onKeyDown={() => setMenuOpen(prev => !prev)}
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
