import { styled } from "styled-components";

export const UiBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: 30px;
  border-radius: 20px;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);

  background-color: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.04);
    transform: translateY(-10px);
  }
`;
