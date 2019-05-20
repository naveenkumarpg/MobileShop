import React, { Component } from 'react';
import '../Error/Error.css';

import '../Cart/Cart.css';

import Labels from '../../Labels/labels';

export default class Default extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="hgap"></div>
        <h3>{Labels.PGF}</h3>
        <div className="hgap"></div>
        <img className='notfoundimg' src="images/404.png" alt="404 artifact" />
        <div className="hgap"></div>
        <p>{Labels.notfounddesc}</p>
        <div className="hgap"></div>
        <a href="/" className="btn btn-primary" >{Labels.mainpage}</a>
        <div className="hgap"></div>
      </div>
    )
  }
}
