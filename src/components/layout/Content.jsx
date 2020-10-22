import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";

export const Content = () => {
  return (
    <div className="container content">
      <main className="main-col">
        <section className="hero">
          <Hero />
        </section>
        <section className="about section">
          <SectionHeader number={1}>Über mich</SectionHeader>
          <div className="section__inner">
            <About />
          </div>
        </section>
        <section className="contact section">
          <SectionHeader number={3}>Kontakt</SectionHeader>
          <div className="section__inner">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
};
