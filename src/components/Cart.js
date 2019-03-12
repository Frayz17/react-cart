import * as R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Cart({cart, inventory, handleBuy, selectedProducts}) {

  const decrement = () => {
    console.log('hello')
  }

  const increment = () => {
    console.log('hello')
  }

  const reset = () => {
    console.log('hello')
  }


  return (
    <div>
      <h2>Cart</h2>
        <button id="btn-minus" onClick={decrement}>-1</button> {" "}
        <button id="btn-plus" onClick={increment}>+1</button> {" "}
        <button id="btn-reset" onClick={reset}>Reset</button> {" "}
    </div>
  )
}

