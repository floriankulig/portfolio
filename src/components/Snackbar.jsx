import React, { useEffect, useState } from "react";

export const Snackbar = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openTimeout = setTimeout(() => setOpen(true), 10);
    const closeTimeout = setTimeout(() => setOpen(false), 4600);
    return () => {
      clearTimeout(openTimeout);
      clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <div className={open ? "snackbar open" : "snackbar"}>
      <p className="snackbar__message">{children}</p>
    </div>
  );
};
