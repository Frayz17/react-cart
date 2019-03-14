import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function ProductInCart({product, productFromInventory, handleBuy, removeFromCart}) {
  productFromInventory = {...productFromInventory}

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
        <button onClick={()=> handleBuy(productFromInventory.id)}>+1</button>
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
      ({productFromInventory.quantity} in stock)
    </div>
  )
}

ProductInCart.propTypes = {
  cart: PropTypes.object,
  handleBuy: PropTypes.func,
  checkout: PropTypes.func,
  removeFromCart: PropTypes.func
}