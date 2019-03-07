import React, { Component } from 'react';
import '../Home/Home.css'


export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="billboard">
        <a href="/Productlist">
          <img src="/images/bb.jpg" width="100%" alt="BillboardImage"/>
        </a> 
        </div>
        
      </div>
    )
  }
}
