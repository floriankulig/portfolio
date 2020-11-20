import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Coder } from "../../images/coder.svg";
import { Skills } from "../Skills";

export const About = () => {
  const { t, i18n } = useTranslation("common");

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
        <Coder />
      </div>
    </>
  );
};
