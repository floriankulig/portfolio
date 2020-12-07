import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import { mode } from "./constants";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";
import { Loading } from "./components/layout/Loading";
import { ChangeLanguage } from "./components/ChangeLanguage";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 720) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = null;
    }, 5000);

    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return loading && mode !== "dev" ? (
    <Loading />
  ) : (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content menuOpen={menuOpen} />
      <div id="overlay-entry"></div>
      <Footer />
      <ChangeLanguage />
    </>
  );
};
