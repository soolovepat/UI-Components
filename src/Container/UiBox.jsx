import React from "react";
import { UiBoxStyle } from "../styles/UiBoxStyle";

const UiBox = ({ children, title }) => {
  return (
    <UiBoxStyle>
      <h2>{title}</h2>
      {children}
    </UiBoxStyle>
  );
};

export default UiBox;
