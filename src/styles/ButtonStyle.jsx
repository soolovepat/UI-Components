import { styled } from "styled-components";

export const StButton = styled.button`
  ${(props) => props.style}
  padding: 0 14px;

  display: flex;
  justify-content: ${(props) => props.justify_content};
  align-items: center;
  gap: 6px;

  border: 0;
  border-radius: 8px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  color: ${(props) => props.$font_color};
  background-color: ${(props) => props.$bg_color};

  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;

  &:hover {
    color: ${(props) => props.$hover_font_color};
    background-color: ${(props) => props.$hover_bg_color};
  }
  /* &:active {
    background-color: ${(props) =>
    props.backgroundColor === "#55efc4" ? "#00cca0e2" : "#f38d86"};
  }*/
`;

export const StBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
