import React, { Component, Fragment } from 'react';

import '../ProductList/ProductList.css';

import Product from '../Product/Poduct';
import Banner from '../Banner/Benner';

export default class ProductList extends Component {

  constructor(props){
    super(props);
    this.fetchPhones();
    this.state = {
      mobiles: [],
      length : 0
    };
  }

  fetchPhones(){

    const fetchPhonesData = new Promise(function(resolve,reject){

      fetch('../../data/data.json').then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });

    fetchPhonesData.then((data) => {
      this.setState({
        mobiles: data,
        length: data.length
      });
    });

  }

  renderPhones(){

    let HTML  = this.state.mobiles.map((item, index) => {
      return <Product phone={item} key={index} />
    });

    return HTML;
  }
  render() {
    return (
      <Fragment>
        <Banner></Banner>
        <div className="container">
          <h3 className="text-center">Mobile New Launches</h3> 
          <p className="disclaimer text-center">Showing {this.state.length} Items</p>
          <div className="separator"></div>
          <div className="row products">
            {this.renderPhones()}
          </div>
        </div>
      </Fragment>
    )
  }
}
