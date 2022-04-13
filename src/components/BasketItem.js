import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <>
      <td><img src={product.img} alt="img" /></td>
      <td> {product.name}</td>
      <td> {product.price}</td>
      <td>{item.amount}</td>
    </>
  );
};

export default BasketItem;
