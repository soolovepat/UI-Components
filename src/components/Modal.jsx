import React, { useState } from "react";
import { StButton } from "../styles/ButtonStyle";
import ModalWindow from "./Modal/ModalWindow";
import MiniModal from "./Modal/MiniModal";
import UiBox from "../Container/UiBox";
import Button from "./Button";
import ModalPotal from "../Potal";

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
        <Button
          size={"large"}
          btn_style={"primary"}
          onClick={openModalHandler}
          icon={"off"}
        >
          open modal
        </Button>
        <Button
          size={"large"}
          btn_style={"primary"}
          onClick={openMiniModalHandler}
          icon={"off"}
        >
          open modal
        </Button>
      </UiBox>
      <ModalPotal>
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
      </ModalPotal>
    </>
  );
};

export default Modal;
