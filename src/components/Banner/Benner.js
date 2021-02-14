import React, { Component } from "react";

import "../Banner/Banner.css";

export default class Benner extends Component {
  render() {
    return (
      <div className="container">
        <div className="billboard">
          <a href="/Productlist">
            <img
              src="/images/sliders/bb.jpg"
              width="100%"
              alt="BillboardImage"
            />
          </a>
        </div>
      </div>
    );
  }
}
