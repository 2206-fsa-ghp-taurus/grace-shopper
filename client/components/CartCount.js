import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartCount extends Component {
  render() {
    let count = 0;
    if (this.props.cart !== null) {
      let products = this.props.cart.products;
      if (products) {
        for (let i = 0; i < products.length; i++) {
          count += products[i].orderItems.totalQuantity;
        }
      }
    }
    return <>{count}</>;
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapState)(CartCount);
