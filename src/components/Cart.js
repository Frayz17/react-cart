import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export default function Cart({cart, inventory, handleBuy, checkout}) {
  let products = R.sortBy(R.prop("title"), R.values(cart));
  
  function totalSumm(products) {
    return products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  }

  return (
    <div>
      <h2>Cart</h2>
        {
          (products.length) ? 
            products.map(product => (
              <Item
                key={product.id}
                product={product}
                inventory={inventory}
                handleBuy={handleBuy}
              />
            ))
            :
            <p><i>The cart is empty.</i></p>
        }

        Total: {totalSumm(products)}$ 
        {" "}
        {products.length ? 
          <button onClick={checkout}>Checkout</button>
          :
          <button disabled>Checkout</button>
        }
    </div>
  )
}


function Item({product, inventory, handleBuy}) {

  // console.log(product);
  const increment = (product) => {
    console.log(product);
  }

  const decrement = () => {
    console.log('hello')
  }

  return (
    <div>
      {product.title} - ${product.price} x {product.quantity}
      {" "}
      <button id="btn-plus" onClick={()=> increment(product)}>+1</button> {" "}
      <button id="btn-minus" onClick={decrement}>-1</button> {" "}   
      {" "}
      ({inventory[product.id].quantity} in stock)
    </div>
  )
}
