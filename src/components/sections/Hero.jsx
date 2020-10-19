import React from "react";
import { Button } from "../Button";

export const Hero = () => {
  return (
    <>
      <h3 className="introduction fade-up">Hallo, ich bin</h3>
      <h1 className="fade-up">Florian Kulig.</h1>
      <h1 className="short-desc fade-up">Ich entwickle für das Web.</h1>
      <p className="desc fade-up">
        Ich bin ein Schüler aus Treuchtlingen, Bayern, der Spaß daran hat
        designbetonte Websites, Apps und alles, was dazu gehört, zu (designen
        und) entwickeln.
      </p>
      <a href="mailto:florian.kulig@web.de">
        <Button className="cta fade-up" basic={true}>
          In Kontakt treten
        </Button>
      </a>
    </>
  );
};
