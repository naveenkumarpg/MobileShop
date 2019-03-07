import React, { Component } from 'react'
import '../Cart/Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <div className="pull-right">
        <a className="cart" href="/cartlist"><span className="cart-icon glyphicon glyphicon-shopping-cart"></span>Cart  <span className="badge">00</span></a>
      </div>
    )
  }
}
