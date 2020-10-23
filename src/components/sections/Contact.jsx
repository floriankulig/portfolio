import React, { useState } from "react";
import { copyToClipboard } from "../../helpers";
import { Button } from "../Button";
import { overlayDuration } from "../../constants"

export const Contact = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const handleEmailClick = () => {
        copyToClipboard("florian.kulig@web.de");
        setSnackbarOpen(true);
        //+ 500: basic slideIn/Out animation duration
        setTimeout(() => setSnackbarOpen(false), overlayDuration + 500)
        clearTimeout()
    };

    return (
        <>
            <p>
                Überzeugt vom Portfolio? Fragen zu mir? Egal, was es ist, mein Postfach
                steht Ihnen offen. Schreiben Sie eine Mail an{" "}
                <span
                    className="contact__mail"
                    onClick={() => handleEmailClick()}
                    onKeyDown={() => handleEmailClick()}
                >
                    florian.kulig@web.de
                </span>{" "}
                oder klicken Sie unten.
             </p>

            <a href="mailto:florian.kulig@web.de">
                <Button basic={true}>Hallo sagen</Button>
            </a>


            {snackbarOpen &&
                <div className="snackbar">
                    <p className="snackbar__message">Email in die Zwischenablage kopiert!</p>
                </div>}
        </>
    );
};
