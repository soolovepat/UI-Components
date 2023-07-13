import React, { useState } from "react";
import UiBox from "../Container/UiBox";
import { CaretDownFill } from "react-bootstrap-icons";
import Button from "./Button";

const Select = () => {
  const OPTIONS = [
    { value: "Love" },
    { value: "Peace" },
    { value: "Mind" },
    { value: "Universe" },
    { value: "Body" },
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
        <ul>
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
