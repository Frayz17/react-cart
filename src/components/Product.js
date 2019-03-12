import React, { Component } from 'react';

export default function Product({product, handleBuy}) {


  return (
    <div>
      {product.title} - ${product.price}
      <button onClick={() => handleBuy(product)}>Buy</button>
      ({product.quantity} in stock)
    </div>
  );
}

