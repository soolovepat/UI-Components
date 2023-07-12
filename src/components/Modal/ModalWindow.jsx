import React from "react";
import { ModalBackground, StModalWindow } from "../../styles/ModalWindowStyle";

const ModalWindow = ({ openModalHandler, confirmButton }) => {
  return (
    <ModalBackground>
      <StModalWindow>
        <p>
          닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
        </p>
        <button onClick={openModalHandler}>닫기</button>
        <button onClick={confirmButton}>확인</button>
      </StModalWindow>
    </ModalBackground>
  );
};

export default ModalWindow;
