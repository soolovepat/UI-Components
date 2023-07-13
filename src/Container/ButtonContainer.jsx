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
            large primary button <ChevronRight color="" size={12} />
          </Button>
          <Button size={"medium"} btn_style={"primary"}>
            medium
          </Button>
          <Button size={"small"} btn_style={"primary"}>
            small
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
            large secondary button <Bell color="" size={14} />
          </Button>
          <Button size={"medium"} btn_style={"secondary"}>
            medium
          </Button>
          <Button size={"small"} btn_style={"secondary"}>
            small
          </Button>
        </StBox>
      </UiBox>
    </>
  );
};

export default ButtonContainer;
