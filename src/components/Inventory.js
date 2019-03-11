import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

export default function Inventory({cart, inventory}) {
  let products = R.sortBy(R.prop("title"), R.values(inventory))  

  return (
    <div>
      { R.map(product => (
        <Product product={product} key={product.id} />
      ), products) }
    </div>
  )
}

Inventory.propTypes = {
  cart: PropTypes.object,
  inventory: PropTypes.object,
}
