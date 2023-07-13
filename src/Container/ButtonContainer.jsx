import React from "react";
import UiBox from "./UiBox";
import { VerticalContainer } from "../styles/ButtonStyle";
import Button from "../components/Button";
import { ChevronRight, Bell } from "react-bootstrap-icons";

const ButtonContainer = () => {
  return (
    <>
      <UiBox title={"Primary Button"}>
        <VerticalContainer>
          <Button
            onClick={() => alert("알림이 설정되었습니다")}
            size={"large"}
            btn_style={"primary"}
            icon={"on"}
          >
            large primary button <ChevronRight color="" size={12} />
          </Button>
          <Button size={"medium"} btn_style={"primary"} icon={"off"}>
            medium
          </Button>
          <Button size={"small"} btn_style={"primary"} icon={"off"}>
            small
          </Button>
        </VerticalContainer>
      </UiBox>
      <UiBox title={"Secondary Button"}>
        <VerticalContainer>
          <Button
            onClick={() => prompt("암호를 입력해주세요")}
            size={"large"}
            btn_style={"secondary"}
            icon={"on"}
          >
            large secondary button <Bell color="" size={14} />
          </Button>
          <Button size={"medium"} btn_style={"secondary"} icon={"off"}>
            medium
          </Button>
          <Button size={"small"} btn_style={"secondary"} icon={"off"}>
            small
          </Button>
        </VerticalContainer>
      </UiBox>
    </>
  );
};

export default ButtonContainer;
