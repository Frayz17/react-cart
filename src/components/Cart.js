import * as R from 'ramda';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ProductInCart from "./ProductInCart";

export default function Cart({cart, inventory, handleBuy, checkout, removeFromCart}) {
  let products = R.sortBy(R.prop("title"), R.values(cart));
  
  function totalSumm(products) {
    return products.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0)
  }

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {
          (products.length) ? 
            products.map(product => (
              <ProductInCart
                key={product.id}
                product={product}
                productFromInventory={inventory[product.id]}
                handleBuy={handleBuy}  
                removeFromCart={removeFromCart}             
              />
            ))
            :
            <div><i>The cart is empty.</i></div>
        }
        <br/>
      </div>

      Total: {totalSumm(products)}$ 
      {" "}
      {totalSumm(products) > 0 ? 
        <button onClick={checkout}>Checkout</button>
        :
        <button disabled>Checkout</button>
      }
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.object,
  inventory: PropTypes.object,
  handleBuy: PropTypes.func,
  checkout: PropTypes.func,
  removeFromCart: PropTypes.func
}

