import React, { Component } from "react";
import "../Product/Product.scss";

export default class Poduct extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="mobile-item col-xs-6 col-sm-6 col-md-3">
        <div className="product-wrapper">
          <a href={"/ProductDetail/" + this.props.phone.id}>
            <img
              className="product-img"
              src="https://dummyimage.com/250x400/f9f9f9/999.jpg"
              alt="imae xfzbdzgctzrv"
            />
          </a>
        </div>
        <div className="caption text-center">
          <p className="mobile-name">{this.props.phone.name}</p>
          <p className="mobile-price">{this.props.phone.price}</p>

          <button type="button" className="btn btn-warning cartbtn">
            Add to Cart{" "}
          </button>
        </div>
      </div>
    );
  }
}
