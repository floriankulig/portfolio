import React, { useState } from "react";
import { copyToClipboard } from "../../helpers";
import { Button } from "../Button";
import { email } from "../../constants";

export const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleEmailClick = () => {
    copyToClipboard(email);
    setSnackbarOpen(true);
    const timeout = setTimeout(() => setSnackbarOpen(false), 5000);
    return () => clearTimeout(timeout);
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
          {email}
        </span>{" "}
        oder klicken Sie unten.
      </p>

      <a href={`mailto:${email}`}>
        <Button basic={true}>Hallo sagen</Button>
      </a>

      <div className={snackbarOpen ? "snackbar open" : "snackbar"}>
        <p className="snackbar__message">
          Email in die Zwischenablage kopiert!
        </p>
      </div>
    </>
  );
};
