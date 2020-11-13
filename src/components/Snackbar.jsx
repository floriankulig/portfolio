import React from "react";

export const Snackbar = ({ children }) => {
  return (
    <div className="snackbar">
      <p className="snackbar__message">{children}</p>
    </div>
  );
};
