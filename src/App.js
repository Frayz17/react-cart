import * as R from 'ramda';
import React, { Component } from 'react';
import Cart from './components/Cart';
import Inventory from "./components/Inventory";
import { debug } from 'util';
// import Product from './components/Product';

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
      },

      selectedProducts: []
    }
  }

  // handleBuy = (product) => {
  //   const _product = {...product};

  //   if (_product.quantity > 0) {
  //     _product.quantity = _product.quantity - 1

  //     const _selectedProducts = this.state.selectedProducts;
  //     _selectedProducts.push(_product);

  //     this.setState(prevstate => ({
  //       inventory: {
  //         ...prevstate.inventory,
  //         [product.id]: _product
  //       },
  //       selectedProducts: _selectedProducts
  //     }))
  //   }
  // }

  takeProductFromInventory = (product) => {
    const _product = {...product};

    if (_product.quantity > 0) {
      _product.quantity = _product.quantity - 1

      this.setState(prevstate => ({
        inventory: {
          ...prevstate.inventory,
          [product.id]: _product
        },
      }))
    }

    return {...product};
  }

  handleBuy = (product) => {
    const _product = this.takeProductFromInventory(product);

    // take one product (quantity = 1) and insert it to the cart
    _product.quantity = 1;

    let _cart = {...this.state.cart};

    if (product.id in _cart) {
      _cart[product.id].quantity = _cart[product.id].quantity + 1
    } else {
      _cart = {
        ..._cart,
        [product.id]: _product
      }
    }
    
    this.setState(prevstate => ({
      cart: _cart
    }))
  }

  checkout = () => {
    this.setState(prevState => ({
      ...prevState,
      cart: {}
    }))
  }

  render() {
    const {cart, inventory, selectedProducts} = this.state;
    return (
      <div>
        <Cart 
          cart={cart}
          inventory={inventory}
          handleBuy={this.handleBuy}
          checkout={this.checkout}
        />
        <Inventory 
          cart={cart}
          inventory={inventory}
          handleBuy={this.handleBuy}
          selectedProducts={selectedProducts}
        />
      </div>
    );
  }
}
