import React, { useContext } from "react";

import { MyContext } from "../../context/MyContext";

const ProductTable = () => {
  const { tableDetails, deleteRow } = useContext(MyContext);
  return (
    <>
      <table className="product_table">
        <thead>
          <tr>
            <th>Item No</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {tableDetails.map((array) => (
            <tr key={array.id}>
              <td>{array.itemNo}</td>
              <td>{array.title}</td>
              <td>{String(array.quantity)}</td>
              <td>
                {array.currencySymbol}
                {String(array.amount)}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteRow(array.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
