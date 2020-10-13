import React from "react";
import "./scss/App.scss";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { Footer } from "./components/layout/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};
