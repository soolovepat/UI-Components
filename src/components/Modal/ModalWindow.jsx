import React from "react";
import { Overlay, ModalContainer, Modal } from "../../styles/ModalStyle";
import Button from "../Button";
import { VerticalContainer } from "../../styles/ButtonStyle";

const ModalWindow = ({ openModalHandler, confirmButton }) => {
  return (
    <ModalContainer>
      <Overlay />
      <Modal>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <VerticalContainer>
          <Button
            onClick={openModalHandler}
            size={"medium"}
            btn_style={"secondary"}
            icon={"off"}
          >
            close
          </Button>
          <Button
            onClick={confirmButton}
            size={"medium"}
            btn_style={"secondary"}
            icon={"off"}
          >
            check
          </Button>
        </VerticalContainer>
      </Modal>
    </ModalContainer>
  );
};

export default ModalWindow;
