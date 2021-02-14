import React, { Component } from "react";
import "../Banner/Banner.scss";

export default class Benner extends Component {
  render() {
    return (
      <section className="container">
        <div className="billboard">
          <a href="/Productlist">
            <img
              src="/images/sliders/bb.jpg"
              width="100%"
              alt="BillboardImage"
            />
          </a>
        </div>
      </section>
    );
  }
}
