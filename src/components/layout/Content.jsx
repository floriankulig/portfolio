import React from "react";
import { About } from "../sections/About";
import { Hero } from "../sections/Hero";

export const Content = () => {
  return (
    <div className="container content">
      <main className="main-col">
        <section className="hero">
          <Hero />
        </section>
        <section className="about section">
          <h2 className="section__title">
            <span className="section__title-idx">01. </span>Über mich
          </h2>
          <About />
        </section>
      </main>
    </div>
  );
};
