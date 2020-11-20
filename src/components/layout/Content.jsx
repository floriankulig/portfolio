import React, { useEffect } from "react";
import { SectionHeader } from "../SectionHeader";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { scrollAppearConfig } from "../../helpers";
import { useTranslation } from "react-i18next";

export const Content = () => {
  useEffect(() => scrollAppearConfig(), []);
  const { t, i18n } = useTranslation("common");

  return (
    <div className="container content">
      <main className="main-col">
        <section className="hero">
          <Hero />
        </section>
        <section className="about section" id="about" data-scroll>
          <SectionHeader number={1}>{t("about.header")}</SectionHeader>
          <div className="section__inner">
            <About />
          </div>
        </section>
        <section className="projects section" id="projects" data-scroll>
          <SectionHeader number={2}>Meine Projekte</SectionHeader>
          <div className="section__inner">
            <Projects />
          </div>
        </section>
        <section className="contact section" id="contact" data-scroll>
          <SectionHeader number={3}>{t("contact.header")}</SectionHeader>
          <div className="section__inner">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
};
