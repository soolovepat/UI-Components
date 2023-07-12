import React from "react";
import { Overlay, ModalContainer, Modal } from "../../styles/ModalStyle";

const ModalWindow = ({ openModalHandler, confirmButton }) => {
  return (
    <ModalContainer>
      <Overlay />
      <Modal>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <button onClick={openModalHandler}>닫기</button>
        <button onClick={confirmButton}>확인</button>
      </Modal>
    </ModalContainer>
  );
};

export default ModalWindow;
