import React from 'react';
import PropTypes from 'prop-types';

export default function ProductInInventory({product, cart, handleBuy}) {

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

ProductInInventory.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.object,
  handleBuy: PropTypes.func
}