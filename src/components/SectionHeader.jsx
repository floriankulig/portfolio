import React from "react";

export const SectionHeader = ({ children, number }) => {
  const sectionIndex = "0" + number + ".";

  return (
    <h2 className="section__title">
      <span className="section__title-idx">{sectionIndex}&nbsp;</span>{" "}
      {children}
    </h2>
  );
};
