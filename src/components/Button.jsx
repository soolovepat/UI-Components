import React from "react";
import { StButton, StBox } from "../styles/ButtonStyle";
import { ChevronRight } from "react-bootstrap-icons";

const Button = () => {
  return (
    <StBox>
      <h1>Button</h1>
      <StButton borderColor="#55efc4" backgroundColor="#55efc4">
        <button className="large-button">
          Large Primary Button <ChevronRight color="" size={12} />
        </button>
        <button className="medium-button">Medium</button>
        <button className="small-button">Small</button>
      </StButton>
      <StButton borderColor="#fab1a0" backgroundColor="#fab1a0" color="#d63031">
        <button className="large-button">
          Large Negative Button <ChevronRight color="" size={12} />
        </button>
        <button className="medium-button">Medium</button>
        <button className="small-button">Small</button>
      </StButton>
    </StBox>
  );
};

export default Button;
