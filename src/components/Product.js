import React, { Component } from 'react';

export default function Product({product}) {


  return (
    <div>
      {product.title} - ${product.price} <button>Buy</button> ({product.quantity} in stock)
    </div>
  );
}

