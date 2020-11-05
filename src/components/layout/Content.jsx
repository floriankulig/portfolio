import React from "react";
import { SectionHeader } from "../SectionHeader";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";

export const Content = () => {
  return (
    <div className="container content">
      <main className="main-col">
        <section className="hero">
          <Hero />
        </section>
        <section className="about section" id="about">
          <SectionHeader number={1}>Über mich</SectionHeader>
          <div className="section__inner">
            <About />
          </div>
        </section>
        <section className="projects section" id="projects">
          <SectionHeader number={2}>Meine Projekte</SectionHeader>
          <div className="section__inner">
            <Projects />
          </div>
        </section>
        <section className="contact section" id="contact">
          <SectionHeader number={3}>Kontakt</SectionHeader>
          <div className="section__inner">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
};
