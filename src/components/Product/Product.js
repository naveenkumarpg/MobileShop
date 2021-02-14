import React, { Component } from "react";
import Labels from "../../Labels/labels";
import renderHTML from "react-render-html";
import "../Product/Product.css";

export default class Poduct extends Component {
  pricer(data) {
    console.log(data);

    if (data.oprice) {
      let pricer = `<span className="strike">${Labels.currencysymbol} ${data.price}</span> <span className="acprice"> ${Labels.currencysymbol} ${data.oprice}</span>`;
      return pricer;
    } else {
      return `${Labels.currencysymbol} ${data.price}`;
    }
  }

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-2">
        <div className="product-wrapper">
          <a href={"/ProductDetail/" + this.props.phone.id}>
            <img
              className="product-img"
              src={"/images/mobiles/" + this.props.phone.img}
              alt="imae xfzbdzgctzrv"
            />
          </a>
        </div>
        <div className="caption text-center">
          <p className="mobile-name">{this.props.phone.name}</p>
          <p className="mobile-price">
            {renderHTML(this.pricer(this.props.phone))}
          </p>
          <p className="mobile-config">{this.props.phone.cnadv}</p>
          <p className="mobile-config">{this.props.phone.config}</p>
          <button type="button" className="btn btn-warning cartbtn">
            Add to Cart{" "}
          </button>
        </div>
      </div>
    );
  }
}
