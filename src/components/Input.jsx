import React, { useState } from "react";

const Input = () => {
  const [product, setProduct] = useState({ name: "", price: "0" });

  const onChangehandler = (event, label) => {
    let value = event.target.value;
    if (label === "price") {
      value = value.replace(/^0+|[^0-9]/g, ""); // 시작점 0과 숫자가 아닌 것을 ""로 치환
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리 숫자 그룹간 경계를 ,로 치환
    }

    // 한글 입력 시 '0' 유지
    if (label === "price" && value === "") {
      value = "0";
    }

    setProduct({ ...product, [label]: value });
  };

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={(event) => onChangehandler(event, "name")}
      />
      <input
        type="text"
        name="price"
        value={product.price}
        onChange={(event) => onChangehandler(event, "price")}
      />
    </div>
  );
};

export default Input;
