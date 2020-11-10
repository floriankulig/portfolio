import React, { useState, useEffect } from "react";
import ScrollOut from "scroll-out";
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

  useEffect(() => {
    if (!loading) {
      ScrollOut({
        once: true,
        threshold: 0.4,
      });
    }
  }, [loading]);

  return loading ? (
    <Loading loading />
  ) : (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content />
      <Footer />
    </>
  );
};
