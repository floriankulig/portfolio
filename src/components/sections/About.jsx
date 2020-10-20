import React from "react";
import { ReactComponent as Coder } from "../../images/coder.svg"

export const About = () => {
  return (
    <>
      <div className="section__inner-desc">
        <p>Hallo, ich bin Flo, Schüler und Hobbyentwickler aus Treuchtlingen, Bayern.</p>
        <p>Mit Hilfe von modernen Web-Technologien gestalte ich Webseiten, Apps und alles, was dazu gehört. Das Ziel ist meistens gleich: Den Nutzern eine detailgetreue und performante Erfahrung bieten.</p>
        <p>Seit meinem Praktikum bei der Firma Alfmeier setze ich mich mit Software-Engineering auseinander und habe einige Projekte in die Tat umgesetzt. </p>
      </div>
      <div className="section__inner-svg">
        <Coder />
      </div>
    </>
  );
};
