import { styled } from "styled-components";
import { grayColor } from "../assets/colors";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 350px;
  height: 260px;
  padding: 40px 60px;

  position: fixed;

  background-color: ${grayColor[0]};
  border-radius: 30px;

  > p {
    margin-top: 74px;
    text-align: center;
    line-height: 34px;
    font-size: 18px;
    font-weight: 700;
    color: ${grayColor[2]};
  }
`;
