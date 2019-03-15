import React from 'react';
import PropTypes from 'prop-types';
import ProductInInventory from './ProductInInventory'

export default function Inventory({cart, inventory, handleBuy}) {
  let products = Object.keys(inventory).map(k => inventory[k])

  return (
    <div>
      <hr/>
      <h2>Inventory</h2>
      {products.map(product => (
        <ProductInInventory 
          key={product.id}
          product={product}  
          handleBuy={handleBuy}
          cart={cart}
        />
      ))}
    </div>
  )
}

Inventory.propTypes = {
  cart: PropTypes.object,
  inventory: PropTypes.object,
  handleBuy: PropTypes.func
}
