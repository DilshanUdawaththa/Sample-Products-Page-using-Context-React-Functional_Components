import React, { useState } from "react";

import ProductImage from "../components/functional components/ProductImage";
import TitleBox from "../components/functional components/TitleBox";
import PrizingBox from "../components/functional components/PrizingBox";
import QuantityBox from "../components/functional components/QuantityBox";
import ProductTable from "../components/functional components/ProductTable";

import "./ProductPage.css";
import { MyContext } from "../context/MyContext";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [arrayList, setArrayList] = useState([]);

  const productDetails = {
    image:
      "https://cdn11.bigcommerce.com/s-w4tnuohjvi/images/stencil/1280x1280/products/778/2288/3x3FloatingGolfGreen4__96181.1497886450.1280.1280__42407.1545132815.jpg?c=2?imbypass=on",
    title: "3' X 3' ACE FLOATING GREEN",
    itemNo: "MA000001",
    currencySymbol: "$",
    price: {
      begin: "150.",
      last: "00",
    },
    quantity: quantity,
    arrayList: arrayList,
  };

  function incrementQuantity(e) {
    e.preventDefault();
    setQuantity(quantity + 1);
  }

  function decreaseQuantity(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  }

  function submit(e) {
    e.preventDefault();

    const newProductDetails = productDetails;

    const cartDetails = {
      id: new Date(),
      itemNo: newProductDetails.itemNo,
      quantity: newProductDetails.quantity,
      title: newProductDetails.title,
      currencySymbol: newProductDetails.currencySymbol,
      amount:
        parseFloat(newProductDetails.quantity) *
        parseFloat(newProductDetails.price.begin),
    };

    setArrayList([...arrayList, cartDetails]);
  }

  function deleteRow(pid) {
    if (pid !== "") {
      setArrayList(arrayList.filter((cartDetails) => cartDetails.id !== pid));
    }
  }

  return (
    <MyContext.Provider
      value={{
        image: productDetails.image,
        title: productDetails.title,
        itemNo: productDetails.itemNo,
        currencySymbol: productDetails.currencySymbol,
        price: productDetails.price,
        quantity: productDetails.quantity,
        tableDetails: productDetails.arrayList,
        incrementQuantity: incrementQuantity,
        decreaseQuantity: decreaseQuantity,
        deleteRow: deleteRow,
      }}
    >
      <>
        <form onSubmit={submit}>
          <section className="product">
            <div className="row">
              <div className="leftSide">
                <ProductImage />
              </div>
              <div className="rightSide">
                <div className="title_box">
                  <TitleBox />
                </div>
                <div className="prizing_box">
                  <PrizingBox />
                </div>
                <div className="quantity_box">
                  <QuantityBox />
                </div>
                <div className="cart_box">
                  <input type="submit" value="ADD TO CART >" />
                </div>
              </div>
            </div>
          </section>
        </form>
        <section className="table">
          <ProductTable />
        </section>
      </>
    </MyContext.Provider>
  );
};

export default ProductPage;
