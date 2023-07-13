import { styled } from "styled-components";
import { grayColor, pinkColor } from "../assets/colors";

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

  input {
    padding: 0 24px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 50px;

    border: 0;
    outline: none;

    color: ${grayColor[0]};
    background-color: ${grayColor[2]};

    &::placeholder {
      color: ${grayColor[1]};
    }
  }

  ul {
    position: absolute;
    transform: translate(0, 114px);

    width: 240px;
    padding: 10px 0px;
    margin: 0;
    border-radius: 8px;

    font-size: 14px;
    font-weight: 600;

    background-color: ${pinkColor[0]};

    > li {
      list-style: none;
      margin: 10px 10px;
      padding: 10px;
      border-radius: 8px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${pinkColor[1]};
      }
    }
  }
`;
