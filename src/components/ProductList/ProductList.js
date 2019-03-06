import React, { Component } from 'react'

import Product from '../Product/Poduct';

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Mobile New Launches</h3> 
        <p className="disclaimer text-center">88 Items</p>
        <div className="separator"></div>
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    )
  }
}
