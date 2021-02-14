import React, { Component, Fragment } from "react";

import "../ProductList/ProductList.css";

import Product from "../Product/Product";
import Banner from "../Banner/Benner";

import Labels from "../../Labels/labels";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobiles: [],
      length: 0,
    };
  }

  componentDidMount() {
    const fetchPhonesData = new Promise(function (resolve, reject) {
      fetch("http://localhost:3001/mobiles?_page=1&_limit=18")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          resolve(data);
        });
    });

    fetchPhonesData.then((data) => {
      this.setState({
        mobiles: data,
        length: data.length,
      });
    });
  }

  renderPhones() {
    let HTML = this.state.mobiles.map((item, index) => {
      return <Product phone={item} key={index} />;
    });
    return HTML;
  }

  render() {
    return (
      <Fragment>
        <Banner></Banner>
        <div className="container">
          <h3 className="text-center">{Labels.MNL}</h3>
          <p className="disclaimer text-center">
            {Labels.showing} {this.state.length} {Labels.items}
          </p>
          <div className="separator"></div>
          <div className="row products">{this.renderPhones()}</div>
        </div>
      </Fragment>
    );
  }
}
