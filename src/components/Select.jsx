import React, { useState } from "react";
import UiBox from "../Container/UiBox";
import { CaretDownFill } from "react-bootstrap-icons";
import Button from "./Button";

const Select = () => {
  const OPTIONS = [
    { value: "사과" },
    { value: "바나나" },
    { value: "오렌지" },
    { value: "키위" },
    { value: "블루베리" },
  ];
  const [selectList, setSelectList] = useState(OPTIONS[0].value);
  const [optionList, setOptionList] = useState(false);

  const onClickSelectBox = () => {
    setOptionList(!optionList);
  };

  const onClickList = (option) => {
    setSelectList(option);
    setOptionList(!optionList);
  };

  return (
    <UiBox title={"Select"}>
      <Button
        onClick={onClickSelectBox}
        size={"large"}
        btn_style={"secondary"}
        icon={"on"}
      >
        {selectList}
        <CaretDownFill color="" size={12} />
      </Button>
      {optionList && (
        <ul defaultValue={"바나나"}>
          {OPTIONS.map((option, idx) => {
            return (
              <li
                onClick={() => onClickList(option.value)}
                key={idx}
                value={option.value}
              >
                {option.value}
              </li>
            );
          })}
        </ul>
      )}
    </UiBox>
  );
};

export default Select;
