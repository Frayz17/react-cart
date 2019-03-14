import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

export default function Inventory({cart, inventory, handleBuy, selectedProducts}) {
  let products = R.sortBy(R.prop("title"), R.values(inventory));

  return (
    <div>
      <hr/>
      <h2>Inventory</h2>
      { R.map(product => (
        <Product 
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
}
