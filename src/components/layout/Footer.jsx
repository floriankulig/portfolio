import React from "react";
import { FaHeart } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="https://github.com/floriankulig/portfolio" rel="noopener noreferrer">
          Built with <FaHeart /> by Florian Kulig
        </a>
      </div>
    </footer>
  );
};
