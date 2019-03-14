import React, { Component } from 'react';

export default function Product({product, handleBuy, selectedProducts}) {
  let selectedItem;

  if (selectedProducts.length) {
    selectedItem = selectedProducts.filter(item => (
      item.id === product.id
    ))
  }

  return (
    <div>
      {product.title} - ${product.price}
      {" "}
      {
        product.quantity > 0 ? 
        <button onClick={() => handleBuy(product, 'inventory')}>Buy</button>
        : // or handleBuy.bind(null, product, 'inventory')
        <button disabled>Buy</button>
      }
      {" "}
      ({selectedItem === undefined ? 0 : selectedItem.length} selected
      {" "}
      {product.quantity} in stock)
    </div>
  );
}

