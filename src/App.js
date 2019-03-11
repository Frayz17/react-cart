import * as R from 'ramda';
import React, { Component } from 'react';
import Cart from './components/Cart';
import Inventory from "./components/Inventory";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      inventory: {
        "1": {
          id: "1",
          title: "Apple",
          price: 10,
          quantity: 5
        },

        "2": {
          id: "2",
          title: "Melon",
          price: 20,
          quantity: 7
        },

        "3": {
          id: "3",
          title: "Orange",
          price: 8,
          quantity: 8
        }
      }
    }
  }

  render() {
    const {cart, inventory} = this.state;
    return (
      <div>
        <Inventory cart={cart} inventory={inventory} />
        <Cart />
      </div>
    );
  }
}
