import React, { useState } from "react";
import UiBox from "../Container/UiBox";
import Button from "./Button";

const Input = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const onChangehandler = (event, label) => {
    let value = event.target.value;
    if (label === "price") {
      value = value.replace(/^0+|[^0-9]/g, ""); // 시작점 0과 숫자가 아닌 것을 ""로 치환
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리 숫자 그룹간 경계를 ,로 치환
    }

    // 한글 입력 시 '0' 유지
    if (label === "price" && value === "") {
      alert("1 이상의 숫자를 입력하세요");
    }

    setProduct({ ...product, [label]: value });
  };

  const onClickHandler = () => {
    if (product.name !== "" || product.price !== "0") {
      alert(
        `{ name: ${product.name}, price: ${product.price.replace(
          /^0+|,/g,
          ""
        )} }`
      );
    } else {
      alert("이름과 가격을 입력해주세요");
    }
    setProduct({ name: "", price: "" });
  };

  return (
    <UiBox title={"Input"}>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={(event) => onChangehandler(event, "name")}
        placeholder="name"
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={(event) => onChangehandler(event, "price")}
        placeholder="price"
      />
      <Button onClick={onClickHandler} size={"small"} btn_style={"secondary"}>
        save
      </Button>
    </UiBox>
  );
};

export default Input;
