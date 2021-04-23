import React from "react";
import { Button } from "../Button";
import { email } from "../../constants";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <h3 className="introduction fade-up">{t("hero.greet")}</h3>
      <h1 className="fade-up">Florian Kulig.</h1>
      <h1 className="short-desc fade-up">{t("hero.shortDesc")}.</h1>
      <p className="desc fade-up">{t("hero.desc")}</p>
      <a href={`mailto:${email}`}>
        <Button className="cta fade-up" basic={true}>
          {t("hero.cta")}
        </Button>
      </a>
    </>
  );
};
