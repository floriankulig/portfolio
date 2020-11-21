import React, { useState } from "react";
import { createPortal } from "react-dom";
import { copyToClipboard } from "../../helpers";
import { Button } from "../Button";
import { Snackbar } from "../Snackbar";
import { email } from "../../constants";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const { t, i18n } = useTranslation("common");

  const handleEmailClick = () => {
    copyToClipboard(email);
    setSnackbarOpen(true);
    const timeout = setTimeout(() => setSnackbarOpen(false), 5000);
    return () => clearTimeout(timeout);
  };

  return (
    <>
      <p>
        {t("contact.p1")}{" "}
        <span
          className="contact__mail"
          onClick={() => handleEmailClick()}
          onKeyDown={() => handleEmailClick()}
          role="button"
          aria-label="Copy email address to clipboard"
        >
          {email}
        </span>{" "}
        {t("contact.p2")}
      </p>

      <a href={`mailto:${email}`}>
        <Button basic={true}>{t("contact.cta")}</Button>
      </a>

      {snackbarOpen &&
        createPortal(
          <Snackbar>{t("copyClipboard")}</Snackbar>,
          document.getElementById("overlay-entry")
        )}
    </>
  );
};
