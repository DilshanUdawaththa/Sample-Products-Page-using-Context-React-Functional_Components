import React, { useContext } from "react";

import { MyContext } from "../../context/MyContext";

const PrizingBox = () => {
  const { currencySymbol, price } = useContext(MyContext);
  return (
    <>
      <span className="item_price">
        {currencySymbol}
        {price.begin}
        <sup>{price.last}</sup>
      </span>
    </>
  );
};

export default PrizingBox;
