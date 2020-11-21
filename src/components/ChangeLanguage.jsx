import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import i18next from "i18next";
import { useOnClickOutside } from "../hooks"

export const ChangeLanguage = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setOpen(false));

  const handleClick = (newLang) => {
    i18next.changeLanguage(newLang);
    setOpen(false);
  };

  return (
    <div className={open ? "lang-changer open" : "lang-changer"} ref={ref}>
      <div className="lang-changer__cta">
        <span>{i18next.language}</span>
        <div className="lang-changer__cta-toggle-wrapper" onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}>
          <FaChevronDown />
        </div>
      </div>

      {open && (
        <ul className="lang-changer__options">
          <li
            onClick={() => handleClick("en")}
            onKeyDown={() => handleClick("en")}
            style={{ "animationDelay": "0.15s" }}
          >
            English
          </li>
          <li
            onClick={() => handleClick("de")}
            onKeyDown={() => handleClick("de")}
            style={{ "animationDelay": "0.25s" }}
          >
            Deutsch
          </li>
        </ul>
      )}
    </div>
  );
};
