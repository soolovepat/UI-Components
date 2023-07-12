import { styled } from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StModalWindow = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;

  border-radius: 30px;
`;
