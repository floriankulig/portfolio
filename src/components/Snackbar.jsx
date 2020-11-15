import React, { useEffect, useState } from "react";

export const Snackbar = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setOpen(true), 1);
    const timeout2 = setTimeout(() => setOpen(false), 4600);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className={open ? "snackbar open" : "snackbar"}>
      <p className="snackbar__message">{children}</p>
    </div>
  );
};
