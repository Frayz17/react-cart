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
      },
    }
  }

  // reduce products quantity by 1 from storage (cart or inventory)
  decrementProductQuantity = (product, storageName) => {
    const _product = {...product};

    if (_product.quantity > 0) {
      _product.quantity = _product.quantity - 1;
    }

    this.setState(prevState => ({
      [storageName]: {
        ...prevState[storageName],
        [_product.id]: _product
      }
    }))

    return {..._product};
  }

  handleBuy = (id) => {
    let product = {...this.state.inventory[id]};

    if (product.quantity > 0) {
      product = this.decrementProductQuantity(product, 'inventory');
      
      // take one product (quantity = 1) and insert it to the cart
      product.quantity = 1;

      let cart = {...this.state.cart};

      // if product exist in cart, add quantity. In other case, add product in cart.
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
    let product = {...this.state.cart[id]};
    const inventory = {...this.state.inventory};

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
    const {cart, inventory} = this.state;
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
        />
      </div>
    );
  }
}
