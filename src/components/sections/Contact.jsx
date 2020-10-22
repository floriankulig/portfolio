import React from "react";
import { Button } from "../Button";

export const Contact = () => {
    return (
        <>
            <p>Überzeugt vom Portfolio? Fragen zu mir? Egal, was es ist, mein Postfach steht Ihnen offen. Schreiben Sie eine Mail an <span className="contact__mail">florian.kulig@web.de</span> oder klicken Sie
            unten.
            </p>

            <a href="mailto:florian.kulig@web.de">
                <Button basic={true}>Hallo sagen</Button>
            </a>
        </>
    );
};
