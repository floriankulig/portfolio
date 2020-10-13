import React from 'react'

export const Header = ({ menuOpen, setMenuOpen }) => {

    return (
        <header>
            <div className="container">
                <nav>
                    <h2 className="logo">Florian Kulig</h2>
                    <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                        <li className="nav-link"></li>
                        <li className="nav-link"></li>
                        <li className="nav-link"></li>
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
            </div>
        </header>
    )
}
