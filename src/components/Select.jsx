import React from "react";

const Select = () => {
  const OPTIONS = [
    { value: "사과" },
    { value: "바나나" },
    { value: "오렌지" },
    { value: "키위" },
    { value: "블루베리" },
  ];
  return (
    <div>
      <h1>Select</h1>
      <select defaultValue={"바나나"}>
        {OPTIONS.map((option, idx) => {
          return (
            <option key={idx} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
