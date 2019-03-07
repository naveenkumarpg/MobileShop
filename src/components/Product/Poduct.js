import React, { Component } from 'react'
import '../Product/Product.css';

export default class Poduct extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-2">
            <div className="product-wrapper">
              <a href="/ProductDetail" >
                <img className="product-img" src="/images/apple-iphone-6-mq3e2hn-a-original-imaexfzbdzgctzrv.jpeg" alt="imae xfzbdzgctzrv" />
              </a>
            </div>
            <div className="caption text-center">
              <p className="mobile-name">Mobile name</p>
              <p className="mobile-price">From ₹9,999</p>
              <p className="mobile-config">Upto 4GB RAM|64GB ROM</p>
              <button type="button" class="btn btn-warning">Add to Cart </button>
            </div>
        </div>
    )
  }
}
