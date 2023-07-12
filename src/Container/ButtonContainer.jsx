import React from "react";
import UiBox from "./UiBox";
import { StBox, StButton } from "../styles/ButtonStyle";

const ButtonContainer = () => {
  return (
    <UiBox title={"Button"}>
      <StBox>
        {/* <StButton
          borderColor="#55efc4"
          backgroundColor="#55efc4"
          width={sizeHandler(size)}
        >
          <button
            className="large-button"
            onClick={() => alert("알림이 설정되었습니다")}
          >
            Large Primary Button <ChevronRight color="" size={12} />
          </button>
          <button className="medium-button">Medium</button>
          <button className="small-button">Small</button>
        </StButton> */}
        {/* <StButton
      borderColor="#fab1a0"
      backgroundColor="#fab1a0"
      color="#d63031"
    >
      <button
        className="large-button"
        onClick={() => prompt("암호를 입력해주세요")}
      >
        Large Negative Button <Bell color="" size={14} />
      </button>
      <button className="medium-button">Medium</button>
      <button className="small-button">Small</button>
    </StButton> */}
      </StBox>
    </UiBox>
  );
};

export default ButtonContainer;
