import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { emptyCart } from '../store/cart';
// import {FRONTENDKEY} from '../../webkeys';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = { status: '' };

    this.handleToken = this.handleToken.bind(this);
    this.totalAmount = this.totalAmount.bind(this);
  }

  totalAmount() {
    let cost = 0;
    const products = this.props.cart.products;
    if (products) {
      for (let i = 0; i < products.length; i++) {
        cost += products[i].orderItems.totalCost;
      }
    }
    return (parseInt(cost) / 100).toFixed(2);
  }

  async handleToken(token) {
    const response = await axios.post('/api/payment', {
      token,
      product: { price: this.totalAmount(), name: 'bakery goods' },
    });
    const { status } = response.data;
    console.log('Response:', response.data);
    if (status === 'success') {
      console.log('Success! Check email for details');

      this.setState({ status: 'Success! Check email for details' });
    } else {
      console.log('Something went wrong');

      this.setState({ status: 'Something went wrong' });
    }
  }

  success() {
    this.props.emptyCart(this.props.cart);
    return (
      <Route path='/payment' render={() => <Redirect to='/confirmation' />} />
    );
  }

  render() {
    return (
      <div className='my-3 py-3'>
        {this.state.status === 'Success! Check email for details' ? (
          this.success()
        ) : (
          <div className='my-3 py-5 align-middle text-center'>
            <div className='mt-5 my-5 product justify-content-center'>
              <h3 className='my-4'>Payment</h3>
              <h4 className='mb-3'>Total Amount: ${this.totalAmount()}</h4>
            </div>

            <StripeCheckout
              stripeKey={
                'pk_test_51LUggcEDM1jLSigPlTK0iDNlZX5Q45IuDbk3yNzOPONgGsaIO94ID3KKPCpa7w7C32wABVlYL42cKyQgxzzYkWK900YBYcQzgU'
              }
              token={this.handleToken}
              amount={this.totalAmount() * 100}
              name='Payment'
              billingAddress
              shippingAddress
            />
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = (dispatch) => ({
  emptyCart: (cart) => dispatch(emptyCart(cart)),
});

export default connect(mapState, mapDispatch)(Checkout);
