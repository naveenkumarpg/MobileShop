import React, { Component } from 'react';
import Cart from '../Cart/Cart';

import '../Header/Header.css'

export default class Header extends Component {
    render(){
        return (
            <div className="nav">
                <div className='col-xs-12'>
                    <div className="container">
                        <nav className="nav-wrapper">
                            <a className="logo" href="/">
                                <h4 className="logo-text mobile">+ Mobile</h4>
                                <h4 className="logo-text shop">Shop</h4>
                            </a>
                            <a className="navitem" href="/Productlist">Products</a>
                            <Cart />
                        </nav>
                    </div>
                </div>
            </div>
        ) 
    }
}