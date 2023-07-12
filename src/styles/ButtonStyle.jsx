import { styled } from "styled-components";

export const StButton = styled.button`
  /*display: flex;
  gap: 10px;*/
  ${(props) => props.style}
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  width: ${(props) => props.width};

  color: ${(props) => props.$font_color};
  background-color: ${(props) => props.$bg_color};

  font-size: 14px;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.$hover_font_color};
    background-color: ${(props) => props.$hover_bg_color};
  }
  /* &:active {
    background-color: ${(props) =>
    props.backgroundColor === "#55efc4" ? "#00cca0e2" : "#f38d86"};
  }*/

  /*.large-button {
    height: 50px;
    width: 200px;
    
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
  }*/
`;

export const StBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
