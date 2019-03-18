import React from 'react';
import PropTypes from 'prop-types';

export default function ProductInCart({product, productFromInventory, handleBuy, removeFromCart}) {
  productFromInventory = {...productFromInventory}

  const zeroQuantityStyle = {
    textDecoration: 'line-through'
  }

  return (
    <div>
      <span style={product.quantity > 0 ? null : zeroQuantityStyle}>
        {product.title} - ${product.price} x {product.quantity}
      </span>
      {" "}
      <button onClick={()=> handleBuy(productFromInventory.id)} disabled={productFromInventory.quantity > 0 ? null : true}>+1</button>      
      {" "}
      <button onClick={() => removeFromCart(product.id)} disabled={product.quantity > 0 ? null : true}>-1</button>
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