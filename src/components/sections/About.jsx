import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Coder } from "../../images/coder.svg";
import { Skills } from "../Skills";

export const About = () => {
  const { t } = useTranslation("common");

  const path = window.location;
  const shows = path.toString().indexOf("?") > 1;
  return (
    <>
      <div className="section__inner-desc">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")} </p>
        <p>{t("about.p4")}</p>
        <Skills />
      </div>
      <div className="section__inner-svg">
        {shows ? (
          <div className="section__inner-svg-wrapper">
            <img src={require("../../images/me.jpg")} alt="Me" />
            <div className="section__inner-svg-wrapper-overlay" />
          </div>
        ) : (
          <Coder />
        )}
      </div>
    </>
  );
};
