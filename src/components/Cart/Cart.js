import React, { Component } from "react";
import "../Cart/Cart.css";

import Labels from "../../Labels/labels";

export default class Cart extends Component {
  render() {
    return (
      <div className="float-right">
        <a className="cart" href="/cartlist">
          <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
          {Labels.cart} <span className="badge">{Labels.defValue}</span>
        </a>
      </div>
    );
  }
}
