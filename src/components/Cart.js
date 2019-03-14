import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export default function Cart({cart, inventory, handleBuy, checkout, removeFromCart}) {
  let products = R.sortBy(R.prop("title"), R.values(cart));
  // let productsFromInventory = R.sortBy(R.prop("title"), R.values(inventory));
  
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
                productsFromInventory={inventory}
                inventory={inventory}
                handleBuy={handleBuy}  
                removeFromCart={removeFromCart}             
              />
            ))
            :
            <p><i>The cart is empty.</i></p>
        }

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


function Item({product, productsFromInventory, inventory, handleBuy, removeFromCart}) {

  const productFromInventory = productsFromInventory[product.id]

  return (
    <div>
      {product.quantity > 0 ? 
        <React.Fragment>
          {product.title} - ${product.price} x {product.quantity}
        </React.Fragment>
        :
        <React.Fragment>
          <s>{product.title} - ${product.price} x {product.quantity}</s>
        </React.Fragment>
      }
      {" "}
      {productFromInventory.quantity > 0 ?
        <button onClick={()=> handleBuy(productFromInventory, 'inventory')}>+1</button>
        :
        <button disabled>+1</button>
      }       
      {" "}
      {product.quantity > 0 ? 
        <button onClick={() => removeFromCart(product.id)}>-1</button>
        :
        <button disabled>-1</button>
      }
      {" "}
      ({inventory[product.id].quantity} in stock)
    </div>
  )
}
