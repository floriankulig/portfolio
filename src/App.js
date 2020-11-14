import React, { useState, useEffect } from "react";
import "./scss/App.scss";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";
import { Loading } from "./components/layout/Loading";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = null;
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content />
      <div id="overlay-entry"></div>
      <Footer />
    </>
  );
};
