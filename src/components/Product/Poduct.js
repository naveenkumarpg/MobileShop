import React, { Component } from 'react'
import '../Product/Product.css';

export default class Poduct extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-2">
            <div className="product-wrapper">
              <a href={'/ProductDetail/'+this.props.phone.unique}>
                <img className="product-img" src={'/images/'+this.props.phone.img} alt="imae xfzbdzgctzrv" />
              </a>
            </div>
            <div className="caption text-center">
              <p className="mobile-name">{this.props.phone.name}</p>
              <p className="mobile-price">{this.props.phone.price}</p>
              <p className="mobile-config">{this.props.phone.config}</p>
              <button type="button" className="btn btn-warning">Add to Cart </button>
            </div>
        </div>
    )
  }
}
