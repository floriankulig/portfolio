import React from "react";

export const Button = ({ children, basic = false, disabled }) => {
  return (
    <button
      className={basic ? "btn basic" : "btn"}
      disabled={disabled}
      tabIndex={0}
    >
      {children}
    </button>
  );
};
