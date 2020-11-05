import React, { useState, useEffect } from "react";
import ScrollOut from "scroll-out";
import "./scss/App.scss";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  useEffect(() => {
    ScrollOut({
      once: true,
      threshold: 0.5,
    });
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content />
      {/*<Footer /> */}
    </>
  );
};
