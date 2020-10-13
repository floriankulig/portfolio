import React from "react";
import { Button } from "../Button";

const navLinks = [
    { name: "Über Mich", url: "/#about" },
    { name: "Projekte", url: "/#projects" },
    { name: "Kontakt", url: "/#contact" },
    { name: "Lebenslauf", url: "/resume.pdf" }
]

export const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header>
            <div className="container">
                <nav>
                    <h2 className="logo">Florian Kulig</h2>
                    <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                        {navLinks &&
                            navLinks.map(({ url, name }, i) =>
                                name === "Lebenslauf" ? (
                                    <li className="nav-link">
                                        <Button
                                            basic={false}
                                            style={{ animationDelay: `${(navLinks.length + 1) * 50}ms` }}
                                        >
                                            {name}
                                        </Button>
                                    </li>

                                ) : (
                                        <li
                                            className="nav-link"
                                            style={{
                                                animationDelay: `${i * 50}ms`
                                            }}>
                                            0{i + 1}. <a href={url}>{name}</a>
                                        </li>
                                    )
                            )}
                        <li></li>
                    </ul>
                    <div
                        className={menuOpen ? "burger open" : "burger"}
                        onClick={() => setMenuOpen(!menuOpen)}
                        onKeyDown={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                        <div className="burger-line"></div>
                    </div>
                </nav>
            </div >
        </header >
    );
};
