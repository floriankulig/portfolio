import React from "react";

export const Button = ({ children, basic = false }) => {
  return (
    <button className={basic ? "btn basic" : "btn"} tabIndex={0}>
      {children}
    </button>
  );
};
