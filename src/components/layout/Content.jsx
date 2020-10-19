import React from "react";
import { SectionHeader } from "../SectionHeader";
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
          <SectionHeader number={1}>Über mich</SectionHeader>
          <About />
        </section>
      </main>
    </div>
  );
};
