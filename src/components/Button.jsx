import React from "react";
import { StButton, StBox } from "../styles/ButtonStyle";

import { blueColor, pinkColor, grayColor } from "../assets/colors";

const Button = ({ children, size, btn_style, ...props }) => {
  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return { width: "200px", height: "50px" };
      case "medium":
        return { width: "130px", height: "40px" };
      case "small":
        return { width: "100px", height: "30px" };
      default:
        return "";
    }
  };

  switch (btn_style) {
    case "primary":
      return (
        <PrimaryButton {...props} style={sizeHandler(size)}>
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton {...props} style={sizeHandler(size)}>
          {children}
        </SecondaryButton>
      );
    case "icon":
      return <IconButton {...props}>{children}</IconButton>;
    default:
      return (
        <StButton {...props} style={sizeHandler(size)}>
          {children}
        </StButton>
      );
  }
};

const PrimaryButton = ({ children, ...props }) => {
  return (
    <StButton
      {...props}
      $bg_color={blueColor[0]}
      $hover_bg_color={blueColor[2]}
      $font_color={grayColor[0]}
      $hover_font_color={blueColor[0]}
    >
      {children}
    </StButton>
  );
};

const SecondaryButton = ({ children, ...props }) => {
  return (
    <StButton
      {...props}
      $bg_color={pinkColor[0]}
      $hover_bg_color={pinkColor[1]}
      $font_color={grayColor[2]}
      $hover_font_color={grayColor[1]}
    >
      {children}
    </StButton>
  );
};

const IconButton = ({ children, ...props }) => {
  return (
    <StButton
      {...props}
      $bg_color={blueColor[0]}
      $hover_bg_color={blueColor[2]}
      $font_color={grayColor[1]}
      $hover_font_color={blueColor[0]}
    >
      {children}
    </StButton>
  );
};

export default Button;
