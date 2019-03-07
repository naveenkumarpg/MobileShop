import React, { Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

//ProductDetail
import ProductDetail from './components/ProductDetail/ProductDetail';

class App extends Component {
  render() {
    return <Fragment>
      <Header />
      <Router>
        <Fragment>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/Productlist" component={ProductList} />
            <Route exact={true} path="/cartlist" component={CartList} />
            <Route exact={true} path="/ProductDetail" component={ProductDetail} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        </Fragment>
        </Router>
      <Footer />
    </Fragment>
  } 
}
export default App;