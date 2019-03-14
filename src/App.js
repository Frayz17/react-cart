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

  // takeProductFromInventory = (product) => {
  //   const _product = {...product};

  //   if (_product.quantity > 0) {
  //     _product.quantity = _product.quantity - 1

  //     this.setState(prevstate => ({
  //       inventory: {
  //         ...prevstate.inventory,
  //         [product.id]: _product
  //       },
  //     }))
  //   }

  //   return {...product};
  // }

  // handleBuy = (product) => {
  //   const _product = this.takeProductFromInventory(product);

  //   // take one product (quantity = 1) and insert it to the cart
  //   _product.quantity = 1;

  //   let _cart = {...this.state.cart};

  //   if (product.id in _cart) {
  //     _cart[product.id].quantity = _cart[product.id].quantity + 1
  //   } else {
  //     _cart = {
  //       ..._cart,
  //       [product.id]: _product
  //     }
  //   }
    
  //   this.setState(prevstate => ({
  //     cart: _cart
  //   }))
  // }

  // reduce products quantity by 1 from storage (cart or inventory)
  decrementProductQuantity = (products, storageName) => {
    const _products = {...products};

    if (_products.quantity > 0) {
      _products.quantity = _products.quantity - 1;
    }

    this.setState(prevState => ({
      [storageName]: {
        ...prevState[storageName],
        [_products.id]: _products
      }
    }))

    return {..._products};
  }

  handleBuy = (products, storage) => {
    if (products.quantity > 0) {
      const _products = this.decrementProductQuantity(products, storage);
      
      // take one product (quantity = 1) and insert it to the cart
      _products.quantity = 1;
      const product = _products;

      let cart = {...this.state.cart};

      if (product.id in cart) {
        cart[product.id].quantity = cart[product.id].quantity + 1
      } else {
        cart = {
          ...cart,
          [product.id]: product
        }
      }
      
      this.setState(prevState => ({
        ...prevState,
        cart       
      }))
    }
  }

  removeFromCart = (id) => {
    let product = this.state.cart[id];
    const inventory = this.state.inventory;

    if (product.quantity > 0) {
      product = this.decrementProductQuantity(product, 'cart');

      if (product.id in inventory) {
        inventory[product.id].quantity = inventory[product.id].quantity + 1
      } else {
        throw new Error("product: " + product.title + " isn't in inventory table")
      }
      
      this.setState(prevState => ({
        ...prevState,
        inventory
      }))
    }
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
          removeFromCart={this.removeFromCart}
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
