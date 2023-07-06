import { styled } from "styled-components";

export const StButton = styled.div`
  display: flex;
  gap: 10px;

  button {
    letter-spacing: 0px;
    display: flex;
    gap: 6px;

    border: 0;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
  }

  button:active {
    background-color: #ff2929;
  }

  .large-button {
    height: 50px;
    width: 200px;
    font-weight: 600;
    border: 3px solid ${(props) => props.borderColor};
    background-color: #fff;
  }

  .medium-button {
    height: 45px;
    width: 130px;
  }

  .small-button {
    height: 40px;
    width: 100px;
  }
`;

export const StBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
