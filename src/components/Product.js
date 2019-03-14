import React, { Component } from 'react';
import * as R from 'ramda';

export default function Product({product, handleBuy, cart}) {
  // let selectedItem;
  // let productsFromCart = R.sortBy(R.prop("title"), R.values(cart));


  // if (productsFromCart.length) {
  //   selectedItem = productsFromCart.filter(item => (
  //     item.id === product.id
  //   ))
  // }
  
  function amountProductsSelected() {
    if (cart[product.id] !== undefined) {
      return cart[product.id].quantity;
    }
    return false
  }
  
  

  return (
    <div>
      {product.title} - ${product.price}
      {" "}
      {
        product.quantity > 0 ? 
        <button onClick={() => handleBuy(product.id)}>Buy</button>
        : // or handleBuy.bind(null, product, 'inventory')
        <button disabled>Buy</button>
      }
      {" "}
      ({amountProductsSelected() === false ? 0 : amountProductsSelected()} selected
      {" "}
      {product.quantity} in stock)
    </div>
  );
}

