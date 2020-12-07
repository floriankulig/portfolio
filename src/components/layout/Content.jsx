import React, { useEffect } from "react";
import { SectionHeader } from "../SectionHeader";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { scrollAppearConfig } from "../../helpers";
import { useTranslation } from "react-i18next";

export const Content = ({ menuOpen }) => {
  useEffect(() => scrollAppearConfig(), []);
  const { t } = useTranslation("common");

  return (
    <div
      className={menuOpen ? "container content blurred" : "container content"}
    >
      <main className="main-col">
        <section className="hero">
          <Hero />
        </section>
        <section className="about section" id="about" data-scroll>
          <SectionHeader number={1}>{t("about.section-header")}</SectionHeader>
          <div className="section__inner">
            <About />
          </div>
        </section>
        <section className="projects section" id="projects" data-scroll>
          <SectionHeader number={2}>
            {t("projects.section-header")}
          </SectionHeader>
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
