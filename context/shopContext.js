// TODO: re-write this as a functional component...

import React, { Component } from 'react';
import { client } from '../utils/shopifyStore';

const ShopContext = React.createContext();

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  componentDidMount() {
    if (localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem('checkout_id', checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout.fetch(checkoutId).then((checkout) => {
      this.setState({ checkout: checkout });
    });
  };

  addItemToCheckOut = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(
      thisstate.checkout.id,
      lineItemToAdd,
    );

    this.setState({ checkout: checkout });

    console.log('added', checkout);
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckOut: this.addItemToCheckOut,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext};
export default ShopProvider;

