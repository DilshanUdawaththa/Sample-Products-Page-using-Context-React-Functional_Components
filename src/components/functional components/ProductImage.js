import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const ProductImage = () => {
  const { image } = useContext(MyContext);

  return (
    <>
      <img src={image} alt="productImage.jpg" />
    </>
  );
};

export default ProductImage;
