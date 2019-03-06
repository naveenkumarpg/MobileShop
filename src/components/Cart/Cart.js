import React, { Component } from 'react'
import '../Cart/Cart.css';

export default class Cart extends Component {
  render() {
    return (
      <div className="pull-right">
        <a className="cart" href="/cartlist">Cart  <span className="badge">0</span></a>
      </div>
    )
  }
}
