import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductInInventory from './ProductInInventory'

export default function Inventory({cart, inventory, handleBuy}) {
  let products = R.sortBy(R.prop("title"), R.values(inventory));

  return (
    <div>
      <hr/>
      <h2>Inventory</h2>
      { R.map(product => (
        <ProductInInventory 
          key={product.id}
          product={product}  
          handleBuy={handleBuy}
          cart={cart}
        />
      ), products) }
    </div>
  )
}

Inventory.propTypes = {
  cart: PropTypes.object,
  inventory: PropTypes.object,
  handleBuy: PropTypes.func
}
