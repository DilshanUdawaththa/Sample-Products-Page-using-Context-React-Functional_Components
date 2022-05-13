import React, { useContext } from "react";

import { MyContext } from "../../context/MyContext";

const QuantityBox = () => {
  const { decreaseQuantity, quantity, incrementQuantity } =
    useContext(MyContext);
  return (
    <>
      <button onClick={decreaseQuantity}>-</button>
      <input
        type="text"
        placeholder="1"
        value={String(quantity)}
        readOnly
      ></input>
      <button onClick={incrementQuantity}>+</button>
    </>
  );
};

export default QuantityBox;
