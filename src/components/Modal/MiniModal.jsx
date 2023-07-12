import React from "react";
import { Overlay, ModalContainer, Modal } from "../../styles/ModalStyle";

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
        <button onClick={openMiniModalHandler}>X</button>
      </Modal>
    </ModalContainer>
  );
};

export default MiniModal;
