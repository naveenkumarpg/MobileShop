import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Global Compoennts
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Error Page
import ErrorPage from "./components/Error/Error";

//CartList
import CartList from "./components/CartList/CartList";

// PDP PLP
import ProductList from "./components/ProductList/ProductList";

//ProductDetail
import ProductDetail from "./components/ProductDetail/ProductDetail";

//Edit page
import Edit from "./components/Editor/Edit";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Fragment>
            <Switch>
              <Route exact={true} path="/" component={ProductList} />
              <Route exact={true} path="/productlist" component={ProductList} />
              <Route exact={true} path="/cartlist" component={CartList} />
              <Route
                exact={true}
                path="/productDetail/:id"
                component={ProductDetail}
              />
              <Route exact={true} path="/edit/:id" component={Edit} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          </Fragment>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}
export default App;
