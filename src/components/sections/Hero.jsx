import React from "react";
import { Button } from "../Button";

export const Hero = () => {
  return <>
    <h3 className="introduction fade-up">Hallo, ich bin</h3>
    <h1 className="fade-up">Florian Kulig.</h1>
    <h1 className="short-desc fade-up">Ich entwickle Projekte für das Web.</h1>
    <p className="desc fade-up">
      Ich bin ein Schüler aus Treuchtlingen, Bayern, der Spaß daran hat ausgezeichnete Websites, Apps und Alles, was dazwischen liegt, zu (designen und) entwickeln.
    </p>
    <Button className="desc fade-up" basic={true} url="mailto:florian.kulig@web.de">
      Lass uns loslegen
    </Button>
  </>;
};
