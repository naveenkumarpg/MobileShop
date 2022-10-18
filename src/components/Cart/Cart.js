import React from 'react';
import './Cart.scss';

import Labels from '../../Labels/labels';

export default function Cart() {
  return (
    <div className="float-right">
      <a className="cart" href="/cartlist">
        <span className="cart-icon glyphicon glyphicon-shopping-cart"></span>
        {Labels.cart} <span className="badge">{Labels.defValue}</span>
      </a>
    </div>
  );
}
