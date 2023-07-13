import React from "react";
import { StButton, StBox } from "../styles/ButtonStyle";

import { blueColor, pinkColor, grayColor } from "../assets/colors";

const Button = ({ children, size, btn_style, icon, ...props }) => {
  const sizeHandler = (size) => {
    switch (size) {
      case "large":
        return { width: "240px", height: "50px" };
      case "medium":
        return { width: "130px", height: "45px" };
      case "small":
        return { width: "100px", height: "40px" };
      case "short":
        return { width: "50px", height: "50px" };
      default:
        return "";
    }
  };

  const iconHandler = (icon) => {
    switch (icon) {
      case "on":
        return "space-between";
      case "off":
        return "center";
    }
  };

  switch (btn_style) {
    case "primary":
      return (
        <PrimaryButton
          {...props}
          style={sizeHandler(size)}
          justify_content={iconHandler(icon)}
        >
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton
          {...props}
          style={sizeHandler(size)}
          justify_content={iconHandler(icon)}
        >
          {children}
        </SecondaryButton>
      );
    case "icon":
      return (
        <IconButton {...props} style={sizeHandler(size)}>
          {children}
        </IconButton>
      );
    default:
      return (
        <StButton
          {...props}
          style={sizeHandler(size)}
          justify_content={iconHandler(icon)}
        >
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
      justify_content={props.justify_content}
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
      $font_color={grayColor[3]}
      $hover_font_color={grayColor[2]}
      justify_content={props.justify_content}
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
