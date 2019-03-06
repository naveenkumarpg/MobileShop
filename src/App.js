import React, { Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css'

import { BrowserRouter as Router, Route } from "react-router-dom";

//Home page
import Home from './components/Home/Home';

// Global Compoennts 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Error Page
import ErrorPage from './components/Error/Error';

//CartList
import CartList from './components/CartList/CartList';

// PDP PLP
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  render() {
    return <Fragment>
      <Header />
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/Error" exact component={ErrorPage} />
          <Route path="/Productlist" component={ProductList} />
          <Route path="/cartlist" component={CartList} />
        </Fragment>
        </Router>
      <Footer />
    </Fragment>
  } 
}
export default App;