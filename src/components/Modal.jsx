import React, { useState } from "react";
import { StButton } from "../styles/ButtonStyle";
import ModalWindow from "./Modal/ModalWindow";
import MiniModal from "./Modal/MiniModal";
import UiBox from "../Container/UiBox";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMiniModal, setOpenMiniModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  const openMiniModalHandler = () => {
    setOpenMiniModal(!openMiniModal);
  };

  const confirmButton = () => {
    if (window.confirm("창이 닫힙니다.")) {
      setOpenModal(!openModal);
    }
  };

  return (
    <>
      <UiBox title={"Modal"}>
        <StButton backgroundColor="#55efc4">
          <button className="small-button" onClick={openModalHandler}>
            open modal
          </button>
        </StButton>

        <StButton
          borderColor="#fab1a0"
          backgroundColor="#fab1a0"
          color="#d63031"
        >
          <button className="large-button" onClick={openMiniModalHandler}>
            open modal
          </button>
        </StButton>
      </UiBox>
      {openModal
        ? openModal && (
            <ModalWindow
              openModalHandler={openModalHandler}
              confirmButton={confirmButton}
            />
          )
        : null}
      {openMiniModal
        ? openMiniModal && (
            <MiniModal openMiniModalHandler={openMiniModalHandler} />
          )
        : null}
    </>
  );
};

export default Modal;
