import { styled } from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 500px;
  height: 300px;

  position: fixed;

  background-color: #fff;
  border-radius: 30px;
`;
