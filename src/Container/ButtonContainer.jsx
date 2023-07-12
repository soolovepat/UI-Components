import React from "react";
import UiBox from "./UiBox";
import { StBox, StButton } from "../styles/ButtonStyle";
import Button from "../components/Button";
import { ChevronRight, Bell } from "react-bootstrap-icons";

const ButtonContainer = () => {
  return (
    <>
      <UiBox title={"Primary Button"}>
        <StBox>
          <Button
            onClick={() => alert("알림이 설정되었습니다")}
            size={"large"}
            btn_style={"primary"}
          >
            Large Primary Button <ChevronRight color="" size={12} />
          </Button>
          <Button size={"medium"} btn_style={"primary"}>
            Medium
          </Button>
          <Button size={"small"} btn_style={"primary"}>
            Small
          </Button>
        </StBox>
      </UiBox>
      <UiBox title={"Secondary Button"}>
        <StBox>
          <Button
            onClick={() => prompt("암호를 입력해주세요")}
            size={"large"}
            btn_style={"secondary"}
          >
            Large Negative Button <Bell color="" size={14} />
          </Button>
          <Button size={"medium"} btn_style={"secondary"}>
            Medium
          </Button>
          <Button size={"small"} btn_style={"secondary"}>
            Small
          </Button>
        </StBox>
      </UiBox>
    </>
  );
};

export default ButtonContainer;
