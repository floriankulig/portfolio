import React, { useState } from "react";
import "./scss/App.scss";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content />
      {/*<Footer /> */}
    </>
  );
};
