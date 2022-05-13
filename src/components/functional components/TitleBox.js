import React, { useContext } from "react";

import { MyContext } from "../../context/MyContext";

const TitleBox = () => {
  const { title, itemNo } = useContext(MyContext);
  return (
    <>
      <h1 className="item_title">{title}</h1>
      <span className="item_no">Item No. {itemNo}</span>
    </>
  );
};

export default TitleBox;
