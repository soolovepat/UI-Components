import React from "react";
import { Overlay, ModalContainer, Modal } from "../../styles/ModalStyle";
import ICON from "../../assets/icons";
import Button from "../Button";
import { RightTopPosition } from "../../styles/ButtonStyle";

const MiniModal = ({ openMiniModalHandler }) => {
  return (
    <ModalContainer>
      <Overlay onClick={openMiniModalHandler} />
      <Modal>
        <p>
          닫기 버튼 1개가 있고,
          <br />
          외부 영역을 누르면 모달이 닫혀요.
        </p>
        <RightTopPosition>
          <Button
            onClick={openMiniModalHandler}
            size={"short"}
            btn_style={"primary"}
            icon={"off"}
          >
            <ICON.xLg />
          </Button>
        </RightTopPosition>
      </Modal>
    </ModalContainer>
  );
};

export default MiniModal;
